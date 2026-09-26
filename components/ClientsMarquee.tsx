import Image from "next/image";
import { clients } from "@/lib/content";

// Infinite logo strip. `compact` is the slimmer variant used under the home hero.
export default function ClientsMarquee({ compact = false }: { compact?: boolean }) {
  const row = [...clients, ...clients];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className={`marquee ${compact ? "gap-6 sm:gap-10" : "gap-3"}`}>
        {row.map((src, i) => (
          <div
            key={i}
            aria-hidden={i >= clients.length}
            className={`grid shrink-0 place-items-center ${compact ? "h-12 w-32 px-3 sm:h-16 sm:w-44 sm:px-5" : "h-24 w-52 rounded-2xl bg-card px-8"}`}
          >
            <Image
              src={src}
              alt=""
              width={160}
              height={50}
              className={`w-auto object-contain ${compact ? "max-h-8 opacity-90 sm:max-h-10" : "max-h-10 opacity-80"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
