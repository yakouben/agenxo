import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaButton from "@/components/CtaButton";
import CtaSection from "@/components/CtaSection";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { Crumbs, PostCard, SectionHead } from "@/components/sections";
import { blogPosts, formatDate } from "@/lib/blog";
import { brand, siteUrl } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const p = blogPosts.find((x) => x.slug === slug);
  if (!p) return { title: `Article | ${brand.name}` };
  return {
    title: `${p.metaTitle} | ${brand.name}`,
    description: p.description,
    keywords: p.keywords,
    authors: [{ name: p.author }],
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      type: "article",
      title: p.metaTitle,
      description: p.description,
      url: `/blog/${p.slug}`,
      siteName: brand.name,
      locale: "fr_FR",
      publishedTime: p.published,
      modifiedTime: p.updated,
      authors: [p.author],
      images: [{ url: p.image, alt: p.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: p.metaTitle, description: p.description, images: [p.image] },
  };
}

const anchor = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = blogPosts.find((x) => x.slug === slug);
  if (!post) notFound();
  // Same topic first, then the most recent, for stronger internal linking.
  const more = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.topic === post.topic) - Number(a.topic === post.topic) || b.published.localeCompare(a.published))
    .slice(0, 3);
  const url = `${siteUrl}/blog/${post.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              image: `${siteUrl}${post.image}`,
              datePublished: post.published,
              dateModified: post.updated,
              inLanguage: "fr-FR",
              keywords: post.keywords.join(", "),
              mainEntityOfPage: url,
              author: { "@type": "Person", name: post.author, jobTitle: brand.founderRole, url: `${siteUrl}/a-propos` },
              publisher: { "@type": "Organization", name: brand.name, url: siteUrl, logo: { "@type": "ImageObject", url: `${siteUrl}${brand.logo}` } },
            },
            {
              "@type": "FAQPage",
              mainEntity: post.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
                { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
                { "@type": "ListItem", position: 3, name: post.title, item: url },
              ],
            },
          ],
        }}
      />

      <section className="relative overflow-x-clip pb-14 pt-32 sm:pt-40">
        <div className="glow glow-violet glow-drift left-1/4 top-0 h-[520px] w-[700px] opacity-60" />
        <div className="container-x relative">
          <Crumbs items={[{ label: "Accueil", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.topic }]} />
          <h1 className="t-h1 reveal-title mt-6 max-w-4xl">{post.title}</h1>
          <div className="reveal mt-8 flex flex-wrap items-center gap-3 text-sm text-white/60">
            <span className="chip">{post.topic}</span>
            <time dateTime={post.published}>{formatDate(post.published)}</time>
            <span>·</span>
            <span>{post.readTime} de lecture</span>
            {post.updated !== post.published && (
              <>
                <span>·</span>
                <span>
                  Mis à jour le <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                </span>
              </>
            )}
          </div>
        </div>
      </section>

      <article className="bg-white py-14 text-dark sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="min-w-0 max-w-3xl">
            <div className="flex items-center gap-4 border-b border-black/10 pb-8">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-paper">
                <Image src={brand.founderPhoto} alt={post.author} fill sizes="48px" className="object-cover" />
              </div>
              <div>
                <div className="font-medium">{post.author}</div>
                <div className="text-xs text-black/55">{brand.founderRole}</div>
              </div>
            </div>
            <p className="mt-10 text-xl leading-relaxed text-black/75">{post.excerpt}</p>
            <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-3xl bg-paper">
              <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width:1024px) 60vw, 100vw" className="object-cover" priority />
            </div>

            {post.sections.map((s) => (
              <section key={s.heading} id={anchor(s.heading)} className="scroll-mt-28">
                <h2 className="mt-14 text-[clamp(1.6rem,2.6vw,2rem)] font-medium leading-tight tracking-tight">{s.heading}</h2>
                {s.body.map((para, k) => (
                  <p key={k} className="mt-4 text-[17px] leading-[1.75] text-black/75">
                    {para}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-5 space-y-3">
                    {s.list.map((li) => (
                      <li key={li} className="flex gap-3 text-[17px] leading-relaxed text-black/75">
                        <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Internal links */}
            <div className="mt-14 rounded-3xl bg-paper p-6 sm:p-8">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-black/50">Pour aller plus loin</div>
              <ul className="mt-4 space-y-3">
                {post.related.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      {...(r.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                      className="group flex items-center justify-between gap-4 border-b border-black/10 pb-3 font-medium"
                    >
                      {r.label}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <section id="faq-article" className="mt-14 scroll-mt-28 rounded-3xl bg-dark p-6 text-white sm:p-8">
              <h2 className="text-[clamp(1.6rem,2.6vw,2rem)] font-medium tracking-tight">Questions fréquentes</h2>
              <div className="mt-6">
                <Faq items={post.faq} />
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="Sommaire" className="rounded-3xl bg-paper p-6">
              <div className="font-medium">Sommaire</div>
              <ol className="mt-4 space-y-3 text-sm">
                {post.sections.map((s, k) => (
                  <li key={s.heading}>
                    <a href={`#${anchor(s.heading)}`} className="flex gap-3 text-black/65 hover:text-black">
                      <span className="text-black/35">{String(k + 1).padStart(2, "0")}</span>
                      {s.heading}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#faq-article" className="flex gap-3 text-black/65 hover:text-black">
                    <span className="text-black/35">{String(post.sections.length + 1).padStart(2, "0")}</span>
                    Questions fréquentes
                  </a>
                </li>
              </ol>
            </nav>
            <div className="mt-4 rounded-3xl bg-dark p-6 text-white">
              <div className="text-lg font-medium">Un projet Shopify ?</div>
              <p className="mt-2 text-sm text-white/65">Devis gratuit, réponse en moins de 12h.</p>
              <div className="mt-5">
                <CtaButton href="/#contact">Demander un devis</CtaButton>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="À lire aussi" title={<>Articles <span className="serif">similaires</span></>} />
          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
            {more.map((p, i) => (
              <PostCard key={p.slug} post={p} i={i} />
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
