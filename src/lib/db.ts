import { PrismaClient } from "@prisma/client";

/**
 * Prisma singleton.
 *
 * The client is only instantiated when DATABASE_URL is configured; every data
 * service degrades to the bundled seed content otherwise (see src/lib/data).
 * This keeps `next build`, Vercel previews and fresh clones working with zero
 * external services.
 */

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const hasDatabase = Boolean(process.env.DATABASE_URL);

function createClient(): PrismaClient | null {
  if (!hasDatabase) return null;
  return new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });
}

export const prisma: PrismaClient | null =
  globalForPrisma.prisma ?? createClient();

if (process.env.NODE_ENV !== "production" && prisma) {
  globalForPrisma.prisma = prisma;
}

/** Narrowing helper for admin routes, which require a real database. */
export function requireDb(): PrismaClient {
  if (!prisma) {
    throw new Error(
      "DATABASE_URL is not configured. The admin panel needs Postgres — run `docker compose up db` and set DATABASE_URL in .env.",
    );
  }
  return prisma;
}
