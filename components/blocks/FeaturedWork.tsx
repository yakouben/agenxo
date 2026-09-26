"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { GhostButton, SiteButton } from "@/components/CtaButton";
import ProjectLink from "@/components/ProjectLink";
import { projects, type Project } from "@/lib/content";
import { EASE } from "./kit";

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);

// One case study. The story stays pinned on the left while the mockups
// scroll past on the right, each at its real proportions (never cropped).
function Panel({ p, i, total }: { p: Project; i: number; total: number }) {
  const f = p.featured!;

  return (
    <article className="relative rounded-[28px] border border-white/[0.08] bg-[#141414] sm:rounded-[36px]">
      <div className="relative grid gap-8 p-5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:p-10">
        {/* Story */}
        <div className="flex min-w-0 flex-col lg:sticky lg:top-28 lg:self-start">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="shrink-0 whitespace-nowrap text-[13px] tabular-nums text-white/45">
              {String(i + 1).padStart(2, "0")} <span className="text-white/25">/ {String(total).padStart(2, "0")}</span>
            </span>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              <span className="chip">{p.industry}</span>
              {p.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <h3 className="mt-8 text-[clamp(2rem,3.6vw,3.25rem)] font-medium leading-[1.02] tracking-[-0.03em]">{p.name}</h3>
          <p className="serif mt-4 text-[clamp(1.15rem,1.6vw,1.45rem)] leading-snug text-white/85">{f.headline}</p>
          <p className="t-body mt-5 max-w-md">{f.story}</p>

          <ul className="mt-7 grid gap-x-6 gap-y-2.5 border-t border-line pt-6 text-[14px] sm:grid-cols-2">
            {f.deliverables.map((d) => (
              <li key={d} className="flex gap-2.5">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                <span className="text-white/80">{d}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {p.url && <SiteButton href={p.url} />}
            <span className="text-xs text-white/45">{p.platform}</span>
          </div>
        </div>

        {/* Mockups: 1, 2 or 3, full width, natural height, rounded corners only. */}
        <div className="flex min-w-0 flex-col gap-4 sm:gap-5">
          {f.gallery.map((g, k) => (
            <motion.div
              key={g.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: EASE, delay: k * 0.08 }}
            >
              <ProjectLink p={p} className="group relative block overflow-hidden rounded-[20px] sm:rounded-[26px]">
                <Image
                  src={g.src}
                  alt={`${p.name} — maquette ${k + 1}`}
                  width={g.width}
                  height={g.height}
                  sizes="(min-width:1320px) 720px, (min-width:1024px) 55vw, 100vw"
                  className="block h-auto w-full transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02]"
                />
                <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-dark opacity-0 transition-all duration-500 group-hover:rotate-45 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </span>
              </ProjectLink>
            </motion.div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function FeaturedWork() {
  return (
    <div className="section pt-0">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <div className="eyebrow reveal mb-5">Projets récents</div>
            <h2 className="t-h2 reveal-title max-w-3xl">
              Des sites qui <span className="serif">vendent</span>, pas seulement qui brillent
            </h2>
          </div>
          <div className="reveal lg:justify-self-end">
            <p className="t-body max-w-sm">
              Marques automobiles, soins capillaires, santé visuelle : {featured.length} projets récents, autant de façons de transformer un visiteur en client.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-14 sm:space-y-20 lg:mt-16 lg:space-y-28">
          {featured.map((p, i) => (
            <Panel key={p.slug} p={p} i={i} total={featured.length} />
          ))}
        </div>

        {/* The rest of the portfolio, as a light strip so the scroll keeps flowing. */}
        <div className="mt-20 flex items-end justify-between gap-6 sm:mt-28">
          <h3 className="t-h3 reveal">
            Et aussi <span className="serif text-white/60">— {others.length} autres boutiques</span>
          </h3>
          <div className="reveal hidden sm:block">
            <GhostButton href="/projets">Tous les projets</GhostButton>
          </div>
        </div>
      </div>
      <div className="mt-8 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:scroll-px-6 sm:px-6 lg:scroll-px-[max(32px,calc((100vw-1320px)/2+32px))] lg:px-[max(32px,calc((100vw-1320px)/2+32px))] [&::-webkit-scrollbar]:hidden">
        {others.map((p, i) => (
          <motion.div
            key={p.slug}
            className="w-[72vw] shrink-0 snap-start sm:w-[340px]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: EASE, delay: i * 0.06 }}
          >
            <ProjectLink p={p} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-card">
                <Image src={p.image} alt={p.name} fill sizes="340px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="font-medium transition-colors group-hover:text-lime">{p.name}</span>
                <span className="text-xs text-white/45">{p.industry}</span>
              </div>
            </ProjectLink>
          </motion.div>
        ))}
      </div>
      <div className="container-x mt-6 sm:hidden">
        <GhostButton href="/projets">Tous les projets</GhostButton>
      </div>
    </div>
  );
}
