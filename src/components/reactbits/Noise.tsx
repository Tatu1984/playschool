import { cn } from "@/lib/utils";

/** Noise — animated film grain overlay. */
export function Noise({
  className,
  opacity = 0.05,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      style={{ opacity }}
      className={cn(
        "pointer-events-none absolute inset-0 z-30 beats-noise mix-blend-overlay",
        className,
      )}
    />
  );
}
