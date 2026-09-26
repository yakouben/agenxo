"use client";

import { useState } from "react";
import { pricing } from "@/lib/catalog";
import CtaButton from "./CtaButton";

// Design / Développement toggle with three plan cards.
export default function PricingPlans() {
  const [mode, setMode] = useState<"design" | "dev">("design");
  const plans = pricing[mode];

  return (
    <div className="card p-2 sm:p-3">
      <div className="flex items-center justify-center gap-3 py-4 text-sm">
        <span className={mode === "design" ? "text-white" : "text-white/50"}>Design</span>
        <button
          role="switch"
          aria-checked={mode === "dev"}
          aria-label="Basculer design / développement"
          onClick={() => setMode(mode === "design" ? "dev" : "design")}
          className="relative h-7 w-12 rounded-full bg-white/15"
        >
          <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all duration-300 ${mode === "dev" ? "left-6" : "left-1"}`} />
        </button>
        <span className={mode === "dev" ? "text-white" : "text-white/50"}>Développement</span>
      </div>
      <div key={mode} className="grid gap-2 sm:gap-3 md:grid-cols-3">
        {plans.map((p, i) => (
          <div
            key={p.name}
            className={`fade-in flex flex-col rounded-[20px] p-6 sm:p-7 ${i === 1 ? "bg-white text-dark" : "bg-card-2"}`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium">{p.name}</h3>
              {i === 1 && <span className="rounded-full bg-lime px-3 py-1 text-xs font-medium">Populaire</span>}
            </div>
            <div className="mt-4 flex gap-1" aria-label={`${p.people} expert(s)`}>
              {[0, 1, 2].map((k) => (
                <span key={k} className={`h-2.5 w-2.5 rounded-full ${k < p.people ? (i === 1 ? "bg-dark" : "bg-white") : i === 1 ? "bg-black/15" : "bg-white/15"}`} />
              ))}
            </div>
            <p className={`mt-4 text-sm ${i === 1 ? "text-black/65" : "text-white/60"}`}>{p.text}</p>
            <div className="mt-6 text-3xl font-medium">{p.price}</div>
            <ul className={`mt-6 space-y-3 border-t pt-6 text-sm ${i === 1 ? "border-black/10" : "border-line"}`}>
              {p.items.map((it) => (
                <li key={it} className="flex gap-3">
                  <span className={i === 1 ? "text-dark" : "text-lime"}>✓</span>
                  {it}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <CtaButton href="/#contact" surface={i === 1 ? "light" : "dark"}>
                Commencer
              </CtaButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
