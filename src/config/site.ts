function httpsUrl(value: string | undefined, name: string): URL | null {
  if (!value?.trim()) return null;
  let url: URL;
  try { url = new URL(value.trim()); } catch { throw new Error(name + " must be an absolute HTTPS URL."); }
  if (url.protocol !== "https:" || url.username || url.password) throw new Error(name + " must be an HTTPS URL without credentials.");
  return url;
}
const configuredSite = httpsUrl(process.env.NEXT_PUBLIC_SITE_URL, "NEXT_PUBLIC_SITE_URL");
if (configuredSite && (configuredSite.pathname !== "/" || configuredSite.search || configuredSite.hash || configuredSite.hostname === "example.com")) {
  throw new Error("NEXT_PUBLIC_SITE_URL must be the verified site origin, without a path, query or placeholder domain.");
}
export const siteUrl = configuredSite?.origin;
export const siteIndexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true";
if (siteIndexable && !siteUrl) throw new Error("Set NEXT_PUBLIC_SITE_URL before enabling indexing.");

function playUrl(value: string | undefined, name: string) {
  const url = httpsUrl(value, name);
  if (!url) return null;
  if (url.hostname !== "play.google.com" || url.port || url.pathname !== "/store/apps/details" || !url.searchParams.get("id")) {
    throw new Error(name + " must point to an official Google Play app listing.");
  }
  return url.href;
}
export const ownerPlay = playUrl(process.env.NEXT_PUBLIC_OWNER_PLAY_URL, "NEXT_PUBLIC_OWNER_PLAY_URL");
export const posPlay = playUrl(process.env.NEXT_PUBLIC_POS_PLAY_URL, "NEXT_PUBLIC_POS_PLAY_URL");

const email = process.env.TREXVEN_SUPPORT_EMAIL?.trim();
if (email && !/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9.-]*[A-Za-z0-9])?\.[A-Za-z]{2,}$/.test(email)) {
  throw new Error("TREXVEN_SUPPORT_EMAIL must be a valid support email address.");
}
export const supportEmail = email || null;

export const products = [
  { slug: "owner", name: "TREXVEN", label: "Business command center", description: "Manage inventory, employees, operations and business performance from a dedicated owner experience.", features: ["Business overview", "Inventory management", "Employee oversight", "Financial reporting"], audience: "Business owners" },
  { slug: "pos", name: "TREXVEN POS", label: "Everyday operations, simplified", description: "A separate employee-facing app for authorized checkout, product operations and day-to-day workflows.", features: ["Sales checkout", "Product search", "Returns and expenses", "Employee permissions"], audience: "Employees and authorized operators" },
  { slug: "intelligence", name: "TREXVEN Intelligence", label: "Clarity from connected information", description: "The reasoning layer designed to turn operational information into clearer business understanding.", features: ["Operational reasoning", "Business context", "Actionable insights"], audience: "Business owners" },
  { slug: "vision", name: "TREXVEN Vision", label: "See what matters", description: "Camera-based observation and event intelligence designed for connected business monitoring.", features: ["Camera observations", "Event detection", "Relevant alerts"], audience: "Business owners" },
] as const;
