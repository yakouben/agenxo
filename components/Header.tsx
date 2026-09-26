"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { catalogServices, serviceColumns, solutions } from "@/lib/catalog";
import { brand, homeSections, nav } from "@/lib/content";
import { useActiveSection } from "@/lib/useActiveSection";
import CtaButton from "./CtaButton";

const sectionIds = homeSections.map((s) => s.id);

type Menu = "services" | null;

export default function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<Menu>(null);
  const [mobile, setMobile] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close menus on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenu(null);
    setMobile(false);
  }

  // Hide on scroll down, reveal on scroll up.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 240 && y > lastY.current + 4);
      if (y < lastY.current - 4 || y < 240) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  const open = (m: Menu) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(m);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMenu(null), 140);
  };
  // On the home page the active item follows the scroll; elsewhere it follows the route.
  const home = pathname === "/";
  const section = useActiveSection(sectionIds, home);
  const isActive = (href: string) => {
    const id = href.split("#")[1];
    if (!id) return pathname === href || pathname.startsWith(`${href}/`);
    return home ? section === id : pathname === `/${id}` || pathname.startsWith(`/${id}/`);
  };
  const closeAll = () => {
    setMenu(null);
    setMobile(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-transform duration-500 sm:px-4 sm:pt-4 ${
          hidden && !menu && !mobile ? "-translate-y-[130%]" : ""
        }`}
      >
        <div
          className={`glass mx-auto flex h-14 max-w-[1240px] items-center justify-between rounded-full pl-5 pr-2 transition-[background-color] duration-300 sm:h-16 sm:pl-6 ${
            scrolled || menu ? "!bg-[rgba(18,18,20,0.78)]" : ""
          }`}
          onMouseLeave={scheduleClose}
        >
          <Link href="/" aria-label={brand.name} className="shrink-0" onClick={closeAll}>
            <Image src={brand.logo} alt={brand.name} width={110} height={37} className="h-6 w-auto sm:h-7" priority />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const on = isActive(item.href);
              const expanded = item.dropdown && menu === item.dropdown;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => (item.dropdown ? open(item.dropdown) : setMenu(null))}
                  onFocus={() => item.dropdown && open(item.dropdown)}
                  onClick={() => setMenu(null)}
                  aria-current={on ? "true" : undefined}
                  className="relative flex items-center gap-1.5 rounded-full px-4 py-2 text-[14px] font-medium"
                >
                  {(on || expanded) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                  {item.dropdown && (
                    <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden className={`relative transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>
                      <path d="M1 1l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.4" />
                    </svg>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <CtaButton href="/#contact" size="sm" onClick={closeAll}>
                Contact
              </CtaButton>
            </div>
            <button
              aria-label={mobile ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobile}
              onClick={() => setMobile((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 lg:hidden"
            >
              <span className="relative block h-3 w-[18px]">
                <span className={`absolute left-0 h-[1.5px] w-full bg-white transition-all duration-300 ${mobile ? "top-[5px] rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-[1.5px] w-full bg-white transition-all duration-300 ${mobile ? "top-[5px] -rotate-45" : "top-[10px]"}`} />
              </span>
            </button>
          </div>
        </div>

        {/* Desktop mega menus */}
        <div
          className={`mx-auto hidden max-w-[1240px] pt-2 transition-all duration-300 lg:block ${
            menu ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-2 opacity-0"
          }`}
          onMouseEnter={() => closeTimer.current && clearTimeout(closeTimer.current)}
          onMouseLeave={scheduleClose}
        >
          {menu === "services" && (
            <div className="glass grid grid-cols-[1fr_2.4fr] gap-2 rounded-[28px] !bg-[rgba(18,18,20,0.9)] p-2">
              <div className="flex flex-col gap-2">
                {solutions.map((s) => (
                  <Link key={s.slug} href={`/solutions/${s.slug}`} onClick={closeAll} className="group flex-1 rounded-[20px] bg-white/[0.04] p-5 transition-colors hover:bg-white/[0.09]">
                    <div className="text-[11px] uppercase tracking-wider text-white/50">{s.audience}</div>
                    <div className="mt-2 font-medium group-hover:text-lime">{s.name}</div>
                    <p className="mt-1 text-[13px] leading-snug text-white/60">{s.short}</p>
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2 rounded-[20px] bg-white p-2 text-dark">
                {serviceColumns.map((col) => (
                  <div key={col} className="rounded-2xl bg-paper p-4">
                    <div className="px-1 pb-2 text-[15px] font-semibold">{col}</div>
                    {catalogServices
                      .filter((s) => s.column === col)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          onClick={closeAll}
                          className="group flex items-center justify-between border-t border-black/[0.07] px-1 py-3 text-[13px] font-medium"
                        >
                          <span className="transition-transform duration-300 group-hover:translate-x-1">{s.name}</span>
                          <span className="text-black/40 transition-all duration-300 group-hover:-rotate-45 group-hover:text-black">↘</span>
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-40 bg-ink/95 backdrop-blur-xl transition-opacity duration-300 lg:hidden ${
          mobile ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-4 pb-8 pt-24">
          <ol className="border-t border-line">
            {nav.map((n, i) => (
              <li key={n.href} className="border-b border-line">
                <Link
                  href={n.href}
                  onClick={closeAll}
                  className={`flex items-baseline gap-4 py-4 text-2xl font-medium transition-colors ${isActive(n.href) ? "text-lime" : ""}`}
                >
                  <span className="code-mark w-6">{String(i + 1).padStart(2, "0")}</span>
                  {n.label}
                </Link>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <MobileGroup title="Tous les services">
              {catalogServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} onClick={closeAll} className="block py-2 text-white/75">
                  {s.name}
                </Link>
              ))}
            </MobileGroup>
            <MobileGroup title="Solutions">
              {solutions.map((s) => (
                <Link key={s.slug} href={`/solutions/${s.slug}`} onClick={closeAll} className="block py-2 text-white/75">
                  {s.name}
                </Link>
              ))}
            </MobileGroup>
            <MobileGroup title="Blog & agence">
              {[
                { label: "Tous les projets", href: "/projets" },
                { label: "À propos", href: "/a-propos" },
                { label: "Blog", href: "/blog" },
              ].map((l) => (
                <Link key={l.href} href={l.href} onClick={closeAll} className="block py-2 text-white/75">
                  {l.label}
                </Link>
              ))}
            </MobileGroup>
          </div>
          <div className="mt-auto pt-8">
            <CtaButton href="/#contact" onClick={closeAll} full>
              Démarrer un projet
            </CtaButton>
            <a href={`mailto:${brand.email}`} className="mt-4 block text-center text-sm text-white/60">
              {brand.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileGroup({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line">
      <button onClick={() => setOpen((v) => !v)} aria-expanded={open} className="flex w-full items-center justify-between py-4 text-base font-medium text-white/80">
        {title}
        <span className={`grid h-8 w-8 place-items-center rounded-full bg-white/10 text-base transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-400 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="pb-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
