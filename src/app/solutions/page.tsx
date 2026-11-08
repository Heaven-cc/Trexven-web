import Link from "next/link";
import { InfoPage } from "@/components/info-page";
import { actions } from "@/config/content";
import { pageMetadata } from "@/config/metadata";
const description = "Explore how connected business tools can support retail stores, growing businesses and multi-branch operations.";
export const metadata = pageMetadata("Solutions", description, "/solutions");
const blocks = [
  ["Retail operations", "Keep products, sales and everyday activity in focus."],
  ["Growing businesses", "Bring teams and operations into a more connected workflow."],
  ["Multi-branch visibility", "Explore business and branch management capabilities where supported."],
];
export default function Solutions() {
  return <InfoPage eyebrow="Solutions" title="Built for the way you work." description={description}>
    <div className="grid gap-5 md:grid-cols-3">{blocks.map(([title, text]) => <article key={title} className="surface card-padding"><h2 className="text-xl font-bold">{title}</h2><p className="mt-4 leading-7 text-muted">{text}</p></article>)}</div>
    <Link href="/products" className="button button-outline mt-8 w-full sm:w-auto">{actions.explore} →</Link>
  </InfoPage>;
}
