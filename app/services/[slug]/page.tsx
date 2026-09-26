import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaSection from "@/components/CtaSection";
import {
  CasesStack,
  FaqBlock,
  FeatureGrid,
  ForYou,
  IndustriesList,
  PageHero,
  Process,
  Recognition,
  SectionHead,
  TestimonialsBlock,
} from "@/components/sections";
import { catalogServices } from "@/lib/catalog";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return catalogServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const s = catalogServices.find((x) => x.slug === slug);
  return { title: s ? `${s.heroTitle} — Agenxo` : "Service — Agenxo", description: s?.heroText };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const s = catalogServices.find((x) => x.slug === slug);
  if (!s) notFound();
  const idx = catalogServices.indexOf(s);
  const related = catalogServices.filter((x) => x.column === s.column && x.slug !== s.slug);
  const [first, ...rest] = s.heroTitle.split(" ");

  return (
    <>
      <PageHero
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Services", href: "/services" }, { label: s.name }]}
        title={
          <>
            {first} <span className="serif">{rest.join(" ")}</span>
          </>
        }
        text={s.heroText}
        visual={projects[idx % projects.length].image}
      />

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Ce que nous faisons" title={<>Ce qui est <span className="serif">inclus</span></>} text={s.short} />
          <div className="mt-12">
            <FeatureGrid items={s.features} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead align="split" eyebrow="Projets" title={<>Des résultats <span className="serif">concrets</span></>} text="Quelques boutiques où ce service a fait la différence." />
          <div className="mt-12">
            <CasesStack items={projects.slice(idx % 3, (idx % 3) + 3)} />
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

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHead eyebrow="Pour qui" title={<>Ce service est <span className="serif">fait pour vous</span> si…</>} />
          <ForYou
            items={[
              "Vous voulez une boutique qui reflète vraiment votre marque.",
              "Vous cherchez un interlocuteur unique, du design au développement.",
              "Vous voulez des résultats mesurables, pas seulement un joli site.",
              "Vous avez besoin d'un accompagnement après le lancement.",
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead align="center" eyebrow="Reconnaissance" title={<>Une expertise <span className="serif">reconnue</span></>} />
          <div className="mt-12">
            <Recognition />
          </div>
        </div>
      </section>

      <TestimonialsBlock />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHead eyebrow="Secteurs" title={<>Une expérience dans <span className="serif">votre marché</span></>} />
          <IndustriesList />
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-tight">
          <div className="container-x">
            <div className="eyebrow reveal mb-6">Services associés</div>
            <div className="flex flex-wrap gap-2">
              {related.map((r) => (
                <Link key={r.slug} href={`/services/${r.slug}`} className="reveal rounded-full border border-white/15 px-5 py-3 text-sm transition-colors hover:border-lime hover:text-lime">
                  {r.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FaqBlock />
      <CtaSection />
    </>
  );
}
