import { Anton, Space_Grotesk } from "next/font/google";
import { BeatsNavbar } from "@/components/beats/BeatsNavbar";
import { BeatsFooter } from "@/components/beats/BeatsFooter";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function BeatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${anton.variable} ${space.variable} beats-scope flex min-h-screen flex-1 flex-col`}
    >
      <BeatsNavbar />
      <main className="flex-1">{children}</main>
      <BeatsFooter />
    </div>
  );
}
