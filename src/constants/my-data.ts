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

export const HOME_PAGE_PROJECTS: Project[] = [
  {
    title: "YouTube Muse",
    slug: "youtube-muse",
    shortDescription: "YouTube video summarizer with AI-powered search & knowledge graph",
    longDescription: "Designed and built a YouTube video summarizer with AI-powered search & knowledge graph, prioritizing privacy, offline reliability, and trust. Translated insights from 10+ faculty interviews into concrete interaction designs, iterating on prototypes to support complex teaching workflows with transparency and reversibility. Prioritized privacy, offline reliability, and trust, shaping both the technical architecture and the user experience.",
    websiteUrl: "https://youtubemuse.app",
    dateRange: {
      start: "2025-11-01",
      ongoing: true,
    },
    tags: [
      // TECH_TAGS.typescript,
      // TECH_TAGS.react,
      TECH_TAGS.nextjs,
      TECH_TAGS.motion,
    ],
    content: [],
    current: true,
  },
  {
    title: "Husky Search",
    slug: "husky-search",
    shortDescription: "Course searching & planning web app for students at University of Washington",
    longDescription: "Designed an interactive course-exploration experience that replaced static university catalogs with a dynamic, graph-based UI for reasoning about prerequisites and schedules. Built high-fidelity interactive prototypes using ReactFlow to validate UX assumptions before committing to full implementation. Automated live data ingestion to ensure the UI reflected real-time course availability without manual updates.",
    websiteUrl: "https://huskysearch.fyi",
    dateRange: {
      start: "2025-08-01",
      ongoing: true,
    },
    tags: [
      // TECH_TAGS.react,
      // TECH_TAGS.typescript,
      TECH_TAGS.nextjs,
      TECH_TAGS.convex,
    ],
    content: [],
    current: true,
  },
  {
    title: "KG Chat",
    slug: "kg-chat",
    shortDescription: "Personal knowledge base with AI chat & MCP support",
    longDescription: "Designed and built an interactive AI chat interface for exploring and modifying structured knowledge (notes, tables, relationships), prioritizing clarity and control over complex, agent-driven workflows. Architected a custom MCP server exposing 15+ scoped tools, enabling AI agents to safely read and modify user data with explicit permissions and debuggable behavior. Implemented end-to-end auth and access control with Clerk and Convex, ensuring predictable multi-user workflows across UI, APIs, and agent actions.",
    websiteUrl: "https://kgchat.app",
    dateRange: {
      start: "2025-11-01",
      ongoing: true,
    },
    tags: [
      // TECH_TAGS.react,
      // TECH_TAGS.typescript,
      TECH_TAGS.nextjs,
      TECH_TAGS.convex,
      TECH_TAGS.mcp,
    ],
    content: [],
    current: true,
  },
  {
    title: "C3 Desktop",
    slug: "c3-desktop",
    shortDescription: "Local-first desktop application replacing instructor Canvas LMS workflows with automated tooling",
    longDescription: "Designed and built a local-first desktop application that replaces fragile Canvas LMS UI workflows with reliable, automated tooling controlled entirely by the user. Translated insights from 10+ faculty interviews into concrete interaction designs, iterating on prototypes to support complex teaching workflows with transparency and reversibility. Prioritized privacy, offline reliability, and trust, shaping both the technical architecture and the user experience.",
    websiteUrl: "https://c3teach.com",
    dateRange: {
      start: "2025-11-01",
      ongoing: true,
    },
    tags: [
      // TECH_TAGS.typescript,
      // TECH_TAGS.react,
      TECH_TAGS.electron,
      TECH_TAGS.tailwindcss,
      TECH_TAGS.shadcn,
    ],
    content: [],
    current: true,
  },
  {
    title: "Napsis",
    slug: "napsis",
    shortDescription: "Personal note-taking app with AI-powered search & knowledge graph",
    longDescription: "Designed and built a personal note-taking app with AI-powered search & knowledge graph, prioritizing privacy, offline reliability, and trust. Translated insights from 10+ faculty interviews into concrete interaction designs, iterating on prototypes to support complex teaching workflows with transparency and reversibility. Prioritized privacy, offline reliability, and trust, shaping both the technical architecture and the user experience.",
    websiteUrl: "https://napsis.app",
    dateRange: {
      start: "2025-11-01",
      ongoing: true,
    },
    tags: [
      // TECH_TAGS.react,
      // TECH_TAGS.typescript,
      TECH_TAGS.tanstackstart,
      TECH_TAGS.convex,
      TECH_TAGS.postgresql,
    ],
    content: [],
    current: true,
  },
  {
    title: "Resume Editor",
    slug: "resume-editor",
    shortDescription: "Latex-based resume editor web app with AI chat",
    longDescription: "Designed and built a LaTeX-based resume editor web app with AI chat, prioritizing privacy, offline reliability, and trust. Translated insights from 10+ faculty interviews into concrete interaction designs, iterating on prototypes to support complex teaching workflows with transparency and reversibility. Prioritized privacy, offline reliability, and trust, shaping both the technical architecture and the user experience.",
    websiteUrl: "https://resume-editor-iota.vercel.app",
    dateRange: {
      start: "2025-11-01",
      ongoing: true,
    },
    tags: [
      // TECH_TAGS.react,
      // TECH_TAGS.typescript,
      TECH_TAGS.nextjs,
    ],
    content: [],
    current: true,
  }
];

export const HOME_PAGE_EXPERIENCES: Experience[] = [
  {
    title: "Lead Software Engineer",
    slug: "lead-swe-performance-formula",
    organization: "Performance Formula",
    location: "Seattle, WA",
    shortDescription: "Designed and implemented a cross-platform React Native app for iOS and Android, and built an internal admin tool in Next.js that reduced manual work by ~10 hours/week.",
    longDescription: "Designed and implemented a cross-platform React Native application, translating product requirements into polished, interactive mobile experiences across iOS and Android. Built an internal admin tool in Next.js that streamlined operational workflows, reducing repetitive manual work by ~10 hours/week for staff. Iterated rapidly on UI and interaction patterns in collaboration with stakeholders, validating designs through working prototypes rather than static mockups.",
    content: "",
    dateRange: {
      start: "2025-04-01",
      ongoing: true,
    },
  },
  {
    title: "Lead Software Engineer (Part-Time)",
    slug: "lead-swe-violet",
    organization: "Violet",
    location: "Seattle, WA",
    shortDescription: "Shipped a production mobile app using React Native and Expo, owning UX decisions, component architecture, and end-to-end frontend implementation.",
    longDescription: "Shipped a production mobile application using React Native and Expo, owning UX decisions, component architecture, and end-to-end frontend implementation. Collaborated with product stakeholders to translate evolving requirements into interactive features, balancing usability, performance, and maintainability. Designed frontend systems that supported future iteration without redesigning core flows.",
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
    shortDescription: "Led the redesign and rebuild of a high-traffic web platform using Next.js, TailwindCSS, and shadcn-ui, supporting 400k+ monthly requests. Coordinated a ~10-person team across design critiques, technical reviews, and milestone planning.",
    longDescription: "Led the redesign and rebuild of a high-traffic web platform using Next.js, TailwindCSS, and shadcn-ui, improving usability and visual consistency across the product. Supported 400k+ monthly requests, ensuring UI performance and reliability under load. Coordinated a ~10-person team, facilitating design critiques, technical reviews, and milestone planning.",
    content: "",
    dateRange: {
      start: "2022-09-01",
      ongoing: true,
    },
  },
];
