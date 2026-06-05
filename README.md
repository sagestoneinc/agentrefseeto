# Seeto Realty Agent Referral Program Landing Page

A premium, conversion-focused landing page built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build and production

```bash
npm run build
npm run start
```

## Environment configuration

The referral form submits to a secure endpoint if configured. Add these environment variables to `.env.local`:

```bash
NEXT_PUBLIC_REFERRAL_ENDPOINT=https://your-form-or-crm-webhook
NEXT_PUBLIC_REFERRAL_EMAIL=carlos@seetorealty.com
```

If `NEXT_PUBLIC_REFERRAL_ENDPOINT` is not set, the form opens a prefilled email to `NEXT_PUBLIC_REFERRAL_EMAIL` as a fallback.

## Calendly

The partnership call buttons open the Calendly popup configured in `src/lib/constants.ts`:

```text
https://calendly.com/d/cym9-q4q-pnm
```

## Assets

Replace `public/images/seeto-realty-logo.svg` with the official Seeto Realty logo and update the brochure-inspired imagery as needed.
