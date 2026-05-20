import { NextResponse } from "next/server";
import { list } from "@vercel/blob";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function inferContentType(pathname: string): string {
  const ext = pathname.split(".").pop()?.toLowerCase() ?? "";
  if (["mp4", "webm", "mov", "m4v"].includes(ext))
    return `video/${ext === "mov" ? "quicktime" : ext}`;
  if (["jpg", "jpeg"].includes(ext)) return "image/jpeg";
  if (["png", "gif", "webp", "avif", "svg", "bmp"].includes(ext))
    return `image/${ext === "svg" ? "svg+xml" : ext}`;
  return "application/octet-stream";
}

export async function GET() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ configured: false, items: [] });
  }
  try {
    const { blobs } = await list({ prefix: "gallery/" });
    const items = blobs
      .filter((b) => !b.pathname.endsWith("/"))
      .sort((a, b) => +new Date(b.uploadedAt) - +new Date(a.uploadedAt))
      .map((b) => ({
        url: b.url,
        pathname: b.pathname,
        contentType: inferContentType(b.pathname),
        size: b.size,
        uploadedAt:
          b.uploadedAt instanceof Date
            ? b.uploadedAt.toISOString()
            : String(b.uploadedAt),
      }));
    return NextResponse.json({ configured: true, items });
  } catch (e) {
    return NextResponse.json(
      { configured: true, items: [], error: String(e) },
      { status: 500 },
    );
  }
}
