"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type Slot = { time: string; title: string; level: string; accent: string };

const GRID: Record<string, Slot[]> = {
  Mon: [
    { time: "16:30", title: "Hip-Hop Foundations", level: "Level I", accent: "#3CE7E0" },
    { time: "18:00", title: "Contemporary Technique", level: "Level II", accent: "#D6FF3F" },
    { time: "19:45", title: "Company Rehearsal", level: "Crew", accent: "#FF4A6E" },
  ],
  Tue: [
    { time: "16:30", title: "Ballet Barre", level: "Level I / II", accent: "#3CE7E0" },
    { time: "18:00", title: "Breaking Lab", level: "Level II", accent: "#D6FF3F" },
    { time: "19:45", title: "Choreography Studio", level: "Level III", accent: "#7B5CFF" },
  ],
  Wed: [
    { time: "16:30", title: "Bharatanatyam Adavus", level: "Level I", accent: "#3CE7E0" },
    { time: "18:00", title: "Jazz Funk", level: "Level II", accent: "#D6FF3F" },
    { time: "19:45", title: "Strength & Mobility", level: "All levels", accent: "#F3F1EA" },
  ],
  Thu: [
    { time: "16:30", title: "K-Pop Formation", level: "Level I / II", accent: "#3CE7E0" },
    { time: "18:00", title: "Contemporary Repertoire", level: "Level III", accent: "#7B5CFF" },
    { time: "19:45", title: "Company Rehearsal", level: "Crew", accent: "#FF4A6E" },
  ],
  Fri: [
    { time: "16:30", title: "Musicality & Freestyle", level: "Level II", accent: "#D6FF3F" },
    { time: "18:00", title: "Pointe Prep", level: "Level III", accent: "#7B5CFF" },
    { time: "19:45", title: "Open Cypher", level: "All levels", accent: "#F3F1EA" },
  ],
  Sat: [
    { time: "09:00", title: "Cross-Training Intensive", level: "Level II / III", accent: "#7B5CFF" },
    { time: "11:30", title: "Guest Choreographer Block", level: "Level III / Crew", accent: "#FF4A6E" },
    { time: "15:00", title: "Audition Clinic", level: "Open", accent: "#D6FF3F" },
  ],
};

export function BeatsSchedule() {
  const [day, setDay] = useState("Mon");

  return (
    <section id="schedule" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="beats-kicker text-[0.6rem] text-bt-acid">Timetable</span>
            <h2 className="mt-4 text-4xl text-bt-bone sm:text-5xl lg:text-6xl">
              Six days
              <br />
              on the floor.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/45">
            Studio A &amp; B, Salt Lake. Sunday is rest — the good kind, the
            kind that keeps ankles alive.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {DAYS.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDay(d)}
              className={cn(
                "border px-5 py-2.5 text-[0.7rem] font-semibold tracking-[0.18em] uppercase transition-colors",
                day === d
                  ? "border-bt-acid bg-bt-acid text-bt-ink"
                  : "border-white/15 text-white/50 hover:border-white/40 hover:text-bt-bone",
              )}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="mt-8 border-t border-white/10">
          {GRID[day].map((s, i) => (
            <motion.div
              key={`${day}-${s.time}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group grid grid-cols-[auto_1fr] items-baseline gap-5 border-b border-white/10 py-6 transition-colors hover:bg-white/[0.03] sm:grid-cols-[7rem_1fr_auto] sm:gap-8 sm:px-4"
            >
              <span className="beats-display text-2xl text-white/35 transition-colors group-hover:text-bt-bone sm:text-3xl">
                {s.time}
              </span>
              <h3 className="text-xl text-bt-bone sm:text-2xl">{s.title}</h3>
              <span
                className="col-start-2 text-[0.65rem] font-semibold tracking-[0.18em] uppercase sm:col-start-auto"
                style={{ color: s.accent }}
              >
                {s.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
