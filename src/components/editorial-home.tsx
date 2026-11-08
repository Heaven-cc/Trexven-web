"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, BarChart3, Bell, Boxes, BrainCircuit, Check, ChevronDown, CircleCheck, CreditCard, Eye, Layers3, Package, ScanLine, ShieldCheck, ShoppingCart, Sparkles, Store, Users, Wallet } from "lucide-react";

type Demo = "owner" | "pos" | "angel" | "intelligence" | "vision";

const demoScenes: { id: Demo; eyebrow: string; title: string; detail: string; bullets: string[] }[] = [
  { id: "owner", eyebrow: "01 / Business management", title: "Everything in view.\nEverything in control.", detail: "Oversee inventory, your people and financial activity from one dedicated owner experience.", bullets: ["Inventory and stock", "Financial overview", "Employee oversight"] },
  { id: "pos", eyebrow: "02 / Sales operations", title: "Make every\ntransaction count.", detail: "Give employees a focused workspace for checkout, product search and authorized everyday operations.", bullets: ["Checkout workflow", "Product search", "Returns and expenses"] },
  { id: "angel", eyebrow: "03 / Business assistant", title: "Meet Angel.\nWork with clarity.", detail: "A helpful assistant experience, alongside visual product and list recognition where supported.", bullets: ["Business assistance", "Product recognition", "Guided workflows"] },
  { id: "intelligence", eyebrow: "04 / Connected reasoning", title: "See patterns,\nnot just numbers.", detail: "TREXVEN Intelligence brings business activity and operational context together to support better understanding.", bullets: ["Connected information", "Operational context", "Actionable insights"] },
  { id: "vision", eyebrow: "05 / Camera intelligence", title: "Stay closer\nto what matters.", detail: "TREXVEN Vision is designed to turn relevant camera observations into useful operational events.", bullets: ["Camera observation", "Event awareness", "Connected alerts"] },
];

const previewStats = [
  { label: "Today's sales", value: "₦152,400", change: "Demo data" },
  { label: "Transactions", value: "68", change: "Today" },
  { label: "Products", value: "248", change: "Inventory" },
];

