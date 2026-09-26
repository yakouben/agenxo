import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import ReviewsLime from "@/components/blocks/ReviewsLime";
import WorksGrid from "@/components/blocks/WorksGrid";
import WorksHero from "@/components/blocks/WorksHero";
import { projects } from "@/lib/content";

export const metadata: Metadata = { title: "Projets — Agenxo" };

export default function ProjectsPage() {
  return (
    <>
      <WorksHero />
      <WorksGrid projects={projects} />
      <ReviewsLime />
      <CtaSection />
    </>
  );
}
