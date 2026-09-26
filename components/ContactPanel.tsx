import Image from "next/image";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { brand, malt } from "@/lib/content";

// "+213549613663" → "+213 549 61 36 63"
const prettyPhone = (n: string) => n.replace(/^(\+\d{3})(\d{3})(\d{2})(\d{2})(\d{2})$/, "$1 $2 $3 $4 $5");

// Founder card with direct contact channels. Used as the last section of the home page and on /contact.
// Frosted glass over the page backdrop: translucent fill, hairline border, a soft top highlight.
export default function ContactPanel({ heading: Heading = "h2" }: { heading?: "h1" | "h2" }) {
  const channels = [
    { label: "Email", value: brand.email, href: `mailto:${brand.email}`, Icon: Mail, external: false },
    { label: "WhatsApp", value: prettyPhone(brand.whatsapp), href: brand.whatsappUrl, Icon: MessageCircle, external: true },
  ];

  return (
    <div className="reveal relative isolate overflow-hidden rounded-[28px] border border-white/[0.12] bg-white/[0.045] p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl backdrop-saturate-150 sm:rounded-[36px] sm:p-10 lg:p-14">
      {/* Light catching the top edge of the glass. */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-2/3 bg-[radial-gradient(80%_60%_at_20%_0%,rgba(255,255,255,0.09),transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#5b34f2]/25 blur-[90px]" />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
        <div>
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-white/20 ring-offset-2 ring-offset-transparent">
              <Image src={brand.founderPhoto} alt={brand.founder} fill sizes="56px" className="object-cover" />
            </div>
            <div className="min-w-0">
              <div className="text-[17px] font-medium tracking-tight">{brand.founder}</div>
              <div className="text-[13px] text-white/55">Expert Shopify Plus</div>
            </div>
            <Image src={brand.badge} alt="Super Malter" width={160} height={160} className="ml-auto h-11 w-auto shrink-0 opacity-90" />
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] text-white/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            Réponse en moins de {malt.responseTime} · 7j/7
          </div>

          <Heading className="t-h2 mt-8">
            Parlons de votre <span className="serif">boutique</span>
          </Heading>
          <p className="t-body mt-4 max-w-sm">Devis gratuit et conseils concrets dès le premier échange.</p>
        </div>

        <ul className="divide-y divide-white/10 border-y border-white/10">
          {channels.map(({ label, value, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="group flex items-center gap-4 py-5 sm:py-6"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/80 transition-colors duration-300 group-hover:border-transparent group-hover:bg-white group-hover:text-dark">
                  <Icon size={18} strokeWidth={1.6} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-white/45">{label}</span>
                  <span className="mt-0.5 block truncate text-[17px] font-medium sm:text-lg">{value}</span>
                </span>
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.6}
                  className="shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
