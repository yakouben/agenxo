"use client";

import { useState } from "react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-line">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-b border-line">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left text-[17px] font-medium sm:text-xl"
            >
              {f.q}
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-lg transition-all duration-300 ${
                  isOpen ? "rotate-45 bg-brand" : "bg-white/10"
                }`}
              >
                +
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-500 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="t-body pb-6 pr-12">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
