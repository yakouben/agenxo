"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { clients, malt, testimonials } from "@/lib/content";
import { MaskLines, Stars } from "./kit";

const SHOWN = 4;

// Logo tabs on the left, white→lavender quote card on the right.
export default function ReviewsWhite() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const items = testimonials.slice(0, SHOWN);
  const go = (d: number) => setI((v) => (v + d + SHOWN) % SHOWN);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setI((v) => (v + 1) % SHOWN), 8000);
    return () => clearTimeout(id);
  }, [i, paused]);

  const t = items[i];

  return (
    <section className="relative overflow-x-clip py-24 sm:py-32">
      <div
        aria-hidden
        className="glow pointer-events-none left-[-12%] top-[-10%] h-[520px] w-[420px]"
        style={{ background: "radial-gradient(circle, rgba(70,140,255,.6), transparent 70%)" }}
      />
      <div className="container-x relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="text-[13px] font-medium uppercase tracking-wide">Avis vérifiés</div>
          <h2 className="t-h2">
            <MaskLines lines={[`${malt.reviews}+ clients 5 étoiles`, <><span key="a" className="serif">ont construit et fait grandir</span> leur</>, "boutique avec Agenxo"]} />
          </h2>
        </div>

        <div
          className="mx-auto mt-14 grid max-w-6xl gap-2 lg:grid-cols-[340px_1fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-1" role="tablist" aria-label="Clients">
            {items.map((it, k) => (
              <button
                key={it.name}
                role="tab"
                aria-selected={k === i}
                onClick={() => setI(k)}
                className={`relative grid h-20 place-items-center overflow-hidden rounded-3xl px-6 transition-colors duration-500 sm:h-[118px] ${
                  k === i ? "bg-gradient-to-br from-[#6b6b6b] to-[#3a3a3a]" : "bg-[#222] hover:bg-[#2a2a2a]"
                }`}
              >
                <span className="text-xl font-semibold tracking-tight sm:text-2xl">{it.company.split(" — ")[0]}</span>
              </button>
            ))}
          </div>

          <div className="relative flex min-h-[420px] flex-col overflow-hidden rounded-[28px] bg-gradient-to-br from-white via-[#f7f5ff] to-[#d9c6ff] p-6 text-dark sm:p-8">
            <div className="flex justify-end gap-2">
              {[-1, 1].map((d) => (
                <Button
                  key={d}
                  onClick={() => go(d)}
                  aria-label={d < 0 ? "Avis précédent" : "Avis suivant"}
                  size="icon-lg"
                    className="rounded-full border-none bg-brand before:rounded-full hover:bg-brand-shift [:hover,[data-pressed]]:bg-primary"
                >
                  {d < 0 ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                </Button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                className="mt-4 max-w-2xl text-[clamp(1.4rem,2.5vw,2.1rem)] leading-[1.3]"
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                transition={{ duration: 0.5 }}
              >
                <span className="pl-12">“{t.quote}</span> <span className="serif">{t.highlight}”</span>
              </motion.blockquote>
            </AnimatePresence>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-6 border-t border-black/10 pt-6">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-dark text-lg font-medium text-white">{t.name[0]}</span>
                <div>
                  <div className="serif text-xl">{t.name}</div>
                  <div className="text-sm text-black/60">{t.company}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-5xl font-medium">{malt.rating}</span>
                <span className="leading-tight">
                  <span className="block text-sm font-semibold">Malt</span>
                  <Stars size={11} />
                </span>
              </div>
            </div>
            {!paused && (
              <motion.div key={`bar-${i}`} className="absolute bottom-0 left-0 h-1 bg-dark/70" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 8, ease: "linear" }} />
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3 opacity-80">
          {clients.slice(0, 6).map((src) => (
            <div key={src} className="relative h-8 w-24">
              <Image src={src} alt="" fill sizes="96px" className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
