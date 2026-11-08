import Link from "next/link";
import { ArrowRight, Store, Users, ChartNoAxesCombined, Layers3 } from "lucide-react";
import { Hero, ProductGrid, CTA } from "@/components/sections";
import { PricingAvailability } from "@/components/pricing-selector";
import { brand, actions } from "@/config/content";
import { pageMetadata } from "@/config/metadata";

export const metadata = pageMetadata("TREXVEN | Intelligent Business Management Ecosystem", brand.description, "/");
const benefits = [
  { icon: Store, label: "Operational clarity" }, { icon: Users, label: "Connected teams" },
  { icon: ChartNoAxesCombined, label: "Better understanding" }, { icon: Layers3, label: "Room to grow" },
];
const steps = [
  ["01", "Set up", "Get TREXVEN and configure your business."],
  ["02", "Operate", "Manage inventory, employees and sales with the right tools."],
  ["03", "Understand", "Use reporting and available insights to see business activity more clearly."],
];
const questions = [
  ["What is TREXVEN?", "TREXVEN is a connected business technology ecosystem covering management, sales operations and intelligent capabilities."],
  ["What is the difference between Owner and POS?", "Owner is for business owners; POS is a separate employee-facing application for authorized operations."],
  ["Where do I download TREXVEN?", "Visit our Download page for verified Google Play availability."],
  ["Can I create an account on this website?", "Registration and business management take place in the mobile applications."],
];

export default function Home() {
  return <>
    <Hero eyebrow="The intelligent business ecosystem" title={brand.tagline} description="From everyday business operations to intelligent insights, TREXVEN connects the tools, people, and information that help your business move forward." />
    <section className="section bg-cloud"><div className="container-site">
      <p className="eyebrow">The ecosystem</p><h2 className="heading mb-4 mt-4">Everything connects.<br />Everything works smarter.</h2>
      <p className="mb-10 max-w-xl leading-7 text-muted">Separate tools designed to work together across your business.</p><ProductGrid />
    </div></section>
    <section className="section bg-surface"><div className="container-site grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div><p className="eyebrow">Why TREXVEN</p><h2 className="heading mt-4">Business management should feel connected.</h2>
        <p className="mt-6 leading-8 text-muted">Keep important operations in focus without juggling disconnected workflows. TREXVEN is designed to bring everyday work and clearer business understanding together.</p>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2">{benefits.map(({ icon: Icon, label }) => <li key={label} className="surface card-padding"><Icon className="mb-4 text-signal" size={28} aria-hidden="true" /><h3 className="font-bold">{label}</h3></li>)}</ul>
    </div></section>
    <section className="section bg-cloud"><div className="container-site">
      <p className="eyebrow">How it works</p><h2 className="heading mb-10 mt-4">Simple to start. Built to grow.</h2>
      <ol className="grid gap-5 md:grid-cols-3">{steps.map(([number, title, description]) => <li className="surface card-padding" key={number}><span className="text-3xl font-black text-signal" aria-hidden="true">{number}</span><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-muted">{description}</p></li>)}</ol>
    </div></section>
    <section className="section bg-surface"><div className="container-site grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div><p className="eyebrow">TREXVEN Owner</p><h2 className="heading mt-4">A clearer view of your business.</h2>
        <p className="mt-6 leading-8 text-muted">Designed for business owners to oversee inventory, employees, performance and daily operations.</p>
        <Link href="/products/owner" className="button button-blue mt-7 w-full sm:w-auto">Discover Owner<ArrowRight size={17} aria-hidden="true" /></Link>
      </div>
      <div className="card-padding rounded-3xl bg-wash"><p className="eyebrow">Owner experience</p><h3 className="mt-5 text-3xl font-black">Your business.<br />Your control.</h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">{["Inventory", "Employees", "Reports", "Operations"].map(label => <li className="rounded-xl bg-surface p-4 text-sm font-semibold" key={label}>{label}</li>)}</ul>
        <p className="mt-5 text-xs leading-5 text-muted">Illustrative overview · not an app screenshot</p>
      </div>
    </div></section>
    <section className="section bg-cloud"><div className="container-site grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div><p className="eyebrow">TREXVEN POS</p><h2 className="heading mt-4">Keep everyday operations moving.</h2>
        <p className="mt-6 leading-8 text-muted">A dedicated employee-facing experience for checkout, product search and authorized operational workflows.</p>
        <Link href="/products/pos" className="button button-blue mt-7 w-full sm:w-auto">Discover POS<ArrowRight size={17} aria-hidden="true" /></Link>
      </div>
      <div className="surface card-padding"><p className="eyebrow">Operational workspace</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">{["Checkout", "Product search", "Stock", "Permissions"].map(label => <li className="rounded-xl bg-cloud p-4 font-bold" key={label}>{label}</li>)}</ul>
        <p className="mt-5 text-xs text-muted">Illustrative overview</p>
      </div>
    </div></section>
    <section className="theme-inverse section bg-midnight"><div className="container-site">
      <p className="eyebrow">Intelligence + Vision</p><h2 className="heading mb-8 mt-4">A new level of business awareness.</h2>
      <div className="grid gap-6 md:grid-cols-2">{[
        ["Intelligence", "Reasoning that helps make connected business information more understandable.", "/products/intelligence"],
        ["Vision", "Camera-based observation and event intelligence designed for connected monitoring.", "/products/vision"],
      ].map(([title, description, url]) => <Link href={url} key={title} className="surface card-padding transition-shadow hover:shadow-lg">
        <span className="text-sm text-signal">{brand.name}</span><h3 className="mt-5 text-3xl font-bold">{title}</h3><p className="mt-4 leading-8 text-muted">{description}</p><span className="mt-6 inline-flex items-center gap-2 text-signal">Learn more<ArrowRight size={17} aria-hidden="true" /></span>
      </Link>)}</div>
    </div></section>
    <section className="section bg-surface"><div className="container-site grid items-center gap-8 lg:grid-cols-2">
      <div><p className="eyebrow">Meet Angel</p><h2 className="heading mt-4">A helping hand inside TREXVEN.</h2><p className="mt-5 leading-8 text-muted">Angel is the assistant experience within TREXVEN, distinct from the underlying Intelligence reasoning layer.</p></div>
      <div className="surface card-padding"><p className="eyebrow">Angel</p><h3 className="mt-4 text-2xl font-semibold">Support for the way you work.</h3><p className="mt-3 text-sm leading-7 text-muted">Capabilities depend on the released application version.</p></div>
    </div></section>
    <section className="section bg-cloud"><div className="container-site"><PricingAvailability /><div className="mt-6 text-center"><Link href="/pricing" className="inline-flex min-h-12 items-center gap-2 font-bold text-signal">{actions.plans}<ArrowRight size={17} aria-hidden="true" /></Link></div></div></section>
    <section className="section bg-surface"><div className="container-site max-w-4xl">
      <p className="eyebrow">Questions</p><h2 className="heading mb-6 mt-4">Frequently asked questions.</h2>
      {questions.map(([question, answer]) => <details className="border-b border-line py-3" key={question}><summary className="cursor-pointer py-3 pr-4 font-bold">{question}</summary><p className="mb-3 mt-3 leading-7 text-muted">{answer}</p></details>)}
    </div></section>
    <CTA />
  </>;
}
