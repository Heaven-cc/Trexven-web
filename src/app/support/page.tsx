import Link from "next/link";
import { InfoPage } from "@/components/info-page";
import { pageMetadata } from "@/config/metadata";
export const metadata = pageMetadata("TREXVEN support", "Getting started, password recovery and account guidance for TREXVEN.", "/support");
const topics = [
  { title: "Getting started", body: "Choose Owner to set up and manage your business, or POS for authorized employee operations. Complete setup inside the appropriate app.", url: "/download", action: "Find your app" },
  { title: "Password recovery", body: "On the Owner sign-in screen, choose Forgot password? and enter your account email. Follow the recovery email instructions. Check your spam folder if you do not see the message.", url: "/contact", action: "Contact information" },
  { title: "Subscriptions", body: "View the subscription options in TREXVEN Owner for your business. Public website prices are not available yet.", url: "/pricing", action: "Subscription availability" },
  { title: "Account deletion", body: "Review the in-app deletion steps and preparation before confirming a permanent account deletion.", url: "/account-deletion", action: "Read deletion guidance" },
];
export default function Support() {
  return <InfoPage eyebrow="Support" title="How can we help?" description="Start with guidance for your app, account and business.">
    <div className="grid gap-5 md:grid-cols-2">{topics.map(topic => <article key={topic.title} className="surface card-padding flex flex-col"><h2 className="text-xl font-bold">{topic.title}</h2><p className="mb-5 mt-4 leading-7 text-muted">{topic.body}</p><Link href={topic.url} className="mt-auto inline-flex min-h-12 items-center font-bold text-signal">{topic.action} →</Link></article>)}</div>
  </InfoPage>;
}
