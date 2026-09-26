// Reusable page sections. Every page is composed from these so spacing,
// type scale and motion stay consistent.
import Image from "next/image";
import Link from "next/link";
import { formatDate, type Post } from "@/lib/blog";
import { catalogServices, industries, processSteps, serviceColumns } from "@/lib/catalog";
import { brand, faq as defaultFaq, projects, stats, type Project } from "@/lib/content";
import Counter from "./Counter";
import CtaButton, { GhostButton, SiteButton } from "./CtaButton";
import Faq from "./Faq";
import ProjectLink from "./ProjectLink";
import ReviewsWhite from "./blocks/ReviewsWhite";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

/* ---------- Primitives ---------- */

export function SectionHead({
  eyebrow,
  title,
  text,
  align = "left",
  action,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: string;
  align?: "left" | "center" | "split";
  action?: React.ReactNode;
}) {
  if (align === "split") {
    return (
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          {eyebrow && <div className="eyebrow reveal mb-5">{eyebrow}</div>}
          <h2 className="t-h2 reveal-title max-w-3xl">{title}</h2>
        </div>
        <div className="reveal lg:justify-self-end" style={d(120)}>
          {text && <p className="t-body max-w-sm">{text}</p>}
          {action && <div className="mt-6">{action}</div>}
        </div>
      </div>
    );
  }
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <div className="eyebrow reveal mb-5">{eyebrow}</div>}
      <h2 className="t-h2 reveal-title">{title}</h2>
      {text && (
        <p className={`t-lead reveal mt-5 ${center ? "mx-auto max-w-xl" : "max-w-xl"}`} style={d(120)}>
          {text}
        </p>
      )}
      {action && (
        <div className="reveal mt-8" style={d(200)}>
          {action}
        </div>
      )}
    </div>
  );
}

