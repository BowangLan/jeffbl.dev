# Jeffrey Lan (Bowang Lan) — Developer Profile & Persona

> Synthesized from 6 years of GitHub history (245 repositories, 2020–2026) on
> [github.com/BowangLan](https://github.com/BowangLan). Last updated: July 2026.

## Identity

Jeffrey Lan is a full-stack software engineer, founder, and astronomy student at the
University of Washington, based in Seattle. He builds aesthetic, product-grade web,
mobile, and desktop applications end to end, with a distinct pull toward data-heavy
problems: scraping it, structuring it, connecting it into graphs, and making it
explorable through carefully designed interfaces.

Fluent in English and Mandarin. Plays badminton seriously enough that it became a
product line. Reads sci-fi and fantasy.

- **Web:** [jeffbl.dev](https://jeffbl.dev) · **Email:** hello@jeffbl.dev
- **GitHub:** [BowangLan](https://github.com/BowangLan) · **LinkedIn:** [jeffrey-lan](https://www.linkedin.com/in/jeffrey-lan) · **X:** [@jeffbl25](https://x.com/jeffbl25)

## The one-paragraph persona

*A serial builder who rebuilds the same problem until it becomes a product.* Jeffrey's
GitHub is not a list of tutorials; it is a set of long arcs where an idea starts as a
Python script, returns as a Chrome extension, returns again as a desktop app, and
finally ships as a deployed platform. He adopts new stacks early (React 19, Tailwind v4,
Bun, TanStack Start, Convex, MCP), works in monorepos, ships fast, documents late, and
increasingly builds *with* AI agents as part of his workflow, not just as a feature.

## Contribution trajectory

| Year | Contributions |
|---|---|
| 2022 | 66 |
| 2023 | 724 |
| 2024 | 1,028 |
| 2025 | 1,384 |
| 2026 (through July 3) | 1,047 — on pace for ~2,100 |

Steady acceleration every single year; the last 12 months alone: **1,912 contributions**.

## The long arcs (recurring themes)

### 1. Tools for UW students — the six-year arc
The clearest signature of how he works: the same problem space, rebuilt with rising
ambition and better tools each time.

- **UWCourseVisualizer** (2020) — CSE 143 final project visualizing UW courses
- **uw-tools** (2021) — Python scrapers + a Canvas LMS API client
- **Better Grades** (2024) — Chrome extension enhancing Canvas for students
- **My Canvas / C3** (2024–25) — Electron desktop app for Canvas, now aimed at instructors ([c3teach.com](https://c3teach.com))
- **Husky Search** (2025–26) — deployed course search & planning platform with prereq
  graphs, schedule builder, and automated data ingestion ([huskysearch.fyi](https://huskysearch.fyi))

### 2. Badminton — hobby fused with the project pipeline
Tournament management (Toural, 2023–24) → tournament mobile app headed for the App
Store (Tourius, 2025–26, Expo + Convex) → computer-vision match analysis (Good-Badminton
fork, footwork analysis, 2026). When he loves something, he builds software for it.

### 3. AI & LLM tooling (2023 → accelerating)
ChatGPT Archive (2023 Chrome extension for organizing conversations) → resume-editor
(AI PDF parsing) → llm-telegram-bot, llm-email-client, personal-llm-computing (a
claude-agent-sdk based agent orchestration playground with its own dashboard) → KG Chat
(knowledge base with a custom MCP server exposing 15+ scoped tools). His repos carry
`.claude/`, `CLAUDE.md`, and `AGENTS.md` files — agent-assisted development is his
default working mode.

### 4. Astronomy — real, not decorative
Astronomy major backed by code: the HelioLinc investigation (trans-Neptunian object
detection algorithm, 2023) and 2026 work on UW's Manastash Ridge Observatory —
camera control (evora client/server), telescope control systems in C++
(TCS, Focus-Controller, dome-paddle), and the observatory website.

### 5. Consumer & media apps
YouTube Muse (deployed music player on YouTube, web + Electron), Flytie (live global
flight tracking with GPU-rendered maps: deck.gl, MapLibre, ADS-B data), light-note,
csnap (personal GitHub dashboard). Quick, polished, usually monorepos.

### 6. Meta-tooling: starters, boilerplates, UI libraries
Electron/Vite/Tailwind starters, TanStack starters, fast-node, a personal shadcn
registry (ui.jeffbl.dev), UI collections and UX playgrounds. He invests in his own
velocity.

## Stack

**Languages:** TypeScript (dominant, ~93% of recent significant code), Python
(scraping, data, astronomy), recent C++ (telescope hardware control), a little Go and Swift.

**Signature stack (2025–26):** Bun + Turborepo monorepos · Next.js 16 / React 19 or
TanStack Start · Tailwind v4 + shadcn/ui · Convex · Clerk · Zustand · Expo (mobile) ·
Electron (desktop) · Vercel / Railway / Fly.io.

**Earlier eras:** Python scrapers + FastAPI (2020–22) → T3 stack, Drizzle, Chrome
extensions (2023–24) → the current stack.

## Working style

- **Ships code faster than docs.** Many READMEs are still the template's; the file
  trees underneath are substantial, real products.
- **Iterates in public across repos.** Ideas get versioned as new repositories
  (toural → tourius; my-canvas → c3; three generations of portfolio site).
- **Early adopter with conviction.** Consistently on framework versions months before
  they're mainstream.
- **Design-conscious engineer.** Motion, custom cursors, animation timing curves, and
  UI component collections appear throughout — the interface is part of the product,
  not an afterthought.
- **Data-connector mindset.** Knowledge graphs, prereq graphs, Neo4j experiments,
  MCP servers — he likes making structured data navigable.

## Positioning (for bios, portfolio copy, resumes)

**Short:** "Full-stack engineer and founder in Seattle. I build products end to end —
web, mobile, and desktop — with a focus on data-rich interfaces and carefully tuned
interaction design."

**Medium:** "I'm Jeffrey, a software engineer, founder, and astronomy student at the
University of Washington. Over six years I've gone from Python scrapers to shipping
deployed products: a course-planning platform for UW students, a Canvas desktop app for
instructors, a badminton tournament app, and a growing set of AI-agent tools. I adopt
new stacks early, live in monorepos, and care as much about how software feels as what
it does."

**Themes to lead with:** long-arc persistence (same problem, rebuilt until it ships),
breadth across platforms (web/mobile/desktop/hardware), AI-native workflow, taste.
