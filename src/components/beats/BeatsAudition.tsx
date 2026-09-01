"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, CalendarDays, MapPin, Phone } from "lucide-react";
import { Beams } from "@/components/reactbits/Beams";
import { Noise } from "@/components/reactbits/Noise";

const FORMS = [
  "Hip-Hop",
  "Contemporary",
  "Ballet",
  "Bharatanatyam",
  "Jazz Funk",
  "Breaking",
  "K-Pop",
];

export function BeatsAudition() {
  const [form, setForm] = useState("Hip-Hop");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Audition request noted", {
      description: "Preview only — this form is not wired to a backend yet.",
    });
  };

  return (
    <section
      id="audition"
      className="relative isolate scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <Beams className="opacity-70" />
      <Noise opacity={0.04} />
      <div aria-hidden className="absolute inset-0 beats-grid-lines opacity-40" />

      <div className="relative mx-auto max-w-[92rem] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="beats-kicker text-[0.6rem] text-bt-acid">Auditions</span>
            <h2 className="mt-5 text-5xl text-bt-bone sm:text-6xl lg:text-7xl">
              Show us
              <br />
              <span className="beats-text-acid">ninety seconds.</span>
            </h2>
            <p className="mt-7 max-w-md leading-relaxed text-white/55">
              Bring a prepared piece of any length — we will watch about a
              minute and a half — then a short taught combination on the floor.
              Panel results within three days, with written feedback either way.
            </p>

            <dl className="mt-10 space-y-5 border-t border-white/10 pt-8">
              {[
                { icon: CalendarDays, k: "Next panel", v: "Second Saturday, monthly · 15:00" },
                { icon: MapPin, k: "Studio", v: "Beats Studio A, Salt Lake, Kolkata" },
                { icon: Phone, k: "Front desk", v: "+91 70037 08969" },
              ].map((d) => (
                <div key={d.k} className="flex items-start gap-4">
                  <d.icon className="mt-0.5 h-4 w-4 shrink-0 text-bt-acid" />
                  <div>
                    <dt className="text-[0.6rem] tracking-[0.2em] text-white/35 uppercase">
                      {d.k}
                    </dt>
                    <dd className="mt-1 text-bt-bone">{d.v}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <form
            onSubmit={onSubmit}
            className="border border-white/12 bg-bt-coal/80 p-8 backdrop-blur-sm sm:p-10"
          >
            <h3 className="text-2xl text-bt-bone">Request a slot</h3>
            <p className="mt-2 text-sm text-white/45">
              Tell us where the dancer is now. We will place the audition.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Dancer's name" name="name" placeholder="Full name" />
              <Field label="Age" name="age" placeholder="e.g. 13" />
              <Field label="Parent / guardian" name="guardian" placeholder="Full name" />
              <Field label="Phone" name="phone" placeholder="+91" type="tel" />
            </div>

            <fieldset className="mt-7">
              <legend className="text-[0.6rem] tracking-[0.2em] text-white/40 uppercase">
                Primary form
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {FORMS.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setForm(f)}
                    className={
                      form === f
                        ? "border border-bt-acid bg-bt-acid px-3.5 py-2 text-[0.68rem] font-semibold tracking-wider text-bt-ink uppercase"
                        : "border border-white/15 px-3.5 py-2 text-[0.68rem] font-semibold tracking-wider text-white/55 uppercase transition-colors hover:border-white/40 hover:text-bt-bone"
                    }
                  >
                    {f}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-7">
              <label
                htmlFor="experience"
                className="text-[0.6rem] tracking-[0.2em] text-white/40 uppercase"
              >
                Years of training
              </label>
              <textarea
                id="experience"
                name="experience"
                rows={3}
                placeholder="Where they've trained, competitions, anything we should know."
                className="mt-2 w-full resize-none border border-white/12 bg-bt-ink px-4 py-3 text-sm text-bt-bone placeholder:text-white/25 focus:border-bt-acid focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="group mt-8 flex w-full items-center justify-center gap-3 bg-bt-acid px-6 py-4 text-[0.72rem] font-bold tracking-[0.2em] text-bt-ink uppercase transition-colors hover:bg-bt-bone"
            >
              Request audition slot
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-4 text-center text-[0.68rem] text-white/30">
              Level placement is decided by the panel, not by the form.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[0.6rem] tracking-[0.2em] text-white/40 uppercase"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full border border-white/12 bg-bt-ink px-4 py-3 text-sm text-bt-bone placeholder:text-white/25 focus:border-bt-acid focus:outline-none"
      />
    </div>
  );
}
