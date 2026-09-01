import Link from "next/link";
import { cn } from "@/lib/utils";

/** The Beats identity mark — a stacked equaliser glyph plus condensed wordmark. */
export function BeatsWordmark({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link href="/beats" className={cn("group flex items-center gap-3", className)}>
      <span className="flex h-9 items-end gap-[3px]" aria-hidden>
        {[
          { h: "40%", c: "#FF4A6E", d: "0s" },
          { h: "85%", c: "#D6FF3F", d: "-0.4s" },
          { h: "60%", c: "#3CE7E0", d: "-0.9s" },
          { h: "100%", c: "#7B5CFF", d: "-1.3s" },
        ].map((b, i) => (
          <span
            key={i}
            className="w-[4px] animate-beats-pulse rounded-full"
            style={{ height: b.h, backgroundColor: b.c, animationDelay: b.d }}
          />
        ))}
      </span>
      <span className="leading-none">
        <span className="beats-display block text-2xl tracking-[0.02em] text-bt-bone transition-colors group-hover:text-bt-acid">
          Beats
        </span>
        {!compact && (
          <span className="beats-kicker block text-[0.5rem] text-white/45">
            Dance Academy
          </span>
        )}
      </span>
    </Link>
  );
}
