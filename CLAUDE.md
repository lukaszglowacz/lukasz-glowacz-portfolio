# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JS portfolio website for Łukasz Głowacz, hosted on GitHub Pages at lukaszglowacz.com. No build tools, no frameworks, no package manager — just three core files.

## Development

Open `index.html` directly in a browser, or serve locally:

```bash
python -m http.server
```

Deploy by pushing to `main` — GitHub Pages serves automatically.

## Architecture

**Three core files:**

- `index.html` — Single page with hero, highlights, projects, skills, and footer sections
- `styles.css` — All styling; uses CSS custom properties for the color system (indigo, green, purple gradients)
- `script.js` — Project data and DOM rendering

**Data-driven project cards:** Projects are defined as objects in the `projects` array in `script.js`. The rendering function generates cards dynamically. To add or update a project, edit only `script.js`.

**Project object structure:**
```js
{
  name: "Project Name",
  role: "My Role",
  description: "Description text",
  tech: ["Tech1", "Tech2"],
  badges: ["current" | "featured" | "saas"],  // optional
  liveUrl: "https://...",        // optional
  codeUrl: "https://...",        // optional — single repo
  codeUrlFrontend: "https://...", // optional — split repos
  codeUrlBackend: "https://..."   // optional — split repos
}
```

**Badge styling:** `badgeConfig` in `script.js` maps badge names to CSS classes and labels. Featured projects use a purple gradient card; current position uses a green gradient card — these are driven by the `badges` array.

**Content locations:**
- Hero text, skills section → `index.html`
- Projects → `script.js`
- Colors, animations, layout → `styles.css`

**Assets:** `assets/` holds favicons, OG image, and the CV PDF (`lukasz-glowacz-software-developer.pdf`).
