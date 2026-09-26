import type { Metadata } from "next";
import { Crumbs } from "@/components/sections";
import { brand } from "@/lib/content";

export const metadata: Metadata = { title: "Mentions légales — Agenxo" };

// Placeholder legal text — replace with your own.
export default function LegalPage() {
  return (
    <section className="pb-24 pt-32 sm:pt-40">
      <div className="container-x max-w-3xl">
        <Crumbs items={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]} />
        <h1 className="t-h1 reveal-title mt-6">Mentions légales</h1>
        <div className="t-lead mt-10 space-y-6">
          <p>Ce contenu est un modèle à compléter avec vos informations légales.</p>
          <p>Éditeur du site : {brand.name}. Contact : {brand.email}.</p>
        </div>
      </div>
    </section>
  );
}
