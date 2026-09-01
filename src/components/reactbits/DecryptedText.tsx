"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*/<>[]{}";

/**
 * DecryptedText — scrambles then resolves the text when it scrolls into view.
 */
export function DecryptedText({
  text,
  className,
  speed = 45,
  revealDelay = 0,
}: {
  text: string;
  className?: string;
  speed?: number;
  revealDelay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [output, setOutput] = useState(text);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    let raf = 0;

    const run = () => {
      const tick = () => {
        const revealed = Math.floor(frame / 2);
        setOutput(
          text
            .split("")
            .map((ch, i) => {
              if (ch === " ") return " ";
              if (i < revealed) return ch;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join(""),
        );
        frame += 1;
        if (revealed <= text.length) {
          raf = window.setTimeout(tick, speed);
        } else {
          setOutput(text);
        }
      };
      tick();
    };

    const timer = setTimeout(run, revealDelay);
    return () => {
      clearTimeout(timer);
      clearTimeout(raf);
    };
  }, [started, text, speed, revealDelay]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {output}
    </span>
  );
}
