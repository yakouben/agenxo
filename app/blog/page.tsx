import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogFeed from "@/components/BlogFeed";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { Crumbs } from "@/components/sections";
import { blogPosts, formatDate, topics } from "@/lib/blog";
import { brand, siteUrl } from "@/lib/content";

const title = "Blog Shopify : conversion, SEO et croissance e-commerce";
const description =
  "Les conseils d'une agence Shopify experte : augmenter son taux de conversion, réussir sa création ou sa refonte Shopify, se positionner sur Google et faire grandir sa marque.";

export const metadata: Metadata = {
  title: `${title} | ${brand.name}`,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { type: "website", title, description, url: "/blog", siteName: brand.name, locale: "fr_FR" },
};

const posts = [...blogPosts].sort((a, b) => b.published.localeCompare(a.published));

export default function BlogPage() {
  const [lead, ...rest] = posts;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `Blog ${brand.name}`,
          description,
          url: `${siteUrl}/blog`,
          publisher: { "@type": "Organization", name: brand.name, url: siteUrl },
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${siteUrl}/blog/${p.slug}`,
            datePublished: p.published,
            dateModified: p.updated,
          })),
        }}
      />
      <section className="relative overflow-x-clip pb-12 pt-32 sm:pt-40">
        <div className="glow glow-violet glow-drift right-0 top-0 h-[520px] w-[800px] opacity-50" />
        <div className="container-x relative">
          <Crumbs items={[{ label: "Accueil", href: "/" }, { label: "Blog" }]} />
          <h1 className="t-h1 reveal-title mt-6 max-w-4xl">
            Le blog Shopify pour les marques qui veulent <span className="serif">vendre plus</span>
          </h1>
          <p className="t-lead reveal mt-6 max-w-2xl">{description}</p>

          {/* Latest article, featured */}
          <Link href={`/blog/${lead.slug}`} className="reveal group mt-12 grid gap-6 rounded-[28px] border border-white/[0.08] bg-[#141414] p-4 sm:p-6 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-10">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-card">
              <Image src={lead.image} alt={lead.imageAlt} fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" priority />
            </div>
            <div className="pb-2 lg:pr-4">
              <div className="flex flex-wrap items-center gap-3 text-xs text-white/55">
                <span className="chip">{lead.topic}</span>
                <time dateTime={lead.published}>{formatDate(lead.published)}</time>
                <span>· {lead.readTime}</span>
              </div>
              <h2 className="t-h3 mt-5 !text-[clamp(1.5rem,2.4vw,2.1rem)] leading-tight transition-colors group-hover:text-white/80">{lead.title}</h2>
              <p className="t-body mt-4">{lead.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                Lire l&apos;article <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>
      <section className="section-tight">
        <div className="container-x">
          <h2 className="sr-only">Tous les articles</h2>
          <BlogFeed posts={rest} topics={topics} />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
