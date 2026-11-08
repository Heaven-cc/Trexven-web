import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { actions, availability } from "@/config/content";

// No country/period selectors until the backend exposes a public published catalog.
// The existing Owner catalog requires authenticated business ownership.
export function PricingAvailability() {
  return <div className="surface card-padding mx-auto max-w-2xl text-left">
    <p className="eyebrow">Subscriptions</p>
    <h2 className="mt-4 text-2xl font-bold">{availability.pricingTitle}</h2>
    <p className="mt-4 leading-7 text-muted">{availability.pricingDescription}</p>
    <Link href="/download" className="button button-blue mt-6 w-full sm:w-auto">{actions.download}<ArrowUpRight size={18} aria-hidden="true" /></Link>
  </div>;
}
