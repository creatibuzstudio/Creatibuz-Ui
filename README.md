# Creatibuz Studio — Digital Product & Engineering Agency

<div align="center">

![Creatibuz Studio Logo](/public/logo.png)

**AI-Native Software Studio & Full-Stack Product Engineering Agency**  
*Turning visionary ideas into fast, scalable, and high-converting digital products in days, not months.*

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-blueviolet?style=for-the-badge&logo=vercel)](https://turbo.build/pack)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](#)

[Company Overview](#company-overview) • [Core Services](#core-services) • [Architecture](#architecture) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started) • [Contact](#contact)

</div>

---

## 🏢 Company Overview

**Creatibuz Studio** is a premier digital product studio and engineering agency founded by **Md Abdul Hakim**. We specialize in designing and engineering high-impact UI/UX design systems, modern B2B SaaS platforms, Next.js web applications, and AI-powered interfaces for high-growth tech companies worldwide.

### 🌟 Proven Track Record
- **700+ Global Projects Completed** spanning 20+ countries.
- **100+ Global Founders Supported** from seed-stage startups to established enterprises.
- **15+ Dedicated In-House Specialists** across UI/UX, Full-Stack Engineering, and AI integration.
- **48-Hour Rapid Delivery**: First high-fidelity design drafts delivered within 48 hours to fast-track product launches.

---

## 🛠️ Core Services & Solutions

| Service | Focus Areas | Technologies |
|---|---|---|
| **Website & Web App Design** | High-converting landing pages, interactive SaaS dashboards, design systems | Figma, Framer, Tailwind CSS |
| **Full-Stack Engineering** | Production-grade Next.js web apps, REST APIs, Microservices | Next.js 16, TypeScript, Node.js |
| **Mobile App Development** | Native & cross-platform apps with smooth physics & gesture-based UX | React Native, iOS, Android |
| **AI-Powered Design & Tooling** | Custom AI assistant interfaces, pulse beam neural loops, workflow automation | Supabase, OpenAI, Anthropic |
| **Brand Identity & Graphics** | Complete visual identity, logos, vector design, bespoke 3D assets | Adobe CC, Sketch, Miro |

---

## 🏗️ Architectural Philosophy & Code Standards

This repository adheres to an enterprise **Layered Modular Architecture** designed for high maintainability, zero merge conflicts, and optimal performance:

### 1. Strict File Decoupling (Max 200 Lines Rule)
- No single file in `src/` exceeds 200 lines.
- Heavy sections are decomposed into dedicated sub-components (`components/sections/home/[section]/`), static datasets (`src/data/`), and resilient API abstractions (`src/services/`).

### 2. Resilient Offline-First Fallbacks
- All external API queries (banners, partners, reviews, blogs, stats) feature safe try-catch handlers and automatic fallbacks. If the backend is offline or undergoing maintenance, the frontend renders gracefully without crashing or throwing unhandled Axios errors.

### 3. Smooth Micro-Interactions & Physics
- Integrated **Lenis** smooth scrolling with **GSAP ScrollTrigger** horizontal pinned scrubbing and **Framer Motion** magnetic spring physics for interactive orbit controls.

---

## 📁 Repository Structure

```text
Creatibuz-Ui/
├── public/                     # Static media, icons, and branding assets
│   ├── animatedSection/       # Interactive Orbit CTA tech badges (Figma, Supabase, etc.)
│   ├── blogInsight/           # High-resolution blog thumbnails
│   ├── specialist/            # Team portrait assets
│   └── works/                 # Portfolio showcase photography
├── src/
│   ├── app/
│   │   ├── (marketing)/       # Route group for public landing experience
│   │   │   ├── layout.tsx     # Shell injecting Navbar and Footer
│   │   │   └── page.tsx       # 17-section sequential landing page assembly
│   │   ├── not-found.tsx      # Branded 404 page
│   │   ├── robots.ts          # Automated search crawler directives
│   │   ├── sitemap.ts         # Dynamic XML sitemap generator
│   │   ├── layout.tsx         # Root HTML shell, fonts, JSON-LD Schema
│   │   └── globals.css        # Tailwind v4 theme tokens, keyframes, scrollbar rules
│   ├── components/
│   │   ├── layout/            # Global Navbar, Mobile Menu, Footer, Social Links
│   │   ├── ui/                # Base primitives (SectionContainer, GridSpark, ScrollStack)
│   │   └── sections/
│   │       └── home/          # Modular section implementations
│   │           ├── hero/      # Hero ticker rows & animated mockups
│   │           ├── about/     # Counter stats & company overview
│   │           ├── services/  # Interactive service card hover reveals
│   │           ├── process/   # Horizontal GSAP pinned step slider
│   │           ├── ai/        # Circuit overlay & neural hub animation
│   │           ├── why-choose-us/ # Bento grid (Chat thread, support, plans)
│   │           ├── marquee/   # Dual-axis continuous marquee
│   │           ├── pricing/   # Pricing tiers, spring counter & booking modal
│   │           ├── cta/       # Concentric magnetic spring jelly icons
│   │           ├── blog/      # Article cards & reading links
│   │           ├── team/      # Specialist cards with hover social reveal
│   │           ├── faq/       # CSS-grid accordion system
│   │           ├── contact/   # Lead inquiry form & WhatsApp integration
│   │           └── testimonials/ # Dual infinite marquee & video modal
│   ├── config/                # SEO metadata & JSON-LD organization config
│   ├── data/                  # Decoupled mock data & offline fallbacks
│   ├── lib/                   # API client, animation helpers, font loaders, cn()
│   ├── services/              # Strongly-typed Axios API services
│   └── types/                 # Shared TypeScript models and interfaces
├── next.config.ts             # Turbopack root config & remote image patterns
├── package.json               # Dependencies and build scripts
└── tsconfig.json              # TypeScript strict configuration
```

---

## ⚡ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict type checking)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation & Physics**:
  - [Framer Motion](https://www.framer.com/motion/) (Spring physics, layout animations, modals)
  - [GSAP](https://gsap.com/) & [ScrollTrigger](https://gsap.com/scrolltrigger/) (Horizontal pinned scrub)
  - [Lenis](https://lenis.darkroom.engineering/) (Smooth page scrolling)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts via `next/font` (*Bricolage Grotesque* & *DM Serif Display*)
- **HTTP Client**: [Axios](https://axios-http.com/) (with JWT interceptors and timeout protections)

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.18+ or v20+ recommended
- **Package Manager**: `npm` (or `pnpm` / `yarn`)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/creatibuz/creatibuz-ui.git
   cd creatibuz-ui
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_API_URL=https://www.api.jevxo.com
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build & Quality Verification

To verify TypeScript types and generate the optimized production build:

```bash
# Run Turbopack production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 📞 Connect with Creatibuz Studio

- **Website**: [creatibuz.com](https://creatibuz.com)
- **Founder & CEO**: Md Abdul Hakim
- **WhatsApp / Direct Line**: [+880 1968657353](https://wa.me/+8801968657353)
- **Location**: Global / Remote First

---

<div align="center">
  <small>© 2026 Creatibuz Studio. All rights reserved. Designed and engineered for high-growth tech ventures.</small>
</div>
