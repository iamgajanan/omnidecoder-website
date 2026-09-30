# OmniDecoder Website

Production-oriented Next.js marketing site for the OmniDecoder parent brand and its products: OmniSocial, Appointly and AI Testing Framework.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- shadcn/ui-style components
- Lucide icons
- Motion for interaction and animation
- next-themes for light/dark mode

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Validate
```bash
npm run lint
npm run build
npm run start
```

## Configure before production
Copy `.env.example` to `.env.local` and set real business details:
- `NEXT_PUBLIC_SITE_URL`
- `COMPANY_NAME`
- `COMPANY_ADDRESS`
- `SUPPORT_EMAIL`
- `LEGAL_EMAIL`
- `PHONE`
- `DOMAIN`

The legal pages and contact form deliberately avoid fabricated business details. The contact form currently demonstrates validation/success UI only; connect a real backend/email provider before using it as a production contact channel.

## Routes
- `/`
- `/products/omnisocial`
- `/products/appointly`
- `/products/ai-testing-framework`
- `/pricing`
- `/about`
- `/contact`
- `/privacy`
- `/terms`
- `/refund-policy`
- `/cookie-policy`
