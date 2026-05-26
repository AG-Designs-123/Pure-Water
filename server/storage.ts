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
    const [user] = await db!.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db!.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db!.insert(users).values(insertUser).returning();
    return user;
  }

  async createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry> {
    const [result] = await db!.insert(enquiries).values(enquiry).returning();
    return result;
  }

  async getEnquiries(): Promise<Enquiry[]> {
    return db!.select().from(enquiries).orderBy(desc(enquiries.createdAt));
  }

  async getEnquiry(id: number): Promise<Enquiry | undefined> {
    const [result] = await db!.select().from(enquiries).where(eq(enquiries.id, id));
    return result;
  }
}

export class MemoryStorage implements IStorage {
  private users = new Map<string, User>();
  private enquiries: Enquiry[] = [];
  private nextEnquiryId = 1;

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find((user) => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      id: crypto.randomUUID(),
      ...insertUser,
    };
    this.users.set(user.id, user);
    return user;
  }

  async createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry> {
    const result: Enquiry = {
      id: this.nextEnquiryId++,
      status: "new",
      createdAt: new Date(),
      message: enquiry.message ?? null,
      firstName: enquiry.firstName,
      lastName: enquiry.lastName,
      email: enquiry.email,
      phone: enquiry.phone,
      service: enquiry.service,
      postcode: enquiry.postcode,
    };
    this.enquiries.unshift(result);
    return result;
  }

  async getEnquiries(): Promise<Enquiry[]> {
    return [...this.enquiries];
  }

  async getEnquiry(id: number): Promise<Enquiry | undefined> {
    return this.enquiries.find((enquiry) => enquiry.id === id);
  }
}

export const storage = db ? new DatabaseStorage() : new MemoryStorage();
