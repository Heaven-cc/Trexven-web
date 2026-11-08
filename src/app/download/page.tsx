import { ownerPlay, posPlay, products } from "@/config/site";
import { actions, availability } from "@/config/content";
import { pageMetadata } from "@/config/metadata";
import { ArrowUpRight, Smartphone, ShoppingCart } from "lucide-react";
export const metadata = pageMetadata("Download TREXVEN", "Find official TREXVEN Owner and POS app availability.", "/download");
export default function Download() {
  const apps = [
    { product: products[0], description: "For business owners managing their operations.", url: ownerPlay, icon: Smartphone },
    { product: products[1], description: "For employees and authorized business operators.", url: posPlay, icon: ShoppingCart },
  ];
  return <section className="section min-h-[70vh] bg-cloud"><div className="container-site">
    <p className="eyebrow">Get the apps</p><h1 className="heading mt-4">Get TREXVEN on your phone.</h1>
    <p className="mt-6 max-w-2xl leading-8 text-muted">Choose the application designed for your role. Registration and business management happen inside the apps.</p>
    <div className="mt-10 grid gap-6 md:grid-cols-2">{apps.map(({ product, description, url, icon: Icon }) => <article className="surface card-padding min-w-0" key={product.slug}>
      <Icon className="text-signal" size={35} aria-hidden="true" /><h2 className="mt-6 text-2xl font-bold">{product.name}</h2><p className="mt-3 leading-7 text-muted">{description}</p>
      {url ? <a className="button button-blue mt-8 w-full sm:w-auto" href={url} target="_blank" rel="noopener noreferrer" aria-label={actions.playStore + ": " + product.name + " (opens in a new tab)"}>{actions.playStore}<ArrowUpRight size={17} aria-hidden="true" /></a> : <p className="mt-8 rounded-xl bg-wash px-4 py-4 text-sm font-semibold text-muted">{availability.store}</p>}
    </article>)}</div>
  </div></section>;
}
