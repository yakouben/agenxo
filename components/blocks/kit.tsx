"use client";

// Small Framer Motion primitives shared by the blocks.
import { motion, type HTMLMotionProps } from "motion/react";

export const EASE = [0.2, 0.7, 0.2, 1] as const;

export function FadeUp({ delay = 0, y = 32, ...props }: HTMLMotionProps<"div"> & { delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      {...props}
    />
  );
}

// Heading that slides up from behind a mask, line by line.
export function MaskLines({ lines, className = "", delay = 0 }: { lines: React.ReactNode[]; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            initial={{ y: "105%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.7, 0, 0.2, 1], delay: delay + i * 0.1 }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Stars({ className = "", size = 14 }: { className?: string; size?: number }) {
  return (
    <span className={`inline-flex gap-1 ${className}`} aria-label="5 étoiles">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.1 1.1 6-5.3-2.9-5.3 2.9 1.1-6L1.4 7.8l6-.8z" />
        </svg>
      ))}
    </span>
  );
}

// Decorative laurel branch; mirrored for the right side.
export function Laurel({ flip = false }: { flip?: boolean }) {
  return (
    <svg width="22" height="64" viewBox="0 0 22 64" fill="none" aria-hidden className={flip ? "-scale-x-100" : ""}>
      <path d="M17 62C7 52 3 38 6 22 8 13 12 6 16 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {[10, 20, 30, 40, 50].map((y, i) => (
        <g key={y}>
          <path d={`M${6 + i * 0.6} ${y + 4}c-4-1-6-4-6-8 4 0 6 3 6 8z`} fill="currentColor" />
          <path d={`M${7 + i * 0.8} ${y + 6}c3-2 7-2 9 1-3 2-6 2-9-1z`} fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

export function MaltMark({ className = "" }: { className?: string }) {
  return <span className={`font-semibold tracking-tight ${className}`}>malt</span>;
}
