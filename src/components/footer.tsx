import Link from "next/link";
import { brand, navigationLinks, resourceLinks } from "@/config/content";
import { products } from "@/config/site";

const groups = [
  { title: "Products", links: products.map(p => [p.name, "/products/" + p.slug]) },
  { title: "Company", links: [...navigationLinks.filter(([, url]) => url !== "/products" && url !== "/support"), ["Contact", "/contact"]] },
  { title: "Resources", links: resourceLinks },
];
export function Footer() {
  return <footer className="trexven-editorial-footer">
    <div className="container-site trexven-footer-grid">
      <div className="trexven-footer-intro"><Link href="/" className="trexven-footer-smallbrand">{brand.name}<span>.</span></Link>
        <p>{brand.tagline}</p><span className="trexven-footer-odt">An ODT product.</span>
      </div>
      {groups.map(group => <nav key={group.title} aria-label={group.title + " footer"}>
        <h2>{group.title}</h2>
        <ul>{group.links.map(([label, url]) => <li key={url}><Link href={url}>{label}</Link></li>)}</ul>
      </nav>)}
    </div>
    <div className="container-site trexven-footer-wordmark" aria-hidden="true">TREXVEN<span>.</span></div>
    <div className="container-site trexven-footer-legal"><span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span><span>One Ecosystem. Smarter Business.</span></div>
  </footer>;
}
