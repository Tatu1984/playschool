import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SplitText } from "@/components/reactbits/SplitText";
import { BlurText } from "@/components/reactbits/BlurText";
import { GradientText } from "@/components/reactbits/GradientText";
import { ShinyText } from "@/components/reactbits/ShinyText";
import { Magnet } from "@/components/reactbits/Magnet";
import { MascotPair } from "@/components/brand/MascotPair";
import { Sparkles, Heart, Star, Phone } from "lucide-react";

/** Slide 1 — the main Climb Kiddo welcome. */
export function ClimbersSlide({ active }: { active: boolean }) {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
      <div className="relative z-10 lg:col-span-7">
        <Badge
          variant="secondary"
          className="rounded-full border border-ck-cream bg-white/80 px-4 py-1.5 font-bold text-ck-navy backdrop-blur"
        >
          <Sparkles className="mr-1 h-3.5 w-3.5 text-ck-orange" />
          <ShinyText>Admissions Open 2026–27</ShinyText>
        </Badge>

        <h1 className="mt-6 font-[family-name:var(--font-fredoka)] text-5xl leading-[1.04] font-bold tracking-tight text-ck-navy sm:text-6xl lg:text-[5rem]">
          <SplitText as="span" text="Where little" className="block" />
          <span className="block">
            <GradientText>climbers</GradientText>{" "}
            <SplitText as="span" text="grow big!" delay={0.4} />
          </span>
        </h1>

        <BlurText
          className="mt-7 max-w-2xl text-lg leading-relaxed text-ck-navy/80 sm:text-xl"
          text="A warm, safe, and playful home for curious kids — daycare, playschool & kids activity all in one happy place. Designed for tiny hearts, big smiles, and unforgettable first lessons."
          delay={0.6}
        />

        <div className="mt-9 flex flex-wrap gap-4">
          <Magnet>
            <Button
              asChild
              size="lg"
              tabIndex={active ? undefined : -1}
              className="rounded-full bg-ck-red px-8 py-6 text-base font-bold shadow-[0_6px_0_#9a1a28] transition-all hover:translate-y-[3px] hover:bg-ck-red/90 hover:shadow-[0_3px_0_#9a1a28] sm:text-lg"
            >
              <Link href="#contact">
                <Heart className="mr-2 h-4 w-4" />
                Book a Free Visit
              </Link>
            </Button>
          </Magnet>
          <Magnet>
            <Button
              asChild
              size="lg"
              variant="outline"
              tabIndex={active ? undefined : -1}
              className="rounded-full border-2 border-ck-navy/15 bg-white/70 px-8 py-6 text-base font-bold text-ck-navy backdrop-blur hover:bg-white sm:text-lg"
            >
              <Link href="#programs">
                <Star className="mr-2 h-4 w-4 text-ck-orange" />
                Explore Programs
              </Link>
            </Button>
          </Magnet>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <a href="tel:+917003708969" className="group flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ck-red text-white shadow-md transition-transform group-hover:scale-110">
              <Phone className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-xs font-semibold tracking-wider text-ck-navy/60 uppercase">
                Talk to us
              </span>
              <span className="font-bold text-ck-navy">
                70037 08969 · 98314 40029
              </span>
            </span>
          </a>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["#DC2638", "#F39A1E", "#2BAEEC", "#8BC53F"].map((c) => (
                <span
                  key={c}
                  className="h-9 w-9 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <p className="text-sm font-semibold text-ck-navy/70">
              <span className="font-extrabold text-ck-red">200+</span> happy
              little climbers
            </p>
          </div>
        </div>
      </div>

      <div className="relative lg:col-span-5">
        <div className="relative mx-auto max-w-md">
          <div className="absolute -inset-8 rounded-[40%] bg-gradient-to-br from-ck-orange/40 via-ck-blue/30 to-ck-magenta/30 blur-3xl" />
          <div className="absolute inset-0 -z-10 rounded-[40%] bg-white/40 backdrop-blur-sm" />
          <MascotPair priority />
        </div>
      </div>
    </div>
  );
}
