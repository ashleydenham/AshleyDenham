# AshleyDenham.me

Personal home page for **Ashley Denham** — Adelaide, Australia.

## Live Site

[ashleydenham.me](https://ashleydenham.me)

## Stack

- **Tailwind CSS 3** via CDN — zero build step
- **DM Sans** + **Playfair Display** (Google Fonts)
- **Pure vanilla JS** — IntersectionObserver scroll reveals, marquee, glassmorphic private panel
- **GitHub Pages** — hosting with custom domain

## Structure

```
├── index.html      # Single-page portfolio with integrated private panel
├── 404.html        # Custom 404 page
├── avatar.jpg      # Profile photo
├── CNAME           # Custom domain config
└── .github/
    └── workflows/
        └── jekyll-gh-pages.yml
```

## Quick Edit Guide

All editable content is at the top of the `<script>` block in `index.html`:

- **`TECH_ROW_1` / `TECH_ROW_2`** — tech badge marquee labels
- **`PRIVATE_LINKS`** — Tailscale server links (shown via lock icon)
- **Story text** — edit the `#story` section HTML directly
- **Projects** — edit or copy/paste project card blocks in `#projects`
- **Avatar** — replace `avatar.jpg` with your photo (square, <200KB)

## Deployment

Hosted via GitHub Pages from the `main` branch root. DNS configured with:

| Type  | Name | Value                        |
|-------|------|------------------------------|
| A     | @    | 185.199.108.153              |
| A     | @    | 185.199.109.153              |
| A     | @    | 185.199.110.153              |
| A     | @    | 185.199.111.153              |
| CNAME | www  | ashleydenham.github.io       |

## License

© 2026 Ashley Denham. All rights reserved.
