import type { Metadata } from "next";
import { BeatsHero } from "@/components/beats/BeatsHero";
import { BeatsTicker } from "@/components/beats/BeatsTicker";
import { BeatsManifesto } from "@/components/beats/BeatsManifesto";
import { BeatsStyles } from "@/components/beats/BeatsStyles";
import { BeatsLevels } from "@/components/beats/BeatsLevels";
import { BeatsSchedule } from "@/components/beats/BeatsSchedule";
import { BeatsStage } from "@/components/beats/BeatsStage";
import { BeatsVoices } from "@/components/beats/BeatsVoices";
import { BeatsAudition } from "@/components/beats/BeatsAudition";

export const metadata: Metadata = {
  title: "Beats — Advanced Dance Academy",
  description:
    "Beats is the advanced dance academy from the Climb Kiddo family: audition-based placement, a graded syllabus across seven forms, and four productions a year.",
};

export default function BeatsPage() {
  return (
    <>
      <BeatsHero />
      <BeatsTicker />
      <BeatsManifesto />
      <BeatsStyles />
      <BeatsLevels />
      <BeatsSchedule />
      <BeatsStage />
      <BeatsVoices />
      <BeatsAudition />
    </>
  );
}
