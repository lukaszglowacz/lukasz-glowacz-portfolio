const projects = [
  {
    name: "Playmaker.pro",
    role: "Frontend Developer · Full Stack",
    badge: "current",
    description:
      "Enterprise sports management platform serving thousands of athletes, clubs, scouts and officials across Poland. Primary focus on Next.js 14 frontend — built the complete public-facing marketing site, SEO infrastructure, Data API batch fetching for PM Score, JWT SSO integration with Asystent Trenera microservice, and premium purchase flow.",
    tech: [
      "Next.js 14", "React 18", "TypeScript", "Tailwind CSS",
      "React Query", "Zustand", "NextAuth.js", "next-intl",
      "Django 3.2", "DRF", "PostgreSQL", "GitHub Actions", "Vercel"
    ],
    highlights:
      "Production · 4 languages (pl/en/de/uk-UA) · JWT SSO integration · CI/CD deploy hooks",
    liveUrl: "https://playmaker.pro"
  },
  {
    name: "Gurudo Geo",
    role: "Founder & Full Stack Developer",
    badge: "saas",
    description:
      "Geolocation-based workforce management SaaS for Swedish construction companies. Built end-to-end: Django REST Framework backend with 100m radius geolocation validation, React + TypeScript dashboard, Stripe per-seat billing, automated PDF reports, Docker deployment on DigitalOcean. Launched with paying customers.",
    tech: [
      "Django REST Framework", "React", "TypeScript",
      "PostgreSQL", "Stripe API", "Klaviyo",
      "Docker", "DigitalOcean", "Google Maps API", "JWT"
    ],
    highlights: "Paying customers · Geolocation validation · Stripe billing · Full lifecycle ownership",
    liveUrl: "https://gurudo.se",
    codeUrlFrontend: "https://github.com/lukaszglowacz/gurudo-geo-frontend-public",
    codeUrlBackend: "https://github.com/lukaszglowacz/gurudo-geo-backend-public"
  },
  {
    name: "Sports Messenger",
    role: "Full Stack Developer",
    badge: "featured",
    description:
      "Full-stack messaging application for athlete–official communication built in 4 hours as a technical recruitment project. React 18 + TypeScript + Material-UI frontend, FastAPI async backend, Zustand state management, role-based messaging limits, SQLAlchemy ORM, Pydantic validation, 28 automated tests, 69% coverage, Docker Compose deployment.",
    tech: [
      "FastAPI", "React 18", "TypeScript",
      "Material-UI", "Zustand", "SQLAlchemy",
      "Pydantic", "pytest", "Vitest", "Docker Compose"
    ],
    highlights: "Built in 4 hours · 28 tests · 69% coverage · Role-based limits",
    codeUrl: "https://github.com/lukaszglowacz/sports-messenger"
  }
];

const badgeConfig = {
  current:  { label: "Current position", cls: "badge-current" },
  featured: { label: "Recruitment project", cls: "badge-featured" },
  saas:     { label: "SaaS · paying customers", cls: "badge-saas" }
};

const projectsGrid = document.getElementById("projects-grid");

if (projectsGrid) {
  projects.forEach((p) => {
    const card = document.createElement("article");
    card.className = "project-card";
    if (p.badge === "current")  card.classList.add("project-current");
    if (p.badge === "featured") card.classList.add("project-featured");

    const bc = badgeConfig[p.badge];
    const badge = bc
      ? `<span class="project-badge ${bc.cls}">${bc.label}</span>`
      : "";

    const tags = p.tech
      .map((t) => `<span class="tag">${t}</span>`)
      .join("");

    let links = "";
    if (p.liveUrl)
      links += `<a class="project-link" href="${p.liveUrl}" target="_blank" rel="noreferrer">Live site</a>`;
    if (p.codeUrlFrontend)
      links += `<a class="project-link" href="${p.codeUrlFrontend}" target="_blank" rel="noreferrer">GitHub — Frontend</a>`;
    if (p.codeUrlBackend)
      links += `<a class="project-link" href="${p.codeUrlBackend}" target="_blank" rel="noreferrer">GitHub — Backend</a>`;
    if (!p.codeUrlFrontend && p.codeUrl)
      links += `<a class="project-link" href="${p.codeUrl}" target="_blank" rel="noreferrer">GitHub repository</a>`;

    card.innerHTML = `
      ${badge}
      <h3 class="project-name">${p.name}</h3>
      <p class="project-role">${p.role}</p>
      <p class="project-description">${p.description}</p>
      <div class="project-tags">${tags}</div>
      <p class="project-meta">${p.highlights}</p>
      <div class="project-links">${links}</div>
    `;

    projectsGrid.appendChild(card);
  });
}
