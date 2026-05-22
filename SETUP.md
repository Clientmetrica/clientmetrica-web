# Clientmetrica Website — Developer Setup Guide

> **Stack:** Next.js · TypeScript · Tailwind CSS · next-intl · Vercel  
> **Repo:** `clientmetrica-web`  
> **Languages:** Spanish (primary) · English (global)  
> **Last updated:** May 2026

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Project Initialization](#2-project-initialization)
3. [Install Dependencies](#3-install-dependencies)
4. [Brand Configuration](#4-brand-configuration-tailwind)
5. [i18n Setup](#5-i18n-setup-bilingual-from-day-one)
6. [Claude Code & Skills Setup](#6-claude-code--skills-setup)
7. [Git & GitHub](#7-git--github)
8. [Deploy to Vercel](#8-deploy-to-vercel)
9. [Folder Structure](#9-folder-structure)
10. [Environment Variables](#10-environment-variables)
11. [Development Workflow](#11-development-workflow)
12. [Stack Rationale](#12-stack-rationale)
13. [Next Steps](#13-next-steps)

---

## 1. Prerequisites

Install these tools once on your machine before anything else.

### Node.js (v20 LTS)

Download from [nodejs.org](https://nodejs.org). Choose the **LTS** version.

```bash
# Verify installation
node --version   # Should show v20.x.x or higher
npm --version    # Should show 10.x.x or higher
```

### Git

Download from [git-scm.com](https://git-scm.com).

```bash
# Verify installation
git --version

# Configure your identity (required for commits)
git config --global user.name "Your Name"
git config --global user.email "you@clientmetrica.com"
```

### GitHub Account

Create one at [github.com](https://github.com) if you don't have one, and request access to the Clientmetrica organization.

### IDE

We recommend **Visual Studio Code** — it's free, lightweight, and has the best Next.js/TypeScript ecosystem.

Download from [code.visualstudio.com](https://code.visualstudio.com).

**Recommended extensions:**

- **ESLint** (`dbaeumer.vscode-eslint`) — inline linting
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) — autocomplete for brand tokens
- **Prettier** (`esbenp.prettier-vscode`) — consistent code formatting
- **Pretty TypeScript Errors** (`yoavbls.pretty-ts-errors`) — readable TS error messages
- **i18n Ally** (`lokalise.i18n-ally`) — visualize translation keys inline

> Any editor works — but if you use a different one, make sure it supports ESLint and TypeScript natively.

### Claude Code

Claude Code is the AI coding assistant used for development in this project.

```bash
# Install globally via npm
npm install -g @anthropic-ai/claude-code

# Verify installation
claude --version
```

> **Note:** Claude Code requires a Claude account. Sign in with your Anthropic credentials on first run via `claude login`. Each team member needs their own account.

---

## 2. Project Initialization

Run this in the folder where you keep your projects (e.g., `~/projects/`).

```bash
npx create-next-app@latest clientmetrica-web
```

When prompted, answer exactly as follows:

| Prompt                                        | Answer  |
| --------------------------------------------- | ------- |
| Would you like to use TypeScript?             | **Yes** |
| Would you like to use ESLint?                 | **Yes** |
| Would you like to use Tailwind CSS?           | **Yes** |
| Would you like to use `src/` directory?       | **Yes** |
| Would you like to use App Router?             | **Yes** |
| Would you like to use React Compiler?         | **Yes** |
| Would you like to include AGENTS.md?          | **Yes** |
| Would you like to customize the import alias? | **No**  |

Then enter the project:

```bash
cd clientmetrica-web
```

Start the development server to confirm everything works:

```bash
npm run dev
# Open http://localhost:3000 in your browser
```

---

## 3. Install Dependencies

```bash
# i18n — bilingual routing and translation
npm install next-intl

# Anthropic SDK — Claude AI features
npm install @anthropic-ai/sdk

# Icons — clean, MIT licensed
npm install lucide-react

# Utility for safely merging Tailwind classes
npm install clsx tailwind-merge
```

---

## 4. Brand Configuration (Tailwind)

This project uses **Tailwind CSS v4**, which no longer uses a `tailwind.config.ts` file. Brand tokens are defined directly in `src/app/globals.css` using the `@theme` block.

Open `src/app/globals.css` and add the brand tokens **inside** the existing `@theme inline` block — do not replace the file, just append to it:

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);

  /* ─── Clientmetrica Brand Palette ─────────────────────────── */
  --color-brand-orange: #f75f23; /* Primary — 70% of graphics */
  --color-brand-navy: #12145f; /* Secondary */
  --color-brand-duotone1: #eb9776; /* Tertiary — light orange */
  --color-brand-duotone2: #5c38ce; /* Tertiary — purple */
  --color-brand-sky: #08a0dc; /* Tertiary — blue */
  --color-brand-dark: #101820; /* Tertiary — near black */

  /* ─── Fonts ────────────────────────────────────────────────── */
  --font-heading: "Futura PT", sans-serif; /* Titles/subtitles */
  --font-body: "Inter", sans-serif; /* Body text */
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
```

> **Note:** Keep the `inline` keyword in `@theme inline` — it's intentional in Tailwind v4 and tells it to generate CSS variables inline rather than in a separate layer.

Usage in components is identical to v3 — `bg-brand-orange`, `text-brand-navy`, `font-heading`, etc.

> **Font note:** Futura PT is a **paid font** — not available on Google Fonts. Purchase and self-host via [fonts.adobe.com](https://fonts.adobe.com) or [myfonts.com](https://myfonts.com). Inter is free and available via `next/font/google`.
> **Tailwind v4 note:** If you see a `tailwind.config.ts` or `postcss.config.js` in the repo root from a previous v3 install, both can be safely deleted — v4 handles PostCSS automatically.

---

## 5. i18n Setup (Bilingual from Day One)

### Create translation files

```bash
mkdir -p src/messages
touch src/messages/es.json
touch src/messages/en.json
```

**`src/messages/es.json`** — Spanish (primary language):

```json
{
  "nav": {
    "home": "Inicio",
    "products": "Productos",
    "about": "Nosotros",
    "contact": "Contacto"
  },
  "hero": {
    "headline": "Agentes de IA para empresas que quieren crecer",
    "cta": "Conoce nuestros productos"
  },
  "products": {
    "maty": "MATY",
    "juanito": "Juanito",
    "roboto": "Roboto"
  }
}
```

**`src/messages/en.json`** — English (global outbound):

```json
{
  "nav": {
    "home": "Home",
    "products": "Products",
    "about": "About",
    "contact": "Contact"
  },
  "hero": {
    "headline": "AI Agents for companies built to grow",
    "cta": "Explore our products"
  },
  "products": {
    "maty": "MATY",
    "juanito": "Juanito",
    "roboto": "Roboto"
  }
}
```

### Create i18n config

**`src/i18n/request.ts`**:

```typescript
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale is a Promise<string | undefined> in recent next-intl versions
  const locale = (await requestLocale) ?? "es"; // fallback to Spanish (primary)
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
```

> **Note:** Older examples use `src/i18n.ts` and `{ locale }` directly — both no longer work in recent versions of next-intl. The file must be at `src/i18n/request.ts` and `requestLocale` is now a `Promise` that must be awaited. The `?? "es"` fallback handles pages outside the `[locale]` segment.

### Update Next.js config

**`next.config.ts`**:

Don't replace the existing file — wrap it with the next-intl plugin:

```typescript
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default withNextIntl(nextConfig);
```

> **How it works:** URLs will be `/es/...` for Spanish and `/en/...` for English. Default locale is Spanish (`es`). The `useTranslations()` hook gives you access to strings inside any component.

---

## 6. Claude Code & Skills Setup

Before committing, initialize Claude Code in the repo and add project skills. Skills give Claude persistent context about your conventions — brand rules, coding standards, copy guidelines — so every team member gets consistent AI assistance.

### Initialize Claude Code

```bash
# From inside the clientmetrica-web folder
claude init
```

This creates a `CLAUDE.md` file in the root. It works alongside the `AGENTS.md` already generated by Next.js scaffolding.

### Add project skills

Create the skills folder and add the following skill files:

```bash
mkdir -p .claude/skills
```

Copy the following skill files into `.claude/skills/`:

| File                    | Purpose                                                                 |
| ----------------------- | ----------------------------------------------------------------------- |
| `coding-standards.md`   | TypeScript/React conventions, component structure, Tailwind usage rules |
| `frontend-design.md`    | Brand tokens, typography, logo rules, layout principles from brandbook  |
| `i18n-standards.md`     | Translation key conventions, bilingual rules, next-intl patterns        |
| `content-guidelines.md` | Tone of voice, ICP messaging, product naming, copy rules                |
| `seo-standards.md`      | Metadata patterns, URL structure, Open Graph, hreflang setup            |

> **Why skills matter:** When any teammate (dev, design, copy, marketing) uses Claude Code in this repo, these files are automatically loaded as context. This ensures brand consistency, correct Tailwind token usage, and bilingual copy standards across every AI-assisted task.

### Reference skills in CLAUDE.md

Add this to your `CLAUDE.md` so Claude Code knows where to find them:

```markdown
## Project Skills

Load the following skills for all tasks in this repo:

- .claude/skills/coding-standards.md
- .claude/skills/frontend-design.md
- .claude/skills/i18n-standards.md
- .claude/skills/content-guidelines.md
- .claude/skills/seo-standards.md
```

---

## 7. Git & GitHub

### Initialize the local repository

```bash
# From inside the clientmetrica-web folder
git init
git add .
git commit -m "chore: initial Next.js setup with i18n and brand tokens"
```

### Create the GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `clientmetrica-web`
3. Visibility: **Private**
4. Do **not** initialize with README, .gitignore, or license (we already have these)
5. Click **Create repository**

### Connect and push

```bash
git remote add origin https://github.com/Clientmetrica/clientmetrica-web.git
git branch -M main
git push -u origin main
```

### Branch strategy (for team collaboration)

```tree
main          ← production-ready, protected
└── dev       ← integration branch
    ├── feat/homepage-es     ← feature branches
    ├── feat/product-maty
    └── fix/nav-mobile
```

```bash
# Create and switch to a feature branch
git checkout -b feat/homepage-es

# After your work is done, push and open a Pull Request to dev
git push origin feat/homepage-es
```

---

## 8. Deploy to Vercel

Vercel is the recommended hosting platform — it's built by the same team as Next.js and deploys automatically on every push.

### Account setup

Use a **single Hobby account** (free) connected to the Clientmetrica GitHub org. Teammates don't need their own Vercel accounts — they review deployments via shared preview URLs.

Upgrade to a paid plan only when you're ready to go live with a custom domain (`clientmetrica.com`). The Hobby tier is fully functional for development and staging.

### Repository visibility

The `clientmetrica-web` repo must be **public** to deploy from a GitHub organization on Vercel's free tier. This is fine — it's a marketing website and the code has no competitive sensitivity.

To make the repo public:

1. Go to `github.com/Clientmetrica/clientmetrica-web`
2. Settings → Danger Zone → Change visibility → **Public**

### Deploy steps

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. When prompted to install the Vercel GitHub app, select the **Clientmetrica organization** — not your personal account. The repo lives under the org, so Vercel needs access there. You must be an Owner of the Clientmetrica GitHub org to authorize this.
4. Import `clientmetrica-web` from the Clientmetrica organization
5. Leave all build settings as defaults (Vercel auto-detects Next.js)
6. Click **Deploy**

You'll get a live URL (e.g., `clientmetrica-web.vercel.app`) within ~2 minutes.

### How deploys work from this point on

| Event                      | Result                                                                        |
| -------------------------- | ----------------------------------------------------------------------------- |
| Push to `main`             | Automatic production deploy                                                   |
| Push to any feature branch | Preview URL generated (e.g. `clientmetrica-web-git-feat-homepage.vercel.app`) |
| Pull Request opened        | Vercel posts the preview URL as a PR comment                                  |

Share preview URLs with design, copy, and marketing teammates for review — no Vercel account needed to view them.

> **GitHub app note:** Installing the Vercel GitHub app is safe and standard. It only requests permissions to read the repo and write deployment statuses. You can review or revoke it anytime under GitHub → Settings → Applications.

---

## 9. Folder Structure

```tree
clientmetrica-web/
├── public/                    ← Static assets
│   ├── fonts/                 ← Self-hosted Futura PT files
│   ├── images/                ← Brand images, product screenshots
│   └── logo/                  ← Logo variants (SVG preferred)
│
├── src/
│   ├── app/                   ← Next.js App Router pages
│   │   ├── [locale]/          ← i18n locale wrapper
│   │   │   ├── page.tsx       ← Homepage (/)
│   │   │   ├── productos/     ← Products section
│   │   │   │   ├── maty/
│   │   │   │   ├── juanito/
│   │   │   │   └── roboto/
│   │   │   ├── nosotros/      ← About
│   │   │   └── contacto/      ← Contact
│   │   └── layout.tsx         ← Root layout
│   │
│   ├── components/            ← Reusable UI components
│   │   ├── ui/                ← Base components (Button, Card, Badge...)
│   │   ├── layout/            ← Nav, Footer, Section wrappers
│   │   └── sections/          ← Page-specific sections (Hero, ProductCard...)
│   │
│   ├── messages/              ← Translation strings
│   │   ├── es.json            ← Spanish (primary)
│   │   └── en.json            ← English
│   │
│   ├── lib/                   ← Utilities and helpers
│   │   └── utils.ts           ← clsx/tailwind-merge helpers
│   │
│   └── i18n.ts                ← next-intl configuration
│
├── .env.local                 ← Local secrets (never commit)
├── .env.example               ← Template for env vars (commit this)
├── next.config.ts             ← Next.js + next-intl config
└── SETUP.md                   ← This file
```

---

## 10. Environment Variables

Create a `.env.local` file in the root (this file is git-ignored by default):

```bash
# Anthropic API — for Claude AI features
ANTHROPIC_API_KEY=your_key_here

# Site URL — used for SEO metadata
NEXT_PUBLIC_SITE_URL=https://clientmetrica.com
```

Also create `.env.example` (this one **is** committed, as a template for teammates):

```bash
ANTHROPIC_API_KEY=
NEXT_PUBLIC_SITE_URL=
```

> **Rule:** Never commit `.env.local` or any file containing real API keys.

---

## 11. Development Workflow

### Daily commands

```bash
# Start local dev server
npm run dev          # http://localhost:3000

# Type checking
npx tsc --noEmit

# Lint
npm run lint

# Build for production (test before merging)
npm run build
```

### Adding a new page (example: MATY product page)

```bash
# 1. Create the page file
touch src/app/[locale]/productos/maty/page.tsx

# 2. Add translations in both JSON files
#    es.json → "maty": { "headline": "...", "description": "..." }
#    en.json → "maty": { "headline": "...", "description": "..." }

# 3. Build the component using useTranslations('maty')
```

### Adding a new translation string

Always add to **both** `es.json` and `en.json` at the same time. Leaving one language incomplete causes build warnings.

---

## 12. Stack Rationale

| Decision     | Choice                 | Why                                                                              |
| ------------ | ---------------------- | -------------------------------------------------------------------------------- |
| Framework    | Next.js 14             | Industry standard for marketing sites; App Router, SSR/SSG, native i18n support  |
| Language     | TypeScript             | Type safety; easier onboarding for new devs                                      |
| Styling      | Tailwind CSS v4        | Utility-first; brand tokens in `globals.css` via `@theme`; no config file needed |
| i18n         | next-intl              | Best-in-class for Next.js App Router; ES/EN from day one                         |
| Hosting      | Vercel                 | Built for Next.js; free tier; auto-deploys on push; preview URLs per branch      |
| AI           | Anthropic SDK          | Native Claude integration for any AI features on the site                        |
| CMS (future) | Sanity or Contentlayer | Both integrate cleanly with this stack when non-devs need to edit content        |

---

## 13. Next Steps

Once setup is complete and the repo is live on GitHub:

- [ ] **Page architecture** — define all routes and which team member owns each
- [ ] **Component library** — Button, Card, Nav, Footer in brand colors
- [ ] **Font setup** — purchase/license Futura PT, self-host via `next/font/local`
- [ ] **Homepage** — first page to build, copy in both ES and EN
- [ ] **Product pages** — MATY, Juanito, Roboto
- [ ] **SEO baseline** — metadata, sitemap, robots.txt, Open Graph tags
- [ ] **Analytics** — add Vercel Analytics or Google Analytics

---

## Questions?

Contact Benja (founder) or open an issue in the GitHub repo.
