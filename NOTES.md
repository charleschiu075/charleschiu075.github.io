# Redesign Notes

Documentation for the site redesign commit — *"Redesign site: themed, responsive, data-driven, extensible."*

---

## 1. Technology Involved

The site stays intentionally **buildless** — no frameworks, no bundler, no build step. GitHub Pages serves the files exactly as committed.

| Area | Technology | Notes |
|------|------------|-------|
| Markup | **HTML5** | Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), accessible patterns. |
| Styling | **CSS3** | Custom properties (design tokens), Flexbox & CSS Grid, `clamp()` fluid type, `backdrop-filter`, `color-mix()`. |
| Behaviour | **Vanilla JavaScript** | Zero dependencies. Theme logic, data-driven rendering, scroll animations. |
| Animation | **IntersectionObserver** | Scroll-reveal effects with a graceful fallback when unsupported. |
| Theming | **localStorage + `prefers-color-scheme`** | Persisted user choice, system default, no-flash inline script. |
| SEO / Social | **Open Graph + JSON-LD** | `Person` structured data, meta description, social preview tags. |
| Hosting | **GitHub Pages** | Static hosting straight from the repo. |

**File structure**

```
.
├── index.html          # Page markup
├── 404.html            # Custom not-found page
├── README.md           # Repo + contribution docs
├── Photo.jpeg          # Profile photo
└── assets/
    ├── css/style.css   # Styling + theme tokens
    ├── js/main.js      # Behaviour + content data
    └── img/            # Reserved for future images
```

---

## 2. Design Concept

- **From card to portfolio.** The original site was a single centered bio card. The redesign expands it into a scrollable single-page portfolio with clear sections: Hero → About → Skills → Projects → Contact.
- **Dark-first, dual-theme.** A modern dark slate palette is the default, with a cyan/sky accent. A toggle (and system-preference detection) offers a clean light theme. Theme is applied *before paint* to avoid flicker.
- **Design tokens.** Colors, radii, spacing, and transitions live in CSS custom properties, so the whole look can be retuned from one place and both themes stay consistent.
- **Motion with restraint.** Subtle scroll-reveal and hover lifts add life without being distracting, and everything collapses cleanly under `prefers-reduced-motion`.
- **Accessibility & responsiveness as defaults.** Skip link, ARIA labels, semantic structure, alt text, fluid typography, and a layout that adapts from desktop to mobile.
- **Content/structure separation.** Skills and projects are defined as data arrays in JavaScript and rendered into the page, keeping the markup clean and editing trivial.

---

## 3. Personal Thoughts & Future Improvement

### Thoughts
- Keeping the site buildless was a deliberate trade-off: it's a little more manual than a framework, but it's transparent, fast, dependency-free, and easy to maintain for a personal site — exactly the right scope.
- Separating *content* (the data arrays) from *presentation* (HTML/CSS) means updating the site no longer requires touching markup — a small change that makes ongoing upkeep much friendlier.
- Investing early in theming, accessibility, and SEO sets a solid foundation that future additions can build on rather than retrofit.

### Future improvements
- [ ] Replace the placeholder skills/projects with real, accurate content.
- [ ] Add a **blog / writing** section (Markdown-based, still static).
- [ ] **Auto-populate projects** from the GitHub API instead of a hardcoded list.
- [ ] Add a **resume/CV** download link or page.
- [ ] Add a lightweight **contact form** (e.g. Formspree) — no backend required.
- [ ] Introduce richer project cards with screenshots/thumbnails (`assets/img/`).
- [ ] Consider a build step *only if* complexity grows (e.g. for templating many blog posts).
- [ ] Add basic analytics (privacy-friendly, e.g. GoatCounter) to learn what gets viewed.
