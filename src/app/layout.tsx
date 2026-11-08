import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { brand } from "@/config/content";
import { siteUrl, siteIndexable } from "@/config/site";

export const metadata: Metadata = {
  title: { default: brand.name + " | Intelligent Business Management Ecosystem", template: "%s | " + brand.name },
  description: brand.description,
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  robots: { index: siteIndexable, follow: siteIndexable },
  openGraph: { type: "website", siteName: brand.name, title: brand.tagline, description: brand.description },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <a href="#main" className="skip-link">Skip to content</a>
    <Navigation />
    <main id="main" tabIndex={-1}>{children}</main>
    <Footer />
  </body></html>;
}
