import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";

/**
 * Route protection at the edge: any request to /admin/** or /api/admin/**
 * without a valid session is redirected to /admin/login (pages) or rejected
 * (API) by the `authorized` callback in auth.config.ts.
 */
export const { auth: middleware } = NextAuth(authConfig);

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
