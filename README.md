# Łukasz Głowacz — Portfolio Website

Static HTML/CSS/JS portfolio website hosted on GitHub Pages at [lukaszglowacz.com](https://lukaszglowacz.com).

No build tools, no frameworks, no package manager — just three core files.

## Stack

- `index.html` — hero, highlights, projects, skills, footer
- `styles.css` — all styling, CSS custom properties, dark mode
- `script.js` — project data and dynamic card rendering

## Development

```bash
python -m http.server
```

Open `http://localhost:8000` in browser.

Deploy by pushing to `main` — GitHub Pages serves automatically.

## Projects

Data-driven cards defined in `script.js` `projects` array:

```js
{
  name: "Project Name",
  role: "My Role",
  badge: "current" | "featured" | "saas",
  description: "...",
  tech: ["Tech1", "Tech2"],
  highlights: "Key metrics",
  liveUrl: "https://...",
  codeUrl: "https://...",
  codeUrlFrontend: "https://...",
  codeUrlBackend: "https://..."
}
```

## Assets

`assets/` holds favicons, OG image, and CV PDF.

## Contact

- **Email:** contact@lukaszglowacz.com
- **GitHub:** https://github.com/lukaszglowacz
- **LinkedIn:** https://linkedin.com/in/lukasz-glowacz-dev
- **Website:** https://lukaszglowacz.com
