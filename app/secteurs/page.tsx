import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import { Crumbs } from "@/components/sections";
import { industries } from "@/lib/catalog";

export const metadata: Metadata = { title: "Secteurs — Agenxo" };

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-x-clip pb-12 pt-32 sm:pt-40">
        <div className="glow glow-blue glow-drift -left-40 top-0 h-[560px] w-[760px]" />
        <div className="container-x relative">
          <Crumbs items={[{ label: "Accueil", href: "/" }, { label: "Secteurs" }]} />
          <h1 className="t-h1 reveal-title mt-6 max-w-4xl">
            Une expertise Shopify adaptée à <span className="serif">votre marché</span>
          </h1>
        </div>
      </section>
      <section className="section-tight">
        <div className="container-x grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Link
              key={ind.slug}
              href={`/secteurs/${ind.slug}`}
              className="card reveal group flex min-h-[240px] flex-col p-6 transition-colors hover:bg-card-2 sm:p-8"
              style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
            >
              <span className="code-mark">0{i + 1}</span>
              <h2 className="t-h3 mt-auto transition-colors group-hover:text-lime">{ind.name}</h2>
              <p className="t-body mt-2">{ind.short}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {ind.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
