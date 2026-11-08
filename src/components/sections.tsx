import Link from "next/link";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, ShoppingCart, BrainCircuit, ScanEye, CheckCircle2 } from "lucide-react";
import { products } from "@/config/site";
import { actions } from "@/config/content";
import { OwnerPreview } from "@/components/owner-preview";

const productIcons = { owner: BriefcaseBusiness, pos: ShoppingCart, intelligence: BrainCircuit, vision: ScanEye };
export function Hero({ eyebrow, title, description, primary = true }: { eyebrow: string; title: string; description: string; primary?: boolean }) {
  return <section className="hero-glow">
    <div className="container-site page-hero grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="min-w-0"><p className="eyebrow">{eyebrow}</p><h1 className="hero-title mt-6">{title}</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {primary && <Link className="button button-blue" href="/download">{actions.download}<ArrowUpRight size={18} aria-hidden="true" /></Link>}
          <Link className="button button-outline" href={primary ? "/products" : "#products"}>{primary ? actions.explore : "Browse products"}<ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </div>
      <div className="min-w-0"><OwnerPreview compact /><p className="mt-4 text-center text-xs leading-5 text-muted">Illustrative recreation of TREXVEN Owner · not a live app</p></div>
    </div>
  </section>;
}
export function ProductGrid() {
  return <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{products.map(product => {
    const Icon = productIcons[product.slug];
    return <Link key={product.slug} href={"/products/" + product.slug} className="surface card-padding flex min-w-0 flex-col transition-shadow hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-wash text-signal"><Icon aria-hidden="true" /></div>
      <h3 className="mt-6 text-xl font-bold">{product.name}</h3><p className="mb-6 mt-3 text-sm leading-7 text-muted">{product.description}</p>
      <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-signal">Explore product<ArrowRight size={16} aria-hidden="true" /></span>
    </Link>;
  })}</div>;
}
export function FeatureList({ items }: { items: readonly string[] }) {
  return <ul className="grid gap-4 sm:grid-cols-2">{items.map(item => <li key={item} className="surface flex items-center gap-3 p-4"><CheckCircle2 className="shrink-0 text-signal" size={20} aria-hidden="true" /><span className="text-sm font-medium">{item}</span></li>)}</ul>;
}
export function CTA() {
  return <section className="theme-inverse section bg-navy">
    <div className="container-site text-center"><p className="eyebrow">Get started</p><h2 className="heading mt-4">Ready for a smarter way forward?</h2>
      <p className="mx-auto mt-6 max-w-xl leading-7 text-muted">Explore the ecosystem and get the right TREXVEN app for your business.</p>
      <Link className="button button-blue mt-8 w-full sm:w-auto" href="/download">{actions.download}<ArrowUpRight size={18} aria-hidden="true" /></Link>
    </div>
  </section>;
}
