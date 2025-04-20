# Zayed Sultan – Personal Portfolio Site

This is a **static** one‑page portfolio (HTML + Tailwind CDN).

## Preview locally

```bash
# From this folder
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

## Publish on GitHub Pages

1. Create an empty repo (e.g. `zayed‑portfolio`)
2. Copy **index.html** into that repo
3. Commit & push:

```bash
git init
git add index.html
git commit -m "Initial commit – portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USER/zayed-portfolio.git
git push -u origin main
```

4. In the repo’s **Settings → Pages**, pick “Deploy from branch” → branch **main** → folder **/ (root)** → Save.

A few seconds later your site is live at  
`https://YOUR_USER.github.io/zayed-portfolio`