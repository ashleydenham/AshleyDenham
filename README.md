# AshleyDenham.me

Personal homepage for **Ashley Denham**.

## Live Site

[ashleydenham.me](https://ashleydenham.me)

## Stack

- Single-file static HTML (`index.html`)
- Custom CSS (no build step, no framework dependency)
- Vanilla JavaScript for data rendering and UI interactions
- GitHub Pages hosting from `main`

## Project Structure

```
|-- index.html      # Homepage with all sections, styles, and JS data blocks
|-- 404.html        # Custom 404 page
|-- avatar.jpg      # Profile photo
|-- CNAME           # Custom domain config
|-- assets/
|   `-- badges/     # Local logo assets used by credential and language badges
`-- .github/
    `-- workflows/
        `-- jekyll-gh-pages.yml
```

## Homepage Sections (top to bottom)

1. Sticky section navigation
2. Hero (name, positioning statement, social links, profile snapshot)
3. Current focus
4. Selected work
5. Study and development
6. Background
7. IT credential roadmap
8. Footer

## Editable Content Blocks

At the top of the `<script>` block in `index.html`:

- `SOCIAL_LINKS`
  - fields: `label`, `url`, `enabled`
- `FOCUS_PILLARS`
  - fields: `title`, `summary`
- `PROJECTS`
  - fields: `name`, `url`, `summary`, `label`
- `CURRENT_STUDY`
  - fields: `title`, `issuer`, `status`, `summary`, `url`, `imageSrc`, `imageAlt`
- `IT_CREDENTIALS`
  - fields: `id`, `title`, `issuer`, `category`, `status`, `url`, `summary`, `imageSrc`, `imageAlt`
  - `status` values in use: `in-progress`, `planned`
- `LANGUAGE_BADGES`
  - fields: `name`, `url`, `imageSrc`, `imageAlt`
- `NON_IT_QUALIFICATIONS`
  - array of qualification strings rendered in the Background section
- `CAREER_HIGHLIGHTS`
  - array of career highlight strings rendered in the Background section
- `ROADMAP_ORDER`
  - array of credential `id` values used in the IT roadmap marquee

## Interaction Notes

- The roadmap marquee auto-scrolls horizontally and pauses on hover/focus.
- Badge logos are served from local files in `assets/badges/` to avoid external image failures.
- The full IT credential library is available inside a `details` panel so the homepage stays lighter.
- Coding languages now render as a compact tools strip rather than a separate scrolling section.

## Deployment

This site is deployed by GitHub Pages from the root of the `main` branch.

## License

(c) 2026 Ashley Denham. All rights reserved.
