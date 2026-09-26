import type { Metadata } from "next";
import ContactPanel from "@/components/ContactPanel";

export const metadata: Metadata = { title: "Contact — Agenxo" };

export default function ContactPage() {
  return (
    <section className="relative min-h-[100svh] overflow-x-clip pb-20 pt-32 sm:pt-40">
      <div className="glow glow-blue glow-drift right-[-10%] top-10 h-[640px] w-[760px]" />
      <div className="glow glow-violet glow-drift -left-40 bottom-0 h-[420px] w-[520px] opacity-40" />
      <div className="container-x relative">
        <ContactPanel heading="h1" />
      </div>
    </section>
  );
}
