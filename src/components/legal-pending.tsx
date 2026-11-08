import Link from "next/link";
import { InfoPage } from "@/components/info-page";
export function LegalPending({ title }: { title: string }) {
  return <InfoPage eyebrow="Legal" title={title} description="This document has not been published on the website yet.">
    <div className="surface card-padding">
      <h2 className="text-xl font-bold">Publication pending</h2>
      <p className="mt-4 leading-7 text-muted">The approved document will appear here when it is available. This page does not contain the {title.toLowerCase()}.</p>
      <Link href="/contact" className="mt-5 inline-flex min-h-12 items-center font-bold text-signal">Contact information →</Link>
    </div>
  </InfoPage>;
}
