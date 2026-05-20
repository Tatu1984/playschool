import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BYTES = 50 * 1024 * 1024; // 50 MB
const ALLOWED = /^(image|video)\//;

export async function POST(req: NextRequest) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { error: "Storage not configured. Set BLOB_READ_WRITE_TOKEN." },
      { status: 503 },
    );
  }

  const expected = process.env.ADMIN_PASSWORD;
  const provided = req.headers.get("x-admin-password");
  if (!expected || provided !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }
  if (!ALLOWED.test(file.type)) {
    return NextResponse.json(
      { error: "Only images and videos are allowed" },
      { status: 415 },
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "File too large (max 50MB)" },
      { status: 413 },
    );
  }

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const pathname = `gallery/${Date.now()}-${safeName}`;

  const blob = await put(pathname, file, {
    access: "public",
    contentType: file.type,
  });

  return NextResponse.json({
    url: blob.url,
    pathname: blob.pathname,
    contentType: file.type,
    size: file.size,
  });
}
