import { build as esbuild } from "esbuild";
import { execFileSync } from "node:child_process";
import { rmSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist");

rmSync(dist, { recursive: true, force: true });

execFileSync("npx", ["vite", "build"], {
  cwd: root,
  stdio: "inherit",
});

await esbuild({
  entryPoints: [path.join(root, "server/index.ts")],
  bundle: true,
  platform: "node",
  target: "node20",
  format: "cjs",
  outfile: path.join(dist, "index.cjs"),
  packages: "external",
});