function DemoScreen({ active }: { active: Demo }) {
  return <div className="experience-screen" aria-label="Illustrative TREXVEN product interface">
    <div className="experience-screen-top"><span className="experience-screen-symbol">T<span>.</span></span><span className="experience-screen-status"><span /> DEMO EXPERIENCE</span><Bell size={17} /></div>
    {active === "owner" && <div className="experience-screen-body" key={active}>
      <div className="experience-screen-heading"><span>Business overview</span><span className="experience-small-pill">Today</span></div>
      <div className="experience-dashboard-hero"><span>Sales today</span><strong>₦152,400</strong><small>Illustrative values · not live data</small><svg viewBox="0 0 320 70" aria-hidden="true" preserveAspectRatio="none"><path d="M0 62 C40 55 52 57 80 36 S138 49 164 30 219 40 248 15 289 22 320 6" fill="none" stroke="#66b4ff" strokeWidth="3" strokeLinecap="round"/></svg></div>
      <div className="experience-stat-grid">{previewStats.slice(1).map(x => <div className="experience-stat" key={x.label}><span>{x.label}</span><strong>{x.value}</strong><small>{x.change}</small></div>)}</div>
      <div className="experience-preview-list"><span><Package size={17}/> Inventory</span><b>6 low-stock items</b></div>
      <div className="experience-preview-list"><span><Users size={17}/> Employees</span><b>Manage team</b></div>
    </div>}
    {active === "pos" && <div className="experience-screen-body" key={active}>
      <div className="experience-screen-heading"><span>TREXVEN POS</span><span className="experience-small-pill">Workspace</span></div>
      <div className="experience-pos-grid">{[{ icon: ScanLine, name:"Angel Scan" },{ icon:ShoppingCart,name:"Checkout" },{ icon:Package,name:"Products" },{ icon:CreditCard,name:"Credit & Return" }].map(({icon:Icon,name})=><div className="experience-pos-tile" key={name}><Icon size={23}/><b>{name}</b></div>)}</div>
      <div className="experience-ticket"><span>Illustrative checkout</span><div><strong>Product A</strong><span>× 2</span></div><div><strong>Product B</strong><span>× 1</span></div><div className="experience-ticket-total"><strong>Total</strong><strong>₦18,500</strong></div></div>
    </div>}
    {active === "angel" && <div className="experience-screen-body" key={active}>
      <div className="experience-screen-heading"><span>Angel</span><span className="experience-small-pill"><Sparkles size={13}/> Assistant</span></div>
      <div className="experience-chat-message">How can I help you with your business today?</div>
      <div className="experience-chat-message response">Show me my inventory overview.</div>
      <div className="experience-chat-card"><Sparkles size={17}/><strong>Inventory overview</strong><p>Review stock levels and take the next step using your business tools.</p><div className="experience-chat-tags"><span>Products</span><span>Low stock</span><span>Restock</span></div></div>
      <div className="experience-chat-input">Ask Angel anything <ArrowUpRight size={16}/></div>
    </div>}
    {active === "intelligence" && <div className="experience-screen-body" key={active}>
      <div className="experience-screen-heading"><span>Intelligence</span><span className="experience-small-pill">Overview</span></div>
      <div className="experience-intel-feature"><BrainCircuit size={25}/><strong>Context makes the difference.</strong><p>Business information, connected and made easier to understand.</p></div>
      <div className="experience-preview-list"><span><BarChart3 size={17}/> Sales activity</span><b><CircleCheck size={16}/> Connected</b></div><div className="experience-preview-list"><span><Boxes size={17}/> Inventory context</span><b><CircleCheck size={16}/> Connected</b></div><div className="experience-preview-list"><span><Bell size={17}/> Relevant events</span><b>Review</b></div>
    </div>}
    {active === "vision" && <div className="experience-screen-body" key={active}>
      <div className="experience-screen-heading"><span>Vision</span><span className="experience-small-pill">Concept</span></div>
      <div className="experience-camera"><div className="experience-camera-grid"/><Eye size={45}/><span>Camera observation preview</span><small>No live video connected</small></div>
      <div className="experience-preview-list"><span><Eye size={17}/> Event awareness</span><b>Illustration</b></div><div className="experience-preview-list"><span><ShieldCheck size={17}/> Connected oversight</span><b>Owner view</b></div>
    </div>}
    <div className="experience-screen-bottom"><span><Store size={18}/> Home</span><span><Package size={18}/> Inventory</span><span><Wallet size={18}/> Finance</span><span><Users size={18}/> Me</span></div>
  </div>;
}

function Intro() {
  return <section id="experience-hero" className="experience-hero">
    <div className="experience-hero-image" aria-hidden="true"/>
    <div className="experience-hero-shade" aria-hidden="true"/>
    <div className="experience-hero-content experience-container">
      <p className="experience-kicker experience-kicker-light"><span className="experience-kicker-dot"/> THE INTELLIGENT BUSINESS ECOSYSTEM</p>
      <h1>One ecosystem.<br/><em>Smarter business.</em></h1>
      <p className="experience-hero-description">The tools to manage, operate and understand your business — beautifully connected.</p>
      <div className="experience-actions"><Link href="/products" className="experience-button experience-button-primary">Explore the ecosystem <ArrowUpRight size={19}/></Link><Link href="/download" className="experience-button experience-button-glass">Get TREXVEN <ArrowRight size={18}/></Link></div>
      <div className="experience-hero-bottom"><span><span className="experience-hero-line"/> Built for the way businesses work.</span><a href="#experience-story" className="experience-scroll-link">Scroll to discover <ArrowDown size={17}/></a></div>
    </div>
    <div className="experience-hero-orbit" aria-hidden="true"><div className="experience-hero-orbit-inside"><span><BarChart3 size={17}/> Sales</span><span><Package size={17}/> Inventory</span><span><BrainCircuit size={17}/> Intelligence</span></div></div>
  </section>;
}

