import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SplitText } from "@/components/reactbits/SplitText";
import { BlurText } from "@/components/reactbits/BlurText";
import { GradientText } from "@/components/reactbits/GradientText";
import { ShinyText } from "@/components/reactbits/ShinyText";
import { Magnet } from "@/components/reactbits/Magnet";
import {
  Trophy,
  Sparkles,
  Phone,
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
} from "lucide-react";

/**
 * Drop a real artwork at public/brand/olympiad.png (or .jpg) and set this to
 * its path — the designed medal below is the stand-in until then.
 */
const OLYMPIAD_IMAGE: string | null = null;

const SUBJECTS = [
  { label: "Maths", icon: Calculator, color: "#DC2638" },
  { label: "Science", icon: FlaskConical, color: "#2BAEEC" },
  { label: "English", icon: BookOpen, color: "#8BC53F" },
  { label: "G.K.", icon: Globe, color: "#D4318F" },
];

/** Slide 2 — the Olympiad announcement. */
export function OlympiadSlide({ active }: { active: boolean }) {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
      <div className="relative z-10 lg:col-span-7">
        <Badge
          variant="secondary"
          className="rounded-full border border-ck-cream bg-white/80 px-4 py-1.5 font-bold text-ck-navy backdrop-blur"
        >
          <Sparkles className="mr-1 h-3.5 w-3.5 text-ck-green" />
          <ShinyText>Registrations Open · LKG to Class X</ShinyText>
        </Badge>

        <h1 className="mt-6 font-[family-name:var(--font-fredoka)] text-5xl leading-[1.04] font-bold tracking-tight text-ck-navy sm:text-6xl lg:text-[5rem]">
          <SplitText as="span" text="All subject" className="block" />
          <span className="block">
            <GradientText>Olympiad</GradientText>{" "}
            <SplitText as="span" text="exams" delay={0.4} />
          </span>
          <SplitText as="span" text="done here" className="block" delay={0.6} />
        </h1>

        <BlurText
          className="mt-7 max-w-2xl text-lg leading-relaxed text-ck-navy/80 sm:text-xl"
          text="From LKG right through Class X — Maths, Science, English, G.K. and more. Registration, preparation and exam day, all under one roof at Climb Kiddo."
          delay={0.6}
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {SUBJECTS.map((s) => (
            <span
              key={s.label}
              className="flex items-center gap-2 rounded-full border border-ck-navy/10 bg-white/75 px-4 py-2 text-sm font-bold text-ck-navy backdrop-blur"
            >
              <s.icon className="h-4 w-4" style={{ color: s.color }} />
              {s.label}
            </span>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Magnet>
            <Button
              asChild
              size="lg"
              tabIndex={active ? undefined : -1}
              className="rounded-full bg-ck-red px-8 py-6 text-base font-bold shadow-[0_6px_0_#9a1a28] transition-all hover:translate-y-[3px] hover:bg-ck-red/90 hover:shadow-[0_3px_0_#9a1a28] sm:text-lg"
            >
              <Link href="/contact">
                <Trophy className="mr-2 h-4 w-4" />
                Register for Olympiad
              </Link>
            </Button>
          </Magnet>

          <a href="tel:+917003708969" className="group flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ck-navy text-white shadow-md transition-transform group-hover:scale-110">
              <Phone className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-xs font-semibold tracking-wider text-ck-navy/60 uppercase">
                Ask about dates
              </span>
              <span className="font-bold text-ck-navy">
                70037 08969 · 98314 40029
              </span>
            </span>
          </a>
        </div>
      </div>

      <div className="relative lg:col-span-5">
        <div className="relative mx-auto max-w-md">
          <div className="absolute -inset-8 rounded-[40%] bg-gradient-to-br from-ck-green/40 via-ck-orange/35 to-ck-red/30 blur-3xl" />
          <div className="absolute inset-0 -z-10 rounded-[40%] bg-white/40 backdrop-blur-sm" />

          {OLYMPIAD_IMAGE ? (
            <Image
              src={OLYMPIAD_IMAGE}
              alt="Climb Kiddo Olympiad exams"
              width={520}
              height={520}
              className="relative mx-auto h-auto w-full"
              priority={active}
            />
          ) : (
            <MedalArt />
          )}
        </div>
      </div>
    </div>
  );
}

/** Stand-in artwork: a brand-coloured medal ringed with the subjects. */
function MedalArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
      <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-ck-orange via-ck-red to-ck-magenta shadow-[0_20px_60px_rgba(220,38,56,0.28)]" />
      <div className="absolute inset-[18%] rounded-full border-[6px] border-dashed border-white/45" />

      <div className="absolute inset-[12%] flex flex-col items-center justify-center text-center text-white">
        <Trophy className="h-12 w-12 sm:h-14 sm:w-14" />
        <p className="mt-3 font-[family-name:var(--font-fredoka)] text-4xl leading-none font-bold sm:text-5xl">
          LKG–X
        </p>
        <p className="mt-2 text-[0.65rem] font-bold tracking-[0.24em] uppercase sm:text-xs">
          Olympiad Exams
        </p>
      </div>

      {/* subject pips orbiting the medal */}
      {[
        { icon: Calculator, color: "#2BAEEC", pos: "top-0 left-1/2 -translate-x-1/2" },
        { icon: FlaskConical, color: "#8BC53F", pos: "right-0 top-1/2 -translate-y-1/2" },
        { icon: BookOpen, color: "#F39A1E", pos: "bottom-0 left-1/2 -translate-x-1/2" },
        { icon: Globe, color: "#D4318F", pos: "left-0 top-1/2 -translate-y-1/2" },
      ].map((p, i) => (
        <span
          key={i}
          className={`absolute ${p.pos} flex h-14 w-14 items-center justify-center rounded-full border border-ck-navy/10 bg-white shadow-lg animate-bob`}
          style={{ animationDelay: `${i * 0.4}s` }}
        >
          <p.icon className="h-6 w-6" style={{ color: p.color }} />
        </span>
      ))}
    </div>
  );
}
