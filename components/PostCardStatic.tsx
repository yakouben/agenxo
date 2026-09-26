import Image from "next/image";
import Link from "next/link";
import { formatDate, type Post } from "@/lib/blog";

// Card that animates in immediately (used inside client-filtered lists).
export function PostCardStatic({ post, i = 0 }: { post: Post; i?: number }) {
  return (
    <Link href={`/blog/${post.slug}`} className="fade-in group block" style={{ animationDelay: `${i * 70}ms` }}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-card">
        <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width:1280px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="chip absolute bottom-4 left-4 !bg-black/50 backdrop-blur">{post.topic}</span>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-white/50">
        <span>{post.author}</span>
        <time dateTime={post.published}>{formatDate(post.published)}</time>
      </div>
      <h3 className="mt-2 text-lg font-medium leading-snug transition-colors group-hover:text-lime">{post.title}</h3>
    </Link>
  );
}
