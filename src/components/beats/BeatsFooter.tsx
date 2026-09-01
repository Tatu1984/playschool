import { ArrowLeft } from "lucide-react";
import { MAIN_SITE_URL } from "@/lib/sites";
import { BeatsWordmark } from "@/components/beats/BeatsWordmark";
import { ScrollVelocity } from "@/components/reactbits/ScrollVelocity";

export function BeatsFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-bt-coal">
      <div className="border-b border-white/10 py-6">
        <ScrollVelocity baseVelocity={-2} itemClassName="gap-8 pr-8">
          <span className="beats-display flex shrink-0 items-center gap-8 text-4xl text-white/10 sm:text-6xl">
            Beats Dance Academy
            <span className="text-bt-acid/40">✦</span>
          </span>
        </ScrollVelocity>
      </div>

      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <BeatsWordmark />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/45">
              The advanced dance wing of the Climb Kiddo family. Audition-based
              placement, graded syllabus, four productions a year.
            </p>
            <a
              href={MAIN_SITE_URL}
              className="group mt-8 inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-[0.68rem] font-medium tracking-[0.18em] text-white/60 uppercase transition-colors hover:border-bt-acid hover:text-bt-acid"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Back to Climb Kiddo
            </a>
          </div>

          <div>
            <h3 className="text-[0.62rem] tracking-[0.22em] text-white/35 uppercase">
              Academy
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/55">
              {[
                { l: "Disciplines", h: "#styles" },
                { l: "Levels", h: "#levels" },
                { l: "Timetable", h: "#schedule" },
                { l: "The Stage", h: "#stage" },
              ].map((x) => (
                <li key={x.l}>
                  <a href={x.h} className="transition-colors hover:text-bt-acid">
                    {x.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.62rem] tracking-[0.22em] text-white/35 uppercase">
              Studio
            </h3>
            <address className="mt-5 space-y-3 text-sm not-italic text-white/55">
              <p>Beats Studio A &amp; B<br />Salt Lake, Kolkata</p>
              <p>
                <a href="tel:+917003708969" className="hover:text-bt-acid">
                  +91 70037 08969
                </a>
              </p>
              <p>
                <a href="mailto:hello@beats.dance" className="hover:text-bt-acid">
                  hello@beats.dance
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-[0.68rem] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Beats Dance Academy · A Climb Kiddo initiative</p>
          <p className="tracking-[0.18em] uppercase">Mon–Sat · 16:00–21:30</p>
        </div>
      </div>
    </footer>
  );
}
