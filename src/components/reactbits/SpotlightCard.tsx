"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * SpotlightCard — a card with a cursor-tracking radial highlight.
 */
export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(214, 255, 63, 0.16)",
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => ref.current?.style.setProperty("--spot", "1")}
      onMouseLeave={() => ref.current?.style.setProperty("--spot", "0")}
      className={cn(
        "group relative overflow-hidden border border-white/10 bg-bt-coal transition-colors duration-300 hover:border-white/25",
        className,
      )}
      style={{ ["--spot" as string]: 0 }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: "var(--spot, 0)" as unknown as number,
          background: `radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), ${spotlightColor}, transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
