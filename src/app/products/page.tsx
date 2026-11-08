import { Hero, ProductGrid, CTA } from "@/components/sections";
import { pageMetadata } from "@/config/metadata";
export const metadata = pageMetadata("Explore the ecosystem", "Explore the distinct products and capabilities that make up the TREXVEN business ecosystem.", "/products");
export default function Products() {
  return <>
    <Hero eyebrow="Our products" title="Connected by design." description="Explore the distinct products and capabilities that make up the TREXVEN business ecosystem." primary={false} />
    <section id="products" className="section bg-cloud"><div className="container-site">
      <p className="eyebrow">Explore products</p><h2 className="heading mb-10 mt-4">One ecosystem. Different purposes.</h2><ProductGrid />
      <p className="mt-8 text-sm leading-7 text-muted">Product features and availability depend on the current release.</p>
    </div></section>
    <CTA />
  </>;
}
