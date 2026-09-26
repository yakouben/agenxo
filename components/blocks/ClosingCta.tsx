"use client";

import { motion } from "motion/react";
import CtaButton from "@/components/CtaButton";
import { malt } from "@/lib/content";
import { EASE, Laurel, Stars } from "./kit";

const badges = [
  { top: <span className="text-lg font-semibold tracking-tight sm:text-3xl">malt</span>, text: [`${malt.reviews}+ avis 5 étoiles`, "sur Malt"] },
  { top: <span className="text-lg font-semibold tracking-tight sm:text-3xl">Supermalter</span>, text: ["Moins de 5 % des", "freelances distingués"] },
  { top: <span className="text-lg font-semibold tracking-tight sm:text-3xl">Shopify</span>, text: ["Expert Shopify", "& Shopify Plus"] },
  { top: <span className="text-lg font-semibold tracking-tight sm:text-3xl">{malt.projects}+</span>, text: ["Projets livrés", "en France et ailleurs"] },
];

export default function ClosingCta({ title = "Prêt à faire décoller votre boutique ?" }: { title?: string }) {
  return (
    <section className="relative overflow-x-clip pb-20 pt-16 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(40,40,160,.55), transparent 75%)" }}
      />
      <div className="container-x relative">
        <motion.div
          className="relative overflow-hidden rounded-[32px] bg-white px-6 py-16 text-center text-dark sm:rounded-[40px] sm:py-24"
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: EASE }}
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute right-[-8%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(205,170,255,.75), transparent 65%)" }}
            animate={{ scale: [1, 1.12, 1], x: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <h2 className="relative mx-auto max-w-3xl text-[clamp(2.5rem,6vw,5.25rem)] font-medium leading-[1.02] tracking-[-0.03em]">{title}</h2>
          <p className="relative mx-auto mt-6 max-w-md text-[17px] leading-relaxed text-black/75">
            Un appel gratuit pour clarifier votre projet et repartir avec des conseils concrets, applicables tout de suite.
          </p>
          <div className="relative mt-10">
            <CtaButton href="/#contact" surface="light">
              Réserver un appel
            </CtaButton>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {badges.map((b, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 * i }}
            >
              <div className="flex items-center gap-1 text-white sm:gap-2 [&_svg:first-child]:max-sm:h-12">
                <Laurel />
                <div className="flex flex-col items-center">
                  {b.top}
                  <Stars size={11} className="mt-1" />
                </div>
                <Laurel flip />
              </div>
              <p className="mt-4 text-sm leading-snug text-white/85">
                {b.text[0]}
                <br />
                {b.text[1]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