function Story() {
  return <section id="experience-story" className="experience-sheet experience-story experience-light">
    <div className="experience-container">
      <div className="experience-section-head"><p className="experience-kicker">THE IDEA IS SIMPLE</p><h2>Your business is more<br/>than a collection <i>of tools.</i></h2><p>Sales, stock, people and insights should connect. TREXVEN brings the right parts of your operation into one thoughtful ecosystem.</p></div>
      <div className="experience-story-diagram" aria-label="TREXVEN business ecosystem">
        <div className="experience-story-diagram-core"><Layers3 size={35}/><strong>TREXVEN</strong><span>One connected ecosystem</span></div>
        <div className="experience-story-diagram-items">
          {[{icon:Store,label:"Manage"},{icon:ShoppingCart,label:"Operate"},{icon:Sparkles,label:"Assist"},{icon:BrainCircuit,label:"Understand"}].map(({icon:Icon,label},i)=><div className="experience-story-item" key={label} style={{animationDelay:`${i*160}ms`}}><Icon size={23}/><span>{label}</span></div>)}
        </div>
      </div>
      <div className="experience-story-bottom"><span>Distinct tools. One business context.</span><span>01 — 05 <ArrowDown size={16}/></span></div>
    </div>
  </section>;
}

function ProductJourney() {
  const [active, setActive] = useState<Demo>("owner");
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-experience-scene]"));
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
      if(visible.length) setActive(visible[0].target.getAttribute("data-experience-scene") as Demo);
    }, { rootMargin:"-31% 0px -31% 0px", threshold: [0, .25, .5, .75] });
    nodes.forEach(node=>observer.observe(node));
    return ()=>observer.disconnect();
  }, []);
  return <section id="experience-products" className="experience-sheet experience-dark experience-product-journey">
    <div className="experience-container">
      <div className="experience-journey-intro"><p className="experience-kicker">BUILT TO WORK TOGETHER</p><h2>Five perspectives.<br/><i>One clearer picture.</i></h2><p>Scroll to see how every part of TREXVEN helps your business move forward.</p></div>
      <div className="experience-journey-grid">
        <div className="experience-journey-narrative">
          {demoScenes.map(scene=><article key={scene.id} data-experience-scene={scene.id} className={"experience-journey-scene "+(active===scene.id?"is-active":"")}>
            <p>{scene.eyebrow}</p><h3>{scene.title}</h3><div className="experience-journey-copy"><p>{scene.detail}</p><ul>{scene.bullets.map(b=><li key={b}><Check size={15}/>{b}</li>)}</ul><Link href={scene.id==="angel"?"/products/owner":"/products/"+(scene.id==="owner"?"owner":scene.id==="pos"?"pos":scene.id)} className="experience-inline-link">Explore {scene.id==="owner"?"TREXVEN":scene.id==="pos"?"TREXVEN POS":scene.id[0].toUpperCase()+scene.id.slice(1)} <ArrowUpRight size={17}/></Link></div></article>)}
        </div>
        <div className="experience-journey-sticky"><div className="experience-device-frame"><div className="experience-device-notch"/><DemoScreen active={active}/></div><div className="experience-demo-controls" aria-label="Product preview selector">{demoScenes.map((scene,i)=><button type="button" key={scene.id} onClick={()=>{setActive(scene.id);document.querySelector('[data-experience-scene="'+scene.id+'"]')?.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"center"});}} className={active===scene.id?"is-selected":""} aria-label={"Show "+scene.id+" preview"} aria-pressed={active===scene.id}>{String(i+1).padStart(2,"0")}</button>)}</div><p className="experience-demo-note">Interactive illustration · not live business data</p></div>
      </div>
    </div>
  </section>;
}

const useCases = [
  { id:"01", title:"Your store, in focus.", text:"Understand what is happening across your inventory, team and daily operations.", tag:"FOR OWNERS", icon:Store, className:"experience-case-one" },
  { id:"02", title:"A better way to sell.", text:"Give your team a clear and purpose-built sales workspace.", tag:"FOR TEAMS", icon:ShoppingCart, className:"experience-case-two" },
  { id:"03", title:"Intelligence with context.", text:"Connect the dots between business activity and the moments that matter.", tag:"FOR GROWTH", icon:BrainCircuit, className:"experience-case-three" },
];

