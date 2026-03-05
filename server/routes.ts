import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEnquirySchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/enquiries", async (req, res) => {
    const parsed = insertEnquirySchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: fromError(parsed.error).toString() });
    }
    const enquiry = await storage.createEnquiry(parsed.data);
    return res.status(201).json(enquiry);
  });

  app.get("/api/enquiries", async (_req, res) => {
    const enquiries = await storage.getEnquiries();
    return res.json(enquiries);
  });

  return httpServer;
}
