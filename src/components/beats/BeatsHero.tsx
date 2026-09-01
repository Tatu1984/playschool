"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Play } from "lucide-react";
import { Beams } from "@/components/reactbits/Beams";
import { Noise } from "@/components/reactbits/Noise";
import { RotatingText } from "@/components/reactbits/RotatingText";
import { StarBorder } from "@/components/reactbits/StarBorder";
import { Counter } from "@/components/reactbits/Counter";

const LETTERS = ["B", "E", "A", "T", "S"];

export function BeatsHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="absolute inset-0 beats-grid-lines opacity-70" />
      <Beams />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bt-acid/60 to-transparent"
      />
      <Noise opacity={0.045} />

      <div className="relative mx-auto max-w-[92rem] px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          <span className="flex items-center gap-2 border border-bt-acid/40 px-3 py-1.5 text-[0.62rem] tracking-[0.28em] text-bt-acid uppercase">
            <span className="h-1.5 w-1.5 animate-beats-pulse rounded-full bg-bt-acid" />
            Auditions open · Batch 2026
          </span>
          <span className="beats-kicker text-[0.62rem] text-white/40">
            An advanced dance academy by Climb Kiddo
          </span>
        </motion.div>

        {/* Kinetic wordmark */}
        <div className="mt-8 flex flex-wrap items-end leading-none select-none sm:mt-10">
          {LETTERS.map((ch, i) => (
            <motion.span
              key={ch + i}
              initial={{ y: "42%", opacity: 0, rotate: i % 2 ? 3 : -3 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.08 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="beats-display text-[22vw] text-bt-bone transition-colors duration-300 hover:text-bt-acid sm:text-[17vw] lg:text-[15vw]"
            >
              {ch}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-[3vw] ml-3 hidden h-[7vw] w-px bg-white/20 sm:block lg:ml-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mb-[1.6vw] ml-0 max-w-xs text-sm leading-relaxed text-white/55 sm:ml-6 lg:ml-10"
          >
            Serious training for dancers who have outgrown the beginner floor —
            technique, repertoire and stage craft, six days a week.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-6 flex flex-col gap-8 border-t border-white/10 pt-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <h1 className="beats-display max-w-3xl text-4xl text-bt-bone sm:text-6xl lg:text-7xl">
              Train like a{" "}
              <span className="beats-text-acid">professional</span>
              <br />
              in{" "}
              <RotatingText
                words={["Hip-Hop", "Contemporary", "Ballet", "Bharatanatyam", "Jazz Funk"]}
                className="h-[1.05em] items-end text-bt-coral"
              />
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <StarBorder href="#audition">Book an audition</StarBorder>
              <a
                href="#stage"
                className="group flex items-center gap-3 text-sm font-medium tracking-[0.14em] text-white/60 uppercase transition-colors hover:text-bt-bone"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-bt-acid group-hover:bg-bt-acid group-hover:text-bt-ink">
                  <Play className="h-4 w-4 fill-current" />
                </span>
                Watch the showreel
              </a>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:gap-x-10">
            {[
              { n: 12, suffix: "", label: "Dance forms" },
              { n: 24, suffix: "", label: "Hours a week" },
              { n: 38, suffix: "+", label: "Stage wins" },
              { n: 9, suffix: "", label: "Resident faculty" },
            ].map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <Counter
                    to={s.n}
                    suffix={s.suffix}
                    className="beats-display block text-4xl text-bt-acid lg:text-5xl"
                  />
                  <span className="beats-kicker mt-2 block text-[0.58rem] text-white/40">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <div className="mt-14 flex items-center gap-3 text-white/25">
          <ArrowDownRight className="h-4 w-4 animate-bounce" />
          <span className="beats-kicker text-[0.58rem]">Scroll</span>
        </div>
      </div>
    </section>
  );
}
