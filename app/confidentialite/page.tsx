import type { Metadata } from "next";
import { Crumbs } from "@/components/sections";
import { brand } from "@/lib/content";

export const metadata: Metadata = { title: "Politique de confidentialité — Agenxo" };

// Placeholder legal text — replace with your own.
export default function LegalPage() {
  return (
    <section className="pb-24 pt-32 sm:pt-40">
      <div className="container-x max-w-3xl">
        <Crumbs items={[{ label: "Accueil", href: "/" }, { label: "Politique de confidentialité" }]} />
        <h1 className="t-h1 reveal-title mt-6">Politique de confidentialité</h1>
        <div className="t-lead mt-10 space-y-6">
          <p>Ce contenu est un modèle à compléter avec vos informations légales.</p>
          <p>Éditeur du site : {brand.name}. Contact : {brand.email}.</p>
        </div>
      </div>
    </section>
  );
}
