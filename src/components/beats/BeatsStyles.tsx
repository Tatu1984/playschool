import { FlowingMenu, type FlowingMenuItem } from "@/components/reactbits/FlowingMenu";

const STYLES: FlowingMenuItem[] = [
  { label: "Hip-Hop", meta: "Grooves · Foundations · Freestyle", accent: "#D6FF3F", marquee: "Hip-Hop" },
  { label: "Contemporary", meta: "Release · Floorwork · Partnering", accent: "#7B5CFF", marquee: "Contemporary" },
  { label: "Ballet", meta: "Barre · Centre · Pointe prep", accent: "#F3F1EA", marquee: "Ballet" },
  { label: "Bharatanatyam", meta: "Adavus · Abhinaya · Varnam", accent: "#FF4A6E", marquee: "Bharatanatyam" },
  { label: "Jazz Funk", meta: "Attitude · Isolations · Performance", accent: "#3CE7E0", marquee: "Jazz Funk" },
  { label: "Breaking", meta: "Toprock · Footwork · Power", accent: "#D6FF3F", marquee: "Breaking" },
  { label: "K-Pop", meta: "Cover · Formation · Camera", accent: "#7B5CFF", marquee: "K-Pop" },
];

export function BeatsStyles() {
  return (
    <section id="styles" className="scroll-mt-24 bg-bt-coal py-20 sm:py-28">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 pb-10">
          <div>
            <span className="beats-kicker text-[0.6rem] text-bt-acid">Disciplines</span>
            <h2 className="mt-4 text-4xl text-bt-bone sm:text-5xl lg:text-6xl">
              Seven forms.
              <br />
              One standard.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/45">
            Each discipline runs its own graded syllabus. Dancers major in one
            and cross-train in a second — because the best hip-hop dancers in
            the room are usually the ones who also take ballet.
          </p>
        </div>
      </div>

      <FlowingMenu items={STYLES} className="mx-auto max-w-[92rem]" />
    </section>
  );
}
