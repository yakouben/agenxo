"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const REVEAL = ".reveal, .reveal-title, .reveal-img";

// Scrolls to a section id (or the top) through Lenis when it is running.
function scrollToTarget(lenis: Lenis | null, id: string | null, immediate = false) {
  const el = id ? document.getElementById(id) : null;
  if (id && !el) return false;
  if (lenis) {
    lenis.scrollTo(el ?? 0, { immediate, duration: immediate ? undefined : 1.4 });
  } else {
    const top = el ? el.getBoundingClientRect().top + window.scrollY : 0;
    window.scrollTo({ top, behavior: immediate ? "auto" : "smooth" });
  }
  return true;
}

// Smooth scroll (Lenis), in-page anchor navigation, scroll-triggered reveals and [data-parallax] offsets.
export default function Motion() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      lenisRef.current = new Lenis({ lerp: 0.1, smoothWheel: true });
    }
    const lenis = lenisRef.current;
    let raf = 0;
    const loop = (t: number) => {
      lenis?.raf(t);
      raf = requestAnimationFrame(loop);
    };
    if (lenis) raf = requestAnimationFrame(loop);

    // Links to a section of the current page glide there instead of routing,
    // which is what makes the home page read as one continuous page.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || a.target === "_blank") return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search) return;
      const id = url.hash.slice(1) || null;
      const top = !id || id === "accueil";
      if (!scrollToTarget(lenisRef.current, top ? null : decodeURIComponent(id!))) return;
      e.preventDefault();
      history.replaceState(history.state, "", top ? url.pathname : url.hash);
    };
    document.addEventListener("click", onClick, true);

    return () => {
      document.removeEventListener("click", onClick, true);
      cancelAnimationFrame(raf);
      lenis?.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    // Arriving from another page on /#section lands on that section.
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id || !scrollToTarget(lenisRef.current, id, true)) lenisRef.current?.scrollTo(0, { immediate: true });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll(REVEAL).forEach((el) => {
      if (el.classList.contains("in")) return;
      // Anything already on screen reveals right away.
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("in");
      else io.observe(el);
    });

    const items = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        for (const el of items) {
          const r = el.getBoundingClientRect();
          if (r.bottom < 0 || r.top > vh) continue;
          const speed = Number(el.dataset.parallax) || 0.1;
          const offset = (r.top + r.height / 2 - vh / 2) * -speed;
          el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
        }
      });
    };
    if (items.length && window.innerWidth >= 768) {
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
