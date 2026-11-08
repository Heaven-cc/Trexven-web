# TREXVEN Official Website

Public informational marketing website for the TREXVEN ecosystem. Next.js, TypeScript and Tailwind CSS.

## Start

```bash
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd ci` and `npm.cmd run dev` if PowerShell blocks `npm.ps1`. Open the local URL printed by Next.js (usually http://localhost:3000).

Install dependencies before starting a fresh checkout. An error saying `'next' is not recognized` means the local Next.js dependency is missing; run `npm ci` first.

## Configure

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the verified production domain. Add the verified Google Play URLs for Owner and POS once available.

Pricing, app availability, legal policy text and official product screenshots require verification before launch. No production Supabase connection or website authentication is used.

## Routes

Home, Products, individual Owner/POS/Intelligence/Vision pages, Solutions, Pricing, Download, About, Support, Contact, Privacy, Terms and Account Deletion.
