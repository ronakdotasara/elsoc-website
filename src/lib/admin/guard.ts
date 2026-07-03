import "server-only";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

/**
 * Server-side session check for every /api/admin handler.
 *
 * Middleware already fences these routes at the edge, but per the spec we
 * never trust client state (or the middleware alone): each mutation
 * re-validates the JWT session in the Node runtime before touching data.
 */
export async function requireAdmin(): Promise<
  { ok: true; username: string } | { ok: false; response: NextResponse }
> {
  const session = await auth();
  const username = session?.user?.name;
  if (!username) {
    return {
      ok: false,
      response: NextResponse.json({ error: "unauthorized" }, { status: 401 }),
    };
  }
  return { ok: true, username };
}
