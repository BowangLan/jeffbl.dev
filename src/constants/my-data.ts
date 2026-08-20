export const TECH_TAGS: Record<string, Tag> = {
  // programming languages
  javascript: {
    slug: "javascript",
    name: "JavaScript",
    categories: [],
  },
  typescript: {
    slug: "typescript",
    name: "TypeScript",
    categories: [],
  },
  python: {
    slug: "python",
    name: "Python",
    categories: [],
  },
  java: {
    slug: "java",
    name: "Java",
    categories: [],
  },
  swift: {
    slug: "swift",
    name: "Swift",
    categories: [],
  },

  // styling
  tailwindcss: {
    slug: "tailwindcss",
    name: "Tailwind CSS",
    categories: [],
  },
  shadcn: {
    slug: "shadcn",
    name: "Shadcn",
    categories: [],
  },
  motion: {
    slug: "motion",
    name: "Motion (Framer Motion)",
    categories: [],
  },

  // frameworks
  react: {
    slug: "react",
    name: "React",
    categories: [],
  },
  nextjs: {
    slug: "nextjs",
    name: "Next.js",
    categories: [],
  },
  tanstackstart: {
    slug: "tanstackstart",
    name: "TanStack Start",
    categories: [],
  },
  electron: {
    slug: "electron",
    name: "Electron",
    categories: [],
  },
  reactnative: {
    slug: "reactnative",
    name: "React Native",
    categories: [],
  },
  expo: {
    slug: "expo",
    name: "Expo",
    categories: [],
  },
  chromeextension: {
    slug: "chromeextension",
    name: "Chrome Extension",
    categories: [],
  },
  fastapi: {
    slug: "fastapi",
    name: "FastAPI",
    categories: [],
  },

  // databases
  convex: {
    slug: "convex",
    name: "Convex",
    categories: [],
  },
  postgresql: {
    slug: "postgresql",
    name: "PostgreSQL",
    categories: [],
  },
  redis: {
    slug: "redis",
    name: "Redis",
    categories: [],
  },

  // deployment
  vercel: {
    slug: "vercel",
    name: "Vercel",
    categories: [],
  },
  railway: {
    slug: "railway",
    name: "Railway",
    categories: [],
  },

  // dev tools
  git: {
    slug: "git",
    name: "Git",
    categories: [],
  },
  github: {
    slug: "github",
    name: "GitHub",
    categories: [],
  },
  docker: {
    slug: "docker",
    name: "Docker",
    categories: [],
  },
  mcp: {
    slug: "mcp",
    name: "MCP",
    categories: [],
  },
} as const;

