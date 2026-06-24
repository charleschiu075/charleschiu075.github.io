# charleschiu075.github.io

My personal website, served via [GitHub Pages](https://charleschiu075.github.io/).

It's a static, **buildless** site — no frameworks, no build step. Just open
`index.html` or push to `main` and GitHub Pages serves it.

## Structure

```
.
├── index.html          # Page markup (semantic sections)
├── 404.html            # Custom not-found page
├── Photo.jpeg          # Profile photo
└── assets/
    ├── css/style.css   # All styling + theme tokens (CSS custom properties)
    ├── js/main.js      # Theme toggle, scroll reveal, data-driven sections
    └── img/            # (room for future images)
```

## Updating content

Most edits live in **one place** — the `DATA` section at the top of
`assets/js/main.js`:

- **Add a skill:** add a string to the `skills` array.
- **Add a project:** add an object to the `projects` array
  (`title`, `description`, `tags`, optional `link`).

The page re-renders these on load, so no HTML changes are needed.

## Features

- Light/dark theme with system-preference detection, manual toggle, and
  persistence (`localStorage`) — set before paint to avoid flicker.
- Responsive layout, sticky nav, smooth scrolling.
- Scroll-reveal animations that respect `prefers-reduced-motion`.
- SEO: meta description, Open Graph tags, and JSON-LD `Person` schema.

## Ideas for later

- A dedicated blog / writing section (could use GitHub Pages + Markdown).
- Pull projects automatically from the GitHub API.
- A simple contact form (e.g. Formspree) — no backend needed.
