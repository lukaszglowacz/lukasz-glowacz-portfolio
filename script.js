// Simple, data-driven projects section.
// If you add more projects in the future, you only need to edit this array.

const projects = [
    {
      name: "Gurudo Geo",
      role: "Founder & Full-Stack Developer",
      description:
        "Location-aware work time management system for field teams. Combines a Django REST backend with a React dashboard to track work sessions within a 100m radius of each workplace, manage teams and generate PDF reports.",
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
        "Geolocation-based access control · per-seat subscription billing · real-time workforce monitoring",
      liveUrl: "https://app.gurudo.se",
      codeUrlFrontend:
        "https://github.com/lukaszglowacz/gurudo-geo-frontend-public",
      codeUrlBackend:
        "https://github.com/lukaszglowacz/gurudo-geo-backend-public"
    },
    {
      name: "Personal Expense Tracker",
      role: "Python Developer",
      description:
        "Console-based expense tracker that stores data in Google Sheets. Lets users log expenses into predefined categories, compare months and years, and keep a structured overview of personal spending.",
      tech: ["Python", "Google Sheets API", "Heroku", "Google Cloud"],
      highlights:
        "CLI UX · 15 expense categories · Google Sheets as a live data backend",
      liveUrl: "https://personal-expense-tracker-2e927bc5881b.herokuapp.com/", // add live URL here if you have one deployed
      codeUrl: "https://github.com/lukaszglowacz/personal-expense-tracker"
    },
    {
      name: "Norton Inspiration",
      role: "Full-Stack Developer",
      description:
        "Community-driven inspiration platform for interior design. Users can share wall art projects, comment, like posts and browse testimonials in a responsive, content-focused UI.",
      tech: ["Django", "PostgreSQL", "Cloudinary", "Bootstrap", "Heroku"],
      highlights:
        "User accounts · posts and comments · responsive design with rich media",
      liveUrl:
        "https://norton-innovation-platform-89592d9b2194.herokuapp.com/",
      codeUrl: "https://github.com/lukaszglowacz/norton-innovation-platform"
    }
  ];
  
  // Render project cards into the grid.
  const projectsGrid = document.getElementById("projects-grid");
  
  if (projectsGrid) {
    projects.forEach((project) => {
      const card = document.createElement("article");
      card.className = "project-card";
  
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
  