import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEnquirySchema } from "@shared/schema";
import { fromError } from "zod-validation-error";
import { getUncachableStripeClient, getStripePublishableKey } from "./stripeClient";

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

  app.get("/api/stripe/publishable-key", async (_req, res) => {
    try {
      const publishableKey = await getStripePublishableKey();
      res.json({ publishableKey });
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  app.post("/api/payment/checkout", async (req, res) => {
    try {
      const { invoiceRef, amount, customerName, customerEmail } = req.body;

      if (!invoiceRef || !amount || isNaN(Number(amount)) || Number(amount) <= 0) {
        return res.status(400).json({ message: "Invalid invoice reference or amount" });
      }

      const amountInPence = Math.round(Number(amount) * 100);
      const baseUrl = `${req.protocol}://${req.get("host")}`;

      const stripe = await getUncachableStripeClient();
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "gbp",
              product_data: {
                name: `Pure Water Window Cleaning — Invoice ${invoiceRef}`,
                description: `Payment for invoice reference: ${invoiceRef}`,
              },
              unit_amount: amountInPence,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        customer_email: customerEmail || undefined,
        metadata: {
          invoiceRef,
          customerName: customerName || "",
        },
        success_url: `${baseUrl}/?payment=success&ref=${encodeURIComponent(invoiceRef)}`,
        cancel_url: `${baseUrl}/?payment=cancelled`,
      });

      res.json({ url: session.url });
    } catch (err: any) {
      console.error("Stripe checkout error:", err.message);
      res.status(500).json({ message: err.message });
    }
  });

  return httpServer;
}
