# focusfit-legal

Public pages for IpsoFit (repo codename FocusFit — [cbarrado/FocusFit](https://github.com/cbarrado/FocusFit)), served via GitHub Pages at `https://cbarrado.github.io/focusfit-legal/`. The repo keeps its codename: GitHub Pages does **not** redirect a renamed project site, so the path can only change together with an app release that points `LEGAL_BASE_URL` at the new one — or, better, after the Pages custom domain `ipsofit.com` is live, which makes the repo name irrelevant.

| Page | Purpose |
|------|---------|
| `index.html` / `index.es.html` | Landing page (EN / ES) at `https://ipsofit.com/`, styled by `site.css`. Screenshots in `img/<lang>/` are the Play listing set (FocusFit `assets/branding/play/screenshots/`), frame cropped and halved to 470 × 900. The beta call to action is a `mailto:` to `support@ipsofit.com` until the app is public |
| `legal.html` / `legal.es.html` | Legal index |
| `privacy.html` / `privacy.es.html` | Privacy Policy (EN / ES) |
| `terms.html` / `terms.es.html` | Terms of Use (EN / ES) |
| `disclaimer.html` / `disclaimer.es.html` | Medical & Safety Disclaimer (EN / ES) — the in-app first-launch health acknowledgment links here |
| `delete-account.html` / `delete-account.es.html` | Account deletion web page (EN / ES) required by Google Play's data-deletion policy: in-app path, email route, what is deleted and kept. Linked from the Privacy Policy |
| `approve.html` | Confirmation page for the beta access-approval emails. Reads `uid`, `token`, `action` from the query string and POSTs them to the `decide-approval` Supabase Edge Function. Hosted here because Supabase serves Edge Function HTML on `*.supabase.co` as `text/plain`. |

No build step. Every legal page is plain HTML sharing `style.css`; the landing page uses `site.css`.

## Attribution

Page structure and base styles are adapted from [OpenStrap/edge](https://github.com/OpenStrap/edge) (`docs/*.html`, `docs/style.css`), MIT licensed. All legal text is original to FocusFit.

## Legal texts

Drafted with AI assistance and reviewed by the developer, who is not a lawyer — each page carries that notice. Versioned by date in the `.updated` line; the app's health acknowledgment re-shows when the disclaimer version changes.
