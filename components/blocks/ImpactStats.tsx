"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { MousePointer2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { malt, testimonials } from "@/lib/content";
import { EASE } from "./kit";

type Chip = { text: React.ReactNode; className: string; rotate: number; x: string; y: string; delay: number };

function Num({ to, prefix = "", suffix = "", decimals = 0 }: { to: number; prefix?: string; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`);
  useEffect(() => {
    if (inView) animate(mv, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
  }, [inView, mv, to]);
  return <motion.span ref={ref}>{text}</motion.span>;
}

const Avatar = ({ l }: { l: string }) => (
  <span className="-ml-2 grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-dark text-[11px] font-medium text-white first:ml-0">{l}</span>
);

const columns: { num: React.ReactNode; title: string; text: string; chips: Chip[] }[] = [
  {
    num: <Num to={malt.projects} prefix="+" />,
    title: "Projets livrés",
    text: "Des boutiques Shopify lancées, refondues ou optimisées",
    chips: [
      { text: "Ophtalmic", className: "bg-white text-dark", rotate: -12, x: "0%", y: "18%", delay: 0 },
      { text: "Rosebaie", className: "bg-white text-dark", rotate: 10, x: "46%", y: "0%", delay: 0.12 },
      { text: "Uniikon", className: "bg-[#7b5cff] text-white", rotate: -10, x: "62%", y: "22%", delay: 0.24 },
    ],
  },
  {
    num: <Num to={5} decimals={1} suffix="/5" />,
    title: "Note moyenne sur Malt",
    text: `Sur plus de ${malt.reviews} avis clients 5 étoiles`,
    chips: malt.scores.map((s, k) => ({
      text: (
        <span className="flex flex-col leading-tight">
          <span className="text-lg font-semibold">{s.value}</span>
          <span className="text-[11px] opacity-70">{s.label}</span>
        </span>
      ),
      className: "bg-[#222] text-white",
      rotate: [-8, 3, 6][k],
      x: ["0%", "34%", "56%"][k],
      y: ["20%", "0%", "26%"][k],
      delay: 0.12 * k,
    })),
  },
  {
    num: <Num to={12} suffix="h" />,
    title: "Délai de réponse moyen",
    text: "Un interlocuteur réactif, du devis au support",
    chips: [
      {
        text: (
          <span className="flex items-center gap-3">
            <span className="flex">
              {testimonials.slice(0, 3).map((t) => (
                <Avatar key={t.name} l={t.name[0]} />
              ))}
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-semibold">{malt.reviews}+</span>
              <span className="text-[10px] font-semibold uppercase">avis 5★</span>
            </span>
          </span>
        ),
        className: "bg-white text-dark",
        rotate: 0,
        x: "40%",
        y: "10%",
        delay: 0.1,
      },
    ],
  },
];

// Huge grey figures with tilted chips that drop in and float.
export default function ImpactStats() {
  return (
    <section className="relative overflow-x-clip py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2"
        style={{ background: "radial-gradient(ellipse 80% 90% at 90% 50%, rgba(50,90,230,.8), rgba(30,50,160,.3) 45%, transparent 75%)" }}
      />
      <div className="container-x relative grid gap-16 md:grid-cols-3 md:gap-8">
        {columns.map((c, i) => (
          <div key={c.title} className="text-center md:text-left">
            {/* On phones the figure is centered and the chips float around it. */}
            <div className="relative mx-auto max-w-[340px] pt-16 md:max-w-none">
              {c.chips.map((ch, k) => (
                <motion.span
                  key={k}
                  className={`absolute z-10 inline-flex items-center rounded-[20px] px-5 py-2.5 text-[15px] font-semibold shadow-xl ${ch.className}`}
                  style={{ left: ch.x, top: ch.y }}
                  initial={{ opacity: 0, y: -40, rotate: ch.rotate * 2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: ch.rotate }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ type: "spring", stiffness: 140, damping: 12, delay: 0.3 + ch.delay + i * 0.1 }}
                >
                  <motion.span animate={{ y: [0, -6, 0] }} transition={{ duration: 4 + k, repeat: Infinity, ease: "easeInOut" }}>
                    {ch.text}
                  </motion.span>
                </motion.span>
              ))}
              {i === 2 && (
                <motion.span
                  className="absolute left-[78%] top-[54%] z-20 text-white"
                  initial={{ opacity: 0, x: 20, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.8 }}
                >
                  <MousePointer2 size={30} fill="#141515" />
                </motion.span>
              )}
              <div className={`text-[clamp(5rem,10vw,9.5rem)] font-medium leading-none tracking-[-0.04em] ${i === 2 ? "text-white/60" : "text-white/50"}`}>{c.num}</div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}>
              <div className="mt-8 text-xl font-medium">{c.title}</div>
              <p className="mx-auto mt-2 max-w-xs text-[17px] leading-relaxed text-white/60 md:mx-0">{c.text}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
