"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, Phone } from "lucide-react";
import { Magnet } from "@/components/reactbits/Magnet";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Activities", href: "#activities" },
  { label: "Why Us", href: "#why" },
  { label: "Parents", href: "#parents" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_4px_24px_rgba(26,31,75,0.06)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo size={48} />

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {NAV.map((n) => (
              <NavigationMenuItem key={n.href}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-ck-navy hover:text-ck-red hover:bg-ck-cream/60 font-semibold",
                  )}
                >
                  <Link href={n.href}>{n.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <a
            href="tel:+917003708969"
            className="hidden md:flex items-center gap-2 rounded-full bg-ck-cream/70 px-4 py-2 text-sm font-bold text-ck-navy hover:bg-ck-cream transition-colors"
          >
            <Phone className="h-4 w-4 text-ck-red" />
            70037 08969
          </a>
          <Magnet>
            <Button
              asChild
              className="rounded-full bg-ck-red hover:bg-ck-red/90 font-bold px-6 shadow-[0_6px_0_#9a1a28] hover:shadow-[0_3px_0_#9a1a28] hover:translate-y-[3px] transition-all"
            >
              <Link href="#contact">Book a Visit</Link>
            </Button>
          </Magnet>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-80 px-6 py-8">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mb-8">
                <Logo size={42} />
              </div>
              <nav className="flex flex-col gap-2">
                {NAV.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    className="rounded-xl px-3 py-3 text-base font-semibold text-ck-navy hover:bg-ck-cream"
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 space-y-3">
                <a
                  href="tel:+917003708969"
                  className="flex items-center gap-2 rounded-full bg-ck-cream px-4 py-3 text-sm font-bold text-ck-navy"
                >
                  <Phone className="h-4 w-4 text-ck-red" /> 70037 08969
                </a>
                <Button
                  asChild
                  className="w-full rounded-full bg-ck-red hover:bg-ck-red/90"
                >
                  <Link href="#contact">Book a Visit</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
