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
  return <header ref={header} className="theme-inverse sticky top-0 z-50 border-b border-white/10 bg-midnight/95 backdrop-blur-xl">
    <div className="container-site flex h-[68px] items-center justify-between gap-4 lg:h-[76px]">
      <Link href="/" aria-label={brand.name + " home"} className="shrink-0 py-2 text-2xl font-black tracking-[-.07em]">{brand.name}<span className="text-blue-400">.</span></Link>
      <nav aria-label="Primary" className="hidden items-center gap-6 text-sm lg:flex">
        {navigationLinks.map(([label, url]) => <Link key={url} href={url} aria-current={current(url) ? "page" : undefined} className={current(url) ? "py-3 text-blue-200 underline underline-offset-8" : "py-3 text-muted hover:text-white"}>{label}</Link>)}
      </nav>
      <Link href="/download" className="button button-blue hidden text-sm lg:inline-flex">{actions.download}<ArrowUpRight size={16} aria-hidden="true" /></Link>
      <button ref={toggle} type="button" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl hover:bg-white/10 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </div>
    <nav id="mobile-navigation" aria-label="Mobile" hidden={!open} className="mobile-menu container-site lg:hidden">
      <div className="flex flex-col gap-1 pb-2">
        {navigationLinks.map(([label, url]) => <Link key={url} href={url} aria-current={current(url) ? "page" : undefined} onClick={() => setOpen(false)} className={current(url) ? "rounded-xl bg-white/10 px-3 py-3 text-blue-200" : "rounded-xl px-3 py-3 text-muted hover:bg-white/5"}>{label}</Link>)}
        <Link href="/download" className="button button-blue mt-3" onClick={() => setOpen(false)}>{actions.download}</Link>
      </div>
    </nav>
  </header>;
}
