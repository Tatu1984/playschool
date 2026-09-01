import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * StarBorder — a pill with a light travelling around its edge.
 */
export function StarBorder({
  children,
  href,
  className,
  color = "#D6FF3F",
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  color?: string;
  onClick?: () => void;
}) {
  const inner = (
    <span className="relative z-10 flex items-center gap-2 bg-bt-ink px-7 py-3.5 text-sm font-semibold tracking-wide text-bt-bone uppercase transition-colors duration-300 group-hover:bg-transparent group-hover:text-bt-ink">
      {children}
    </span>
  );

  const cls = cn(
    "group relative inline-flex overflow-hidden rounded-full p-[1.5px] transition-transform duration-300 hover:scale-[1.02]",
    className,
  );

  const bg = (
    <>
      <span
        aria-hidden
        className="absolute inset-[-200%] animate-[spin_4s_linear_infinite]"
        style={{
          background: `conic-gradient(from 0deg, transparent 0%, ${color} 12%, transparent 28%, transparent 62%, ${color} 74%, transparent 88%)`,
        }}
      />
      <span
        aria-hidden
        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: color }}
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {bg}
        <span className="relative z-10 overflow-hidden rounded-full">{inner}</span>
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {bg}
      <span className="relative z-10 overflow-hidden rounded-full">{inner}</span>
    </button>
  );
}
