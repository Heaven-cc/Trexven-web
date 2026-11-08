import { EditorialHome } from "@/components/editorial-home";
import { brand } from "@/config/content";
import { pageMetadata } from "@/config/metadata";

export const metadata = pageMetadata(
  "TREXVEN | Intelligent Business Management Ecosystem",
  brand.description,
  "/"
);

export default function Home() {
  return <EditorialHome />;
}
