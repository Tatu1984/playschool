import { ScrollVelocity } from "@/components/reactbits/ScrollVelocity";

const WORDS = [
  "Technique",
  "Repertoire",
  "Battles",
  "Choreography",
  "Stage Craft",
  "Conditioning",
];

export function BeatsTicker() {
  return (
    <section className="border-y border-white/10 bg-bt-coal py-5">
      <ScrollVelocity baseVelocity={3} itemClassName="gap-10 pr-10">
        {WORDS.map((w) => (
          <span key={w} className="flex shrink-0 items-center gap-10">
            <span className="beats-display text-3xl text-bt-bone/85 sm:text-5xl">
              {w}
            </span>
            <span className="text-2xl text-bt-acid sm:text-4xl">✦</span>
          </span>
        ))}
      </ScrollVelocity>
    </section>
  );
}
