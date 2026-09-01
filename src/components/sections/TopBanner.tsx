import { cn } from "@/lib/utils";

const MESSAGE = "LKG-X all subject Olympiad Exams Done here";

/** How many times the message repeats inside one track copy. */
const REPEATS = 4;

function Star({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={cn("h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5", className)}
      fill="currentColor"
    >
      <path d="M12 2l2.4 6.4L21 10.6l-5.2 4.2L17 21.5 12 18l-5 3.5 1.2-6.7L3 10.6l6.6-2.2L12 2z" />
    </svg>
  );
}

/** One copy of the scrolling content — duplicated to make the loop seamless. */
function Track() {
  const accents = ["text-ck-orange", "text-ck-blue", "text-ck-green", "text-ck-magenta"];
  return (
    <div className="flex shrink-0 items-center">
      {Array.from({ length: REPEATS }).map((_, i) => (
        <span key={i} className="flex shrink-0 items-center">
          <span className="px-4 text-[0.7rem] font-extrabold tracking-wide whitespace-nowrap text-white sm:px-6 sm:text-sm sm:tracking-wider">
            {MESSAGE}
          </span>
          <Star className={accents[i % accents.length]} />
        </span>
      ))}
    </div>
  );
}

/**
 * Running announcement bar pinned to the very top of the marketing site,
 * above the navbar. Pure CSS marquee: one track holding two identical copies
 * translated by exactly 50%, so the loop never jumps. Pauses on hover and
 * stands still for anyone who asked for reduced motion.
 */
export function TopBanner() {
  return (
    <div
      className="group relative z-50 overflow-hidden bg-ck-navy py-2 sm:py-2.5"
      role="region"
      aria-label="Announcement"
    >
      {/* colour wash so the bar reads as brand, not a plain black strip */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ck-red/25 via-transparent to-ck-blue/25"
      />

      <div className="relative flex w-max animate-marquee [animation-duration:26s] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <Track />
        <Track />
      </div>

      {/* soft fade at both ends */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-ck-navy to-transparent sm:w-16"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-ck-navy to-transparent sm:w-16"
      />
    </div>
  );
}
