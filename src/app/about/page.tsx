import Link from "next/link";
import { InfoPage } from "@/components/info-page";
import { brand, actions } from "@/config/content";
import { pageMetadata } from "@/config/metadata";
const description = "TREXVEN is an ODT product focused on connected business technology. " + brand.tagline;
export const metadata = pageMetadata("About TREXVEN", description, "/about");
const blocks = [
  ["Our mission", "Make essential business operations easier to manage and understand."],
  ["Our approach", "Build distinct, purposeful tools that work together."],
  ["Our vision", "Connect business management with useful intelligence."],
];
export default function About() {
  return <InfoPage eyebrow="About TREXVEN" title="Building smarter ways to run business." description={description}>
    <div className="grid gap-5 md:grid-cols-3">{blocks.map(([title, text]) => <article key={title} className="surface card-padding"><h2 className="text-xl font-bold">{title}</h2><p className="mt-4 leading-7 text-muted">{text}</p></article>)}</div>
    <Link href="/products" className="button button-outline mt-8 w-full sm:w-auto">{actions.explore} →</Link>
  </InfoPage>;
}
