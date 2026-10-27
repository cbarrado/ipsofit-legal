# focusfit-legal

Public pages for IpsoFit (repo codename FocusFit — [cbarrado/FocusFit](https://github.com/cbarrado/FocusFit)), served via GitHub Pages at `https://cbarrado.github.io/focusfit-legal/`. The repo keeps its codename: GitHub Pages does **not** redirect a renamed project site, so the path can only change together with an app release that points `LEGAL_BASE_URL` at the new one — or, better, after the Pages custom domain `ipsofit.com` is live, which makes the repo name irrelevant.

| Page | Purpose |
|------|---------|
| `index.html` / `index.es.html` | Landing page (EN / ES) at `https://ipsofit.com/`: hero, a tabbed tour of the six home-screen features, more features, closed-beta call to action (`mailto:support@ipsofit.com` until the app is public), FAQ. Styled by `site.css`; light by default, the header toggle switches to dark (`theme.js` applies the saved choice before first paint, `site.js` runs the toggle and the tabs). Screenshots in `img/<lang>/<light|dark>/` come from the desktop app in a 412 × 789 viewport at 1.5×, with the dev badge and the account photo removed |
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
