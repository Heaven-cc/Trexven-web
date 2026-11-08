import Link from "next/link";
import { InfoPage } from "@/components/info-page";
import { pageMetadata } from "@/config/metadata";
export const metadata = pageMetadata("Delete your TREXVEN account", "How to request account deletion in the TREXVEN Owner app.", "/account-deletion");
export default function AccountDeletion() {
  return <InfoPage eyebrow="Your account" title="Account deletion." description="Request deletion from the TREXVEN Owner app while signed in to the account you want to delete.">
    <div className="space-y-6">
      <article className="surface card-padding"><h2 className="text-2xl font-bold">Before you begin</h2><p className="mt-4 leading-7 text-muted">Recover pending transactions, close cash shifts and complete any required business handover. The in-app confirmation explains that deletion permanently removes your login and personal account access; business and financial history are retained.</p></article>
      <article className="surface card-padding"><h2 className="text-2xl font-bold">Delete in TREXVEN Owner</h2>
        <ol className="mt-5 list-decimal space-y-4 pl-6 leading-7">
          <li>Open TREXVEN Owner and sign in to your account.</li><li>Open <strong>Me</strong>, then <strong>Security</strong>.</li><li>Choose <strong>Delete account</strong>.</li><li>Read the confirmation carefully, complete any requirements shown by the app, and confirm when you are ready.</li>
        </ol>
      </article>
      <article className="surface card-padding"><h2 className="text-xl font-bold">If the request is interrupted</h2><p className="mt-4 leading-7 text-muted">Follow the app's recovery instructions for the original deletion request. A timeout does not confirm whether deletion completed. Keep the original app data until the result is resolved.</p><Link href="/contact" className="mt-4 inline-flex min-h-12 items-center font-bold text-signal">Contact information →</Link></article>
      <p className="text-sm leading-7 text-muted">This page describes the Owner app workflow. A separate website deletion request channel and detailed retention information have not been published here yet.</p>
    </div>
  </InfoPage>;
}
