import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import CtaSection from "@/components/CtaSection";
import {
  CasesStack,
  FaqBlock,
  FeatureGrid,
  ForYou,
  PageHero,
  Process,
  SectionHead,
  StatsRow,
  TestimonialsBlock,
} from "@/components/sections";
import ClientsMarquee from "@/components/ClientsMarquee";
import { solutions } from "@/lib/catalog";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const s = solutions.find((x) => x.slug === slug);
  return { title: s ? `${s.heroTitle} — Agenxo` : "Solution — Agenxo", description: s?.heroText };
}

const deliverables = [
  { title: "Stratégie", text: "Positionnement, parcours clients et priorités business." },
  { title: "Design UI/UX", text: "Maquettes Figma de chaque page, mobile d'abord." },
  { title: "Développement Shopify", text: "Thème, applications et intégrations." },
  { title: "Accompagnement", text: "Formation, suivi des résultats et support 7j/7." },
];

export default async function SolutionPage(props: PageProps<"/solutions/[slug]">) {
  const { slug } = await props.params;
  const s = solutions.find((x) => x.slug === slug);
  if (!s) notFound();
  const i = solutions.indexOf(s);
  const words = s.heroTitle.split(" ");

  return (
    <>
      <PageHero
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Solutions" }, { label: s.name }]}
        title={
          <>
            {words.slice(0, -2).join(" ")} <span className="serif">{words.slice(-2).join(" ")}</span>
          </>
        }
        text={s.heroText}
        visual={projects[(i + 3) % projects.length].image}
      />

      <section className="section-tight">
        <div className="container-x">
          <p className="eyebrow reveal mb-6 !flex justify-center">Ils nous font confiance</p>
          <ClientsMarquee />
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <StatsRow />
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead align="split" eyebrow="Études de cas" title={<>Des marques qui ont <span className="serif">grandi</span> avec nous</>} />
          <div className="mt-12">
            <CasesStack items={projects.slice(i, i + 3)} />
          </div>
        </div>
      </section>

      <section className="section overflow-x-clip">
        <div className="glow glow-violet -right-40 top-10 h-[480px] w-[560px] opacity-40" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow={s.audience} title={<>Pourquoi choisir <span className="serif">Agenxo</span></>} text={s.short} />
            <div className="mt-10">
              <ForYou
                items={[
                  "Un expert Shopify certifié Super Malter 3.",
                  "Un seul interlocuteur, du design au développement.",
                  "Des délais tenus et une communication transparente.",
                  "Un support 7j/7 après le lancement.",
                ]}
              />
            </div>
          </div>
          <div className="reveal-img relative aspect-[4/5] overflow-hidden rounded-3xl" data-parallax="0.08">
            <Image src={projects[(i + 5) % projects.length].image} alt="" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Livrables" title={<>Tout ce que vous <span className="serif">recevez</span></>} />
          <div className="mt-12">
            <FeatureGrid items={deliverables} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Méthode" title={<>Du premier appel au <span className="serif">lancement</span></>} />
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
