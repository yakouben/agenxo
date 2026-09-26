// Built using Hyperiux Vault (Linear-to-Orbit Edition), adapted for Agenxo:
// local project images, dark theme, French copy, next/image.
"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const SCATTER_START = 0.12;
const SCATTER_END = 0.85;
const PARALLAX_INTENSITY = 2.8;
const SPRING_CONFIG = { stiffness: 80, damping: 22, mass: 0.7 };
const PROGRESS_SPRING = { stiffness: 100, damping: 30, restDelta: 0.0001 };

// Card layout: start in a fanned line, end scattered around the headline.
const LAYOUT: Omit<StackSpreadCard, "item">[] = [
  { linearOffset: { x: -35, y: 0 }, linearRotate: -5, target: { x: -22, y: -36, rotate: -4, scale: 0.68, w: 16, h: 21 }, targetSm: { x: -22, y: -40 }, z: 2 },
  { linearOffset: { x: -25, y: 0 }, linearRotate: -3, target: { x: 34, y: -32, rotate: 6, scale: 0.88, w: 17, h: 30 }, targetSm: { x: 22, y: -40 }, z: 3 },
  { linearOffset: { x: -15, y: 0 }, linearRotate: -1, target: { x: -38, y: -4, rotate: -2, scale: 0.88, w: 14, h: 30 }, targetSm: { x: -22, y: -19 }, z: 4 },
  { linearOffset: { x: -5, y: 0 }, linearRotate: 1, target: { x: 4, y: -34, rotate: 3, scale: 0.78, w: 24, h: 28 }, targetSm: { x: 22, y: -19 }, z: 5 },
  { linearOffset: { x: 5, y: 0 }, linearRotate: 2, target: { x: 38, y: 8, rotate: -3, scale: 0.78, w: 17, h: 30 }, targetSm: { x: -22, y: 20 }, z: 6 },
  { linearOffset: { x: 15, y: 0 }, linearRotate: 3, target: { x: -26, y: 36, rotate: 5, scale: 0.88, w: 21, h: 24 }, targetSm: { x: 22, y: 20 }, z: 7 },
  { linearOffset: { x: 25, y: 0 }, linearRotate: 4, target: { x: 2, y: 38, rotate: -2, scale: 0.78, w: 19, h: 25 }, targetSm: { x: -22, y: 40 }, z: 8 },
  { linearOffset: { x: 35, y: 0 }, linearRotate: 5, target: { x: 32, y: 36, rotate: 4, scale: 0.88, w: 15, h: 19 }, targetSm: { x: 22, y: 40 }, z: 9 },
];

const RESPONSIVE = {
  desktop: { scale: null as number | null, small: false, colX: null as number | null, card: null as { w: number; h: number } | null },
  small: { scale: 0.72, small: true, colX: 22, card: { w: 40, h: 20 } },
};

function useResponsive() {
  const [r, setR] = useState(RESPONSIVE.desktop);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse), (max-width: 767px)");
    const read = () => setR(mq.matches ? RESPONSIVE.small : RESPONSIVE.desktop);
    read();
    mq.addEventListener("change", read);
    return () => mq.removeEventListener("change", read);
  }, []);
  return r;
}

function usePointerParallax(active: boolean, enabled: boolean) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, SPRING_CONFIG);
  const y = useSpring(rawY, SPRING_CONFIG);

  useEffect(() => {
    if (!enabled) return;
    if (!active) {
      rawX.set(0);
      rawY.set(0);
      return;
    }
    const onMove = (event: PointerEvent) => {
      rawX.set((event.clientX / window.innerWidth - 0.5) * 2);
      rawY.set((event.clientY / window.innerHeight - 0.5) * 2);
    };
    const onLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [active, enabled, rawX, rawY]);

  return { x, y };
}

export interface StackSpreadItem {
  src: string;
  alt?: string;
  // Logos sit centred on a dark card instead of filling it.
  logo?: boolean;
}

export interface StackSpreadTarget {
  x: number;
  y: number;
  rotate: number;
  scale?: number;
  w: number;
  h: number;
}

export interface StackSpreadCard {
  item: StackSpreadItem;
  target: StackSpreadTarget;
  targetSm?: { x: number; y: number };
  linearRotate?: number;
  linearOffset?: { x: number; y: number };
  z?: number;
}

