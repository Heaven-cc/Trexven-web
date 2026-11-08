import Link from "next/link";
import { brand, navigationLinks, resourceLinks } from "@/config/content";
import { products } from "@/config/site";

const groups = [
  { title: "Products", links: products.map(p => [p.name, "/products/" + p.slug]) },
  { title: "Company", links: [...navigationLinks.filter(([, url]) => url !== "/products" && url !== "/support"), ["Contact", "/contact"]] },
  { title: "Resources", links: resourceLinks },
];
export function Footer() {
  return <footer className="theme-inverse bg-midnight py-12 md:py-16">
    <div className="container-site grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div><Link href="/" className="inline-block py-2 text-2xl font-black tracking-tight">{brand.name}<span className="text-blue-400">.</span></Link>
        <p className="mt-4 text-sm leading-7 text-muted">{brand.tagline}</p><p className="mt-4 text-sm text-muted">An ODT product.</p>
      </div>
      {groups.map(group => <nav key={group.title} aria-label={group.title + " footer"}>
        <h2 className="mb-3 font-bold">{group.title}</h2>
        <ul>{group.links.map(([label, url]) => <li key={url}><Link href={url} className="inline-flex min-h-11 items-center py-2 text-sm text-muted hover:text-white">{label}</Link></li>)}</ul>
      </nav>)}
    </div>
    <div className="container-site mt-10 border-t border-white/10 pt-6 text-xs text-muted">© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
  </footer>;
}
