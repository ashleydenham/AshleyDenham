# AshleyDenham.me

Personal portfolio and private infrastructure hub for **Ashley Denham** — Director & Founder at Hamily Holdings Pty Ltd.

## Live Site

[ashleydenham.me](https://ashleydenham.me)

## Stack

- **Pure HTML/CSS/JS** — zero dependencies, zero build step
- **GitHub Pages** — hosting with custom domain
- **CSS Layers** — `@layer reset, base, theme, components, utilities, motion`
- **Display P3** — wide-gamut colour support for HDR screens
- **Scroll-driven animations** — progressive enhancement with `animation-timeline: view()`
- **View Transitions API** — smooth page navigation

## Structure

```
├── index.html          # Portfolio — About, Journey, Projects, Certifications, Connect
├── secret.html         # Private Tailscale Network Hub (infrastructure dashboard)
├── 404.html            # Custom 404 page
├── CNAME               # Custom domain config for GitHub Pages
├── .nojekyll           # Bypass Jekyll processing
└── assets/
    └── avatar.jpg      # Profile image
```

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
