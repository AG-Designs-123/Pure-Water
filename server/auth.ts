import { scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import type { Express, Request, Response, NextFunction } from "express";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import { pool } from "./db";

const scrypt = promisify(scryptCallback);
const PgSession = connectPgSimple(session);

type Account = { username: string; passwordHash: string };
declare module "express-session" {
  interface SessionData {
    username?: string;
  }
}

function accounts(): Account[] {
  const raw = process.env.ADMIN_USERS_JSON;
  if (!raw) return [];
  const parsed: unknown = JSON.parse(raw);
  if (!Array.isArray(parsed) || !parsed.every((x) =>
    x && typeof x.username === "string" && typeof x.passwordHash === "string"
  )) throw new Error("ADMIN_USERS_JSON must be an array of username/passwordHash pairs");
  return parsed as Account[];
}

function sameOrigin(req: Request): boolean {
  const origin = req.get("origin");
  if (!origin) return true;
  const host = req.get("x-forwarded-host") || req.get("host");
  return origin === `${req.protocol}://${host}`;
}

export function setupAuth(app: Express): void {
  const configured = Boolean(pool && process.env.SESSION_SECRET && accounts().length);
  if (!configured) {
    console.warn("Admin login unavailable: configure DATABASE_URL, SESSION_SECRET and ADMIN_USERS_JSON");
    app.post("/api/auth/login", (_req, res) => res.status(503).json({ message: "Login is not configured" }));
    app.post("/api/auth/logout", (_req, res) => res.status(503).json({ message: "Login is not configured" }));
    app.get("/api/auth/me", (_req, res) => res.status(503).json({ message: "Login is not configured" }));
    return;
  }

  if (process.env.NODE_ENV === "production") app.set("trust proxy", 1);
  app.use(session({
    store: new PgSession({ pool: pool!, createTableIfMissing: true }),
    name: "pw_admin",
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 8 * 60 * 60 * 1000,
    },
  }));

  const attempts = new Map<string, { count: number; until: number }>();
  app.post("/api/auth/login", async (req, res, next) => {
    try {
      if (!sameOrigin(req)) return res.status(403).json({ message: "Invalid origin" });
      const key = req.ip || "unknown";
      const now = Date.now();
      const entry = attempts.get(key);
      if (entry && entry.until > now && entry.count >= 10) {
        return res.status(429).json({ message: "Too many attempts. Try again later." });
      }
      const { username, password } = req.body ?? {};
      if (typeof username !== "string" || typeof password !== "string" ||
          username.length > 100 || password.length > 1024) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      const account = accounts().find((x) => x.username === username);
      let valid = false;
      if (account) {
        const [algorithm, salt, hex] = account.passwordHash.split(":");
        if (algorithm === "scrypt" && /^[a-f0-9]{32}$/.test(salt) && /^[a-f0-9]{128}$/.test(hex)) {
          const derived = await scrypt(password, Buffer.from(salt, "hex"), 64) as Buffer;
          valid = timingSafeEqual(derived, Buffer.from(hex, "hex"));
        }
      }
      if (!valid) {
        attempts.set(key, { count: entry && entry.until > now ? entry.count + 1 : 1, until: now + 15 * 60_000 });
        return res.status(401).json({ message: "Invalid credentials" });
      }
      attempts.delete(key);
      req.session.regenerate((err) => {
        if (err) return next(err);
        req.session.username = username;
        req.session.save((saveError) => {
          if (saveError) return next(saveError);
          res.json({ username });
        });
      });
    } catch (err) { next(err); }
  });

  app.post("/api/auth/logout", (req, res, next) => {
    if (!sameOrigin(req)) return res.status(403).json({ message: "Invalid origin" });
    req.session.destroy((err) => {
      if (err) return next(err);
      res.clearCookie("pw_admin");
      res.status(204).end();
    });
  });

  app.get("/api/auth/me", (req, res) => {
    if (!req.session.username) return res.status(401).json({ message: "Sign in required" });
    res.json({ username: req.session.username });
  });
}

export function requireAdmin(req: Request, res: Response, next: NextFunction): void {
  if (!req.session?.username) {
    res.status(401).json({ message: "Sign in required" });
    return;
  }
  next();
}
