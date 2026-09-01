"use client";

import { motion } from "framer-motion";
import { DecryptedText } from "@/components/reactbits/DecryptedText";

const POINTS = [
  {
    k: "01",
    title: "Placement by audition",
    body: "No open enrolment. Every dancer is placed into a level by a faculty panel so the room always moves at one standard.",
  },
  {
    k: "02",
    title: "Syllabus, not sessions",
    body: "Twelve-week cycles with graded technique, a set repertoire piece, and an assessed showing at the end of each cycle.",
  },
  {
    k: "03",
    title: "Stage time that counts",
    body: "Competitive circuits, city showcases and the annual production — dancers perform, not just rehearse.",
  },
];

export function BeatsManifesto() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="beats-kicker text-[0.6rem] text-bt-acid">
              <DecryptedText text="The Studio" />
            </span>
            <h2 className="mt-5 text-4xl text-bt-bone sm:text-5xl lg:text-6xl">
              Where the{" "}
              <span className="beats-outline-text">practice</span> gets
              <br />
              <span className="beats-text-heat">seriously</span> good.
            </h2>
            <p className="mt-7 max-w-md leading-relaxed text-white/55">
              Beats is the advanced wing of the Climb Kiddo family — a separate
              floor, a separate faculty, and a completely separate standard.
              Where the playschool nurtures first steps, Beats is built for
              dancers who already know the count and want the craft.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-white/40">
              Mirrored sprung floors. Sound rigged for battles. Faculty who
              still compete. Come with the hours in — leave with the technique.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            {POINTS.map((p, i) => (
              <motion.div
                key={p.k}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group grid grid-cols-[auto_1fr] gap-6 border-t border-white/10 py-8 last:border-b sm:gap-10"
              >
                <span className="beats-display text-2xl text-white/20 transition-colors group-hover:text-bt-acid">
                  {p.k}
                </span>
                <div>
                  <h3 className="text-xl text-bt-bone sm:text-2xl">{p.title}</h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-white/50">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
