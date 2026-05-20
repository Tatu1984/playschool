import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { list } from "@vercel/blob";
import { GalleryGrid, type GalleryItem } from "@/components/sections/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery · Climb Kiddo",
  description:
    "Photos and videos from a day at Climb Kiddo — classroom moments, performances and milestones.",
};

export const revalidate = 60;

function inferContentType(pathname: string): string {
  const ext = pathname.split(".").pop()?.toLowerCase() ?? "";
  if (["mp4", "webm", "mov", "m4v"].includes(ext)) return `video/${ext === "mov" ? "quicktime" : ext}`;
  if (["jpg", "jpeg"].includes(ext)) return "image/jpeg";
  if (["png", "gif", "webp", "avif", "svg", "bmp"].includes(ext))
    return `image/${ext === "svg" ? "svg+xml" : ext}`;
  return "application/octet-stream";
}

async function loadItems(): Promise<{ configured: boolean; items: GalleryItem[] }> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return { configured: false, items: [] };
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
    return { configured: true, items };
  } catch {
    return { configured: true, items: [] };
  }
}

export default async function GalleryPage() {
  const { configured, items } = await loadItems();

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Little moments,"
        highlight="big memories."
        description="A peek into life at Climb Kiddo — class days, performances, parties and the everyday magic in between."
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid items={items} configured={configured} />
        </div>
      </section>
    </>
  );
}
