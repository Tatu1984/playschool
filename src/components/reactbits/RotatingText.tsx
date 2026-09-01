"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** RotatingText — cycles through words with a vertical roll. */
export function RotatingText({
  words,
  interval = 2200,
  className,
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={cn("relative inline-flex overflow-hidden align-bottom", className)}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block whitespace-nowrap"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
