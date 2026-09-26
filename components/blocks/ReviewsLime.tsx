"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { brand, clients, malt, testimonials } from "@/lib/content";
import { EASE, MaskLines, Stars } from "./kit";

const PICK = [4, 5, 7];

// Lime testimonial card with portrait block; logo tabs on the left.
export default function ReviewsLime() {
  const items = PICK.map((k) => testimonials[k]);
  const [i, setI] = useState(0);
  const go = (d: number) => setI((v) => (v + d + items.length) % items.length);
  const t = items[i];

  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="t-h2 !leading-[1.25]">
            <MaskLines lines={[<>Nos <span key="a" className="serif text-lime">clients</span> ont mille</>, <>raisons de nous <span key="b" className="serif text-lime">recommander</span></>]} />
          </h2>
          <motion.a
            href={brand.maltUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-[#1a1a1a] px-6 py-4 transition-colors hover:bg-[#222]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span>
              <span className="flex items-center gap-2 text-[11px] uppercase text-white/70">
                Évalué sur <Stars size={10} className="text-[#fc5757]" />
              </span>
              <span className="text-2xl font-semibold">malt</span>
            </span>
            <span className="text-[11px] uppercase text-white/70">{malt.reviews}+ avis</span>
          </motion.a>
        </div>

        <div className="mt-14 grid gap-3 lg:grid-cols-[440px_1fr]">
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
            {items.map((it, k) => (
              <button
                key={it.name}
                onClick={() => setI(k)}
                aria-pressed={k === i}
                className={`grid h-24 place-items-center rounded-[28px] px-4 text-center text-base font-semibold transition-colors duration-500 sm:text-2xl lg:h-[156px] ${
                  k === i ? "bg-gradient-to-br from-[#6a6a6a] to-[#333]" : "bg-[#222] hover:bg-[#2a2a2a]"
                }`}
              >
                {it.company}
              </button>
            ))}
          </div>

          <div className="relative grid gap-6 overflow-hidden rounded-[32px] bg-lime p-4 text-dark sm:p-7 md:grid-cols-[minmax(0,320px)_1fr]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`p-${i}`}
                className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#c3e600] md:aspect-auto md:min-h-[420px]"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <Image src={clients[(i * 2) % clients.length]} alt="" fill sizes="320px" className="object-contain p-12 invert" />
                <span className="absolute bottom-5 left-5 serif text-6xl text-dark/80">{it0(t.name)}</span>
              </motion.div>
            </AnimatePresence>
            <div className="flex flex-col pb-2 md:pt-2">
              <div className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="text-5xl font-medium sm:text-6xl">{malt.rating}</span>
                  <span className="leading-tight">
                    <span className="block text-base font-semibold">malt</span>
                    <Stars size={12} />
                  </span>
                </div>
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.45, ease: EASE }}>
                  <div className="mt-4 text-xl font-medium">{t.name}</div>
                  <div className="text-[15px] text-black/60">{t.company}</div>
                  <blockquote className="mt-10 text-[clamp(1.35rem,2.3vw,2.1rem)] leading-[1.3]">
                    “{t.quote} <span className="serif">{t.highlight}”</span>
                  </blockquote>
                </motion.div>
              </AnimatePresence>
              <div className="mt-auto flex justify-end gap-2 pt-8">
                {[-1, 1].map((d) => (
                  <Button
                    key={d}
                    onClick={() => go(d)}
                    aria-label={d < 0 ? "Avis précédent" : "Avis suivant"}
                    size="icon-xl"
                    className="rounded-full border-none bg-brand before:rounded-full hover:bg-brand-shift [:hover,[data-pressed]]:bg-primary"
                  >
                    {d < 0 ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const it0 = (name: string) => name[0];
