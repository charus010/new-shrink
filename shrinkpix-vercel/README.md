# ShrinkPix – setup

## Run locally
1. `cp .env.example .env` and fill in the values (Node 18+).
2. `npm install`
3. `npm start`  → http://localhost:3000

## Deploy on Vercel
1. Push this folder to a new GitHub repo (do NOT upload `node_modules` or `.env`).
2. On vercel.com: **Add New → Project → import the repo** → Deploy (no build settings needed).
3. **Settings → Environment Variables**, add: `SITE_URL` (your live URL, no trailing slash), `CONTACT_TO`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`. Then **Redeploy**.
4. **Settings → Domains** to connect your own domain.

Notes: Vercel limits request bodies to ~4.5 MB, so each image is capped at 4 MB. Images are processed in memory and never stored. Contact form needs working SMTP credentials.

## Articles
Add `content/<slug>.md` (front matter: title, description, category, author, date). Blog index, categories, sitemap and Article schema update automatically.

## AdSense checklist
- [ ] Own domain on HTTPS, live 2+ weeks, original content only
- [ ] All pages live (About, Contact, Privacy, Terms, Disclaimer), no broken links
- [ ] Replace `hello@yourdomain.com` in views.js with your real address; test the contact form
- [ ] Submit sitemap.xml in Google Search Console
- [ ] Apply at adsense.google.com, paste the verification snippet in views.js `<head>`
- [ ] Add ads.txt to /public after approval; load the AdSense script in app.js only after consent
- [ ] Replace the "Ad slot" placeholders with ad units, away from the upload buttons
