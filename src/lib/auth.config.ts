import type { NextAuthConfig } from "next-auth";

/**
 * Edge-safe Auth.js configuration.
 *
 * This half runs inside Next.js Middleware (edge runtime), so it must not
 * import Prisma or bcrypt. The Credentials provider lives in auth.ts, which
 * only ever runs in the Node runtime.
 */
export const authConfig = {
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 8, // 8h — short expiry; JWT is silently refreshed on activity
  },
  callbacks: {
    authorized({ auth, request }) {
      const { pathname } = request.nextUrl;
      const isLoggedIn = Boolean(auth?.user);

      const isProtected =
        (pathname.startsWith("/admin") && pathname !== "/admin/login") ||
        pathname.startsWith("/api/admin");

      if (isProtected) return isLoggedIn; // false → redirect to signIn page

      if (pathname === "/admin/login" && isLoggedIn) {
        return Response.redirect(new URL("/admin", request.nextUrl));
      }
      return true;
    },
    jwt({ token, user }) {
      if (user?.name) token.username = user.name;
      return token;
    },
    session({ session, token }) {
      if (session.user && typeof token.username === "string") {
        session.user.name = token.username;
      }
      return session;
    },
  },
  providers: [], // filled in auth.ts
} satisfies NextAuthConfig;
