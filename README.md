# IVC Website

Static website for the Immunization Vocabularies Collaboration.

## Local preview

Change to the public site directory and run a local static server:

```powershell
Set-Location site
python -m http.server 4173
```

Then open `http://localhost:4173/`. The root redirects to `home.html`.

## Pages

- `site/home.html`
- `site/nuva.html`
- `site/resources.html`
- `site/rich-information.html`
- `site/meetings.html`
- `site/bordeaux-2025.html`
- `site/about.html`
- `site/contact.html`

## Remaining release checks

- Test `info@ivci.org` end to end.
- Confirm the InteropHub historical meeting backload is deployed.
- Replace the Bordeaux localhost agenda URLs with their production URLs.
- Recheck the NUVA overview and distribution links before publishing.
