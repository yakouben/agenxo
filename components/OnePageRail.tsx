"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { homeSections } from "@/lib/content";
import { useActiveSection } from "@/lib/useActiveSection";

const ids = homeSections.map((s) => s.id);

// Top progress line on every page, plus a section rail on the home page
// so the long scroll reads as one guided page rather than a stack of blocks.
export default function OnePageRail() {
  const home = usePathname() === "/";
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const active = useActiveSection(ids, home);
  const index = Math.max(0, ids.indexOf(active ?? ids[0]));

  // Drives the section-tinted page backdrop (see html[data-section] in globals.css).
  useEffect(() => {
    const root = document.documentElement;
    if (home && active) root.dataset.section = active;
    else delete root.dataset.section;
  }, [home, active]);

  return (
    <>
      <motion.div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-lime" style={{ scaleX: progress }} />

      {home && (
        <nav
          aria-label="Sections de la page"
          className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 mix-blend-difference xl:block"
        >
          <ol className="flex flex-col items-end gap-2.5">
            {homeSections.map((s, i) => {
              const on = i === index;
              return (
                <li key={s.id}>
                  <a href={`#${s.id}`} aria-current={on ? "true" : undefined} className="group flex items-center gap-3 py-0.5">
                    <span
                      className={`text-[11px] font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 ${
                        on ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-70"
                      }`}
                    >
                      {s.label}
                    </span>
                    <span
                      className={`block h-[2px] rounded-full bg-white transition-all duration-500 ${
                        on ? "w-8 opacity-100" : "w-3 opacity-40 group-hover:w-5 group-hover:opacity-80"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ol>
          <div className="mt-5 text-right text-[11px] tabular-nums tracking-[0.14em] text-white/60">
            {String(index + 1).padStart(2, "0")} / {String(ids.length).padStart(2, "0")}
          </div>
        </nav>
      )}
    </>
  );
}
