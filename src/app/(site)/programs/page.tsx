import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Programs } from "@/components/sections/Programs";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Programs · Climb Kiddo",
  description:
    "Age-perfect programs from Toddlers to Senior KG, plus summer camps and weekend workshops.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="A program for"
        highlight="every little age"
        description="Carefully crafted milestones from 1.5 to 5.5 years — plus summer camps and weekend workshops kids beg to come back to."
      />
      <Programs />
      <Contact />
    </>
  );
}
