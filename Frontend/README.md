# Nexus

**See. Solve. Learn. Grow. Remember.**

Nexus is a developer-growth platform that turns real coding experience into
personalized learning insights — and connects you to the right human expert
when you hit a wall. Built as a React + Vite frontend prototype with a
plain-CSS design system.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Authentication](#authentication)
- [Routing](#routing)
- [Theming](#theming)
- [Design System](#design-system)
- [Available Scripts](#available-scripts)
- [Browser Support](#browser-support)
- [Notes & Limitations](#notes--limitations)
- [License](#license)

---

## Overview

Nexus is designed around three core problems:

1. **Skill uncertainty** — developers don't know which strengths to double down on
   and which gaps to close.
2. **Recurring issues** — the same categories of technical difficulty keep
   resurfacing with no clear path forward.
3. **Expert access** — finding someone who has actually solved your specific
   problem is hard, and existing tools optimize for popularity instead of
   relevance.

Nexus addresses each of these through three pillars:

- **SkillQuest** — personalized skills, progress, and course recommendations
- **Human API** — problem-specific expert matching with a chat interface
- **Insights** — evidence-backed strengths, focus areas, and recurring
  difficulty categories

The platform is delivered as a frontend prototype. All data is illustrative
and stored locally — there is no backend or account system in this build.

---

## Features

### Employee Workspace

| Page | Description |
|---|---|
| **Overview** | KPI cards, tech stack, skill proficiency, strengths & focus areas, recommended courses, weekly activity bars |
| **SkillQuest** | Course catalog, skill proficiency breakdown, weekly learning minutes, insight cards |
| **Human API** | Expert matching with reasons, chat interface, conversation sidebar |
| **Settings** | Profile editing, avatar picker (28 scenes), password change, theme toggle, logout |

### Super Admin Workspace

Everything an Employee sees, plus:

| Feature | Description |
|---|---|
| **Admin Dashboard** | Platform KPIs, employee roster, progress tracking |
| **Bulk Upload** | Import employees via CSV/Excel with a temporary default password |
| **User Management** | Reset passwords, remove users, view status |
| **Platform Settings** | Maintenance mode toggle, broadcast messaging |

### Global

- **Dark / Light theme** — persistent across sessions, SVG sun/moon toggle
- **Avatar picker** — 28 hand-drawn flat-design scenes, six are rounded squares
- **404 page** — classic dribbble running-figure animation
- **500 page** — cat illustration with wires
- **Loading page** — three interlocked cogs in the Nexus accent palette
- **Lazy-loaded routes** — each page is its own JS chunk via `React.lazy`

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | React 19 | Modern concurrent features, no legacy class components |
| Build tool | Vite 8 | Instant HMR, native ESM, built-in chunk splitting |
| Routing | React Router 7 | Standard, small API surface |
| Styling | **Plain CSS3 only** | No Tailwind, no CSS-in-JS, no animation libraries |
| State | React hooks + `localStorage` | Role, theme, and avatar persist locally |
| Fonts | Google Fonts (Inter, Space Grotesk, Arvo) | Loaded via `<link>` in `index.html` |

**Hard constraint:** every visual in this project is hand-authored CSS. There
are no utility classes, no styled-components, and no external animation
libraries. Motion is handled entirely through CSS `@keyframes`, `transition`,
and `transform`.

---

## Project Structure
Frontend/
├── index.html # App shell + font links
├── package.json
├── vite.config.js
├── README.md
├── .gitignore
├── requirements.txt
├── public/
│ └── favicon.svg
└── src/
├── main.jsx # Entry + theme bootstrap
├── App.jsx # Route table with lazy loading
├── data/
│ └── mock.js # All sample data (users, experts, courses)
├── hooks/
│ └── useTheme.js # Dark/light persistence
├── styles/
│ ├── reset.css
│ ├── tokens.css # CSS variables (colors, spacing, motion)
│ ├── base.css
│ ├── utilities.css # Buttons, containers, reveal animation
│ └── dark-fixes.css # Dark-mode text corrections
├── components/
│ ├── Logo.jsx / .css
│ ├── Navbar.jsx / .css
│ ├── Footer.jsx / .css
│ ├── ThemeToggle.jsx / .css
│ └── LandscapeAvatar.jsx / .css
└── pages/
├── Landing.jsx / .css
├── Login.jsx / .css
├── NotFound.jsx / .css
├── ServerError.jsx / .css
├── Loading.jsx / .css
└── app/
├── AppLayout.jsx / .css
├── Sidebar.jsx / .css
├── Overview.jsx / .css
├── SkillQuest.jsx / .css
├── HumanAPI.jsx / .css
├── Settings.jsx / .css
└── Admin.jsx / .css


##Authentication
Admin	root

Path	Component	Access
/	Landing	Public
/login	Login	Public
/loading	Loading	Public (demo route)
/500	ServerError	Public (demo route)
/app/overview	Overview	Employee + Admin
/app/skillquest	SkillQuest	Employee + Admin
/app/human-api	HumanAPI	Employee + Admin
/app/settings	Settings	Employee + Admin
/app/admin	Admin	Super Admin only
*	NotFound	Public