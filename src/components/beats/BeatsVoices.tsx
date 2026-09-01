const QUOTES = [
  {
    quote:
      "She joined at Level I barely able to hold a plié. Two cycles later she placed third at the state circuit. The difference is the syllabus — it never lets them coast.",
    name: "Ipshita R.",
    role: "Parent · Level II dancer",
  },
  {
    quote:
      "The audition scared me. I'm glad it did. Everyone in my batch is at my level, so class actually moves.",
    name: "Aditya S.",
    role: "Level III, Breaking major",
  },
  {
    quote:
      "Faculty who correct you properly are rare. Here they will stop the music for one wrist.",
    name: "Naina G.",
    role: "Company member",
  },
  {
    quote:
      "We came from a chain studio where every class was a new routine. Beats teaches technique first — you can see it in her posture off the floor.",
    name: "Sourav D.",
    role: "Parent · Level I dancer",
  },
];

export function BeatsVoices() {
  return (
    <section className="overflow-hidden border-y border-white/10 py-20 sm:py-24">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <span className="beats-kicker text-[0.6rem] text-bt-acid">Voices</span>
        <h2 className="mt-4 max-w-2xl text-4xl text-bt-bone sm:text-5xl">
          What the floor says.
        </h2>
      </div>

      {/* One track holding two identical copies, translated by exactly 50% —
          keeps the loop seamless. Pauses on hover so quotes stay readable. */}
      <div className="group mt-12 flex overflow-hidden">
        <div className="flex w-max shrink-0 animate-beats-marquee gap-5 pr-5 [animation-duration:48s] group-hover:[animation-play-state:paused]">
          {[...QUOTES, ...QUOTES].map((q, i) => (
            <figure
              key={i}
              className="flex w-[22rem] shrink-0 flex-col justify-between border border-white/10 bg-bt-coal p-8 transition-colors hover:border-bt-acid/40 sm:w-[26rem]"
            >
              <span aria-hidden className="beats-display text-5xl leading-none text-bt-acid/30">
                &ldquo;
              </span>
              <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-white/70">
                {q.quote}
              </blockquote>
              <figcaption className="mt-7 border-t border-white/10 pt-5">
                <span className="block text-sm font-semibold text-bt-bone">{q.name}</span>
                <span className="mt-1 block text-[0.62rem] tracking-[0.18em] text-white/40 uppercase">
                  {q.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
