import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

/**
 * External on-demand ISR trigger (e.g. a cron or an external script):
 *   POST /api/revalidate?secret=…&path=/projects
 * The admin panel does NOT need this — its mutations revalidate in-process.
 */
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const path = req.nextUrl.searchParams.get("path") ?? "/";
  if (!path.startsWith("/")) {
    return NextResponse.json({ error: "invalid_path" }, { status: 400 });
  }
  revalidatePath(path, "layout");
  return NextResponse.json({ revalidated: true, path, at: Date.now() });
}
