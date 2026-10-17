# Zayed Sultan — Apps, AI & Ideas

A responsive, static portfolio featuring app showcases, AI learning and research interests, and academic milestones. Built with semantic HTML, CSS, and vanilla JavaScript; no build step or JavaScript dependencies.

## Run locally

```bash
python3 -m http.server 8000
```

Open http://localhost:8000. GitHub Pages can serve this repository directly from `main` at the root. Existing image filenames are preserved.

## Edit

- `index.html`: biography, projects, credentials, and contact links.
- `styles.css`: responsive layout, typography, and color palette.
- `script.js`: project filters, mobile menu, AI workflow walkthrough, clipboard action, and navigation state.
- `favicon.svg`: site icon.

The workflow explorer is an illustrative, browser-local walkthrough, not a live AI model. Ruwad's recommendation features are labeled as a concept; AP Research is labeled as a proposal. The email link opens the visitor's email application. No contact data is collected by this site.

Project content and credential descriptions are based on the existing portfolio and supplied personal context. All credentials remain available under “More of the journey.” Project details use native disclosure elements and remain accessible without JavaScript. Google Fonts is optional; local font fallbacks are provided. Motion respects the visitor's reduced-motion preference.

## Visual system

Glacier Bay palette supplied by the owner: `#F0F8FF`, `#D1DCE5`, `#A3C5D9`, `#6A9FB5`, `#2E4A62`. Navy text sits on the three light surfaces; pale text sits on navy. Existing app showcase images retain their original artwork.

Responsive layouts use fluid widths, shrinkable grid columns, a compact navigation breakpoint at 760px, and two-column project cards above that width. Tablet AI content stacks at 1000px; workflow controls use two columns on narrow phones. The portrait remains first.
