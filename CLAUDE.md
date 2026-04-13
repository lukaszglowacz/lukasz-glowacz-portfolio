# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JS portfolio website for Lukasz Glowacz, hosted on GitHub Pages at lukaszglowacz.com. No build tools, no frameworks, no package manager — just three core files.

## Development

Open `index.html` directly in a browser, or serve locally:

```bash
python -m http.server
```

Open `http://localhost:8000` in browser. Deploy by pushing to `main` — GitHub Pages serves automatically.

## Architecture

**Three core files:**

- `index.html` — Single page with hero, highlights, projects, skills, and footer sections
- `styles.css` — All styling; CSS custom properties for the color system; dark/light mode tokens
- `script.js` — Project data, DOM rendering, GSAP animations, theme toggle

**CDN dependencies (loaded in index.html):**

- GSAP + ScrollTrigger — entrance animations, scroll reveals, parallax, card tilt, stat counters
- Bootstrap Icons — icon font
- Google Fonts — DM Sans (body) + DM Mono (monospace accents)

**Data-driven project cards:** Projects are defined as objects in the `projects` array in `script.js`. The IIFE `renderProjects()` generates cards into `#projects-grid`. To add or update a project, edit only `script.js`.

**Project object structure:**
```js
{
  name: "Project Name",
  role: "My Role",
  badge: "current" | "featured" | "saas",  // optional, single string
  description: "Description text",
  tech: ["Tech1", "Tech2"],
  highlights: "Key metrics summary",        // shown as .project-meta
  liveUrl: "https://...",                   // optional
  codeUrl: "https://...",                   // optional — single repo
  codeUrlFrontend: "https://...",           // optional — split repos
  codeUrlBackend: "https://..."             // optional — split repos
}
```

**Badge system:** `badgeConfig` in `script.js` maps badge names to CSS classes and labels. Card gets an extra class based on badge value: `project-current` (green gradient), `project-featured` (purple gradient), `project-saas`.

**Theme system:** Dark mode is default. Theme preference is stored in `localStorage("theme")` and applied via `data-theme` attribute on `<html>`. An inline `<script>` in `<head>` reads the stored theme before first paint to prevent flash. The toggle button logic lives in `initTheme()` IIFE in `script.js`.

**Progressive enhancement:** The inline head script adds `.js` class to `<html>`. CSS uses `.js` to set initial `opacity: 0` on animated elements. If JS fails or GSAP doesn't load, the class is removed and content shows without animation. The `prefers-reduced-motion` media query is respected — animations are skipped entirely.

**Content locations:**
- Hero text, skills section, stat counters -> `index.html`
- Projects -> `script.js`
- Colors, animations, layout -> `styles.css`

**Assets:** `assets/` holds favicons, OG image, and the CV PDF (`lukasz-glowacz-software-developer.pdf`).
