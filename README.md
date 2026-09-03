# focusfit-legal

Public pages for [FocusFit](https://github.com/cbarrado/FocusFit), served via GitHub Pages at `https://cbarrado.github.io/focusfit-legal/`.

- `approve.html` — confirmation page for the beta access-approval emails. Reads `uid`, `token`, `action` from the query string and POSTs them to the `decide-approval` Supabase Edge Function. Hosted here because Supabase serves Edge Function HTML on `*.supabase.co` as `text/plain`.
- Privacy Policy, Terms of Use and medical disclaimer (EN + ES) land here in Campaign 023 Phase 05.
