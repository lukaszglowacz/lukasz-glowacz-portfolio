/* ============================================================
   PROJECT DATA
   ============================================================ */
const projects = [
  {
    name: "Confidential Client",
    role: "Full Stack Engineer · B2B Contract · NDA",
    badge: "current",
    description:
      "Sole developer on an enterprise sports tech platform serving thousands of active users. Built public-facing site in 4 languages (pl/en/de/uk-UA) with next-intl and full SEO infrastructure across ~28 pages. Eliminated N+1 API pattern via batch Data API fetching — reducing API calls by ~90% and cutting page load from ~3s to under 800ms. Implemented end-to-end Web Push Notifications (FCM + Django REST + Service Worker + React hooks + Zustand), driving premium conversion from 1.1% to 4.8%. Designed JWT SSO integration with external microservice. Diagnosed and resolved production payment failure same-day.",
    tech: [
      "Next.js 14", "React 18", "TypeScript", "Tailwind CSS",
      "React Query", "Zustand", "NextAuth.js", "next-intl",
      "Django REST Framework", "PostgreSQL", "GitHub Actions", "Vercel",
    ],
    highlights: "Production · 4 languages · JWT SSO · Web Push · Premium conversion 1.1%→4.8% · NDA",
  },
  {
    name: "Gurudo Geo",
    role: "Founder & Full Stack Developer",
    badge: "saas",
    description:
      "Workforce management SaaS for Swedish construction companies. Shipped end-to-end as sole developer — architecture, database, frontend, billing, DevOps — to production with paying B2B customers in 5 months. Backend: 100m geolocation clock-in validation, JWT auth, role-based permissions, automated PDF reports (~200/week). Frontend: real-time dashboard, Stripe per-seat billing, Klaviyo automation, Google Maps. Deployed on DigitalOcean with Docker Compose; ~99.5% uptime over 7-month operational period.",
    tech: [
      "Django REST Framework", "React", "TypeScript",
      "PostgreSQL", "Stripe API", "Klaviyo",
      "Docker", "DigitalOcean", "Google Maps API", "JWT",
    ],
    highlights: "Paying customers · 5 months to launch · ~99.5% uptime · Stripe billing · Full lifecycle ownership",
    codeUrlFrontend: "https://github.com/lukaszglowacz/gurudo-geo-frontend-public",
    codeUrlBackend: "https://github.com/lukaszglowacz/gurudo-geo-backend-public",
  },
  {
    name: "Company KB RAG",
    role: "Full Stack Developer · AI Engineer",
    badge: "featured",
    description:
      "AI-powered company knowledge base chatbot built from scratch using Retrieval-Augmented Generation. FastAPI backend with full RAG pipeline — document chunking, OpenAI embeddings, cosine similarity vector search, Claude streaming responses via SSE. Next.js 14 chat UI with real-time typewriter effect. Sub-second retrieval across ~500 chunks. CI pipeline with 7 parallel jobs (flake8, mypy --strict, pytest, tsc, ESLint, Vitest, next build). Dockerized multi-container deployment.",
    tech: [
      "FastAPI", "Python 3.11", "Claude API",
      "OpenAI Embeddings", "NumPy", "Next.js 14",
      "TypeScript", "Tailwind CSS", "Docker Compose",
      "GitHub Actions", "pytest", "Vitest",
    ],
    highlights: "RAG architecture · SSE streaming · ~500 chunks · mypy --strict · 7-job CI pipeline · Docker",
    codeUrl: "https://github.com/lukaszglowacz/company-kb-rag",
  },
  {
    name: "Sportradar Scoreboard Library",
    role: "Software Engineer · Open Source",
    badge: "featured",
    description:
      "TypeScript library built TDD-first for live scoreboard management. 100% test coverage with Vitest, CI/CD with GitHub Actions, semantic versioning, npm-ready package. Clean architecture with full type safety and comprehensive test suite.",
    tech: [
      "TypeScript", "Vitest", "TDD",
      "GitHub Actions", "npm", "CI/CD",
    ],
    highlights: "100% test coverage · TDD-first · CI/CD · Semantic versioning · npm-ready",
    codeUrl: "https://github.com/lukaszglowacz/sportradar-scoreboard",
  },
];

const badgeConfig = {
  current:  { label: "Current contract · NDA", cls: "badge-current" },
  featured: { label: "Open source",            cls: "badge-featured" },
  saas:     { label: "SaaS · paying customers",cls: "badge-saas"     },
};

/* ============================================================
   RENDER PROJECT CARDS
   ============================================================ */