export function Crumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="reveal flex flex-wrap items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider">
      {items.map((c, i) => (
        <span key={c.label} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-white/30">/</span>}
          {c.href ? (
            <Link href={c.href} className="text-white hover:text-lime">
              {c.label}
            </Link>
          ) : (
            <span className="text-white/50">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function Stars() {
  return (
    <span className="flex items-center gap-2 text-sm text-white/70">
      <span className="tracking-[2px] text-[#ff5a3c]">★★★★★</span>
      Super Malter 3 sur Malt
    </span>
  );
}

/* ---------- Heroes ---------- */

// Split hero used by service, solution and industry pages.
export function PageHero({
  crumbs,
  title,
  text,
  visual,
  showStats = true,
}: {
  crumbs: { label: string; href?: string }[];
  title: React.ReactNode;
  text: string;
  visual?: string;
  showStats?: boolean;
}) {
  return (
    <section className="relative overflow-x-clip pb-16 pt-32 sm:pt-40">
      <div className="glow glow-blue glow-drift -left-40 top-10 h-[520px] w-[720px]" />
      <div className="glow glow-violet glow-drift -right-40 bottom-0 h-[420px] w-[520px] opacity-40" />
      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Crumbs items={crumbs} />
            <h1 className="t-h1 reveal-title mt-6">{title}</h1>
            <p className="t-lead reveal mt-6 max-w-lg" style={d(150)}>
              {text}
            </p>
            <div className="reveal mt-9 flex flex-wrap items-center gap-3" style={d(250)}>
              <CtaButton href="/#contact">Réserver un appel</CtaButton>
              <GhostButton href="/projets">Voir les projets</GhostButton>
            </div>
            <div className="reveal mt-6" style={d(300)}>
              <Stars />
            </div>
          </div>
          {visual && (
            <div className="reveal-img relative aspect-[4/3] overflow-hidden rounded-3xl" data-parallax="0.06">
              <Image src={visual} alt="" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" priority />
            </div>
          )}
        </div>
        {showStats && (
          <div className="mt-16 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {stats.map((s, i) => (
              <div key={s.label} className="reveal flex items-center gap-4" style={d(i * 100)}>
                <span className="text-4xl font-medium">
                  {s.value}
                  {s.suffix}
                </span>
                <span className="max-w-[160px] text-sm leading-snug text-white/60">{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- Content blocks ---------- */

export function ServicesMatrix() {
  return (
    <div className="reveal rounded-[28px] bg-white p-2 text-dark sm:p-3">
      <div className="grid gap-2 sm:gap-3 md:grid-cols-3">
        {serviceColumns.map((col) => (
          <div key={col} className="rounded-[20px] bg-paper p-5 sm:p-6">
            <h3 className="text-xl font-semibold">{col}</h3>
            <ul className="mt-4">
              {catalogServices
                .filter((s) => s.column === col)
                .map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex items-center justify-between gap-4 border-t border-black/[0.08] py-4 text-[15px] font-medium"
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-1">{s.name}</span>
                      <span className="text-black/40 transition-all duration-300 group-hover:-rotate-45 group-hover:text-black">↘</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// Sticky stacked case cards.
export function CasesStack({ items = projects.slice(0, 4) }: { items?: Project[] }) {
  return (
    <div className="space-y-6 lg:space-y-10">
      {items.map((p, i) => (
        <article
          key={p.slug}
          className="card grid gap-8 !bg-ink p-5 sm:p-8 lg:sticky lg:grid-cols-[1fr_1.3fr] lg:p-10"
          style={{ top: `${110 + i * 18}px` }}
        >
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-2">
              <span className="chip">{p.industry}</span>
              {p.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
            <h3 className="t-h3 mt-6">
              {p.name} — <span className="text-white/60">{p.summary}</span>
            </h3>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
              {p.results.map((r) => (
                <div key={r.label}>
                  <div className="text-2xl font-medium">{r.value}</div>
                  <div className="mt-1 text-xs text-white/50">{r.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 lg:mt-auto lg:pt-8">
              {p.url && <SiteButton href={p.url} />}
            </div>
          </div>
          <ProjectLink p={p} className="group relative aspect-[4/3] overflow-hidden rounded-[20px] bg-card-2">
            <Image src={p.image} alt={p.name} fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
          </ProjectLink>
        </article>
      ))}
    </div>
  );
}

export function FeatureGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((f, i) => (
        <div key={f.title} className="card reveal flex min-h-[220px] flex-col p-6 transition-colors hover:bg-card-2" style={d(i * 80)}>
          <span className="code-mark">0{i + 1}</span>
          <h3 className="mt-auto text-lg font-medium">{f.title}</h3>
          <p className="t-body mt-2">{f.text}</p>
        </div>
      ))}
    </div>
  );
}

export function Process() {
  return (
    <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {processSteps.map((s, i) => (
        <div key={s.title} className="reveal group bg-ink p-6 transition-colors hover:bg-card sm:p-8" style={d(i * 70)}>
          <div className="flex items-center justify-between">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm transition-colors group-hover:bg-lime group-hover:text-dark">
              {i + 1}
            </span>
            <span className="code-mark">{"{/}"}</span>
          </div>
          <h3 className="t-h3 mt-10">{s.title}</h3>
          <p className="t-body mt-2">{s.text}</p>
        </div>
      ))}
    </div>
  );
}

export function StatsRow() {
  return (
    <div className="grid gap-10 md:grid-cols-3">
      {stats.map((s, i) => (
        <div key={s.label} className="reveal border-t border-line pt-6" style={d(i * 120)}>
          <div className="text-[clamp(3.5rem,8vw,7rem)] font-medium leading-none tracking-tight text-white/70">
            <Counter value={s.value} suffix={s.suffix} />
          </div>
          <div className="mt-5 font-medium">{s.label}</div>
          <p className="t-body mt-1 max-w-xs">{s.note}</p>
        </div>
      ))}
    </div>
  );
}

export function Recognition() {
  const cards = [
    { big: <Image src={brand.badge} alt="Super Malter" width={220} height={120} className="h-20 w-auto" />, label: "Super Malter 3 sur Malt" },
    { big: "<5%", label: "des freelances Malt distingués" },
    { big: "100+", label: "Projets Shopify livrés" },
    { big: "7j/7", label: "Support après lancement" },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {cards.map((c, i) => (
        <div key={c.label} className="card reveal flex aspect-square flex-col items-center justify-center p-5 text-center" style={d(i * 80)}>
          <div className="text-4xl font-medium sm:text-5xl">{c.big}</div>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-white/70">{c.label}</p>
        </div>
      ))}
    </div>
  );
}

// The founder vouching for the offer, with a direct line to book a call.
export function FounderNote() {
  return (
    <div className="card reveal flex flex-col gap-6 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div className="flex items-center gap-4">
        <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-card-2">
          <Image src={brand.founderPhoto} alt={brand.founder} fill sizes="64px" className="object-cover" />
        </span>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium">{brand.founder}</span>
            <a href={brand.maltUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-white/70 transition-colors hover:bg-white hover:text-dark">
              Malt ↗
            </a>
          </div>
          <div className="text-xs text-white/50">{brand.founderRole}</div>
          <p className="mt-2 max-w-md text-[15px] text-white/80">
            Je transforme les boutiques Shopify sous-performantes en <span className="serif">machines à vendre</span>.
          </p>
        </div>
      </div>
      <div className="shrink-0">
        <CtaButton href="/#contact">Réserver un appel</CtaButton>
      </div>
    </div>
  );
}

// Kept as a named slot so pages stay unchanged.
export function TestimonialsBlock() {
  return <ReviewsWhite />;
}

export function IndustriesList() {
  return (
    <ul>
      {industries.map((e, i) => (
        <li key={e.slug} className="reveal border-b border-line" style={d(i * 60)}>
          <Link href={`/secteurs/${e.slug}`} className="group flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[clamp(1.35rem,2.4vw,2rem)] font-medium text-white/45 transition-colors duration-300 group-hover:text-white">
              {e.name}
            </span>
            <span className="flex flex-wrap gap-2">
              {e.tags.map((t) => (
                <span key={t} className="chip transition-colors group-hover:bg-white/15">
                  {t}
                </span>
              ))}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function PostCard({ post, i = 0 }: { post: Post; i?: number }) {
  return (
    <Link href={`/blog/${post.slug}`} className="reveal group block" style={d(i * 90)}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-card">
        <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="chip absolute bottom-4 left-4 !bg-black/50 backdrop-blur">{post.topic}</span>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-white/50">
        <span>{post.author}</span>
        <time dateTime={post.published}>{formatDate(post.published)}</time>
      </div>
      <h3 className="mt-2 text-lg font-medium leading-snug transition-colors group-hover:text-lime">{post.title}</h3>
    </Link>
  );
}

export function FaqBlock({ items = defaultFaq }: { items?: { q: string; a: string }[] }) {
  return (
    <section className="section">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <SectionHead
          eyebrow="FAQ"
          title={
            <>
              Vos <span className="serif">questions</span>
            </>
          }
          text="Vous ne trouvez pas votre réponse ? Écrivez-nous."
        />
        <Faq items={items} />
      </div>
    </section>
  );
}

export function ForYou({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((t, i) => (
        <div key={t} className="card reveal flex items-start gap-4 p-6" style={d(i * 70)}>
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-xs text-dark">✓</span>
          <p className="text-[15px] leading-relaxed">{t}</p>
        </div>
      ))}
    </div>
  );
}
