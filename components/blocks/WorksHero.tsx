"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Check, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import CtaButton from "@/components/CtaButton";
import ProjectLink from "@/components/ProjectLink";
import { clients, malt, projects } from "@/lib/content";
import { EASE, MaskLines, Stars } from "./kit";

const SLIDES = 4;
const DURATION = 5000;

// Works page hero: headline + proof on the left, rotating case card on the right.
export default function WorksHero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setI((v) => (v + 1) % SLIDES), DURATION);
    return () => clearTimeout(id);
  }, [i, paused]);
  const p = projects[i];

  return (
    <section className="relative overflow-x-clip pb-20 pt-32 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 90% 70% at 40% 0%, #3439f0 0%, #2126b8 30%, rgba(11,11,11,0) 72%)" }}
      />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.nav
            aria-label="Fil d'Ariane"
            className="text-[12px] font-semibold uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="hover:text-lime">Accueil</Link> <span className="text-white/50">/ Projets</span>
          </motion.nav>

          <h1 className="mt-10 text-[clamp(2.75rem,6.2vw,5.5rem)] font-medium leading-[1.04] tracking-[-0.03em]">
            <MaskLines
              lines={[
                "Nous transformons",
                <><span key="a" className="serif text-lime">vos idées</span> en boutiques</>,
                <span key="b" className="serif text-lime">qui vendent</span>,
              ]}
            />
          </h1>

          <motion.div
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.07] py-2 pl-2 pr-3 backdrop-blur"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
          >
            <span className="flex -space-x-2">
              {clients.slice(0, 3).map((src) => (
                <span key={src} className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-[#1c1c2b] bg-white">
                  <Image src={src} alt="" fill sizes="32px" className="object-contain p-1 invert" />
                </span>
              ))}
            </span>
            <span className="text-2xl font-medium">{malt.projects}+</span>
            <span className="text-[11px] font-semibold uppercase leading-tight">
              Projets
              <br />
              livrés
            </span>
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15">
              <Check size={13} />
            </span>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-8 border-t border-white/10 pt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.65 }}
          >
            <CtaButton href="#projets">
              Voir tous les projets <span className="ml-1 opacity-50">({projects.length})</span>
            </CtaButton>
            <div className="flex items-center gap-6">
              <div>
                <div className="font-semibold">malt</div>
                <Stars size={13} className="mt-1" />
              </div>
              <span className="h-10 w-px bg-white/15" />
              <div>
                <div className="flex items-center gap-1.5 text-sm">
                  <Trophy size={13} /> Supermalter
                </div>
                <Stars size={13} className="mt-1" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
        >
          <ProjectLink p={p} className="group block">
            <div className="relative aspect-[5/3] overflow-hidden rounded-[28px] bg-card">
              <AnimatePresence initial={false}>
                <motion.div
                  key={p.slug}
                  className="absolute inset-0"
                  style={{ zIndex: i + 1 }}
                  initial={{ opacity: 0, scale: 1.12 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.7 } }}
                  transition={{ duration: 1.1, ease: EASE }}
                >
                  <Image src={p.image} alt={p.name} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="relative mt-1.5 rounded-[28px] bg-white p-6 text-dark">
              <AnimatePresence mode="wait">
                <motion.div key={p.slug} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
                  <div className="flex flex-wrap gap-2">
                    {[p.industry, ...p.tags].map((t) => (
                      <span key={t} className="rounded-full bg-paper px-3 py-1.5 text-sm">{t}</span>
                    ))}
                  </div>
                  <p className="mt-4 text-xl font-medium leading-snug">
                    {p.name} — {p.summary}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div className="mt-6 grid grid-cols-4 gap-2">
                {Array.from({ length: SLIDES }).map((_, k) => (
                  <button
                    key={k}
                    onClick={(e) => {
                      e.preventDefault();
                      setI(k);
                    }}
                    aria-label={`Projet ${k + 1}`}
                    className="relative h-1 overflow-hidden rounded-full bg-black/10"
                  >
                    {k === i && !paused && (
                      <motion.span className="absolute inset-y-0 left-0 bg-[#3a3fd6]" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: DURATION / 1000, ease: "linear" }} />
                    )}
                    {(k < i || (k === i && paused)) && <span className="absolute inset-0 bg-[#3a3fd6]" />}
                  </button>
                ))}
              </div>
            </div>
          </ProjectLink>
        </motion.div>
      </div>
    </section>
  );
}
