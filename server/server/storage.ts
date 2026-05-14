import { type User, type InsertUser, type Enquiry, type InsertEnquiry, users, enquiries } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry>;
  getEnquiries(): Promise<Enquiry[]>;
  getEnquiry(id: number): Promise<Enquiry | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry> {
    const [result] = await db.insert(enquiries).values(enquiry).returning();
    return result;
  }

  async getEnquiries(): Promise<Enquiry[]> {
    return db.select().from(enquiries).orderBy(desc(enquiries.createdAt));
  }

  async getEnquiry(id: number): Promise<Enquiry | undefined> {
    const [result] = await db.select().from(enquiries).where(eq(enquiries.id, id));
    return result;
  }
}

export const storage = new DatabaseStorage();
