"use client";

import { useState } from "react";
import type { Post } from "@/lib/blog";
import CtaButton from "./CtaButton";
import { PostCardStatic } from "./PostCardStatic";

export default function BlogFeed({ posts, topics }: { posts: Post[]; topics: string[] }) {
  const [topic, setTopic] = useState<string | null>(null);
  const list = topic ? posts.filter((p) => p.topic === topic) : posts;
  const chip = (active: boolean) =>
    `shrink-0 rounded-full px-3.5 py-2 text-xs transition-colors ${active ? "bg-white text-dark" : "bg-white/[0.07] hover:bg-white/15"}`;

  return (
    <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
      <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:flex-wrap lg:overflow-visible">
          <button className={chip(topic === null)} onClick={() => setTopic(null)}>
            Tous les sujets
          </button>
          {topics.map((t) => (
            <button key={t} className={chip(topic === t)} onClick={() => setTopic(topic === t ? null : t)}>
              {t}
            </button>
          ))}
        </div>
        <div className="mt-8 hidden lg:block">
          <CtaButton href="/#contact">Réserver un appel</CtaButton>
        </div>
      </aside>
      <div key={topic ?? "all"} className="grid min-w-0 gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
        {list.map((p, i) => (
          <PostCardStatic key={p.slug} post={p} i={i} />
        ))}
        {list.length === 0 && <p className="t-body">Aucun article pour ce sujet.</p>}
      </div>
    </div>
  );
}
