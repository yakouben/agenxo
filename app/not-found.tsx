import CtaButton from "@/components/CtaButton";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-x-clip">
      <div className="glow glow-blue glow-drift left-1/2 top-1/2 h-[520px] w-[800px] -translate-x-1/2 -translate-y-1/2" />
      <div className="container-x relative text-center">
        <div className="t-display">
          4<span className="serif text-lime">0</span>4
        </div>
        <p className="t-lead mx-auto mt-6 max-w-md">Cette page n&apos;existe pas ou a été déplacée.</p>
        <div className="mt-10">
          <CtaButton href="/">Retour à l&apos;accueil</CtaButton>
        </div>
      </div>
    </section>
  );
}
