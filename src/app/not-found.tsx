import Link from "next/link";
export default function NotFound() {
  return <section className="section bg-cloud text-center"><div className="container-site max-w-3xl">
    <h1 className="heading">Page not found.</h1><p className="mt-5 text-muted">This page may have moved.</p><Link href="/" className="button button-blue mt-8 w-full sm:w-auto">Back to home</Link>
  </div></section>;
}
