import { LegalPending } from "@/components/legal-pending";
import { pageMetadata } from "@/config/metadata";
export const metadata = { ...pageMetadata("Privacy policy", "TREXVEN website privacy policy publication status.", "/privacy"), robots: { index: false, follow: false } };
export default function Privacy() { return <LegalPending title="Privacy policy" />; }