// longDescription uses \n\n to separate paragraphs; detail pages split on it.
export const HOME_PAGE_PROJECTS: Project[] = [
  {
    title: "Husky Search",
    slug: "husky-search",
    shortDescription:
      "Course search & planning platform for students at the University of Washington",
    longDescription:
      "Husky Search replaces the university's static course catalog with a fast, explorable interface: full-text course search, gen-ed filters, major rankings, and an interactive prerequisite graph for reasoning about what to take and when.\n\nBuilt the prerequisite explorer as a graph UI (ReactFlow) and validated the interaction model with high-fidelity prototypes before committing to the full implementation. A schedule builder and plan studio let students assemble quarters directly from search results.\n\nCourse data stays current without manual updates: Python cron scrapers ingest live UW course data into Convex, so availability shown in the UI reflects the real catalog.",
    websiteUrl: "https://huskysearch.fyi",
    githubUrl: "https://github.com/BowangLan/husky-search",
    dateRange: {
      start: "2025-08-01",
      ongoing: true,
    },
    tags: [TECH_TAGS.nextjs, TECH_TAGS.convex, TECH_TAGS.python],
    content: [],
    current: true,
  },
  {
    title: "C3 Desktop",
    slug: "c3-desktop",
    shortDescription:
      "Local-first desktop app that replaces instructor Canvas LMS workflows with automated tooling",
    longDescription:
      "C3 is a local-first desktop application that replaces fragile Canvas LMS web workflows with reliable, automated tooling that instructors control entirely on their own machines.\n\nTranslated insights from 10+ faculty interviews into concrete interaction designs, iterating on prototypes to support complex teaching workflows with transparency and reversibility.\n\nPrivacy, offline reliability, and trust shaped both the architecture and the UX: an Electron app with a typed Canvas domain layer (courses, assignments, announcements, planner, files) backed by a FastAPI service.",
    websiteUrl: "https://c3teach.com",
    dateRange: {
      start: "2025-11-01",
      ongoing: true,
    },
    tags: [TECH_TAGS.electron, TECH_TAGS.fastapi, TECH_TAGS.shadcn],
    content: [],
    current: true,
  },
  {
    title: "Anime Tracker",
    slug: "anime-tracker",
    shortDescription:
      "Anime schedule dashboard for tracking airing shows by weekday",
    longDescription:
      "Anime Tracker organizes currently airing anime by the weekday each show updates, with at-a-glance episode numbers, season progress, and countdowns calculated in the viewer's local timezone.\n\nAniList's GraphQL API supplies the live seasonal catalog, fetched on the server and revalidated hourly. Favorites and episode watch history stay local, so the app needs no account or backend.\n\nBuilt with Next.js 16 and React 19, with dedicated schedule, discovery, search, favorites, and anime detail views.",
    websiteUrl: "https://anime-tracker-phi-two.vercel.app",
    githubUrl: "https://github.com/BowangLan/anime-tracker",
    dateRange: {
      start: "2026-07-13",
      ongoing: true,
    },
    tags: [TECH_TAGS.nextjs, TECH_TAGS.react, TECH_TAGS.shadcn],
    content: [],
    current: true,
  },
  {
    title: "Napsis",
    slug: "napsis",
    shortDescription:
      "Personal note-taking app with AI-powered search & knowledge graph",
    longDescription:
      "Napsis is a personal note-taking app built around the idea that notes become more useful when they're connected: AI-powered search plus a knowledge graph that links related notes automatically.\n\nDesigned the capture-first writing experience to stay out of the way, while graph building and retrieval run in the background.\n\nBuilt on TanStack Start with Convex and PostgreSQL, structured so the graph and search layers can evolve without redesigning core note flows.",
    websiteUrl: "https://napsis.app",
    dateRange: {
      start: "2025-11-01",
      ongoing: true,
    },
    tags: [TECH_TAGS.tanstackstart, TECH_TAGS.convex, TECH_TAGS.postgresql],
    content: [],
    current: true,
  },
  {
    title: "YouTube Muse",
    slug: "youtube-muse",
    shortDescription: "Lightweight music player built on top of YouTube",
    longDescription:
      "YouTube Muse turns YouTube into a focused, lightweight music player: no feed, no autoplay rabbit holes, just your music.\n\nStructured as a Bun + Turborepo monorepo shipping two targets from one codebase: a Next.js web app and an Electron desktop shell.\n\nIntegrates both official and unofficial YouTube APIs for search, playback, and library management.",
    websiteUrl: "https://youtube-muse.vercel.app",
    githubUrl: "https://github.com/BowangLan/youtube-muse",
    dateRange: {
      start: "2025-11-27",
      ongoing: true,
    },
    tags: [TECH_TAGS.nextjs, TECH_TAGS.electron, TECH_TAGS.motion],
    content: [],
    current: true,
  },
  {
    title: "GHub",
    slug: "ghub",
    shortDescription:
      "Native macOS app for monitoring local repositories, pull requests, and CI",
    longDescription:
      "GHub is a native macOS menu-bar app that keeps the state of local Git repositories visible at a glance: current branches, working-tree changes, ahead/behind status, open pull requests, and CI results.\n\nIt combines local Git data with GitHub CLI results, stores snapshots in SQLite, and refreshes multiple watched repositories without managing a separate set of GitHub credentials.\n\nBuilt in SwiftUI with focused views for repository status, branch and PR references, diff details, and quick actions including squash merges.",
    githubUrl: "https://github.com/BowangLan/ghub",
    dateRange: {
      start: "2026-05-05",
      ongoing: true,
    },
    tags: [TECH_TAGS.swift, TECH_TAGS.git, TECH_TAGS.github],
    content: [],
    current: true,
  },
];

