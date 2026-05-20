import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  size = 48,
  withWordmark = true,
  className,
}: {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-3 group", className)}
    >
      <span
        className="relative inline-block overflow-hidden rounded-full ring-2 ring-ck-cream shadow-md transition-transform group-hover:rotate-[10deg]"
        style={{ width: size, height: size }}
      >
        <Image
          src="/brand/logo.jpeg"
          alt="Climb Kiddo"
          fill
          sizes={`${size}px`}
          className="object-cover"
          priority
        />
      </span>
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-[family-name:var(--font-fredoka)] text-xl font-bold text-ck-orange">
            Climb Kiddo
          </span>
          <span className="text-[10px] font-semibold tracking-widest text-ck-navy/70">
            DAYCARE · PLAYSCHOOL · KIDS ACTIVITY
          </span>
        </span>
      )}
    </Link>
  );
}
