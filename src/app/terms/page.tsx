import { LegalPending } from "@/components/legal-pending";
import { pageMetadata } from "@/config/metadata";
export const metadata = { ...pageMetadata("Terms of service", "TREXVEN website terms of service publication status.", "/terms"), robots: { index: false, follow: false } };
export default function Terms() { return <LegalPending title="Terms of service" />; }
