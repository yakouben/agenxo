import type { Metadata } from "next";
import CtaButton, { GhostButton } from "@/components/CtaButton";
import ClientsMarquee from "@/components/ClientsMarquee";
import ContactPanel from "@/components/ContactPanel";
import FeaturedWork from "@/components/blocks/FeaturedWork";
import ImpactStats from "@/components/blocks/ImpactStats";
import StackSpread from "@/components/ui/stack-spread";
import {
  FaqBlock,
  FounderNote,
  IndustriesList,
  PostCard,
  Recognition,
  SectionHead,
  ServicesMatrix,
  TestimonialsBlock,
} from "@/components/sections";
import { blogPosts } from "@/lib/blog";
import { clients, hero, reasons } from "@/lib/content";

const latestPosts = [...blogPosts].sort((a, b) => b.published.localeCompare(a.published)).slice(0, 3);

// Client logos fill the scattered-cards transition.
const spreadImages = clients.map((src) => ({ src, alt: "Logo client", logo: true }));

// "Par Salah Eddine B. — Supermalter · 5.0…": the rating half is what matters on small screens.
const [eyebrowBy, eyebrowRating] = hero.eyebrow.split(" — ");

export const metadata: Metadata = { alternates: { canonical: "/" } };

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

// Renders "{word}" segments as italic serif pills.
function PillLine({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\{[^}]+\})/).map((part, i) =>
        part.startsWith("{") ? (
          <span key={i} className="pill-word">
            {part.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="accueil" className="relative flex min-h-[100svh] flex-col justify-center overflow-x-clip pb-10 pt-28 sm:justify-between sm:pt-40">
        <div className="glow glow-blue glow-drift -bottom-40 -left-40 h-[640px] w-[860px]" />
        <div className="glow glow-violet glow-drift -right-40 -top-20 h-[460px] w-[560px] opacity-35" />
        <div className="container-x relative">
          <p className="reveal flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] px-3.5 py-1.5 text-[12px] text-white/70 ring-1 ring-white/10 sm:bg-transparent sm:p-0 sm:text-[13px] sm:text-white/60 sm:ring-0">
              <span className="text-[#ff5a3c] sm:hidden" aria-hidden>★</span>
              <span className="hidden sm:inline">{eyebrowBy} — </span>
              {eyebrowRating}
            </span>
          </p>
          <h1 className="t-display mx-auto mt-6 max-w-6xl text-center max-sm:text-[8vw] max-sm:leading-[1.08]">
            {hero.lines.map((l, i) => (
              <span key={l} className="reveal-title block" style={d(80 + i * 110)}>
                <PillLine text={l} />
              </span>
            ))}
            <span className="reveal-title mt-1 block" style={d(410)}>
              <span>
                {hero.lastLine.before} <span className="serif">{hero.lastLine.italic}</span>
              </span>
            </span>
          </h1>
        </div>

        {/* Small screens: one clear action right under the headline. */}
        <div className="container-x relative mt-9 flex flex-col items-center gap-5 md:hidden">
          <p className="reveal max-w-[30ch] text-center text-[15px] leading-relaxed text-white/70" style={d(480)}>
            {hero.notes[0]}.
          </p>
          <div className="reveal flex flex-wrap justify-center gap-3" style={d(560)}>
            <CtaButton href="/#contact">{hero.cta}</CtaButton>
            <GhostButton href="#projets">Voir nos projets</GhostButton>
          </div>
          <div className="reveal flex flex-wrap justify-center gap-2" style={d(640)}>
            {hero.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="container-x relative mt-16 hidden md:block">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_1fr_auto]">
            {hero.notes.map((n, i) => (
              <div key={n} className="reveal max-w-xs" style={d(500 + i * 100)}>
                <div className="code-mark">{"{/}"}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{n}</p>
                {i === 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {hero.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="reveal flex w-[272px] flex-col gap-2.5" style={d(700)}>
              <CtaButton href="/#contact" full>
                {hero.cta}
              </CtaButton>
              <GhostButton href="#projets" full>
                Voir nos projets
              </GhostButton>
            </div>
          </div>
        </div>

        {/* Client logos, auto-scrolling */}
        <div className="reveal relative mt-12 sm:mt-16" style={d(800)}>
          <p className="container-x mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:mb-5">
            Ils nous font confiance
          </p>
          <ClientsMarquee compact />
        </div>
      </section>

      {/* PROJECTS */}
      <div id="projets">
        <StackSpread
          items={spreadImages}
          title={
            <>
              Du concept <span className="serif text-lime">au succès.</span>
            </>
          }
          subtitle="De la marque automobile à la boutique beauté : des sites pensés pour vendre."
        />
        <FeaturedWork />
      </div>

      {/* MID-PAGE CTA — right after the work, while intent is highest. */}
      <section className="section-tight">
        <div className="container-x">
          <div className="card reveal relative overflow-hidden p-8 text-center sm:p-14">
            <div className="glow glow-violet left-1/2 top-0 h-[360px] w-[620px] -translate-x-1/2 opacity-50" />
            <div className="relative">
              <div className="eyebrow justify-center">Votre projet</div>
              <h2 className="t-h2 mx-auto mt-5 max-w-3xl">
                Votre boutique Shopify est <span className="serif text-lime">la prochaine ?</span>
              </h2>
              <p className="t-body mx-auto mt-4 max-w-md">Un audit gratuit de votre projet ou de votre boutique actuelle, et des conseils concrets dès le premier appel.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <CtaButton href="/#contact">{hero.cta}</CtaButton>
                <GhostButton href="/projets">Tous les projets</GhostButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <div id="avis">
        <section className="section">
          <div className="container-x">
            <SectionHead
              align="split"
              eyebrow="Distinctions"
              title={<>Des résultats <span className="serif">reconnus</span></>}
              text="La croissance de nos clients compte avant tout, mais une expertise distinguée par Malt reste une belle garantie."
            />
            <div className="mt-12">
              <Recognition />
            </div>
          </div>
        </section>
        <TestimonialsBlock />
      </div>

      {/* REASONS + STATS */}
      <div id="pourquoi">
      <section className="section overflow-x-clip">
        <div className="glow glow-blue right-[-10%] top-0 h-[560px] w-[640px] opacity-60" />
        <div className="container-x relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div className="eyebrow reveal">Pourquoi nous</div>
            <div>
              <h2 className="t-h2 reveal-title max-w-2xl">
                <span className="serif">{reasons.title.italic}</span> {reasons.title.rest}
              </h2>
              <ul className="mt-10 border-t border-line">
                {reasons.items.map((r, i) => (
                  <li key={r} className="reveal grid grid-cols-[56px_1fr] border-b border-line py-5 sm:grid-cols-[80px_1fr]" style={d(i * 80)}>
                    <span className="code-mark">{"{/}"}</span>
                    <span className="text-[15px]">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      <ImpactStats />
      </div>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container-x">
          <SectionHead align="center" eyebrow="Services" title={<>Nos services Shopify <span className="serif">experts</span></>} />
          <div className="mx-auto mt-12 max-w-5xl">
            <ServicesMatrix />
          </div>
          <div className="mx-auto mt-4 max-w-5xl">
            <FounderNote />
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="secteurs" className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHead
            eyebrow="Domaines d'expertise"
            title={<>Notre expérience rejoint <span className="serif">votre marché</span></>}
            text="Du commerce de détail au commerce de gros, en passant par le luxe et les soins : des boutiques Shopify pensées pour les codes de chaque marché."
          />
          <IndustriesList />
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="section">
        <div className="container-x">
          <SectionHead
            align="split"
            eyebrow="Blog"
            title={<>Des conseils concrets pour <span className="serif">vendre plus</span></>}
            text="Tactiques Shopify, conversion et SEO : ce qui marche vraiment sur les boutiques que nous livrons."
            action={<GhostButton href="/blog">Tous les articles</GhostButton>}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {latestPosts.map((p, i) => (
              <PostCard key={p.slug} post={p} i={i} />
            ))}
          </div>
        </div>
      </section>

      <div id="faq">
        <FaqBlock />
      </div>

      {/* CONTACT — the page ends on the form, no extra click needed. */}
      <section id="contact" className="relative overflow-x-clip pb-24 pt-16 sm:pb-32">
        <div className="glow glow-blue glow-drift right-[-10%] top-10 h-[640px] w-[760px] opacity-60" />
        <div className="glow glow-violet glow-drift -left-40 bottom-0 h-[420px] w-[520px] opacity-40" />
        <div className="container-x relative">
          <SectionHead
            align="center"
            eyebrow="Contact"
            title={<>Prêt à faire <span className="serif">décoller</span> votre boutique ?</>}
            text="Un appel gratuit pour clarifier votre projet et repartir avec des conseils concrets."
          />
          <div className="mt-12">
            <ContactPanel />
          </div>
        </div>
      </section>
    </>
  );
}
