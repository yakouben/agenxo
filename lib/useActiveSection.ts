"use client";

import { useEffect, useState } from "react";

// Scroll-spy: returns the id of the last section whose top has crossed 40% of the viewport.
export function useActiveSection(ids: string[], enabled = true) {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    if (!enabled) return;
    const list = key.split(",");
    let frame = 0;
    const read = () => {
      const line = window.innerHeight * 0.4;
      let current: string | null = null;
      for (const id of list) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // Bottom of the page always belongs to the last section.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = list[list.length - 1];
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [key, enabled]);

  return enabled ? active : null;
}
