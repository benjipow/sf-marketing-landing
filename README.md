# sf-marketing-landing

Marketing landing page (Vite + React + Tailwind), exported from GoHighLevel and hosted on Cloudflare Workers.

## Local development

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # production build -> dist/
```

## Deployment

Every push to `main` deploys automatically via Cloudflare's GitHub integration.

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Config: `wrangler.jsonc` (serves `dist/` as a single-page app)

## One-time: move images off GHL

Images are still hosted on GHL's CDN. Run this once, then commit the result:

```bash
node scripts/localize-images.mjs
```
