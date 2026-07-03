import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse, type NextRequest } from "next/server";
import { put } from "@vercel/blob";
import { requireAdmin } from "@/lib/admin/guard";
import { writeAudit } from "@/lib/audit";
import { slugify } from "@/lib/utils";

export const maxDuration = 30;

const MAX_BYTES = 8 * 1024 * 1024; // 8 MB (client downsizes before upload)
const ALLOWED = new Map([
  ["image/jpeg", ".jpg"],
  ["image/png", ".png"],
  ["image/webp", ".webp"],
  ["image/avif", ".avif"],
]);

/**
 * Image upload endpoint.
 *
 * Storage driver is chosen by configuration:
 *  - BLOB_READ_WRITE_TOKEN set → Vercel Blob (public, CDN-served)
 *  - otherwise → ./public/uploads (self-hosted / docker volume)
 *
 * The client resizes to ≤1600px before uploading (see ImageField), so this
 * endpoint only enforces type + size.
 */
export async function POST(req: NextRequest) {
  const guard = await requireAdmin();
  if (!guard.ok) return guard.response;

  const form = await req.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "no_file" }, { status: 400 });
  }
  const ext = ALLOWED.get(file.type);
  if (!ext) {
    return NextResponse.json(
      { error: "unsupported_type", allowed: [...ALLOWED.keys()] },
      { status: 415 },
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "too_large", maxBytes: MAX_BYTES }, { status: 413 });
  }

  const base = slugify(file.name.replace(/\.[^.]+$/, "")) || "image";
  const filename = `${Date.now()}-${base}${ext}`;

  try {
    let url: string;
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const blob = await put(`elsoc/${filename}`, file, {
        access: "public",
        contentType: file.type,
      });
      url = blob.url;
    } else {
      const dir = path.join(process.cwd(), "public", "uploads");
      await mkdir(dir, { recursive: true });
      const bytes = Buffer.from(await file.arrayBuffer());
      await writeFile(path.join(dir, filename), bytes);
      url = `/uploads/${filename}`;
    }

    await writeAudit({
      action: "create",
      entity: "upload",
      summary: `Uploaded image ${filename} (${Math.round(file.size / 1024)} KB)`,
      actor: guard.username,
    });
    return NextResponse.json({ url }, { status: 201 });
  } catch (error) {
    console.error("[admin:upload] failed:", error);
    return NextResponse.json({ error: "upload_failed" }, { status: 500 });
  }
}
