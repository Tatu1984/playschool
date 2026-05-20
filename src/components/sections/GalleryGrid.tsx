"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ImageIcon, Video, Sparkles, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type GalleryItem = {
  id: string;
  url: string;
  pathname: string;
  contentType: string;
  size: number;
  caption: string;
  category: string;
  sortOrder: number;
  uploadedAt: string;
};

type Category = { value: string; label: string };

export function GalleryGrid({
  items,
  categories,
  configured,
}: {
  items: GalleryItem[];
  categories: Category[];
  configured: boolean;
}) {
  const [filter, setFilter] = useState<string>("all");
  const visible = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.category === filter)),
    [items, filter],
  );

  if (!configured) {
    return (
      <div className="rounded-3xl border-2 border-dashed border-ck-cream bg-white/80 p-10 text-center">
        <Sparkles className="mx-auto h-10 w-10 text-ck-orange" />
        <h3 className="mt-3 font-[family-name:var(--font-fredoka)] text-2xl font-bold text-ck-navy">
          Gallery is being prepared
        </h3>
        <p className="mt-2 text-ck-navy/70 max-w-md mx-auto">
          First photos and videos will appear here very soon.
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
          First photos &amp; videos will land here soon. Check back!
        </p>
      </div>
    );
  }

  const populatedCategories = categories.filter((c) =>
    items.some((i) => i.category === c.value),
  );

  return (
    <>
      <div className="flex items-center gap-2 flex-wrap mb-8">
        <Filter className="h-4 w-4 text-ck-navy/60" />
        <button
          onClick={() => setFilter("all")}
          className={cn(
            "rounded-full px-3.5 py-1.5 text-sm font-bold transition-colors",
            filter === "all"
              ? "bg-ck-navy text-white"
              : "bg-white text-ck-navy/75 hover:text-ck-navy",
          )}
        >
          All ({items.length})
        </button>
        {populatedCategories.map((c) => {
          const n = items.filter((i) => i.category === c.value).length;
          return (
            <button
              key={c.value}
              onClick={() => setFilter(c.value)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm font-bold transition-colors",
                filter === c.value
                  ? "bg-ck-red text-white"
                  : "bg-white text-ck-navy/75 hover:text-ck-navy",
              )}
            >
              {c.label} ({n})
            </button>
          );
        })}
      </div>

      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
        {visible.map((it, i) => {
          const isVideo = it.contentType.startsWith("video/");
          return (
            <motion.figure
              key={it.id}
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
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={it.url}
                  alt={it.caption}
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
                {categories.find((c) => c.value === it.category)?.label ?? it.category}
              </Badge>
              {it.caption && (
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ck-navy/85 via-ck-navy/55 to-transparent p-3 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {it.caption}
                </figcaption>
              )}
            </motion.figure>
          );
        })}
      </div>
    </>
  );
}
