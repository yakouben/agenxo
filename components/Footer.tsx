import Image from "next/image";
import Link from "next/link";
import { brand, footerLinks, socials } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line pb-8 pt-16 sm:pt-20">
      <div className="glow glow-blue left-1/2 top-0 h-[360px] w-[min(900px,100%)] -translate-x-1/2 opacity-30" />
      <div className="container-x relative">
        <div className="grid gap-10 border-b border-line pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src={brand.logo} alt={brand.name} width={130} height={44} className="h-8 w-auto" />
            <p className="t-body mt-5 max-w-xs">Agence Shopify experte — du concept au succès, de la boutique basique au store ultra-personnalisé.</p>
            <a href={`mailto:${brand.email}`} className="mt-6 block text-xl font-medium hover:text-lime">
              {brand.email}
            </a>
            <a href={brand.whatsappUrl} className="mt-2 block text-sm text-white/60 hover:text-lime">
              WhatsApp {brand.whatsapp}
            </a>
          </div>
          {footerLinks.map((col) => (
            <div key={col.title}>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-white/40">{col.title}</div>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white/75 transition-colors hover:text-lime">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 py-8 sm:grid-cols-4">
          {[
            { big: <Image src={brand.badge} alt="Super Malter" width={120} height={60} className="h-9 w-auto" />, label: "Super Malter 3" },
            { big: "100+", label: "Projets livrés" },
            { big: "6+", label: "Ans d'expérience" },
            { big: "7j/7", label: "Support" },
          ].map((b) => (
            <div key={b.label} className="card flex flex-col items-center justify-center gap-2 px-4 py-6 text-center">
              <div className="text-2xl font-medium">{b.big}</div>
              <div className="text-xs text-white/60">{b.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 border-t border-line pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-white">Confidentialité</Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="chip transition-colors hover:bg-white hover:text-dark">
                {s.label}
              </a>
            ))}
          </div>
          <span>© 2016–{new Date().getFullYear()} {brand.name}</span>
        </div>
      </div>
    </footer>
  );
}
