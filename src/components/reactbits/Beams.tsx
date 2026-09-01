import { cn } from "@/lib/utils";

/**
 * Beams — slow-drifting light shafts for dark hero sections.
 * Pure CSS so it costs nothing on the main thread.
 */
export function Beams({ className }: { className?: string }) {
  const beams = [
    { left: "8%", w: 160, hue: "rgba(123, 92, 255, 0.55)", delay: "0s", rot: "-14deg" },
    { left: "28%", w: 90, hue: "rgba(214, 255, 63, 0.32)", delay: "-2.5s", rot: "-8deg" },
    { left: "52%", w: 220, hue: "rgba(60, 231, 224, 0.28)", delay: "-4s", rot: "10deg" },
    { left: "74%", w: 120, hue: "rgba(255, 74, 110, 0.38)", delay: "-1.2s", rot: "6deg" },
    { left: "90%", w: 180, hue: "rgba(123, 92, 255, 0.35)", delay: "-3.4s", rot: "16deg" },
  ];

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {beams.map((b, i) => (
        <span
          key={i}
          className="absolute -top-1/3 h-[180%] blur-3xl animate-beats-beam"
          style={{
            left: b.left,
            width: b.w,
            transform: `rotate(${b.rot})`,
            animationDelay: b.delay,
            background: `linear-gradient(to bottom, transparent, ${b.hue}, transparent)`,
          }}
        />
      ))}
    </div>
  );
}
