import type { Project } from "@/lib/content";

// Wraps a project card: opens the live website in a new tab when the project
// has one, otherwise renders a plain, non-clickable block.
export default function ProjectLink({ p, className, children }: { p: Project; className?: string; children: React.ReactNode }) {
  if (!p.url) return <div className={className}>{children}</div>;
  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Voir le site ${p.name}`} className={className}>
      {children}
    </a>
  );
}
