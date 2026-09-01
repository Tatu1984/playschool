"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";

const LEVELS = [
  {
    tag: "Level I",
    name: "Foundation+",
    age: "Ages 9–12",
    hours: "4 hrs / week",
    accent: "#3CE7E0",
    body: "For dancers with two or more years behind them. Cleans up technique and builds the vocabulary the higher levels assume.",
    points: ["Graded technique barre", "Rhythm & musicality lab", "One showcase per cycle"],
  },
  {
    tag: "Level II",
    name: "Intermediate",
    age: "Ages 12–16",
    hours: "8 hrs / week",
    accent: "#D6FF3F",
    body: "The working level. Two disciplines, weekly repertoire, and the first taste of the competitive circuit.",
    points: ["Major + cross-train form", "Repertoire block", "Inter-school circuit", "Strength & mobility"],
    featured: true,
  },
  {
    tag: "Level III",
    name: "Advanced",
    age: "Ages 15+",
    hours: "14 hrs / week",
    accent: "#7B5CFF",
    body: "Pre-professional training. Assessed cycles, choreographic study, and stage time under real production conditions.",
    points: ["Assessed 12-week cycles", "Choreography studio", "National circuit", "Audition coaching"],
  },
  {
    tag: "Crew",
    name: "Beats Company",
    age: "By invitation",
    hours: "20+ hrs / week",
    accent: "#FF4A6E",
    body: "The touring company. Selected from Level III, rehearsing the annual production and representing the academy on the road.",
    points: ["Company repertoire", "Paid performances", "Mentored teaching hours"],
  },
];

export function BeatsLevels() {
  return (
    <section id="levels" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="absolute inset-0 beats-grid-lines opacity-40" />
      <div className="relative mx-auto max-w-[92rem] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="beats-kicker text-[0.6rem] text-bt-acid">The Ladder</span>
            <h2 className="mt-4 text-4xl text-bt-bone sm:text-5xl lg:text-6xl">
              Four levels.
              <br />
              You audition into one.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/45">
            Placement is by panel, reviewed at the end of every twelve-week
            cycle. Moving up is earned, never bought.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LEVELS.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <SpotlightCard
                spotlightColor={`${l.accent}22`}
                className="flex h-full flex-col p-7"
              >
                <span
                  className="beats-kicker text-[0.55rem]"
                  style={{ color: l.accent }}
                >
                  {l.tag}
                </span>
                <h3 className="mt-4 text-3xl text-bt-bone">{l.name}</h3>
                <div className="mt-3 flex gap-3 text-[0.7rem] tracking-wider text-white/40 uppercase">
                  <span>{l.age}</span>
                  <span className="text-white/15">/</span>
                  <span>{l.hours}</span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/50">{l.body}</p>

                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                  {l.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-white/65">
                      <Check
                        className="mt-0.5 h-3.5 w-3.5 shrink-0"
                        style={{ color: l.accent }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <a
                    href="#audition"
                    className="inline-flex w-full items-center justify-center border px-4 py-3 text-[0.68rem] font-semibold tracking-[0.18em] uppercase transition-colors"
                    style={
                      l.featured
                        ? { backgroundColor: l.accent, borderColor: l.accent, color: "#07070B" }
                        : { borderColor: "rgba(255,255,255,0.18)", color: "rgba(243,241,234,0.8)" }
                    }
                  >
                    Audition for {l.tag}
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
