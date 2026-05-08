# AshleyDenham.me

Personal portfolio for **Ashley Denham**: an Adelaide-based Mechatronics Engineering (Honours) student building AI agents, embedded systems, robotics projects, and trading infrastructure.

## What Changed

The site was rebuilt from a single-file static page into a small Next.js app. The previous version had useful local assets, semantic sections, and good reduced-motion intent, but it had become visually heavy and hard to maintain. The new version is intentionally quieter: typography-led, mostly monochrome, fast, mobile-first, and easier to edit through typed content.

## Stack

- Next.js 14 App Router with TypeScript
- Tailwind CSS for styling
- shadcn-style `Button`, `Card`, and `Badge` primitives in `components/ui/`
- Lucide React icons
- `next-themes` for system-aware dark/light mode with persistence
- `next/font` for Inter, Crimson Pro, and JetBrains Mono
- Static export configured for GitHub Pages via `.github/workflows/jekyll-gh-pages.yml`

## Project Structure

```text
app/
  globals.css       # Design tokens, theme variables, Tailwind layers
  layout.tsx        # Metadata, fonts, theme provider, favicon/OG placeholders
  page.tsx          # Single-page composition
  not-found.tsx     # Custom 404 page
  robots.ts         # robots.txt route
  sitemap.ts        # sitemap.xml route
components/
  header.tsx        # Sticky nav, theme toggle, mobile menu
  hero.tsx
  now.tsx
  projects.tsx
  signals.tsx       # Memberships, credential roadmap, language evidence
  about.tsx
  contact.tsx
  footer.tsx
  scroll-effects.tsx # Subtle section reveal + tab title updates
  ui/               # shadcn-style Button/Card/Badge
content/
  site.ts           # Typed site content and all editable public copy
public/
  avatar.jpg        # Existing profile image
  badges/           # Local badge/icon assets for memberships and credentials
  og.png            # Placeholder social preview image
  CNAME             # GitHub Pages custom domain
```

## Preserved Elements

- Existing `avatar.jpg`, copied to `public/avatar.jpg` for Next.js serving.
- The local-asset approach: no hotlinked Google image result URLs or tracking scripts.
- Semantic section structure, visible focus states, reduced-motion handling, and keyboard navigability.
- The custom 404 idea, rewritten in the requested dry Australian tone.

## Changed Elements

- Replaced the heavy glass/marquee layout with a restrained portfolio layout.
- Reframed the site around Projects, About, Now, and Contact.
- Added the exact About narrative and May 2026 Now section from the spec.
- Added six project cards: Slothy, Hammy, PinkPulse, HamTrade, Home Lab, and Custom AI Models.
- Added professional memberships and a credential roadmap in a restrained Signals section.
- Added local badge/icon assets for memberships, certifications, and language evidence.
- Added theme persistence, mobile slide-over navigation, scroll-triggered title updates, Open Graph metadata, robots, and sitemap.
- Updated the GitHub Pages workflow to build the Next static export from `out/` instead of running Jekyll.

## Editing Content

Edit `content/site.ts` for public-facing copy:

- `site.nav`
- `site.hero`
- `site.now`
- `site.projects`
- `site.memberships`
- `site.credentials`
- `site.about`
- `site.contact`
- `site.footer`

The component files should rarely need changes unless the layout itself changes.

## Development

```bash
npm install
npm run dev -- -H 127.0.0.1 -p 4173
npm run typecheck
npm run lint
npm run build
```

## Deployment

The repository currently exports a static Next.js build for GitHub Pages. The footer copy follows the requested wording, but if the site is moved to Vercel later the build config can be simplified by removing `output: 'export'` from `next.config.mjs` and connecting the repo in Vercel.

## Notes

- No analytics, tracking, forms, or third-party runtime scripts are included.
- `/og.png` is a placeholder. Replace it with a proper 1200x630 Open Graph image when ready.
- The inline favicon is a temporary monogram. Replace it with a complete favicon set in `public/` when the final mark exists.

## License

© 2026 Ashley Denham. All rights reserved.
