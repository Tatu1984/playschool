"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * ScrollVelocity — a marquee whose speed and direction react to scroll velocity.
 */
export function ScrollVelocity({
  children,
  baseVelocity = 4,
  className,
  itemClassName,
  copies = 4,
}: {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
  itemClassName?: string;
  copies?: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smooth = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smooth, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-100 / copies, 0, v)}%`);
  const directionRef = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionRef.current * baseVelocity * (delta / 1000);
    const factor = velocityFactor.get();
    if (factor < 0) directionRef.current = -1;
    else if (factor > 0) directionRef.current = 1;
    moveBy += directionRef.current * moveBy * factor;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        {Array.from({ length: copies }).map((_, i) => (
          <span key={i} className={cn("flex shrink-0 items-center", itemClassName)}>
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
