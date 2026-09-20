# Asif Nawaz — Senior SDET & QA Automation Architect Portfolio

[![CI Pipeline](https://github.com/AsifNawaz0129/portfolio/actions/workflows/main.yml/badge.svg)](https://github.com/AsifNawaz0129/portfolio/actions/workflows/main.yml)
[![WCAG 2.2 AA](https://img.shields.io/badge/Accessibility-WCAG%202.2%20AA%20Compliant-emerald)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![Playwright](https://img.shields.io/badge/Tested%20with-Playwright%20E2E-green.svg)](https://playwright.dev/)
[![Astro](https://img.shields.io/badge/Built%20with-Astro%20v5-FF5D01.svg)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%20v4-38B2AC.svg)](https://tailwindcss.com/)

Personal engineering portfolio and technical writing platform of **Asif Nawaz** — Senior Software Quality Assurance Engineer, SDET, and AI Automation Architect with 8+ years of experience engineering scalable test automation systems, CI/CD matrices, and AI-assisted quality workflows.

---

## ✨ Features & Architecture

- **Warm Editorial Design System**: Custom typography with Charter serif display headings, Inter sans body, and JetBrains Mono code badges.
- **Hardware-Accelerated CSS Counters**: Sub-pixel GPU-driven rolling odometer animation for impact metrics.
- **Automated Testing Suite (Playwright & Axe)**:
  - **14 Route Status Verifications**: Asserts `200 OK` status across all HTML pages, RSS feed, XML sitemaps, and `robots.txt`.
  - **4 Navigation & User Flow Tests**: Header/footer navigation, hero action buttons, and direct PDF resume download verification.
  - **10 WCAG 2.2 AA Accessibility Audits**: Complete page scans powered by `@axe-core/playwright` ensuring zero color contrast, ARIA, or structural violations.
- **Comprehensive SEO & Structured Data Engine**:
  - Semantic JSON-LD schema (`Person` for profile, `TechArticle` for engineering articles).
  - Dynamic canonical link tags, OpenGraph social sharing meta, XML sitemap generation, and `robots.txt`.
- **Engineering Blog & Technical Insights**: Markdown-powered articles with 1-click LinkedIn and X (Twitter) sharing tools.
- **GitHub Actions CI Quality Gate**: Automated PR pipeline running dependency installation, Astro static build, and Playwright test validation.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework & Core** | [Astro](https://astro.build) (Static Site Generation), [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@theme`), CSS Grid, Flexbox |
| **Typography** | `@fontsource-variable/inter`, `@fontsource-variable/jetbrains-mono` |
| **E2E & Accessibility Testing** | [Playwright](https://playwright.dev/), [@axe-core/playwright](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/playwright) |
| **CI / CD Pipeline** | GitHub Actions (`.github/workflows/main.yml`) |
| **SEO & Feeds** | `@astrojs/sitemap`, `@astrojs/rss`, JSON-LD Schemas |

---

## 📁 Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── main.yml           # GitHub Actions CI workflow (PR & Push test validation)
├── public/
│   ├── Asif-Nawaz-Resume.pdf  # Downloadable PDF resume
│   ├── favicon.svg            # Custom AN. brand monogram favicon
│   ├── favicon.ico            # Multi-resolution binary icon
│   └── robots.txt             # Search crawler directives & sitemap location
├── src/
│   ├── components/            # Header, Footer, BaseHead, SkillIcon, FormattedDate
│   ├── content/
│   │   └── blog/              # Markdown technical articles
│   ├── layouts/
│   │   └── BlogPost.astro     # Article layout with JSON-LD TechArticle schema & social shares
│   ├── pages/
│   │   ├── index.astro        # Home: Rotating titles, rolling metrics, capabilities
│   │   ├── about.astro        # About: Narrative biography, capability pillars
│   │   ├── experience.astro   # Career timeline (ShopWorks, Rayn, Aurora, MFSYS, uExel)
│   │   ├── projects.astro     # 6 QA automation architecture case studies
│   │   ├── skills.astro       # Categorized toolkit matrix with vector tech icons
│   │   ├── contact.astro      # Email, Phone/WhatsApp, LinkedIn, GitHub channels
│   │   └── blog/              # Engineering articles collection
│   ├── styles/
│   │   └── global.css         # Tailwind v4 theme variables & base typography
│   └── consts.ts              # Global metadata, contact links, and site configuration
├── tests/
│   ├── accessibility.spec.ts  # WCAG 2.2 AA accessibility test suite
│   ├── navigation.spec.ts     # User journey & link integrity tests
│   └── status-and-routes.spec.ts # 200 OK HTTP status code tests
├── playwright.config.ts       # Playwright runner & preview server configuration
├── astro.config.mjs           # Astro configuration & sitemap integration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `22.12.0` or higher
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/AsifNawaz0129/portfolio.git
cd portfolio

# Install dependencies
npm install

# Install Playwright browser binaries
npx playwright install chromium
```

### Development
```bash
# Start local development server at http://localhost:4321
npm run dev
```

### Production Build & Preview
```bash
# Build static site to ./dist
npm run build

# Preview production build locally
npm run preview
```

### Automated Testing (Playwright & Axe)
```bash
# Run all 28 E2E, navigation, and WCAG 2.2 AA accessibility tests
npm test

# Open interactive Playwright HTML test report
npx playwright show-report
```

---

## 📬 Contact & Connect

- **Email**: [asif.nawaz.fast@gmail.com](mailto:asif.nawaz.fast@gmail.com)
- **Phone / WhatsApp**: [+92 333 5501668](tel:+923335501668)
- **LinkedIn**: [linkedin.com/in/asifnawaz2311](https://linkedin.com/in/asifnawaz2311/)
- **GitHub**: [github.com/AsifNawaz0129](https://github.com/AsifNawaz0129)

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
