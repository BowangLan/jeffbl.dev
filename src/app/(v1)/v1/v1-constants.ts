export const HERO_HEIGHT_1 = 120;
export const HERO_HEIGHT_2 = 300;
export const HERO_WIDTH_1 = 48 * 16;
// The page column: every section aligns to this width, and the two fixed
// vertical hairlines sit at its edges.
export const HERO_WIDTH_2 = 56 * 16;

export const STEP_1_DURATION = 1100;

export const V1_EASE = [0.215, 0.61, 0.355, 1.0] as const;

export const V1_TRANSITION = {
  ease: V1_EASE,
  type: "tween" as const,
  duration: 0.5,
};

export const HERO_SUBTEXT = "Full-stack engineer & founder in Seattle.";

export const ABOUT_PARAGRAPHS = [
  "I build products end to end across web, mobile, and desktop: a course-planning platform for UW students, a Canvas desktop app for instructors, a badminton tournament app, and a growing set of AI-agent tools.",
  "I'm an astronomy student at the University of Washington, where I also write control software for the Manastash Ridge Observatory. Away from a keyboard, I'm usually on a badminton court.",
];

export const ABOUT_TECH = [
  "TypeScript",
  "React",
  "Next.js",
  "TanStack Start",
  "Expo",
  "Electron",
  "Tailwind CSS",
  "Convex",
  "PostgreSQL",
  "Python",
  "FastAPI",
];