// Earlier projects, shown on the full projects list and detail pages.
export const ARCHIVE_PROJECTS: Project[] = [
  {
    title: "KG Chat",
    slug: "kg-chat",
    shortDescription: "Personal knowledge base with AI chat & MCP support",
    longDescription:
      "KG Chat is a personal knowledge base where an AI chat interface can explore and modify structured knowledge: notes, tables, and the relationships between them.\n\nArchitected a custom MCP server exposing 15+ scoped tools, so AI agents can safely read and write user data with explicit permissions and debuggable behavior.\n\nEnd-to-end auth and access control with Clerk and Convex keep multi-user workflows predictable across the UI, APIs, and agent actions.",
    websiteUrl: "https://kgchat.app",
    dateRange: {
      start: "2025-11-01",
      ongoing: true,
    },
    tags: [TECH_TAGS.nextjs, TECH_TAGS.convex, TECH_TAGS.mcp],
    content: [],
  },
  {
    title: "Resume Editor",
    slug: "resume-editor",
    shortDescription:
      "LaTeX-based resume editor web app with AI-powered PDF import",
    longDescription:
      "A LaTeX resume editor that removes the LaTeX: upload an existing PDF resume and AI parsing (Vercel AI SDK) converts it into structured, editable form fields.\n\nA split-view editor shows the form on one side and live syntax-highlighted LaTeX output on the other, with one-click export to .tex.\n\nBuilt with Next.js 16, React 19, Tailwind v4, shadcn/ui, and Zustand.",
    websiteUrl: "https://resume-editor-iota.vercel.app",
    githubUrl: "https://github.com/BowangLan/resume-editor",
    dateRange: {
      start: "2025-12-05",
      ongoing: true,
    },
    tags: [TECH_TAGS.nextjs, TECH_TAGS.shadcn],
    content: [],
  },
  {
    title: "Tourius",
    slug: "tourius",
    shortDescription:
      "Mobile app for following badminton tournaments on tournamentsoftware.com",
    longDescription:
      "Tourius brings tournamentsoftware.com, the de facto home of competitive badminton draws, to mobile: tournaments, draws and brackets, live match and court views, player search, and announcements.\n\nBuilt as a Turborepo monorepo with an Expo app on React 19, Convex for realtime data, and Clerk for auth, prepared for App Store submission.\n\nThe latest iteration of a multi-year arc of badminton tournament tooling that started with the Toural admin platform in 2023.",
    dateRange: {
      start: "2025-03-01",
      ongoing: true,
    },
    tags: [TECH_TAGS.expo, TECH_TAGS.reactnative, TECH_TAGS.convex],
    content: [],
  },
  {
    title: "Flytie",
    slug: "flytie",
    shortDescription:
      "Live global flight tracker with a GPU-rendered map and historical replay",
    longDescription:
      "Flytie renders live global air traffic from ADS-B Exchange on a GPU-accelerated map (deck.gl + MapLibre), enriched with flight metadata from AeroDataBox.\n\nSupports historical replay with timeline scrubbing, weather radar overlays, and ARTCC airspace boundaries.\n\nBuilt with TanStack Start, React 19, Convex, and Redis caching, running on Bun.",
    websiteUrl: "https://flytie.vercel.app",
    githubUrl: "https://github.com/BowangLan/flytie",
    dateRange: {
      start: "2026-02-27",
      end: "2026-03-01",
    },
    tags: [TECH_TAGS.tanstackstart, TECH_TAGS.convex, TECH_TAGS.redis],
    content: [],
  },
  {
    title: "ChatGPT Archive",
    slug: "chatgpt-archive",
    shortDescription:
      "Chrome extension for organizing and searching your ChatGPT conversations",
    longDescription:
      "A Chrome extension (Manifest V3) that adds the organization layer ChatGPT never had: folders, pinning, full-text search with a command palette, and bulk actions across conversations.\n\nOne of my longest-lived side projects, maintained since 2023 across multiple ChatGPT UI overhauls.",
    githubUrl: "https://github.com/BowangLan/chatgpt-archive",
    dateRange: {
      start: "2023-06-23",
      ongoing: true,
    },
    tags: [TECH_TAGS.chromeextension, TECH_TAGS.react, TECH_TAGS.typescript],
    content: [],
  },
  {
    title: "HTMS",
    slug: "htms",
    shortDescription:
      "Python web-scraping library where scrapers are written as HTML",
    longDescription:
      "HTMS is a small Python library built on an unusual idea: declare web-scraping tasks in HTML-like markup instead of imperative code. Requests, pagination, XPath extraction, follow-up requests, and JSON output are all expressed as tags, then executed with a single command.\n\nA design exercise in building a declarative DSL, published as a pip-installable package.",
    githubUrl: "https://github.com/BowangLan/htms",
    dateRange: {
      start: "2024-08-27",
      end: "2024-09-01",
    },
    tags: [TECH_TAGS.python],
    content: [],
  },
  {
    title: "EmojiCloud",
    slug: "emoji-cloud",
    shortDescription:
      "Open-source emoji word-cloud visualization library for Python",
    longDescription:
      "EmojiCloud generates word clouds out of emoji: rectangle, ellipse, and image-masked canvases, support for seven emoji vendors, and customizable color handling.\n\nBuilt in 2022 as my first polished open-source Python library, with a full README, examples, and published package.",
    githubUrl: "https://github.com/BowangLan/emoji-cloud-engine",
    dateRange: {
      start: "2022-07-27",
      end: "2022-12-01",
    },
    tags: [TECH_TAGS.python],
    content: [],
  },
  {
    title: "Better Grades",
    slug: "better-grades",
    shortDescription:
      "Chrome extension that reskins and enhances Canvas LMS for students",
    longDescription:
      "Better Grades rebuilds the Canvas LMS experience inside a Chrome extension: course dashboards, assignment sheets with score rings and statistics, a weekly calendar, file trees, announcements, and dark mode.\n\nAn earlier chapter of a six-year arc of building tools for UW students that later led to C3 and Husky Search.",
    dateRange: {
      start: "2024-01-01",
      end: "2024-05-01",
    },
    tags: [TECH_TAGS.chromeextension, TECH_TAGS.react, TECH_TAGS.typescript],
    content: [],
  },
];

