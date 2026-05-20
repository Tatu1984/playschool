import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Activities } from "@/components/sections/Activities";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedList, AnimatedItem } from "@/components/reactbits/AnimatedList";
import { TiltedCard } from "@/components/reactbits/TiltedCard";
import { GradientText } from "@/components/reactbits/GradientText";
import {
  Palette, Music, Bike, Dumbbell, Drama, Sparkles, Trees,
  ChefHat, Drum, Wand2, Brush, Puzzle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Activities · Climb Kiddo",
  description:
    "Storytelling, drawing, dance, drum, karate, yoga, cooking — every day a new adventure.",
};

const ACTIVITY_GROUPS = [
  {
    title: "For all ages",
    color: "#DC2638",
    items: [
      { icon: Drama, label: "Dance", body: "Move, groove and perform — every age, every level." },
      { icon: Palette, label: "Art", body: "Painting, drawing and craft for little hands of all sizes." },
      { icon: Dumbbell, label: "Martial Art", body: "Discipline, confidence and self-defence basics for every kid." },
    ],
  },
  {
    title: "Creative Arts",
    color: "#D4318F",
    items: [
      { icon: Brush, label: "Drawing", body: "From crayon scribbles to finished masterpieces." },
      { icon: Palette, label: "Painting", body: "Finger paints, brushes, and a whole lot of joy." },
      { icon: Wand2, label: "Storytelling", body: "Listen, read along, then re-tell with props." },
    ],
  },
  {
    title: "Music & Movement",
    color: "#F39A1E",
    items: [
      { icon: Drum, label: "Drum Circle", body: "Rhythm builds confidence and focus." },
      { icon: Music, label: "Music Class", body: "Nursery rhymes, sing-alongs, simple instruments." },
      { icon: Drama, label: "Dance", body: "Express, move, perform — every Friday." },
    ],
  },
  {
    title: "Sports & Strength",
    color: "#2BAEEC",
    items: [
      { icon: Dumbbell, label: "Karate", body: "Discipline, respect, and self-defence basics." },
      { icon: Bike, label: "Cycling", body: "Balance bikes, trikes, and tricycle adventures." },
      { icon: Sparkles, label: "Yoga", body: "Calm minds, flexible bodies, big breaths." },
    ],
  },
  {
    title: "Life Skills",
    color: "#8BC53F",
    items: [
      { icon: ChefHat, label: "Cooking", body: "Safe, simple recipes — kids love to taste their work." },
      { icon: Trees, label: "Nature Walks", body: "Discover leaves, bugs, clouds and the seasons." },
      { icon: Puzzle, label: "Puzzles", body: "Logic, patience, and the joy of finishing." },
    ],
  },
];

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Activities"
        title="Twelve happy ways to"
        highlight="learn & play"
        description="From quiet story corners to loud drum circles — every day at Climb Kiddo is a brand new adventure."
      />

      <Activities showHeading={false} />

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {ACTIVITY_GROUPS.map((g) => (
            <div key={g.title}>
              <div className="flex items-center gap-3">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: g.color }}
                />
                <Badge
                  className="rounded-full text-white font-bold"
                  style={{ backgroundColor: g.color }}
                >
                  {g.title}
                </Badge>
              </div>
              <AnimatedList
                className="mt-5 grid gap-5 md:grid-cols-3"
                stagger={0.08}
              >
                {g.items.map((it) => {
                  const Icon = it.icon;
                  return (
                    <AnimatedItem key={it.label}>
                      <TiltedCard>
                        <Card className="h-full rounded-3xl border-0 bg-white shadow-[0_8px_24px_rgba(26,31,75,0.06)]">
                          <CardContent className="p-6">
                            <span
                              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md"
                              style={{ backgroundColor: g.color }}
                            >
                              <Icon className="h-6 w-6" />
                            </span>
                            <h3 className="mt-5 font-[family-name:var(--font-fredoka)] text-xl font-bold text-ck-navy">
                              {it.label}
                            </h3>
                            <p className="mt-2 text-sm text-ck-navy/70 leading-relaxed">
                              {it.body}
                            </p>
                          </CardContent>
                        </Card>
                      </TiltedCard>
                    </AnimatedItem>
                  );
                })}
              </AnimatedList>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
