"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Menu, X } from "lucide-react";
import { BeatsWordmark } from "@/components/beats/BeatsWordmark";
import { cn } from "@/lib/utils";
import { MAIN_SITE_URL } from "@/lib/sites";

const LINKS = [
  { label: "Styles", href: "#styles" },
  { label: "Levels", href: "#levels" },
  { label: "Schedule", href: "#schedule" },
  { label: "Stage", href: "#stage" },
];

export function BeatsNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-white/10 bg-bt-ink/80 backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[92rem] items-center justify-between px-5 sm:px-8">
          <BeatsWordmark />

          <nav className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative px-4 py-2 text-[0.78rem] font-medium tracking-[0.16em] text-white/60 uppercase transition-colors hover:text-bt-bone"
              >
                {l.label}
                <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-bt-acid transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Return path to the parent brand — Beats runs on its own host,
                so this always leaves the router. */}
            <a
              href={MAIN_SITE_URL}
              className="flex items-center gap-1.5 border border-white/15 px-3 py-2 text-[0.68rem] font-medium tracking-[0.16em] text-white/55 uppercase transition-colors hover:border-bt-acid hover:text-bt-acid sm:px-4"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Climb Kiddo</span>
            </a>
            <a
              href="#audition"
              className="hidden bg-bt-acid px-5 py-2.5 text-[0.72rem] font-bold tracking-[0.16em] text-bt-ink uppercase transition-colors hover:bg-bt-bone sm:block"
            >
              Book an audition
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-bt-bone lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-bleed mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-bt-ink transition-all duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-[4.5rem] items-center justify-between px-5 sm:px-8">
          <BeatsWordmark />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-bt-bone"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col px-5 pt-8 sm:px-8">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="beats-display flex items-baseline gap-4 border-b border-white/10 py-5 text-4xl text-bt-bone transition-colors hover:text-bt-acid"
            >
              <span className="beats-kicker text-[0.6rem] text-white/30">
                0{i + 1}
              </span>
              {l.label}
            </a>
          ))}
          <a
            href="#audition"
            onClick={() => setOpen(false)}
            className="mt-8 bg-bt-acid px-6 py-4 text-center text-sm font-bold tracking-[0.16em] text-bt-ink uppercase"
          >
            Book an audition
          </a>
          <a
            href={MAIN_SITE_URL}
            className="mt-3 flex items-center justify-center gap-2 border border-white/15 px-6 py-4 text-center text-sm font-medium tracking-[0.16em] text-white/60 uppercase"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Climb Kiddo
          </a>
        </nav>
      </div>
    </>
  );
}
