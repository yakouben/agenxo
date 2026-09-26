import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// One button language for the whole site, built on components/ui/button:
// a pill label joined to a round arrow bubble. On hover the arrow slides
// out as a second one slides in, and the brand gradient gives way to white
// (or to dark on light surfaces, where white would disappear).
//  - tone "primary": gradient label, for main actions
//  - tone "ghost": outlined label, for secondary actions
type Tone = "primary" | "ghost";
type Size = "md" | "sm";
type Surface = "dark" | "light";

type FaceProps = { children: React.ReactNode; tone?: Tone; size?: Size; surface?: Surface; full?: boolean };

const sizes: Record<Size, { label: string; bubble: string }> = {
  md: { label: "h-12 px-6 text-[15px] sm:px-7", bubble: "size-12" },
  sm: { label: "h-10 px-5 text-[14px]", bubble: "size-10" },
};

// The shadcn Button supplies focus ring, a11y and touch target; these classes
// strip its default box so the two brand shapes can be drawn inside it.
const shell =
  "group gap-0 h-auto rounded-full border-none bg-transparent p-0 font-normal shadow-none not-disabled:inset-shadow-none before:hidden [:hover,[data-pressed]]:bg-transparent";

function Face({ children, tone = "primary", size = "md", surface = "dark", full = false }: FaceProps) {
  const s = sizes[size];
  const hover =
    surface === "light"
      ? "group-hover:bg-dark group-hover:text-white"
      : "group-hover:bg-secondary group-hover:text-secondary-foreground";
  // Gradient layer that fades out on hover, revealing the solid hover colour underneath.
  const sheen = <span aria-hidden className="absolute inset-0 rounded-full bg-brand transition-opacity duration-500 ease-in-out group-hover:opacity-0" />;

  return (
    <>
      <span
        className={`relative flex items-center overflow-hidden rounded-full font-medium transition-colors duration-500 ease-in-out ${s.label} ${
          tone === "primary"
            ? `bg-primary text-primary-foreground ${hover}`
            : `border border-current/20 bg-white/[0.04] text-current group-hover:border-transparent ${hover}`
        } ${full ? "flex-1 justify-center" : ""}`}
      >
        {tone === "primary" && sheen}
        <span className="relative">{children}</span>
      </span>
      <span
        className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary text-primary-foreground transition-colors duration-500 ease-in-out ${s.bubble} ${hover}`}
      >
        {sheen}
        <ArrowUpRight className="!mx-0 absolute size-5 opacity-100 transition-transform duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
        <ArrowUpRight className="!mx-0 absolute size-5 -translate-x-10 translate-y-10 opacity-100 transition-transform duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </>
  );
}

type LinkProps = Omit<FaceProps, "tone"> & { href: string; onClick?: () => void };

export default function CtaButton({ href, onClick, full, ...face }: LinkProps) {
  return (
    <Button render={<Link href={href} onClick={onClick} />} className={`${shell} ${full ? "flex w-full" : ""}`}>
      <Face full={full} {...face} />
    </Button>
  );
}

export function GhostButton({ href, onClick, full, ...face }: LinkProps) {
  return (
    <Button render={<Link href={href} onClick={onClick} />} className={`${shell} ${full ? "flex w-full" : ""}`}>
      <Face tone="ghost" full={full} {...face} />
    </Button>
  );
}

export function SubmitButton({ full, ...face }: Omit<FaceProps, "tone">) {
  return (
    <Button type="submit" className={`${shell} ${full ? "flex w-full" : ""}`}>
      <Face full={full} {...face} />
    </Button>
  );
}

// Opens a project's live website in a new tab.
export function SiteButton({ href, full, children = "Voir le site", ...face }: Omit<LinkProps, "onClick" | "children"> & { children?: React.ReactNode }) {
  return (
    <Button render={<a href={href} target="_blank" rel="noopener noreferrer" />} className={`${shell} ${full ? "flex w-full" : ""}`}>
      <Face tone="ghost" full={full} {...face}>
        {children}
      </Face>
    </Button>
  );
}
