import type { Metadata } from "next";
import { brand } from "@/config/content";
import { siteUrl } from "@/config/site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = siteUrl ? new URL(path, siteUrl).href : undefined;
  return {
    title, description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: { type: "website", siteName: brand.name, title, description, ...(url ? { url } : {}) },
  };
}
