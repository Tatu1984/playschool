"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type FlowingMenuItem = {
  label: string;
  meta?: string;
  marquee?: string;
  accent?: string;
};

/**
 * FlowingMenu — big editorial rows; hovering slides a coloured marquee
 * panel in from the direction the cursor entered.
 */
export function FlowingMenu({
  items,
  className,
}: {
  items: FlowingMenuItem[];
  className?: string;
}) {
  return (
    <div className={cn("divide-y divide-white/10 border-y border-white/10", className)}>
      {items.map((item) => (
        <Row key={item.label} item={item} />
      ))}
    </div>
  );
}

function Row({ item }: { item: FlowingMenuItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const [dir, setDir] = useState<1 | -1>(1);
  const [hover, setHover] = useState(false);
  const accent = item.accent ?? "#D6FF3F";

  const edge = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return 1 as const;
    return e.clientY < rect.top + rect.height / 2 ? (-1 as const) : (1 as const);
  };

  const marqueeText = item.marquee ?? item.label;

  return (
    <div
      ref={ref}
      onMouseEnter={(e) => {
        setDir(edge(e));
        setHover(true);
      }}
      onMouseLeave={(e) => {
        setDir(edge(e));
        setHover(false);
      }}
      className="relative isolate overflow-hidden"
    >
      <div className="flex items-baseline justify-between gap-6 px-4 py-7 sm:px-8 sm:py-9">
        <h3 className="beats-display text-3xl sm:text-5xl lg:text-6xl text-bt-bone">
          {item.label}
        </h3>
        {item.meta && (
          <span className="beats-kicker shrink-0 text-[0.62rem] text-white/45 sm:text-xs">
            {item.meta}
          </span>
        )}
      </div>

      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ y: `${dir * 100}%` }}
            animate={{ y: "0%" }}
            exit={{ y: `${dir * 100}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-10 flex items-center overflow-hidden"
            style={{ backgroundColor: accent }}
          >
            <div className="flex shrink-0 animate-beats-marquee gap-8 pr-8 [animation-duration:14s]">
              {Array.from({ length: 2 }).map((_, copy) => (
                <div key={copy} className="flex shrink-0 items-center gap-8">
                  {Array.from({ length: 8 }).map((__, i) => (
                    <span
                      key={i}
                      className="beats-display flex shrink-0 items-center gap-8 text-3xl text-bt-ink sm:text-5xl lg:text-6xl"
                    >
                      {marqueeText}
                      <span className="text-xl opacity-60">✦</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