export const ALL_PROJECTS: Project[] = [
  ...HOME_PAGE_PROJECTS,
  ...ARCHIVE_PROJECTS,
];

export const HOME_PAGE_EXPERIENCES: Experience[] = [
  {
    title: "Design Engineer",
    slug: "design-engineer-geospatios",
    organization: "Geospatios",
    location: "Palo Alto, CA",
    shortDescription:
      "Designing and engineering Air-OS, applying spatial data analysis, computational modeling, and scientific programming to geospatial platform development.",
    longDescription:
      "Leading the design, architecture, and implementation of Air-OS, a complex geospatial software platform. Applying an astronomy background in computational modeling, spatial data analysis, coordinate systems, image processing, numerical methods, and scientific programming to guide platform development. Using experience in data visualization, algorithm development, systems design, and research planning to shape both the product's implementation and its long-term technical direction.",
    content: "",
    dateRange: {
      start: "2026-03-24",
      ongoing: true,
    },
  },
  {
    title: "Lead Software Engineer",
    slug: "lead-swe-performance-formula",
    organization: "Performance Formula",
    location: "Seattle, WA",
    shortDescription:
      "Designed and implemented a cross-platform React Native app for iOS and Android, and built an internal admin tool in Next.js that reduced manual work by ~10 hours/week.",
    longDescription:
      "Designed and implemented a cross-platform React Native application, translating product requirements into polished, interactive mobile experiences across iOS and Android. Built an internal admin tool in Next.js that streamlined operational workflows, reducing repetitive manual work by ~10 hours/week for staff. Iterated rapidly on UI and interaction patterns in collaboration with stakeholders, validating designs through working prototypes rather than static mockups.",
    content: "",
    dateRange: {
      start: "2025-04-01",
      end: "2026-03-20",
      ongoing: false,
    },
  },
  {
    title: "Lead Software Engineer (Part-Time)",
    slug: "lead-swe-violet",
    organization: "Violet",
    location: "Seattle, WA",
    shortDescription:
      "Shipped a production mobile app using React Native and Expo, owning UX decisions, component architecture, and end-to-end frontend implementation.",
    longDescription:
      "Shipped a production mobile application using React Native and Expo, owning UX decisions, component architecture, and end-to-end frontend implementation. Collaborated with product stakeholders to translate evolving requirements into interactive features, balancing usability, performance, and maintainability. Designed frontend systems that supported future iteration without redesigning core flows.",
    content: "",
    dateRange: {
      start: "2024-09-01",
      end: "2025-08-01",
    },
  },
  {
    title: "Team Leader & Software Engineer",
    slug: "team-leader-hua-classmates",
    organization: "Organization of Hua Classmates",
    location: "Seattle, WA",
    shortDescription:
      "Led the redesign and rebuild of a high-traffic web platform using Next.js, TailwindCSS, and shadcn-ui, supporting 400k+ monthly requests. Coordinated a ~10-person team across design critiques, technical reviews, and milestone planning.",
    longDescription:
      "Led the redesign and rebuild of a high-traffic web platform using Next.js, TailwindCSS, and shadcn-ui, improving usability and visual consistency across the product. Supported 400k+ monthly requests, ensuring UI performance and reliability under load. Coordinated a ~10-person team, facilitating design critiques, technical reviews, and milestone planning.",
    content: "",
    dateRange: {
      start: "2022-09-01",
      ongoing: true,
    },
  },
];
