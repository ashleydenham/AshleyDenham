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

1. Hero (photo + name)
2. Social buttons
3. Projects
4. IT credentials featured wheel
5. Coding languages wheel
6. Expandable full IT credential catalog
7. Non-IT qualifications
8. Previous careers
9. Footer

## Editable Content Blocks

At the top of the `<script>` block in `index.html`:

- `SOCIAL_LINKS`
  - fields: `label`, `url`, `enabled`
- `PROJECTS`
  - fields: `name`, `url`, `summary`
- `IT_CREDENTIALS`
  - fields: `id`, `title`, `issuer`, `category`, `status`, `url`, `summary`, `imageSrc`, `imageAlt`
  - `status` values in use: `in-progress`, `planned`
- `LANGUAGE_BADGES`
  - fields: `name`, `url`, `summary`, `imageSrc`, `imageAlt`
- `IT_BADGE_FEATURED_ORDER`
  - array of credential `id` values used in the featured auto-scroll wheel

## Interaction Notes

- Badge wheels auto-scroll horizontally and pause on hover/focus.
- Badge logos are served from local files in `assets/badges/` to avoid external image failures.
- Featured credentials render as compact certificate-style badge cards.
- "View full credential list" expands/collapses the full categorized catalog.

## Deployment

This site is deployed by GitHub Pages from the root of the `main` branch.

## License

(c) 2026 Ashley Denham. All rights reserved.
