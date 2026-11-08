"use client";
import { useId, useState } from "react";
import { Home, Archive, Wallet, UserRound, Store, Search, Shield, Settings, Bell, CreditCard, Users, Sparkles } from "lucide-react";
import { brand } from "@/config/content";

const screens = [
  { name: "Home", icon: Home }, { name: "Inventory", icon: Archive },
  { name: "Finance", icon: Wallet }, { name: "Me", icon: UserRound },
] as const;
type Tab = (typeof screens)[number]["name"];
// Illustration only: these amounts are never mixed with customer or billing data.
const demo = { sales: 152400, stock: 1240500, gross: 2845600, net: 2714800, refunds: 45200, collections: 2760000, repayments: 156000 };
const currencies = Intl.supportedValuesOf("currency");

export function OwnerPreview({ compact = false }: { compact?: boolean }) {
  const [tab, setTab] = useState<Tab>("Home");
  const [currency, setCurrency] = useState("");
  const id = useId();
  const money = (amount: number) => currency ? new Intl.NumberFormat("en", { style: "currency", currency, currencyDisplay: "code" }).format(amount) : "—";
  return <div className={compact ? "mx-auto w-full min-w-0 max-w-[365px]" : "mx-auto w-full min-w-0 max-w-[470px]"}>
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">Demo currency</label>
      <select id={id} value={currency} onChange={event => setCurrency(event.target.value)} aria-describedby={id + "-note"} className="min-h-12 w-full rounded-xl border border-line bg-surface px-3 text-base text-ink">
        <option value="">Choose a currency</option>
        {currencies.map(code => <option key={code} value={code}>{code}</option>)}
      </select>
      <p id={id + "-note"} className="mt-2 text-xs leading-5 text-muted">Illustration only. Your business uses the currency selected at registration.</p>
    </div>
    <div className="overflow-hidden rounded-[28px] border-4 border-line bg-cloud text-ink shadow-xl sm:border-8">
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 pb-3 pt-5">
        <span className="text-sm font-black tracking-[.14em]">{brand.name}</span>
        <span className="flex items-center gap-1 text-xs font-bold text-signal"><Sparkles size={16} aria-hidden="true" />Angel</span>
      </div>
      <div className="min-h-[365px] px-4 pb-5 pt-4">
        <h3 className="mb-2 text-xl font-extrabold">{tab === "Home" ? "Your business at a glance" : tab}</h3>
        {tab === "Home" ? <>
          <p className="mb-5 text-sm text-muted">Your business overview</p>
          <div className="surface mb-4 flex items-center gap-2 p-4 text-sm font-bold"><Store size={18} className="shrink-0 text-signal" aria-hidden="true" />Your business</div>
          <div className="theme-inverse mb-4 rounded-2xl bg-midnight p-4">
            <p className="text-xs uppercase tracking-widest text-muted">Sales today</p>
            <p className="mt-4 break-words text-xl font-extrabold tabular-nums">{money(demo.sales)}</p>
            <p className="mt-2 text-xs text-muted">Demo data · not live</p>
          </div>
          <dl className="grid gap-3">
            {[["Transactions", "68"], ["Stock value", money(demo.stock)], ["Low stock", "6"], ["Alerts", "3"]].map(([label, value]) => <div className="surface flex flex-wrap items-baseline justify-between gap-2 p-4" key={label}><dt className="text-sm text-muted">{label}</dt><dd className="min-w-0 break-words font-bold tabular-nums">{value}</dd></div>)}
          </dl>
        </> : tab === "Inventory" ? <>
          <p className="mb-5 text-sm text-muted">Products and stock management</p>
          <div className="surface flex items-center gap-2 p-4 text-sm text-muted"><Search size={16} aria-hidden="true" />Search products</div>
          <dl className="surface my-4 divide-y divide-line p-4">
            {[["Products", "248"], ["Low stock", "6"], ["Out of stock", "3"]].map(([label, value]) => <div className="flex flex-wrap justify-between gap-2 py-3" key={label}><dt className="text-sm text-muted">{label}</dt><dd className="font-bold">{value}</dd></div>)}
          </dl>
          <div className="surface p-4 text-sm font-semibold text-signal">Stocktaking &amp; stock management</div>
          <div className="mt-3 grid grid-cols-2 gap-3">{["Scan", "Restock"].map(label => <div key={label} className="surface p-3 text-center text-sm font-semibold">{label}</div>)}</div>
        </> : tab === "Finance" ? <>
          <p className="mb-5 text-sm text-muted">Your business financial overview</p>
          <div className="theme-inverse mb-4 rounded-2xl bg-midnight p-4">
            <p className="text-xs uppercase tracking-widest text-muted">Gross sales</p><p className="mt-4 break-words text-xl font-bold tabular-nums">{money(demo.gross)}</p><p className="mt-2 text-xs text-muted">Demo data · this month · before refunds</p>
          </div>
          <div className="surface p-4"><p className="mb-3 text-sm font-bold">Financial breakdown</p>
            <dl className="divide-y divide-line">{[["Net collected", demo.net], ["Refunds", demo.refunds], ["Sale collections", demo.collections], ["Repayments", demo.repayments]].map(([label, value]) => <div key={label} className="flex flex-wrap justify-between gap-2 py-3 text-sm"><dt className="text-muted">{label}</dt><dd className="min-w-0 break-words font-semibold tabular-nums">{money(Number(value))}</dd></div>)}</dl>
          </div>
        </> : <>
          <div className="surface mb-5 flex items-center gap-3 p-4"><UserRound className="shrink-0 text-signal" aria-hidden="true" /><div><p className="font-bold">Business owner</p><p className="text-sm text-muted">Account settings</p></div></div>
          {[{ icon: Settings, label: "Business profile" }, { icon: Users, label: "Employees" }, { icon: Shield, label: "Permissions" }, { icon: CreditCard, label: "Manage subscription" }, { icon: Bell, label: "Notifications" }].map(({ icon: Icon, label }) => <div className="surface mb-2 flex items-center gap-3 px-4 py-3 text-sm font-semibold" key={label}><Icon size={17} className="shrink-0 text-signal" aria-hidden="true" />{label}</div>)}
        </>}
      </div>
      <nav aria-label="Preview screen selector" className="grid grid-cols-4 gap-1 border-t border-line bg-surface p-2">
        {screens.map(({ name, icon: Icon }) => <button key={name} type="button" onClick={() => setTab(name)} aria-pressed={tab === name} className={"flex min-h-14 min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-[11px] font-semibold " + (tab === name ? "bg-wash text-signal" : "text-muted")}><Icon size={20} aria-hidden="true" />{name}</button>)}
      </nav>
    </div>
  </div>;
}
