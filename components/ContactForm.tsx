"use client";

import { useState } from "react";
import { brand } from "@/lib/content";
import { SubmitButton } from "./CtaButton";

const budgets = ["< 2 000 €", "2 000–5 000 €", "5 000–10 000 €", "10 000 € +"];
const needs = ["Création", "Refonte", "App custom", "Maintenance"];

// No backend yet: builds a pre-filled email to the contact address.
export default function ContactForm() {
  const [budget, setBudget] = useState(budgets[1]);
  const [need, setNeed] = useState(needs[0]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Nom : ${f.get("name")}\nEmail : ${f.get("email")}\nBesoin : ${need}\nBudget : ${budget}\n\n${f.get("message")}`;
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent("Demande de devis")}&body=${encodeURIComponent(body)}`;
  }

  const field = "w-full border-b border-black/15 bg-transparent py-3.5 text-[15px] outline-none transition-colors placeholder:text-black/40 focus:border-black";

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <h2 className="text-2xl font-medium sm:text-3xl">Parlez-nous de votre projet</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        <input name="name" required placeholder="Nom complet*" className={field} autoComplete="name" />
        <input name="email" type="email" required placeholder="Email*" className={field} autoComplete="email" />
      </div>
      <Chips label="Votre besoin" options={needs} value={need} onChange={setNeed} />
      <Chips label="Votre budget" options={budgets} value={budget} onChange={setBudget} />
      <textarea name="message" rows={4} required placeholder="Décrivez votre projet*" className={`${field} resize-none`} />
      <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-xs text-black/50">En envoyant ce formulaire, vous acceptez notre politique de confidentialité.</p>
        <SubmitButton surface="light">Envoyer</SubmitButton>
      </div>
    </form>
  );
}

function Chips({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-medium">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            type="button"
            key={o}
            onClick={() => onChange(o)}
            aria-pressed={value === o}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${value === o ? "bg-dark text-white" : "bg-paper hover:bg-black/10"}`}
          >
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
