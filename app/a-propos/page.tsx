import type { Metadata } from "next";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";
import ImpactStats from "@/components/blocks/ImpactStats";
import { Crumbs, FeatureGrid, Process, SectionHead, TestimonialsBlock } from "@/components/sections";
import { principles } from "@/lib/catalog";
import Link from "next/link";
import { about, brand, expertise, reasons } from "@/lib/content";

export const metadata: Metadata = { title: "À propos — Agenxo" };

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-x-clip pb-8 pt-32 sm:pt-40">
        <div className="glow glow-blue glow-drift -left-40 top-0 h-[520px] w-[760px]" />
        <div className="container-x relative">
          <Crumbs items={[{ label: "Accueil", href: "/" }, { label: "À propos" }]} />
          <h1 className="t-display reveal-title mt-6 max-w-5xl">
            {about.title.before} <span className="serif text-lime">{about.title.italic}</span> {about.title.after}
          </h1>
        </div>
      </section>
      <ImpactStats />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Nos principes" title={<>Derrière <span className="serif">notre travail</span></>} />
            <ul className="mt-10 border-t border-line">
              {principles.map((p, i) => (
                <li key={p.title} className="reveal flex gap-4 border-b border-line py-6" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime text-[10px] text-dark">✓</span>
                  <div>
                    <div className="font-medium">{p.title}</div>
                    <p className="t-body mt-1">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-10 lg:pt-24">
            <div className="reveal">
              <div className="eyebrow">Mission</div>
              <p className="mt-4 text-xl leading-relaxed">Aider les marques ambitieuses à vendre plus grâce à des boutiques Shopify pensées pour leurs clients.</p>
            </div>
            <div className="reveal">
              <div className="eyebrow">Vision</div>
              <p className="mt-4 text-xl leading-relaxed">Devenir le partenaire Shopify de référence des e-commerçants francophones.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section overflow-x-clip">
        <div className="glow glow-violet -right-40 top-20 h-[500px] w-[600px] opacity-40" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="reveal-img relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[32px] bg-card">
            <Image src={brand.founderPhoto} alt={brand.founder} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            <div className="glass absolute inset-x-4 bottom-4 rounded-2xl p-4">
              <div className="serif text-2xl">{brand.founder}</div>
              <div className="text-sm text-white/70">Expert Shopify & Shopify Plus · Fondateur d&apos;Agenxo</div>
            </div>
          </div>
          <div>
            <SectionHead eyebrow="Le fondateur" title={<>Un expert, <span className="serif">un interlocuteur</span></>} />
            <div className="mt-8 space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="t-lead reveal" style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
                  {p}
                </p>
              ))}
            </div>
            <div className="reveal mt-8">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-white/50">Domaines d&apos;expertise</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {expertise.map((e) => (
                  <span key={e} className="chip">{e}</span>
                ))}
              </div>
            </div>
            <Image src={brand.badge} alt="Super Malter" width={200} height={80} className="reveal mt-8 h-14 w-auto" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead
            align="split"
            eyebrow="Expertise Shopify"
            title={<>Ce que l&apos;agence <span className="serif">vous apporte</span></>}
            text="De la création à la maintenance, toute l'expertise Shopify réunie chez un seul partenaire. Un projet ou une boutique qui sous-performe ? Demandez un audit gratuit."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {about.offer.map((o, i) => (
              <Link key={o.title} href={o.href} className="card reveal group flex flex-col p-6 transition-colors hover:bg-card-2" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                <span className="code-mark">0{i + 1}</span>
                <h3 className="mt-8 text-lg font-medium transition-colors group-hover:text-lime">{o.title}</h3>
                <ul className="mt-4 space-y-2 text-[14px] text-white/70">
                  {o.items.map((it) => (
                    <li key={it} className="flex gap-2.5">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                      {it}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Engagements" title={<>Nos <span className="serif">engagements</span></>} />
          <div className="mt-12">
            <FeatureGrid items={reasons.items.map((r) => { const [title, text] = r.split(" — "); return { title, text: text ?? "" }; })} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Méthode" title={<>Comment nous <span className="serif">travaillons</span></>} />
          <div className="mt-12">
            <Process />
          </div>
        </div>
      </section>


      <TestimonialsBlock />
      <CtaSection />
    </>
  );
}
