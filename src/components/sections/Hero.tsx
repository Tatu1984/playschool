"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Aurora } from "@/components/reactbits/Aurora";
import { FloatingShapes } from "@/components/reactbits/FloatingShapes";
import { ClickSpark } from "@/components/reactbits/ClickSpark";
import { ClimbersSlide } from "@/components/sections/hero/ClimbersSlide";
import { OlympiadSlide } from "@/components/sections/hero/OlympiadSlide";
import { cn } from "@/lib/utils";

const SLIDES = [
  { key: "climbers", label: "Where little climbers grow big", Slide: ClimbersSlide },
  { key: "olympiad", label: "All subject Olympiad exams", Slide: OlympiadSlide },
];

const INTERVAL = 7000;

/**
 * The hero is a slideshow. Both slides stay mounted and stacked in one grid
 * cell, so the section keeps a single height and nothing below it shifts as
 * the slides change; only opacity and a small offset animate.
 */
export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (next: number) => setIndex((next + SLIDES.length) % SLIDES.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(id);
  }, [paused, index]);

  return (
    <section
      className="relative isolate overflow-hidden pt-4 pb-20"
      aria-roledescription="carousel"
      aria-label="Climb Kiddo highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(index + 1);
        if (e.key === "ArrowLeft") go(index - 1);
      }}
    >
      <Aurora className="-z-10 opacity-70" />
      {/* decorative shapes sit behind the copy so nothing overlaps the text */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <FloatingShapes />
      </div>

      <ClickSpark className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-14">
        <div className="grid">
          {SLIDES.map(({ key, label, Slide }, i) => {
            const active = i === index;
            return (
              <div
                key={key}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${SLIDES.length}: ${label}`}
                aria-hidden={!active}
                className={cn(
                  "col-start-1 row-start-1 transition-all duration-700 ease-out",
                  active
                    ? "translate-x-0 opacity-100"
                    : "pointer-events-none translate-x-4 opacity-0",
                )}
              >
                <Slide active={active} />
              </div>
            );
          })}
        </div>

        {/* controls */}
        <div className="relative z-20 mt-10 flex items-center justify-center gap-5 lg:justify-start">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(index - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ck-navy/12 bg-white/80 text-ck-navy shadow-sm backdrop-blur transition-colors hover:bg-white hover:text-ck-red"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.key}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}: ${s.label}`}
                aria-current={i === index}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  i === index
                    ? "w-9 bg-ck-red"
                    : "w-2.5 bg-ck-navy/20 hover:bg-ck-navy/40",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(index + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ck-navy/12 bg-white/80 text-ck-navy shadow-sm backdrop-blur transition-colors hover:bg-white hover:text-ck-red"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </ClickSpark>
    </section>
  );
}
