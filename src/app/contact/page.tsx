import Link from "next/link";
import { InfoPage } from "@/components/info-page";
import { supportEmail } from "@/config/site";
import { pageMetadata } from "@/config/metadata";
export const metadata = pageMetadata("Contact TREXVEN", "Support and contact information for TREXVEN.", "/contact");
export default function Contact() {
  return <InfoPage eyebrow="Contact" title="Connect with TREXVEN." description="Find help for your business and your TREXVEN apps.">
    <div className="surface card-padding"><h2 className="text-2xl font-bold">Support</h2>
      {supportEmail ? <><p className="mt-4 leading-7 text-muted">Email our support team. Include the app you use and a short description of the issue. Never send your password or verification codes.</p><a href={"mailto:" + supportEmail} className="mt-4 inline-flex min-h-12 max-w-full items-center break-all py-2 font-bold text-signal">{supportEmail}</a></> : <p className="mt-4 leading-7 text-muted">A verified website support address has not been published yet. You can find setup and account guidance in our support pages.</p>}
      <div className="mt-6"><Link href="/support" className="button button-outline w-full sm:w-auto">Browse support guidance</Link></div>
    </div>
  </InfoPage>;
}
