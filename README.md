# Łukasz Głowacz - Portfolio Website

**Updated: January 2026**

Modern, professional portfolio website showcasing full-stack development expertise with Python (FastAPI), React 18, and production-ready applications.

## 🌟 What's New (January 2026 Update)

### Featured Changes:

✅ **Current Position Highlight**
- Added Playmaker.pro as current Full Stack Developer role
- Special "Current Position" badge with green accent
- Emphasized availability for B2B contracts

✅ **Sports Messenger Featured Project**
- Highlighted as flagship project with ⭐ badge
- Showcases: Built in 4 hours, 69% test coverage, AI-assisted development
- Demonstrates FastAPI + React 18 + WebSocket expertise

✅ **Updated Tech Stack**
- FastAPI prominently featured (replacing Django REST focus)
- React 18 emphasized
- Modern tooling: Vite, Zustand, Vitest, TypeScript
- Real-time systems: WebSocket, async programming

✅ **New Projects Added**
- Warehouse Management System (Full CRUD, Django REST + React)
- Sports Messenger (Real-time messaging with WebSocket)
- Playmaker.pro (Current position project)

✅ **Enhanced Contact Information**
- Updated phone numbers: +46 790 332 262 (SE), +48 690 250 957 (PL)
- Relocation status: Stockholm → Warsaw (2026)
- Clear B2B availability messaging

✅ **Enhanced Design**
- Special styling for featured projects (purple gradient)
- Current position highlighting (green gradient)
- Better visual hierarchy
- Bootstrap Icons for professional look
- Enhanced responsiveness

## 📁 Project Structure

```
portfolio/
├── index.html      # Main HTML with updated content
├── styles.css      # Enhanced CSS with project highlighting
├── script.js       # Updated project data (6 projects)
├── assets/         # Images, favicon, CV PDF
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   ├── og-image.png
│   └── lukasz-glowacz-software-developer.pdf
└── README.md       # This file
```

## 🎯 Featured Projects

1. **Sports Messenger** ⭐ (Featured)
   - Built in 4 hours with AI assistance
   - 69% test coverage
   - FastAPI + React 18 + WebSocket

2. **Playmaker.pro** 💼 (Current)
   - Sports management platform
   - Production system
   - Full-stack development role

3. **Gurudo Geo**
   - Geolocation-based work tracking
   - Stripe subscriptions
   - Django REST + React

4. **Personal Expense Tracker**
   - Google Sheets integration
   - CLI interface
   - Python + Cloud deployment

5. **Norton Inspiration**
   - Social platform
   - Community features
   - Django + PostgreSQL

## 🛠️ Tech Stack Highlighted

**Backend:**
- Python · FastAPI · Django REST Framework
- RESTful API design · WebSocket · Async programming
- Testing (Pytest, 69% coverage achieved)
- Authentication (JWT, RBAC)
- PostgreSQL · SQLAlchemy

**Frontend:**
- React 18 · TypeScript · JavaScript (ES6+)
- Vite · npm · Zustand · Context API
- Material-UI · Responsive design
- Testing (Vitest, React Testing Library)
- Real-time features (WebSocket integration)

**DevOps & Tools:**
- Git · GitHub · Docker · CI/CD (GitHub Actions)
- Heroku · DigitalOcean
- External APIs (Stripe, Cloudinary, Google)

## 🚀 Deployment Instructions

### Option 1: GitHub Pages (Recommended)

1. **Update repository:**
   ```bash
   git add .
   git commit -m "Update portfolio - January 2026"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/` (root)
   - Save

3. **Update CNAME (if custom domain):**
   - Ensure `CNAME` file contains: `lukaszglowacz.com`

### Option 2: Manual Hosting

1. **Upload files to web host:**
   - index.html
   - styles.css
   - script.js
   - assets/ (entire folder)

2. **Ensure correct permissions:**
   - Files: 644
   - Directories: 755

### Option 3: Netlify/Vercel

1. **Drag & drop deployment:**
   - Just drag the entire folder to Netlify/Vercel
   - Automatic deployment!

## 📝 Customization Guide

### Adding New Projects:

Edit `script.js`, add to `projects` array:

```javascript
{
  name: "Project Name",
  role: "Your Role",
  description: "Project description...",
  tech: ["Tech1", "Tech2", "Tech3"],
  highlights: "Key features · Metrics · Achievements",
  liveUrl: "https://demo.com", // optional
  codeUrl: "https://github.com/...", // optional
  codeUrlFrontend: "https://...", // for full-stack
  codeUrlBackend: "https://...", // for full-stack
  featured: true, // optional - purple highlight
  current: true // optional - green highlight
}
```

### Updating Tech Stack:

Edit the Skills section in `index.html`:

```html
<article class="skill-card">
  <h3>Section Title</h3>
  <ul class="skill-list">
    <li><strong>Main tech</strong></li>
    <li><strong>Feature</strong> (details)</li>
  </ul>
</article>
```

### Changing Colors:

Edit `styles.css` CSS variables:

```css
/* Primary color (indigo) */
.btn.primary { background: #4f46e5; }

/* Featured project (purple) */
.project-featured { background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%); }

/* Current project (green) */
.project-current { background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); }
```

## 📧 Contact Information

- **Email:** contact@lukaszglowacz.com
- **Phone (SE):** +46 790 332 262
- **Phone (PL):** +48 690 250 957
- **GitHub:** https://github.com/lukaszglowacz
- **LinkedIn:** https://www.linkedin.com/in/lukas-glowacz/
- **Website:** https://lukaszglowacz.com

## 🎨 Design Features

- **Clean, professional aesthetic** - Minimalist design focused on content
- **Dark header** - High contrast for better readability
- **Special project highlighting** - Featured and current projects stand out
- **Responsive layout** - Mobile-first, works on all devices
- **Smooth interactions** - Subtle hover effects and transitions
- **Accessibility** - Semantic HTML, proper contrast ratios

## 📊 SEO Optimization

- Meta tags for social sharing (Open Graph, Twitter)
- Semantic HTML structure
- Fast loading (no external dependencies)
- Mobile-responsive
- Clear content hierarchy
- Keywords: Full Stack Developer, Python, FastAPI, React 18

## ✅ Pre-Deployment Checklist

Before uploading:

- [ ] Update CV PDF in `assets/` folder
- [ ] Verify all project links work
- [ ] Test on mobile device
- [ ] Check all contact info is current
- [ ] Proofread all text
- [ ] Test form submissions (if any)
- [ ] Verify GitHub/LinkedIn links
- [ ] Test download CV button

## 🔧 Maintenance

**Regular updates:**
- Add new projects as completed
- Update current position when changing jobs
- Refresh tech stack as you learn new technologies
- Update CV PDF quarterly
- Check all external links monthly

## 📈 Analytics (Optional)

To add Google Analytics, insert before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 🎉 Version History

**v2.0 (January 2026)**
- Added Playmaker.pro current position
- Featured Sports Messenger project
- Updated tech stack (FastAPI, React 18)
- Added 3 new projects
- Enhanced visual design
- Updated contact information

**v1.0 (2024)**
- Initial portfolio launch
- Django REST focus
- 3 original projects

---

**Built with ❤️ by Łukasz Głowacz**

Portfolio showcasing production-ready full-stack development.
Currently: Full Stack Developer at Playmaker.pro
Available for B2B contracts.
