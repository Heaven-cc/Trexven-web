import type { ReactNode } from "react";
export function InfoPage({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: ReactNode }) {
  return <>
    <section className="hero-glow page-hero"><div className="container-site max-w-4xl">
      <p className="eyebrow">{eyebrow}</p><h1 className="hero-title mt-6">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{description}</p>
    </div></section>
    <section className="section bg-cloud"><div className="container-site max-w-4xl">{children}</div></section>
  </>;
}
