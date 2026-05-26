import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEnquirySchema } from "@shared/schema";
import { fromError } from "zod-validation-error";
import nodemailer from "nodemailer";

function getEmailTransporter() {
  const password = process.env.EMAIL_PASSWORD;
  if (!password) return null;

  return nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: "pure.water@hotmail.co.uk",
      pass: password,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });
}

async function sendEnquiryEmail(enquiry: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  postcode: string;
  message: string;
}) {
  const transporter = getEmailTransporter();
  if (!transporter) {
    console.warn("EMAIL_PASSWORD not set — enquiry saved to database only");
    return;
  }

  const serviceLabels: Record<string, string> = {
    windows: "Window Cleaning",
    gutters: "Gutter Clearing",
    solar: "Solar Panel Cleaning",
    conservatory: "Conservatory Cleaning",
  };

  const serviceLabel = serviceLabels[enquiry.service] || enquiry.service;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f7f5; padding: 20px;">
      <div style="background: #0c1222; padding: 24px; margin-bottom: 0;">
        <h1 style="color: #c9a96e; margin: 0; font-size: 22px;">New Quote Request</h1>
        <p style="color: #ffffff80; margin: 6px 0 0; font-size: 14px;">Pure Water Window Cleaning</p>
      </div>
      <div style="background: white; padding: 28px; border: 1px solid #e5e5e5;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px; width: 140px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #1a2340;">${enquiry.firstName} ${enquiry.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1a2340;"><a href="mailto:${enquiry.email}" style="color: #c9a96e;">${enquiry.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1a2340;"><a href="tel:${enquiry.phone}" style="color: #c9a96e;">${enquiry.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Service</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1a2340;">${serviceLabel}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Postcode</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1a2340;">${enquiry.postcode}</td>
          </tr>
          ${enquiry.message ? `
          <tr>
            <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; color: #1a2340;">${enquiry.message.replace(/\n/g, "<br>")}</td>
          </tr>` : ""}
        </table>
      </div>
      <div style="background: #0c1222; padding: 14px 28px; text-align: center;">
        <p style="color: #ffffff40; margin: 0; font-size: 12px;">pure.water@hotmail.co.uk &nbsp;|&nbsp; 07551 017095</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: '"Pure Water Website" <pure.water@hotmail.co.uk>',
    to: "pure.water@hotmail.co.uk",
    subject: `New Quote Request — ${enquiry.firstName} ${enquiry.lastName} (${serviceLabel})`,
    html,
    replyTo: enquiry.email,
  });
}

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

    // Send email notification (non-blocking — don't fail if email fails)
    sendEnquiryEmail({ ...parsed.data, message: parsed.data.message ?? "" }).catch((err) => {
      console.error("Failed to send enquiry email:", err.message);
    });

    return res.status(201).json(enquiry);
  });

  app.get("/api/enquiries", async (_req, res) => {
    const enquiries = await storage.getEnquiries();
    return res.json(enquiries);
  });

  app.get("/api/payment/checkout", (_req, res) => {
    return res.redirect(302, "https://pay.sumup.com/b2c/QDWZPDI3");
  });

  app.post("/api/payment/checkout", (_req, res) => {
    return res.json({ url: "https://pay.sumup.com/b2c/QDWZPDI3" });
  });

  return httpServer;
}
