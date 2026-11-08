"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { actions, brand, navigationLinks } from "@/config/content";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const current = (url: string) => pathname === url || pathname.startsWith(url + "/");
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    };
    const wide = window.matchMedia("(min-width: 1024px)");
    const resize = () => { if (wide.matches) setOpen(false); };
    wide.addEventListener("change", resize);
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      wide.removeEventListener("change", resize);
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);

  return <header ref={header} className="trexven-floating-navigation">
    <div className="trexven-nav-pill">
      <Link href="/" aria-label={brand.name + " home"} className="trexven-nav-brand">TREXVEN<span>.</span></Link>
      <nav aria-label="Primary" className="trexven-nav-links">
        {navigationLinks.map(([label, url]) => <Link key={url} href={url} aria-current={current(url) ? "page" : undefined} className={current(url) ? "is-current" : ""}>{label}</Link>)}
      </nav>
      <Link href="/download" className="trexven-nav-cta">{actions.download}<ArrowUpRight size={17} aria-hidden="true" /></Link>
      <button ref={toggle} type="button" className="trexven-nav-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
        {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
      </button>
    </div>
    <nav id="mobile-navigation" aria-label="Mobile" hidden={!open} className="trexven-mobile-nav">
      <div>{navigationLinks.map(([label, url]) => <Link key={url} href={url} aria-current={current(url) ? "page" : undefined} onClick={() => setOpen(false)} className={current(url) ? "is-current" : ""}>{label}</Link>)}
        <Link href="/download" className="trexven-mobile-cta" onClick={() => setOpen(false)}>{actions.download}<ArrowUpRight size={16}/></Link></div>
    </nav>
  </header>;
}
