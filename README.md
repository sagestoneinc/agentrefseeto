# Seeto Realty Agent Referral Program Landing Page

A fast, responsive, conversion-focused static landing page for Seeto Realty Property Management agent referrals. The site is ready for GitHub Pages hosting and does not require a build step.

## GitHub Pages deployment

This repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that publishes the static site to GitHub Pages.

1. Push this branch to GitHub.
2. In the repository settings, open **Pages**.
3. Set **Build and deployment** to **GitHub Actions**.
4. Run the **Deploy static site to GitHub Pages** workflow, or push to `main`, `master`, or `work`.

The `.nojekyll` file is included so GitHub Pages serves the static files exactly as committed.

## Local preview

Open `index.html` in a browser, or run a simple static server:

```bash
python3 -m http.server 4173
```

## Calendly

The partnership call buttons point to:

```text
https://calendly.com/seetorealty/partnership-call
```

Update `calendlyUrl` in `config.js` if Seeto Realty uses a different booking event URL.

## Referral CRM and email notifications on GitHub Pages

GitHub Pages only serves static files, so it cannot run the serverless handler in `api/referrals.js`. To connect submissions to a CRM and email notification workflow from GitHub Pages, use a secure external form endpoint such as a CRM form endpoint, Zapier Catch Hook, Make webhook, Formspree, Getform, Basin, or another form-to-email/CRM service.

Configure `config.js`:

```js
window.SEETO_REFERRAL_CONFIG = {
  calendlyUrl: 'https://calendly.com/seetorealty/partnership-call',
  notificationEmail: 'carlos@seetorealty.com',
  submissionEndpoint: 'https://example.com/your-secure-form-or-crm-webhook',
  submissionFormat: 'json',
};
```

Use `submissionFormat: 'form'` for form services that require `application/x-www-form-urlencoded` payloads. If `submissionEndpoint` is blank or unavailable, the page opens a prefilled email to `notificationEmail` as a backup submission path.

## Optional serverless endpoint

`api/referrals.js` remains available for Vercel-style hosting if the site is later deployed somewhere that supports serverless functions. For GitHub Pages, prefer the static `config.js` endpoint approach described above.
