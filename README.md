# ipsofit-legal

Public legal pages for IpsoFit, served via GitHub Pages at the custom domain `https://ipsofit.com/`. The app reads that base URL (`LEGAL_BASE_URL`), so the repo name does not affect any link.

| Page | Purpose |
|------|---------|
| `index.html` / `index.es.html` | Legal index |
| `privacy.html` / `privacy.es.html` | Privacy Policy (EN / ES) |
| `terms.html` / `terms.es.html` | Terms of Use (EN / ES) |
| `disclaimer.html` / `disclaimer.es.html` | Medical & Safety Disclaimer (EN / ES) — the in-app first-launch health acknowledgment links here |
| `approve.html` | Confirmation page for the beta access-approval emails. Reads `uid`, `token`, `action` from the query string and POSTs them to the `decide-approval` Supabase Edge Function. Hosted here because Supabase serves Edge Function HTML on `*.supabase.co` as `text/plain`. |

No build step. Every page is plain HTML sharing `style.css`.

## Attribution

Page structure and base styles are adapted from [OpenStrap/edge](https://github.com/OpenStrap/edge) (`docs/*.html`, `docs/style.css`), MIT licensed. All legal text is original to IpsoFit.

## Legal texts

Drafted with AI assistance and reviewed by the developer, who is not a lawyer — each page carries that notice. Versioned by date in the `.updated` line; the app's health acknowledgment re-shows when the disclaimer version changes.
