import type { MetadataRoute } from "next";
import { siteUrl, siteIndexable } from "@/config/site";
export default function robots(): MetadataRoute.Robots {
  if (!siteIndexable || !siteUrl) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/" }, sitemap: siteUrl + "/sitemap.xml" };
}
