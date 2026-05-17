# Meghtree Technologies — Landing Page

> **Azure Cloud Cost Optimization Partner** · [meghtree.co.in](https://meghtree.co.in)

Bangalore-based Microsoft Azure specialists helping enterprises cut cloud costs by 30–60% through autonomous FinOps and Kubernetes optimization.

---

## 🚀 Live Site

**Production:** [https://meghtree.co.in](https://meghtree.co.in)  
**Hosting:** GitHub Pages with custom domain  
**SSL:** Enforced via HSTS

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Markup** | HTML5 (semantic) |
| **Styling** | Vanilla CSS with custom properties (Liquid Glassmorphism) |
| **JavaScript** | Vanilla JS (no frameworks) |
| **Grid** | Bootstrap 5.3 (grid & utilities only) |
| **Icons** | Bootstrap Icons (WOFF2) |
| **Animations** | Native CSS (Hardware Accelerated) + AOS (Animate on Scroll) |
| **Fonts** | Google Fonts — Montserrat, Roboto, Poppins |
| **Analytics** | Google Analytics 4 (GA4) |
| **Form Backend** | Formspree (serverless) |
| **Hosting** | GitHub Pages |

---

## 📁 Project Structure

```
MeghTreeT/
├── index.html                  Landing page (v2 AEO optimized)
├── 404.html                    Custom error page
├── privacy.html                Privacy policy
├── terms.html                  Terms of service
├── favicon.ico                 Root favicon (legacy browsers)
├── CNAME                       Custom domain config
├── _headers                    Security headers reference
├── robots.txt                  Crawler directives
├── sitemap.xml                 XML sitemap
└── assets/
    ├── css/main.css            All custom styles (glassmorphism, hardware animations)
    ├── js/main.js              Custom JS (scroll-spy, infinite marquee)
    ├── img/
    │   ├── logo.webp           Brand logo (cloud-tree)
    │   ├── og-image.webp       Social sharing preview (1200×630)
    │   ├── favicon.ico         ICO format favicon
    │   ├── favicon.svg         SVG favicon (modern browsers)
    │   ├── favicon-96x96.png   PNG favicon (Chrome/Android)
    │   ├── apple-touch-icon.png    iOS homescreen (180×180)
    │   ├── web-app-manifest-192x192.png  PWA icon
    │   ├── web-app-manifest-512x512.png  PWA icon
    │   ├── site.webmanifest    Web app manifest
    │   └── about/              Section images (.webp)
    └── vendor/
        ├── bootstrap/          Bootstrap 5.3 (min only)
        ├── bootstrap-icons/    Icon fonts (min CSS + WOFF2)
        └── aos/                Animate on Scroll library
```

---

## ✨ Features & UI Patterns

### Pages & Sections
- **Hero** — Full-width gradient hero with CTA buttons
- **Market Reality (The Problem)** — Inline numeric stats with buttery smooth cyberpunk glitch effects (`.smooth-glitch-num`)
- **Expanding FinOps Scope** — Fully transparent liquid glass cards (`.stat-card-glass`) with Gemini AI Signature badge sweeps
- **Methodology Framework** — Infinite auto-marquee slider with synced click-to-scroll spy targeting
- **Answer Engine Context (FAQ)** — AEO structured FinOps Q&A accordion
- **Cloud Efficiency Scorecard** — Interactive assessment tool with Formspree integration
- **Cookie Consent Banner** — GDPR-compliant with localStorage persistence
- **404 Page** — Custom branded error page

### Advanced CSS Architecture
- **Hardware Acceleration** — Mobile scroll lag mitigated by moving heavy blur (`backdrop-filter`) and gradient sweeps (`.badge-gemini`) to GPU-composited layers via `transform: translateZ(0)` and `transform: translateX()`.
- **Buttery Smooth Glitch Effect** — Chromatic aberration hover states with `cubic-bezier` timing.
- **Glassmorphism** — Heavy use of seamless `rgba(255, 255, 255, 0.03)` transparency over dark mode backgrounds.
- **DRY Utility Classes** — Stripped thousands of lines of inline styles into reusable `.stat-desc`, `.glitch-number`, and `.stat-card-glass` component tokens.

---

## 🔒 Security

| Header | Value |
|--------|-------|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` |
| `Content-Security-Policy` | Tight CSP with whitelisted domains |

> **Note:** `_headers` file is a reference for Cloudflare/Netlify migration. GitHub Pages applies security via different mechanisms.

---

## 📊 Analytics & Tracking

- **Google Analytics 4** — `G-ZS7LLSSNWL` on all 4 pages
- **Enhanced Measurement** — Scrolls, outbound clicks, site search auto-tracked
- **Formspree** — Form submissions tracked via `formspree.io/f/mqawzgyq`

---

## 🔍 SEO & AEO (Answer Engine Optimization)

- ✅ **AI FAQ Schema** — `FAQPage` JSON-LD implemented for high-intent enterprise queries
- ✅ **Entity Definition** — `Organization` schema mapped with `sameAs` (LinkedIn/Twitter) for LLM ingestion
- ✅ Unique `<title>` and `<meta description>` per page
- ✅ Open Graph tags (og:title, og:description, og:image)
- ✅ JSON-LD structured data (`Organization` + `Service` + `WebSite`)
- ✅ Semantic HTML5 (`<main>`, `<section>`, `<nav>`, `<footer>`)
- ✅ `robots.txt` + `sitemap.xml`
- ✅ Canonical URLs on all pages

---

## ⚡ Performance

- **GPU Accelerated** — Eliminated mobile layout thrashing for 60fps scrolling
- **Only minified** vendor files loaded (Bootstrap, AOS, Icons)
- **All images** in `.webp` format with `loading="lazy"`
- **Google Fonts** preconnected with `crossorigin`
- **No inline styles** — all CSS in single `main.css`
- **No inline scripts** — all JS in single `main.js`
- **Zero dead code** — all selectors, files, and images are in active use

---

## 🧹 Audit History

### V2 Launch (May 2026)
- Answer Engine Optimization (AEO) implemented: FAQ structure and `FAQPage` JSON-LD schemas
- Hardened entity linking (`sameAs`)
- Rebranded entity mentions to "Meghtree" (lowercase T)

### V1 Refactor (May 2026)
- DRY CSS audit: removed all inline styles in favor of semantic utility classes
- Built buttery smooth glitch effects for numerical stats
- Migrated 360-rotations to high-performance liquid glass cards (`.stat-card-glass`)
- Added CSS-animated neon badge sweeps (`.badge-gemini`)
- Rebuilt methodology slider as an infinite seamless marquee with fixed scroll-spy mechanics
- Applied Prettier formatting across entire repository

### Security & Bloat Audit (Early 2026)
- Removed all BootstrapMade / CAST AI third-party attributions
- Deleted 19 unused images and purged 28 unminified Bootstrap CSS files (9.2MB → 1.6MB vendor)
- Fixed non-square favicon (312×280 → proper multi-format set)

---

## 🛠️ Local Development

```bash
# No build tools needed — pure static site
python3 -m http.server 8080

# Or use any static server
npx serve .
```

Open `http://localhost:8080` in your browser.

---

## 📦 Deployment

The site auto-deploys to GitHub Pages on push to `v2` or `main`:

```bash
git add .
git commit -m "your message"
git push origin v2
```

GitHub Pages builds in ~2-3 minutes. Custom domain `meghtree.co.in` is configured via `CNAME` file.

---

## 📄 License

© 2026 Meghtree Technologies. All rights reserved.
