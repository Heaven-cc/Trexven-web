import type { MetadataRoute } from "next";
import { products, siteUrl, siteIndexable } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteIndexable || !siteUrl) return [];
  // Unpublished legal documents stay out of search until approved content is supplied.
  const routes = ["", "/products", "/solutions", "/pricing", "/about", "/support", "/contact", "/download", "/account-deletion", ...products.map(p => "/products/" + p.slug)];
  return routes.map(route => ({ url: siteUrl + route, changeFrequency: "monthly", priority: route === "" ? 1 : 0.7 }));
}