function Card({
  card,
  progress,
  reduce,
  scaleMul,
  isSmall,
  colX,
  fixedCard,
  stackScale,
  cardRadius,
  pointer,
  index,
  total,
  isSpreadActive,
}: {
  card: StackSpreadCard;
  progress: MotionValue<number>;
  reduce: boolean | null;
  scaleMul: number | null;
  isSmall: boolean;
  colX: number | null;
  fixedCard: { w: number; h: number } | null;
  stackScale: number;
  cardRadius: number;
  pointer: { x: MotionValue<number>; y: MotionValue<number> };
  index: number;
  total: number;
  isSpreadActive: boolean;
}) {
  const { item, target } = card;
  const flat = reduce === true;
  const linearRotate = flat ? 0 : (card.linearRotate ?? 0);
  const linearOffset = card.linearOffset ?? { x: 0, y: 0 };
  const restScale = scaleMul ?? target.scale ?? 1;

  const sm = isSmall && card.targetSm ? card.targetSm : null;
  const endX = sm ? (colX != null ? Math.sign(sm.x) * colX : sm.x) : target.x;
  const endY = sm ? sm.y : target.y;
  const endRotate = flat || isSmall ? 0 : target.rotate;
  const depthFactor = 0.5 + (index / (total - 1 || 1)) * 0.7;

  const translate = useTransform([progress, pointer.x, pointer.y], ([p, px, py]: number[]) => {
    const easeP = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
    const tx = linearOffset.x + (endX - linearOffset.x) * easeP;
    const ty = linearOffset.y + (endY - linearOffset.y) * easeP;
    const dx = tx - px * PARALLAX_INTENSITY * depthFactor * p;
    const dy = ty - py * PARALLAX_INTENSITY * depthFactor * p;
    return `calc(-50% + ${dx}vw) calc(-50% + ${dy}vh)`;
  });
  const rotate = useTransform(progress, [0, 1], [linearRotate, endRotate]);
  const scale = useTransform(progress, [0, 1], [stackScale, restScale]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 cursor-pointer will-change-transform"
      style={{
        width: `${fixedCard ? fixedCard.w : target.w}vw`,
        height: `${fixedCard ? fixedCard.h : target.h}vh`,
        zIndex: card.z ?? 1,
        translate,
        rotate,
        scale,
      }}
      whileHover={
        isSpreadActive && !isSmall
          ? { scale: restScale * 1.06, y: -12, zIndex: 100, transition: { type: "spring", stiffness: 300, damping: 20 } }
          : undefined
      }
    >
      <div
        className="relative h-full w-full overflow-hidden shadow-2xl shadow-black/60 ring-1 ring-white/15 transition-shadow duration-300 max-md:rounded-[4vw]"
        style={{ borderRadius: `${cardRadius}px` }}
      >
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-black/25 via-transparent to-white/10 opacity-70" />
        {item.logo ? (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1f] to-[#101012]">
            <div className="absolute inset-[18%]">
              <Image
                src={item.src}
                alt={item.alt ?? ""}
                fill
                sizes="(min-width:768px) 15vw, 30vw"
                draggable={false}
                className="object-contain transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        ) : (
          <Image
            src={item.src}
            alt={item.alt ?? ""}
            fill
            sizes="(min-width:768px) 25vw, 45vw"
            draggable={false}
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        )}
      </div>
    </motion.div>
  );
}

export interface StackSpreadProps {
  items: StackSpreadItem[];
  title?: React.ReactNode;
  subtitle?: string;
  hint?: string;
  scrollLength?: number;
  bgColor?: string;
  stackScale?: number;
  cardRadius?: number;
  textFadeStart?: number;
  showScrollHint?: boolean;
}

export default function StackSpread({
  items,
  title = "Du concept au succès.",
  subtitle,
  hint = "Faites défiler",
  scrollLength = 380,
  bgColor = "transparent",
  stackScale = 0.72,
  cardRadius = 16,
  textFadeStart = 0.28,
  showScrollHint = true,
}: StackSpreadProps) {
  const cards: StackSpreadCard[] = LAYOUT.map((l, i) => ({ ...l, item: items[i % items.length] }));
  const wrapRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scale: scaleMul, small: isSmall, colX, card: fixedCard } = useResponsive();

  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, PROGRESS_SPRING);
  const progress = useTransform(smoothProgress, [0, SCATTER_START, SCATTER_END, 1], [0, 0, 1, 1]);

  const [spread, setSpread] = useState(false);
  useMotionValueEvent(progress, "change", (p) => {
    setSpread((was) => (was ? p > 0.985 : p >= 0.999));
  });

  const parallaxEnabled = reduce !== true && !isSmall;
  const pointer = usePointerParallax(spread, parallaxEnabled);

  const copyOpacity = useTransform(progress, [textFadeStart, textFadeStart + 0.3], [0, 1]);
  const copyScale = useTransform(progress, [textFadeStart, 0.88], [0.9, 1]);
  const hintOpacity = useTransform(progress, [0, SCATTER_START], [1, 0]);

  return (
    <section ref={wrapRef} className="relative w-full select-none text-white" style={{ height: `${scrollLength}vh`, backgroundColor: bgColor }}>
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-70 blur-[100px]">
          <div className="h-[max(50vw,420px)] w-[max(50vw,420px)] rounded-full bg-[radial-gradient(circle,#3b3cf5_0%,#2a1c9b_45%,transparent_70%)]" />
        </div>

        <motion.div
          className="pointer-events-none absolute inset-0 z-[5] flex flex-col items-center justify-center px-8 text-center"
          style={{ opacity: copyOpacity, scale: reduce ? 1 : copyScale }}
        >
          <h2 className="t-display w-full">{title}</h2>
          {subtitle && <p className="t-lead mt-5 w-full max-w-[40ch]">{subtitle}</p>}
        </motion.div>

        <div className="absolute inset-0 z-10">
          {cards.map((card, i) => (
            <Card
              key={i}
              card={card}
              progress={progress}
              reduce={reduce}
              scaleMul={scaleMul}
              isSmall={isSmall}
              colX={colX}
              fixedCard={fixedCard}
              stackScale={stackScale}
              cardRadius={cardRadius}
              pointer={pointer}
              index={i}
              total={cards.length}
              isSpreadActive={spread}
            />
          ))}
        </div>

        {showScrollHint && (
          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-[4vh] z-20 flex flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em]"
            style={{ opacity: hintOpacity }}
          >
            <span className="opacity-75">{hint}</span>
            <div className="relative h-6 w-px overflow-hidden bg-current opacity-25">
              <motion.div
                className="absolute inset-x-0 top-0 h-full bg-current"
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
