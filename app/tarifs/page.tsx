import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import PricingPlans from "@/components/PricingPlans";
import { FaqBlock, FeatureGrid, Process, SectionHead, TestimonialsBlock } from "@/components/sections";

export const metadata: Metadata = { title: "Tarifs — Agenxo" };

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-x-clip pb-8 pt-32 text-center sm:pt-40">
        <div className="glow glow-blue glow-drift left-1/2 top-0 h-[560px] w-[1000px] -translate-x-1/2" />
        <div className="container-x relative">
          <div className="eyebrow reveal">Tarifs</div>
          <h1 className="t-h1 reveal-title mx-auto mt-6 max-w-3xl">
            Des formules <span className="serif">flexibles</span> pour chaque étape
          </h1>
          <p className="t-lead reveal mx-auto mt-6 max-w-lg">Choisissez le niveau d&apos;accompagnement adapté à votre boutique. Chaque projet fait l&apos;objet d&apos;un devis personnalisé.</p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container-x mx-auto max-w-5xl">
          <PricingPlans />
        </div>
      </section>
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Inclus" title={<>Toujours <span className="serif">inclus</span></>} />
          <div className="mt-12">
            <FeatureGrid
              items={[
                { title: "Devis gratuit", text: "Un chiffrage clair avant tout engagement." },
                { title: "Interlocuteur unique", text: "Un expert Shopify du début à la fin." },
                { title: "Formation", text: "Votre équipe autonome sur Shopify." },
                { title: "Support 7j/7", text: "Un accompagnement après le lancement." },
              ]}
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Méthode" title={<>Comment se déroule <span className="serif">un projet</span></>} />
          <div className="mt-12">
            <Process />
          </div>
        </div>
      </section>
      <TestimonialsBlock />
      <FaqBlock
        items={[
          { q: "Combien coûte une boutique Shopify ?", a: "Le prix dépend du périmètre : thème personnalisé ou sur-mesure, nombre de pages, applications et intégrations. Demandez un devis gratuit." },
          { q: "Quels sont les délais ?", a: "Comptez généralement quelques semaines pour une création, selon la complexité du projet." },
          { q: "Puis-je payer en plusieurs fois ?", a: "Oui, le paiement est échelonné selon les étapes du projet." },
          { q: "Le support est-il inclus ?", a: "Oui, un support 7j/7 est inclus après le lancement." },
        ]}
      />
      <CtaSection />
    </>
  );
}
