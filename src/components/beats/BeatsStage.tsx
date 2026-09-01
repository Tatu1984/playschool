"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { TiltedCard } from "@/components/reactbits/TiltedCard";
import { cn } from "@/lib/utils";

type Tile = {
  title: string;
  meta: string;
  span: string;
  gradient: string;
  accent: string;
};

const TILES: Tile[] = [
  {
    title: "Kinetic — Annual Production",
    meta: "Company · 2025",
    span: "sm:col-span-2 sm:row-span-2",
    gradient: "linear-gradient(140deg, #7B5CFF 0%, #07070B 55%, #FF4A6E 130%)",
    accent: "#D6FF3F",
  },
  {
    title: "Street Circuit Finals",
    meta: "Breaking · Level III",
    span: "",
    gradient: "linear-gradient(160deg, #D6FF3F 0%, #07070B 70%)",
    accent: "#D6FF3F",
  },
  {
    title: "Varnam Intensive",
    meta: "Bharatanatyam · Level II",
    span: "",
    gradient: "linear-gradient(200deg, #FF4A6E 0%, #07070B 72%)",
    accent: "#FF4A6E",
  },
  {
    title: "Winter Showing",
    meta: "Contemporary · Cycle 3",
    span: "sm:col-span-2",
    gradient: "linear-gradient(110deg, #3CE7E0 0%, #07070B 68%)",
    accent: "#3CE7E0",
  },
];

export function BeatsStage() {
  return (
    <section id="stage" className="scroll-mt-24 bg-bt-coal py-20 sm:py-28">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="beats-kicker text-[0.6rem] text-bt-acid">The Stage</span>
            <h2 className="mt-4 text-4xl text-bt-bone sm:text-5xl lg:text-6xl">
              Rehearsal is
              <br />
              only half of it.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/45">
            Four productions a year, a competitive circuit that runs from
            August, and a showreel we are quietly proud of.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[13rem] grid-cols-1 gap-5 sm:grid-cols-4">
          {TILES.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={cn("h-full", t.span)}
            >
              <TiltedCard className="h-full">
                <button
                  type="button"
                  className="group relative flex h-full w-full flex-col justify-end overflow-hidden border border-white/10 p-7 text-left"
                  style={{ backgroundImage: t.gradient }}
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 opacity-[0.14] mix-blend-overlay beats-noise"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-bt-ink/25 transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-bt-bone backdrop-blur-sm transition-all duration-300 group-hover:border-transparent group-hover:bg-bt-bone group-hover:text-bt-ink">
                    <Play className="h-4 w-4 fill-current" />
                  </span>
                  <h3 className="relative mt-6 max-w-[16ch] text-2xl text-bt-bone sm:text-3xl">
                    {t.title}
                  </h3>
                  <span
                    className="relative mt-2 text-[0.65rem] font-semibold tracking-[0.18em] uppercase"
                    style={{ color: t.accent }}
                  >
                    {t.meta}
                  </span>
                </button>
              </TiltedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