(function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  projects.forEach((p) => {
    const card = document.createElement("article");
    card.className = "project-card";
    if (p.badge === "current")  card.classList.add("project-current");
    if (p.badge === "saas")     card.classList.add("project-saas");
    if (p.badge === "featured") card.classList.add("project-featured");

    const bc  = badgeConfig[p.badge];
    const badge = bc ? `<span class="project-badge ${bc.cls}">${bc.label}</span>` : "";
    const tags  = p.tech.map((t) => `<span class="tag">${t}</span>`).join("");

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

    grid.appendChild(card);
  });
})();

/* ============================================================
   MAIN INIT — runs after DOM + CDN scripts are ready
   ============================================================ */
(function init() {

  /* ── Reduced motion check ─────────────────────────────── */
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasHover      = window.matchMedia("(hover: hover)").matches;

  /* ── Bail if GSAP not loaded ──────────────────────────── */
  if (typeof gsap === "undefined") {
    document.documentElement.classList.remove("js");
    return;
  }

  /* ── Register ScrollTrigger ───────────────────────────── */
  gsap.registerPlugin(ScrollTrigger);

  /* ══════════════════════════════════════════════════════════
     CUSTOM CURSOR
     ══════════════════════════════════════════════════════════ */
  const cursorDot  = document.getElementById("cursor-dot");
  const cursorRing = document.getElementById("cursor-ring");

  if (cursorDot && cursorRing && hasHover) {
    gsap.set([cursorDot, cursorRing], { xPercent: -50, yPercent: -50 });

    const dotX  = gsap.quickTo(cursorDot,  "x", { duration: 0.06 });
    const dotY  = gsap.quickTo(cursorDot,  "y", { duration: 0.06 });
    const ringX = gsap.quickTo(cursorRing, "x", { duration: 0.42, ease: "power3" });
    const ringY = gsap.quickTo(cursorRing, "y", { duration: 0.42, ease: "power3" });

    window.addEventListener("mousemove", (e) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    });

    // Expand ring on interactive elements
    document
      .querySelectorAll("a, button, .project-card, .skill-card, .highlight-item")
      .forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(cursorRing, { scale: 1.9, borderColor: "rgba(34,211,238,0.55)", duration: 0.3 });
          gsap.to(cursorDot,  { scale: 0.4, duration: 0.3 });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(cursorRing, { scale: 1, borderColor: "rgba(99,102,241,0.65)", duration: 0.3 });
          gsap.to(cursorDot,  { scale: 1, duration: 0.3 });
        });
      });
  }

  /* ══════════════════════════════════════════════════════════
     PAGE LOAD ENTRANCE SEQUENCE
     ══════════════════════════════════════════════════════════ */
  if (!reducedMotion) {

    // Set initial transform states BEFORE defining the timeline.
    // Opacity is already 0 via .js CSS class; we add the translation offsets.
    gsap.set(".nav-logo",    { y: -16 });
    gsap.set(".nav-links li",{ y: -12 });
    gsap.set(".hero-eyebrow",{ y: 20  });
    gsap.set(".hero-word",   { y: 55  });
    gsap.set(".hero-role",   { y: 18  });
    gsap.set(".hero-sub",    { y: 18  });
    gsap.set(".hero-actions",{ y: 18  });
    gsap.set(".hero-aside",  { x: 32  });

    const loadTl = gsap.timeline({ delay: 0.08 });

    loadTl
      .to(".nav-logo", {
        opacity: 1, y: 0, duration: 0.55, ease: "power2.out",
      })
      .to(".nav-links li", {
        opacity: 1, y: 0, stagger: 0.07, duration: 0.4, ease: "power2.out",
      }, "-=0.2")
      .to(".hero-eyebrow", {
        opacity: 1, y: 0, duration: 0.5, ease: "power2.out",
      }, "-=0.15")
      .to(".hero-word", {
        opacity: 1, y: 0, stagger: 0.14, duration: 0.72, ease: "power3.out",
      }, "-=0.2")
      .to(".hero-role", {
        opacity: 1, y: 0, duration: 0.5, ease: "power2.out",
      }, "-=0.45")
      .to(".hero-sub", {
        opacity: 1, y: 0, duration: 0.5, ease: "power2.out",
      }, "-=0.32")
      .to(".hero-actions", {
        opacity: 1, y: 0, duration: 0.5, ease: "power2.out",
      }, "-=0.32")
      .to(".hero-aside", {
        opacity: 1, x: 0, duration: 0.7, ease: "power2.out",
      }, "-=0.45")
      .to(".scroll-hint", {
        opacity: 1, duration: 0.6, ease: "power2.out",
      }, "-=0.3");

  } else {
    // Reduced motion: just reveal everything instantly
    gsap.set(
      ".nav-logo, .nav-links li, .hero-eyebrow, .hero-word, .hero-role, .hero-sub, .hero-actions, .hero-aside, .scroll-hint",
      { opacity: 1, x: 0, y: 0 }
    );
  }

  /* ══════════════════════════════════════════════════════════
     NAVIGATION — backdrop blur on scroll
     ══════════════════════════════════════════════════════════ */
  const nav = document.getElementById("site-nav");
  if (nav) {
    ScrollTrigger.create({
      trigger: "body",
      start: "top -72px",
      onEnter:     () => nav.classList.add("nav--scrolled"),
      onLeaveBack: () => nav.classList.remove("nav--scrolled"),
    });
  }

  /* ══════════════════════════════════════════════════════════
     HERO PARALLAX — shapes move on mousemove
     ══════════════════════════════════════════════════════════ */
  if (!reducedMotion && hasHover) {
    const slowLayer = document.querySelector(".shape-slow");
    const medLayer  = document.querySelector(".shape-med");
    const fastLayer = document.querySelector(".shape-fast");

    if (slowLayer && medLayer && fastLayer) {
      window.addEventListener("mousemove", (e) => {
        const xN = e.clientX / window.innerWidth  - 0.5;
        const yN = e.clientY / window.innerHeight - 0.5;

        gsap.to(slowLayer, { x: xN * 22,  y: yN * 16,  duration: 1.6, ease: "power2.out" });
        gsap.to(medLayer,  { x: xN * 38,  y: yN * 28,  duration: 1.3, ease: "power2.out" });
        gsap.to(fastLayer, { x: xN * 58,  y: yN * 44,  duration: 1.0, ease: "power2.out" });
      });
    }
  }

  /* ══════════════════════════════════════════════════════════
     SCROLL-TRIGGERED REVEALS
     ══════════════════════════════════════════════════════════ */
  if (!reducedMotion) {

    // Individual reveals (.reveal elements)
    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 28,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
        },
      });
    });

    // Section labels (slide in from left)
    gsap.utils.toArray(".section-label").forEach((el) => {
      if (!el.classList.contains("reveal")) {
        gsap.from(el, {
          opacity: 0,
          x: -18,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      }
    });

    // Staggered children containers
    gsap.utils.toArray(".stagger-children").forEach((container) => {
      const kids = Array.from(container.children);
      gsap.from(kids, {
        opacity: 0,
        y: 32,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 84%",
        },
      });
    });

    // Project cards — staggered from grid
    const projectCards = document.querySelectorAll(".project-card");
    if (projectCards.length) {
      gsap.from(projectCards, {
        opacity: 0,
        y: 36,
        stagger: 0.12,
        duration: 0.72,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#projects-grid",
          start: "top 84%",
        },
      });
    }

    // Fade scroll hint when user scrolls into stats
    gsap.to(".scroll-hint", {
      opacity: 0,
      y: -8,
      scrollTrigger: {
        trigger: ".stats-section",
        start: "top 92%",
        toggleActions: "play none none reverse",
      },
    });

  }

  /* ══════════════════════════════════════════════════════════
     STAT COUNTER ANIMATION
     ══════════════════════════════════════════════════════════ */
  document.querySelectorAll(".stat-num").forEach((counter) => {
    const target = parseInt(counter.dataset.target, 10);
    const proxy  = { val: 0 };

    gsap.to(proxy, {
      val: target,
      duration: reducedMotion ? 0 : 2,
      ease: "power2.out",
      snap: { val: 1 },
      onUpdate() { counter.textContent = Math.round(proxy.val); },
      scrollTrigger: {
        trigger: counter,
        start: "top 88%",
        once: true,
      },
    });
  });

  /* ══════════════════════════════════════════════════════════
     CARD TILT — 3D perspective effect on mousemove
     ══════════════════════════════════════════════════════════ */
  if (!reducedMotion && hasHover) {
    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width  - 0.5;
        const y = (e.clientY - rect.top)  / rect.height - 0.5;

        gsap.to(card, {
          rotationX:         -y * 9,
          rotationY:          x * 9,
          transformPerspective: 900,
          ease: "power2.out",
          duration: 0.32,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.75,
          ease: "elastic.out(1, 0.45)",
        });
      });
    });
  }

})(); // end init

/* ============================================================
   THEME TOGGLE
   ============================================================ */
(function initTheme() {
  const btn  = document.getElementById("theme-toggle");
  const root = document.documentElement;
  if (!btn) return;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    btn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
    btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    localStorage.setItem("theme", theme);
  }

  // Sync button state with current theme on load
  applyTheme(root.getAttribute("data-theme") || "dark");

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  });
})();
