import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { catalogServices, industries, solutions } from "@/lib/catalog";
import { siteUrl } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, lastModified?: string): MetadataRoute.Sitemap[number] => ({
    url: `${siteUrl}${path}`,
    lastModified: lastModified ? new Date(lastModified) : new Date(),
    priority,
  });
  return [
    page("", 1),
    page("/blog", 0.9),
    ...blogPosts.map((p) => page(`/blog/${p.slug}`, 0.8, p.updated)),
    page("/projets", 0.8),
    page("/services", 0.8),
    ...catalogServices.map((s) => page(`/services/${s.slug}`, 0.7)),
    ...solutions.map((s) => page(`/solutions/${s.slug}`, 0.6)),
    page("/secteurs", 0.6),
    ...industries.map((s) => page(`/secteurs/${s.slug}`, 0.6)),
    page("/tarifs", 0.6),
    page("/a-propos", 0.6),
    page("/contact", 0.5),
  ];
}
