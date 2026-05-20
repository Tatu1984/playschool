"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { GradientText } from "@/components/reactbits/GradientText";
import { Magnet } from "@/components/reactbits/Magnet";
import { ClickSpark } from "@/components/reactbits/ClickSpark";
import { Aurora } from "@/components/reactbits/Aurora";
import { Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you! We'll call you back within an hour.", {
      description: "A little climber's parents are about to make a big choice 💛",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="relative overflow-hidden rounded-[2rem] border-0 bg-ck-navy text-white shadow-[0_30px_60px_rgba(26,31,75,0.25)]">
          <Aurora className="opacity-50" />

          <CardContent className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            <div>
              <Badge className="rounded-full bg-white/15 text-white font-bold px-4 hover:bg-white/20">
                Let's talk
              </Badge>
              <h2 className="mt-5 font-[family-name:var(--font-fredoka)] text-4xl sm:text-5xl font-bold leading-tight">
                Come visit us. <br />
                <GradientText>Bring your little climber.</GradientText>
              </h2>
              <p className="mt-5 max-w-md text-white/80 leading-relaxed">
                The best way to feel Climb Kiddo is to walk through our doors.
                Book a free visit — we'll show you around and let your child
                play.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  href="tel:+917003708969"
                  className="group flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur p-4 hover:bg-white/15 transition-colors"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ck-red shadow-md">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/60 font-bold">
                      Call us
                    </p>
                    <p className="font-bold">70037 08969 · 98314 40029</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/917003708969"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur p-4 hover:bg-white/15 transition-colors"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ck-green shadow-md">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/60 font-bold">
                      WhatsApp
                    </p>
                    <p className="font-bold">Quick reply, 9 am – 8 pm</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-2xl bg-white/10 backdrop-blur p-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ck-blue shadow-md">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-wider text-white/60 font-bold">
                      Two branches in Kolkata
                    </p>
                    <p className="font-bold">Kathgola Branch</p>
                    <p className="font-bold">Dhakuria Branch</p>
                  </div>
                </div>
              </div>
            </div>

            <ClickSpark>
              <form
                onSubmit={onSubmit}
                className="rounded-3xl bg-white p-6 sm:p-8 text-ck-navy shadow-xl"
              >
                <p className="font-[family-name:var(--font-fredoka)] text-2xl font-bold">
                  Book a free visit
                </p>
                <p className="mt-1 text-sm text-ck-navy/60">
                  We'll get back to you within the hour.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <Label htmlFor="parent" className="font-bold">
                      Parent's name
                    </Label>
                    <Input
                      id="parent"
                      required
                      placeholder="Riya Sharma"
                      className="mt-1.5 rounded-xl bg-ck-cream/40 border-ck-cream focus-visible:ring-ck-red"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="child" className="font-bold">
                        Child's age
                      </Label>
                      <Input
                        id="child"
                        required
                        placeholder="2.5 yrs"
                        className="mt-1.5 rounded-xl bg-ck-cream/40 border-ck-cream focus-visible:ring-ck-red"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="font-bold">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+91 90000 00000"
                        className="mt-1.5 rounded-xl bg-ck-cream/40 border-ck-cream focus-visible:ring-ck-red"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="program" className="font-bold">
                      Interested in
                    </Label>
                    <Input
                      id="program"
                      placeholder="Daycare / Playschool / Activity class"
                      className="mt-1.5 rounded-xl bg-ck-cream/40 border-ck-cream focus-visible:ring-ck-red"
                    />
                  </div>

                  <Magnet>
                    <Button
                      type="submit"
                      className="w-full rounded-xl bg-ck-red hover:bg-ck-red/90 py-6 text-base font-bold shadow-[0_6px_0_#9a1a28] hover:shadow-[0_3px_0_#9a1a28] hover:translate-y-[3px] transition-all"
                    >
                      <Send className="mr-2 h-4 w-4" /> Send my request
                    </Button>
                  </Magnet>
                </div>
              </form>
            </ClickSpark>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
