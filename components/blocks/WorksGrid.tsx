"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import CtaButton, { SiteButton } from "@/components/CtaButton";
import ProjectLink from "@/components/ProjectLink";
import type { Project } from "@/lib/content";
import { EASE } from "./kit";

// Image that zooms out from 1.25 → 1 as it scrolls into view.
function ZoomImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.25, 1]);
  const radius = useTransform(scrollYProgress, [0, 0.4], [60, 28]);
  return (
    <motion.div ref={ref} className="relative aspect-square overflow-hidden bg-card" style={{ borderRadius: radius }}>
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image src={src} alt={alt} fill sizes="(min-width:1024px) 35vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
      </motion.div>
    </motion.div>
  );
}

function Accordion({ title, open, onToggle, children }: { title: string; open: boolean; onToggle: () => void; children: React.ReactNode }) {
  return (
    <div>
      <button onClick={onToggle} aria-expanded={open} className="flex w-full items-center justify-between py-3 text-[13px] font-medium uppercase tracking-wide">
        {title}
        <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: EASE }} className="overflow-hidden">
            <div className="flex flex-wrap gap-2 pb-4 pt-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function WorksGrid({ projects }: { projects: Project[] }) {
  const industries = useMemo(() => [...new Set(projects.map((p) => p.industry))], [projects]);
  const types = useMemo(() => [...new Set(projects.flatMap((p) => p.tags))], [projects]);
  const [industry, setIndustry] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [open, setOpen] = useState<"ind" | "svc" | null>("ind");

  const list = projects.filter((p) => (!industry || p.industry === industry) && (!type || p.tags.includes(type)));
  const chip = (active: boolean) =>
    `rounded-full px-4 py-2.5 text-[14px] transition-colors ${active ? "bg-white text-dark" : "bg-[#262626] hover:bg-[#333]"}`;

  return (
    <section id="projets" className="scroll-mt-24 py-16 sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[400px_1fr] lg:gap-14">
        <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[24px] border border-white/10 bg-[#111] px-5 py-3">
            <Accordion title="Secteurs" open={open === "ind"} onToggle={() => setOpen(open === "ind" ? null : "ind")}>
              <button className={chip(industry === null)} onClick={() => setIndustry(null)}>
                Tous les secteurs ({projects.length})
              </button>
              {industries.map((o) => (
                <button key={o} className={chip(industry === o)} onClick={() => setIndustry(industry === o ? null : o)}>
                  {o} ({projects.filter((p) => p.industry === o).length})
                </button>
              ))}
            </Accordion>
            <Accordion title="Services" open={open === "svc"} onToggle={() => setOpen(open === "svc" ? null : "svc")}>
              <button className={chip(type === null)} onClick={() => setType(null)}>
                Tous ({projects.length})
              </button>
              {types.map((o) => (
                <button key={o} className={chip(type === o)} onClick={() => setType(type === o ? null : o)}>
                  {o} ({projects.filter((p) => p.tags.includes(o)).length})
                </button>
              ))}
            </Accordion>
          </div>
          <div className="mt-3">
            <CtaButton href="/#contact" full>
              Réserver un appel
            </CtaButton>
          </div>
        </aside>

        <motion.div layout className="grid min-w-0 gap-x-8 gap-y-16 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <ProjectLink p={p} className="group block">
                  <ZoomImage src={p.image} alt={p.name} />
                  <h3 className="mt-7 text-[clamp(1.5rem,2.2vw,2rem)] font-medium tracking-tight transition-colors group-hover:text-lime">{p.name}</h3>
                  <p className="mt-3 max-w-md text-[17px] leading-relaxed tracking-wide text-white/85">{p.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[p.industry, ...p.tags].map((t) => (
                      <span key={t} className="rounded-full bg-[#262626] px-3.5 py-2 text-[14px]">{t}</span>
                    ))}
                    <span className="rounded-full bg-[#262626] px-3.5 py-2 text-[14px]">{p.location}</span>
                  </div>
                </ProjectLink>
                {p.url && (
                  <div className="mt-6">
                    <SiteButton href={p.url} size="sm" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          {list.length === 0 && <p className="t-body">Aucun projet pour ce filtre.</p>}
        </motion.div>
      </div>
    </section>
  );
}
