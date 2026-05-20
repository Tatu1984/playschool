"use client";

import { motion } from "framer-motion";
import { ImageIcon, Video, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export type GalleryItem = {
  url: string;
  pathname: string;
  contentType: string;
  size: number;
  uploadedAt: string;
};

export function GalleryGrid({
  items,
  configured,
}: {
  items: GalleryItem[];
  configured: boolean;
}) {
  if (!configured) {
    return (
      <div className="rounded-3xl border-2 border-dashed border-ck-cream bg-white/80 p-10 text-center">
        <Sparkles className="mx-auto h-10 w-10 text-ck-orange" />
        <h3 className="mt-3 font-[family-name:var(--font-fredoka)] text-2xl font-bold text-ck-navy">
          Gallery storage not connected yet
        </h3>
        <p className="mt-2 text-ck-navy/70 max-w-md mx-auto">
          Enable Vercel Blob on this project and add{" "}
          <code className="rounded bg-ck-cream px-1.5 py-0.5 text-xs">
            BLOB_READ_WRITE_TOKEN
          </code>{" "}
          to the environment — uploaded photos and videos will appear here
          automatically.
        </p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-3xl border-2 border-dashed border-ck-cream bg-white/80 p-10 text-center">
        <ImageIcon className="mx-auto h-10 w-10 text-ck-blue" />
        <h3 className="mt-3 font-[family-name:var(--font-fredoka)] text-2xl font-bold text-ck-navy">
          Gallery is warming up
        </h3>
        <p className="mt-2 text-ck-navy/70">
          First photos & videos will land here soon. Check back!
        </p>
      </div>
    );
  }

  return (
    <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
      {items.map((it, i) => {
        const isVideo = it.contentType.startsWith("video/");
        return (
          <motion.figure
            key={it.pathname}
            className="group relative break-inside-avoid overflow-hidden rounded-2xl shadow-[0_8px_22px_rgba(26,31,75,0.08)]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
          >
            {isVideo ? (
              <video
                src={it.url}
                controls
                preload="metadata"
                className="block w-full bg-ck-navy"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={it.url}
                alt=""
                loading="lazy"
                className="block w-full transition-transform duration-500 group-hover:scale-105"
              />
            )}
            <Badge
              className="absolute left-2 top-2 rounded-full bg-white/90 backdrop-blur text-ck-navy font-bold gap-1"
              variant="secondary"
            >
              {isVideo ? (
                <Video className="h-3 w-3" />
              ) : (
                <ImageIcon className="h-3 w-3" />
              )}
              {isVideo ? "Video" : "Photo"}
            </Badge>
          </motion.figure>
        );
      })}
    </div>
  );
}
