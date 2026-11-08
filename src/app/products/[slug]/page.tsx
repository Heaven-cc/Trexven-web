import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/config/site";
import { actions } from "@/config/content";
import { pageMetadata } from "@/config/metadata";
import { FeatureList, CTA } from "@/components/sections";
import { ArrowRight } from "lucide-react";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return products.map(product => ({ slug: product.slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = products.find(item => item.slug === slug);
  if (!product) notFound();
  return pageMetadata(product.name, product.description, "/products/" + product.slug);
}
export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find(item => item.slug === slug);
  if (!product) notFound();
  return <>
    <section className="hero-glow page-hero"><div className="container-site">
      <p className="eyebrow">TREXVEN ecosystem / {product.audience}</p><h1 className="hero-title mt-6">{product.name}</h1>
      <p className="mt-5 text-xl text-signal sm:text-2xl">{product.label}</p><p className="mt-6 max-w-2xl leading-8 text-muted">{product.description}</p>
      <Link href="/download" className="button button-blue mt-8 w-full sm:w-auto">Explore availability<ArrowRight size={18} aria-hidden="true" /></Link>
    </div></section>
    <section className="section bg-cloud"><div className="container-site">
      <p className="eyebrow">Capabilities</p><h2 className="heading mb-8 mt-4">Designed with purpose.</h2><FeatureList items={product.features} />
      <p className="mt-6 text-sm leading-7 text-muted">Illustrative capability overview. Confirm availability in the current application release before relying on a feature.</p>
    </div></section>
    <section className="section bg-surface"><div className="container-site max-w-3xl">
      <p className="eyebrow">Part of TREXVEN</p><h2 className="heading mt-4">Separate products. Connected vision.</h2>
      <p className="mt-6 leading-8 text-muted">TREXVEN Owner, POS, Intelligence and Vision have distinct responsibilities. Explore their roles and find the right tools for your business.</p>
      <Link href="/products" className="mt-6 inline-flex min-h-12 items-center gap-2 font-bold text-signal">{actions.explore}<ArrowRight size={17} aria-hidden="true" /></Link>
    </div></section>
    <CTA />
  </>;
}
