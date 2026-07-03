import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";
import { loginSchema } from "./validators";
import { prisma } from "./db";
import { rateLimit, sweepExpiredBuckets, LOGIN_LIMIT } from "./rate-limit";
import { writeAudit } from "./audit";

/**
 * Full Auth.js instance (Node runtime).
 *
 * Single shared admin account (username `elsocadmin`), verified against a
 * bcrypt hash seeded into Postgres — the plaintext password exists only as
 * ADMIN_SEED_PASSWORD at seed time and is never persisted or logged.
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "ELSOC Admin",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, request) {
        const parsed = loginSchema.safeParse(credentials);
        if (!parsed.success) return null;

        // Brute-force protection: 5 attempts / 15 min / IP.
        const ip =
          request?.headers?.get("x-forwarded-for")?.split(",")[0]?.trim() ??
          request?.headers?.get("x-real-ip") ??
          "unknown";
        sweepExpiredBuckets();
        const limit = rateLimit(`login:${ip}`, LOGIN_LIMIT);
        if (!limit.ok) {
          // Deliberately indistinguishable from wrong credentials.
          console.warn(`[auth] rate-limited login from ${ip}`);
          return null;
        }

        if (!prisma) {
          console.error("[auth] login attempted without DATABASE_URL configured");
          return null;
        }

        const { username, password } = parsed.data;
        const admin = await prisma.adminUser.findUnique({ where: { username } });
        // Constant-shape comparison — hash even when the user doesn't exist so
        // response timing doesn't leak valid usernames.
        const hash =
          admin?.passwordHash ??
          "$2a$12$C6UzMDM.H6dfI/f/IKcEeO7ZfHFB3W3W9d7C1kD1kW07S1r6bDD6m";
        const valid = await bcrypt.compare(password, hash);
        if (!admin || !valid) return null;

        await writeAudit({
          action: "login",
          entity: "session",
          summary: `Admin "${username}" signed in`,
          actor: username,
        });

        return { id: admin.id, name: admin.username };
      },
    }),
  ],
});