function UseCases() {
  return <section className="experience-sheet experience-cases experience-light"><div className="experience-container">
    <div className="experience-section-head experience-case-heading"><p className="experience-kicker">A CLOSER LOOK</p><h2>Designed around<br/><i>real business days.</i></h2><p>Different needs. One connected direction. Explore the experience behind each part of your business.</p></div>
    <div className="experience-case-track">{useCases.map(({id,title,text,tag,icon:Icon,className})=><article className={"experience-case "+className} key={id}><div className="experience-case-top"><span>{tag}</span><span>{id} / 03</span></div><div className="experience-case-art" aria-hidden="true"><span className="experience-case-ring ring-one"/><span className="experience-case-ring ring-two"/><Icon strokeWidth={1.15}/></div><div className="experience-case-bottom"><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    <p className="experience-swipe-hint">Swipe to explore on smaller screens <ArrowRight size={17}/></p>
  </div></section>;
}

function Setup() {
  const items=[{number:"01",title:"Choose your experience.",text:"Start with the TREXVEN app designed for your role — owner or employee.",icon:Layers3},{number:"02",title:"Connect your business.",text:"Configure your business and bring everyday operations into focus.",icon:Store},{number:"03",title:"Move forward with clarity.",text:"Use the tools and capabilities available to your business.",icon:CircleCheck}];
  return <section id="experience-steps" className="experience-sheet experience-steps"><div className="experience-container"><div className="experience-section-head"><p className="experience-kicker">GETTING STARTED</p><h2>Three steps.<br/><i>Then keep moving.</i></h2><p>No complicated explanation. Just a better way to get closer to your business.</p></div><div className="experience-step-stack">{items.map(({number,title,text,icon:Icon},i)=><article className={"experience-step experience-step-"+i} key={number}><span className="experience-step-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div><Icon className="experience-step-icon" strokeWidth={1.3}/></article>)}</div></div></section>;
}

const faq = [
  ["What exactly is TREXVEN?", "TREXVEN is an ecosystem of distinct business tools, including a business-owner app, a separate POS app, and intelligent capabilities."],
  ["Is TREXVEN POS the same app as TREXVEN?", "No. TREXVEN is for business owners. TREXVEN POS is the separate employee-facing application for sales and authorized workflows."],
  ["Does Angel do the same thing as Intelligence?", "No. Angel is the assistant experience. TREXVEN Intelligence is the reasoning layer that connects operational information and business context."],
  ["Can I register and manage my business here?", "The website is for product information. Registration and business management happen in the mobile apps."],
  ["Where are prices and download links?", "Visit the Pricing and Download pages. Verified app-store links appear when configured, and available subscription options are presented in TREXVEN Owner."],
];

function Questions() {
  return <section className="experience-sheet experience-faq experience-light"><div className="experience-container"><div className="experience-faq-grid"><div><p className="experience-kicker">GOOD TO KNOW</p><h2>Questions,<br/><i>answered simply.</i></h2><p>Find out how the ecosystem fits together.</p></div><div>{faq.map(([question,answer])=><details key={question} className="experience-faq-item"><summary>{question}<ChevronDown size={19}/></summary><p>{answer}</p></details>)}</div></div></div></section>;
}

function Closing() {
  return <section className="experience-sheet experience-close"><div className="experience-close-image" aria-hidden="true"/><div className="experience-close-shade" aria-hidden="true"/><div className="experience-container experience-close-content"><p className="experience-kicker experience-kicker-light">THE NEXT CHAPTER STARTS HERE</p><h2>Work smarter.<br/><i>Grow together.</i></h2><p>Discover what a connected business ecosystem can feel like.</p><Link href="/download" className="experience-button experience-button-primary">Explore TREXVEN apps <ArrowUpRight size={19}/></Link></div></section>;
}

export function EditorialHome() {
  return <div className="experience-home"><Intro/><Story/><ProductJourney/><UseCases/><Setup/><Questions/><Closing/></div>;
}
