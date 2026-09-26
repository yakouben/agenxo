import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import { Crumbs, FaqBlock, Process, SectionHead, ServicesMatrix, TestimonialsBlock } from "@/components/sections";

export const metadata: Metadata = { title: "Services — Agenxo" };

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-x-clip pb-12 pt-32 sm:pt-40">
        <div className="glow glow-blue glow-drift -left-40 top-0 h-[560px] w-[760px]" />
        <div className="container-x relative">
          <Crumbs items={[{ label: "Accueil", href: "/" }, { label: "Services" }]} />
          <h1 className="t-h1 reveal-title mt-6 max-w-4xl">
            Tout ce dont votre boutique a besoin pour <span className="serif">grandir</span>
          </h1>
          <p className="t-lead reveal mt-6 max-w-xl">Shopify, design et développement : quinze expertises réunies sous un même toit.</p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container-x">
          <ServicesMatrix />
        </div>
      </section>
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Méthode" title={<>Un processus <span className="serif">éprouvé</span></>} />
          <div className="mt-12">
            <Process />
          </div>
        </div>
      </section>
      <TestimonialsBlock />
      <FaqBlock />
      <CtaSection />
    </>
  );
}
