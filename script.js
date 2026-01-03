// Portfolio Projects - Data-driven approach
// Currently featuring 5 real projects

const projects = [
  {
    name: "Sports Messenger",
    role: "Full Stack Developer",
    description:
      "Real-time messaging application for sports teams built in 4 hours using AI-assisted development. Features comprehensive backend API with WebSocket support, complete test suite achieving 69% coverage, and modern React frontend with real-time communication.",
    tech: [
      "FastAPI",
      "React 18",
      "WebSocket",
      "PostgreSQL",
      "Pytest",
      "TypeScript",
      "Material-UI",
      "SQLAlchemy"
    ],
    highlights:
      "Built in 4 hours · 69% test coverage · Real-time messaging · AI-assisted development",
    codeUrl: "https://github.com/lukaszglowacz/sports-messenger",
    featured: true
  },
  {
    name: "Playmaker.pro",
    role: "Full Stack Developer (Current Position)",
    description:
      "Sports management platform enabling coaches and teams to organize training sessions, manage player attendance, and coordinate team activities. Working on backend API development with FastAPI and React 18 frontend implementation.",
    tech: [
      "FastAPI",
      "React 18",
      "PostgreSQL",
      "TypeScript",
      "REST API",
      "Production deployment"
    ],
    highlights:
      "Production system · Team collaboration · Modern full-stack architecture",
    liveUrl: "https://playmaker.pro",
    current: true
  },
  {
    name: "Gurudo Geo",
    role: "Founder & Full Stack Developer",
    description:
      "Location-aware work time management system for field teams. Combines Django REST backend with React dashboard to track work sessions within 100m radius of workplaces, manage teams, and generate PDF reports with Stripe subscription billing.",
    tech: [
      "Django REST Framework",
      "React + Vite",
      "PostgreSQL",
      "JWT auth",
      "Stripe subscriptions",
      "Klaviyo",
      "Docker",
      "DigitalOcean"
    ],
    highlights:
      "Geolocation-based access · Per-seat billing · Real-time monitoring · PDF reports",
    liveUrl: "https://gurudo.se",
    codeUrlFrontend:
      "https://github.com/lukaszglowacz/gurudo-geo-frontend-public",
    codeUrlBackend:
      "https://github.com/lukaszglowacz/gurudo-geo-backend-public"
  },
  {
    name: "Personal Expense Tracker",
    role: "Python Developer",
    description:
      "Console-based expense tracking application using Google Sheets as a live database. Allows users to log expenses into 15 predefined categories, compare spending across months and years, and maintain structured financial records.",
    tech: ["Python", "Google Sheets API", "Heroku", "Google Cloud"],
    highlights:
      "CLI interface · 15 expense categories · Google Sheets integration · Cloud deployment",
    liveUrl: "https://personal-expense-tracker-2e927bc5881b.herokuapp.com/",
    codeUrl: "https://github.com/lukaszglowacz/personal-expense-tracker"
  },
  {
    name: "Norton Inspiration",
    role: "Full Stack Developer",
    description:
      "Community-driven interior design platform where users share wall art projects, engage through comments and likes, and browse testimonials. Features responsive design, rich media handling, and complete user account management.",
    tech: ["Django", "PostgreSQL", "Cloudinary", "Bootstrap", "Heroku"],
    highlights:
      "User accounts · Social features · Rich media · Responsive design",
    liveUrl:
      "https://norton-innovation-platform-89592d9b2194.herokuapp.com/",
    codeUrl: "https://github.com/lukaszglowacz/norton-innovation-platform"
  }
];

// Render project cards
const projectsGrid = document.getElementById("projects-grid");

if (projectsGrid) {
  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    
    // Add special styling for featured/current projects
    if (project.featured) {
      card.classList.add("project-featured");
    }
    if (project.current) {
      card.classList.add("project-current");
    }

    // Title & role
    const title = document.createElement("h3");
    title.className = "project-name";
    title.textContent = project.name;

    const role = document.createElement("p");
    role.className = "project-role";
    role.textContent = project.role;

    // Description
    const desc = document.createElement("p");
    desc.className = "project-description";
    desc.textContent = project.description;

    // Tech tags
    const tagsWrapper = document.createElement("div");
    tagsWrapper.className = "project-tags";
    project.tech.forEach((tagText) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = tagText;
      tagsWrapper.appendChild(tag);
    });

    // Highlights line
    const meta = document.createElement("p");
    meta.className = "project-meta";
    meta.textContent = project.highlights;

    // Links
    const linksWrapper = document.createElement("div");
    linksWrapper.className = "project-links";

    if (project.liveUrl) {
      const liveLink = document.createElement("a");
      liveLink.className = "project-link";
      liveLink.href = project.liveUrl;
      liveLink.target = "_blank";
      liveLink.rel = "noreferrer";
      liveLink.textContent = "Live demo";
      linksWrapper.appendChild(liveLink);
    }

    if (project.codeUrlFrontend && project.codeUrlBackend) {
      const feLink = document.createElement("a");
      feLink.className = "project-link";
      feLink.href = project.codeUrlFrontend;
      feLink.target = "_blank";
      feLink.rel = "noreferrer";
      feLink.textContent = "GitHub – Frontend";

      const beLink = document.createElement("a");
      beLink.className = "project-link";
      beLink.href = project.codeUrlBackend;
      beLink.target = "_blank";
      beLink.rel = "noreferrer";
      beLink.textContent = "GitHub – Backend";

      linksWrapper.appendChild(feLink);
      linksWrapper.appendChild(beLink);
    } else if (project.codeUrl) {
      const codeLink = document.createElement("a");
      codeLink.className = "project-link";
      codeLink.href = project.codeUrl;
      codeLink.target = "_blank";
      codeLink.rel = "noreferrer";
      codeLink.textContent = "GitHub repository";
      linksWrapper.appendChild(codeLink);
    }

    card.appendChild(title);
    card.appendChild(role);
    card.appendChild(desc);
    card.appendChild(tagsWrapper);
    card.appendChild(meta);
    card.appendChild(linksWrapper);

    projectsGrid.appendChild(card);
  });
}
