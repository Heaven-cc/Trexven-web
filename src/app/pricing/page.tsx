import { PricingAvailability } from "@/components/pricing-selector";
import { pageMetadata } from "@/config/metadata";

export const metadata = pageMetadata("Subscription availability", "Find out where to view TREXVEN subscription availability for your business.", "/pricing");
export default function Pricing() {
  return <>
    <section className="hero-glow page-hero"><div className="container-site max-w-4xl">
      <p className="eyebrow">TREXVEN subscriptions</p><h1 className="hero-title mt-6">Room for your business to grow.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Choose subscription options in TREXVEN Owner, where your business and available plans come together.</p>
    </div></section>
    <section className="section bg-cloud"><div className="container-site"><PricingAvailability /></div></section>
  </>;
}
