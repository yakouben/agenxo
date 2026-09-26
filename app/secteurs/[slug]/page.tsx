import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaSection from "@/components/CtaSection";
import { CasesStack, FaqBlock, FeatureGrid, PageHero, Process, SectionHead, ServicesMatrix, TestimonialsBlock } from "@/components/sections";
import { industries } from "@/lib/catalog";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return industries.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/secteurs/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const s = industries.find((x) => x.slug === slug);
  return { title: s ? `Shopify pour ${s.name} — Agenxo` : "Secteur — Agenxo" };
}

export default async function IndustryPage(props: PageProps<"/secteurs/[slug]">) {
  const { slug } = await props.params;
  const ind = industries.find((x) => x.slug === slug);
  if (!ind) notFound();
  const i = industries.indexOf(ind);
  const matching = projects.filter((p) => p.industry === ind.name);
  const cases = matching.length ? matching : projects.slice(0, 2);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Secteurs", href: "/secteurs" }, { label: ind.name }]}
        title={
          <>
            Boutiques Shopify pour <span className="serif">{ind.name.toLowerCase()}</span>
          </>
        }
        text={`${ind.short} : nous concevons des boutiques Shopify pensées pour les attentes de vos clients et les contraintes de votre secteur.`}
        visual={projects[i % projects.length].image}
      />

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Fonctionnalités clés" title={<>Ce dont votre secteur <span className="serif">a besoin</span></>} />
          <div className="mt-12">
            <FeatureGrid
              items={[
                ...ind.tags.map((t) => ({ title: t, text: "Une fonctionnalité pensée pour votre secteur et intégrée à votre boutique." })),
                { title: "Mobile d'abord", text: "La majorité de vos clients achètent sur smartphone." },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead align="split" eyebrow="Projets" title={<>Nos réalisations <span className="serif">dans ce secteur</span></>} />
          <div className="mt-12">
            <CasesStack items={cases} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead align="center" eyebrow="Services" title={<>Nos services pour <span className="serif">{ind.name.toLowerCase()}</span></>} />
          <div className="mt-12">
            <ServicesMatrix />
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
      <FaqBlock />
      <CtaSection />
    </>
  );
}
