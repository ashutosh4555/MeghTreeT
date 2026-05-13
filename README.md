# MeghTree Technologies — Landing Page

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
| **Styling** | Vanilla CSS with custom properties |
| **JavaScript** | Vanilla JS (no frameworks) |
| **Grid** | Bootstrap 5.3 (grid & utilities only) |
| **Icons** | Bootstrap Icons (WOFF2) |
| **Animations** | AOS (Animate on Scroll) |
| **Fonts** | Google Fonts — Montserrat, Roboto, Poppins |
| **Analytics** | Google Analytics 4 (GA4) |
| **Form Backend** | Formspree (serverless) |
| **Hosting** | GitHub Pages |

---

## 📁 Project Structure

```
MeghTreeT/
├── index.html                  Landing page
├── 404.html                    Custom error page
├── privacy.html                Privacy policy
├── terms.html                  Terms of service
├── favicon.ico                 Root favicon (legacy browsers)
├── CNAME                       Custom domain config
├── _headers                    Security headers reference
├── robots.txt                  Crawler directives
├── sitemap.xml                 XML sitemap
└── assets/
    ├── css/main.css            All custom styles (~3,076 lines)
    ├── js/main.js              All custom JS (~288 lines)
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

## ✨ Features

### Pages & Sections
- **Hero** — Full-width gradient hero with CTA buttons
- **Market Reality** — Animated stat cards with real industry data
- **Trust Bar** — Client trust indicators with hover effects
- **Services** — 6 service cards with hover animations (border glow, accent bar, lift)
- **Why Us** — 6 feature cards with matching hover effects and equal-height layout
- **6-Phase Journey** — Interactive timeline with zigzag layout
- **Cloud Efficiency Scorecard** — Interactive assessment tool with Formspree integration
- **Cookie Consent Banner** — GDPR-compliant with localStorage persistence
- **404 Page** — Custom branded error page

### Design System
- **Color System** — CSS custom properties (`--accent-color: #0078D7`)
- **Card Hover Pattern** — Gradient bg + 3px sliding accent bar + border glow + translateY lift
- **Responsive Logo** — Large at top, smoothly shrinks on scroll (CSS transition)
- **Dark Footer** — Proprietary 4-column layout with dynamic copyright year
- **Mobile-First** — Full responsive design with breakpoints at 768px and 992px

### Interactive Effects
| Effect | Where | CSS |
|--------|-------|-----|
| Blue border glow on hover | Service cards, Why Us cards | `border-color: rgba(0,120,215,0.45)` |
| Sliding accent top bar | All cards | `::before` + `scaleX(0→1)` |
| Card lift | All interactive cards | `translateY(-5px)` |
| Icon scale + fill | Icon circles on hover | `scale(1.1)` + accent color fill |
| Header shrink | Navbar on scroll | Logo 52px→34px, text 26px→20px |
| Image float | About section image | `translateY(-8px)` on hover |
| Scroll animations | All sections | AOS library (fade-up, fade-left, etc.) |

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

## 🔍 SEO

- ✅ Unique `<title>` and `<meta description>` per page
- ✅ Open Graph tags (og:title, og:description, og:image)
- ✅ Twitter Card tags (summary_large_image)
- ✅ JSON-LD structured data (Organization + LocalBusiness)
- ✅ Canonical URLs on all pages
- ✅ `robots.txt` + `sitemap.xml`
- ✅ Semantic HTML5 (`<main>`, `<section>`, `<nav>`, `<footer>`)
- ✅ `lang="en"` attribute
- ✅ All images have descriptive `alt` attributes

---

## ⚡ Performance

- **Only minified** vendor files loaded (Bootstrap, AOS, Icons)
- **All images** in `.webp` format with `loading="lazy"`
- **Google Fonts** preconnected with `crossorigin`
- **No inline styles** — all CSS in single `main.css`
- **No inline scripts** — all JS in single `main.js`
- **Total project size:** ~2.3 MB (including vendor)
- **Zero dead code** — all selectors, files, and images are in active use

---

## 🧹 Audit History

### Code Cleanup (May 2026)
- Removed all BootstrapMade / CAST AI third-party attributions
- Deleted 19 unused images (person/, portfolio/, services/)
- Purged 28 unminified Bootstrap CSS files (9.2MB → 1.6MB vendor)
- Removed dead PHP email form backend and CSS
- Fixed non-square favicon (312×280 → proper multi-format set)
- Switched Bootstrap Icons from unminified to `.min.css`
- Updated sitemap dates

### Brand Updates
- Added cloud-tree logo to header + footer on all pages
- Header logo animates: large at top → compact on scroll
- Footer redesigned: proprietary dark theme, 4-column layout
- All service/feature cards share consistent hover effect language

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

The site auto-deploys to GitHub Pages on push to `main`:

```bash
git add .
git commit -m "your message"
git push origin main
```

GitHub Pages builds in ~2-3 minutes. Custom domain `meghtree.co.in` is configured via `CNAME` file.

---

## 📄 License

© 2025 MeghTree Technologies. All rights reserved.
