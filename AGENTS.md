# Repository Guidelines

## Project Structure & Module Organization
Next.js App Router code lives in `src/app` with route groups like `src/app/blogs` and shared providers in `src/app/providers.tsx`. UI primitives sit in `src/components/ui`, while section-level components (Header, TechSection, etc.) live directly under `src/components`. Shared types and constants are centralized in `src/types.ts`, `src/types.tsx`, and `src/constants.ts`; import them with the `@/*` path alias defined in `tsconfig.json`. Assets (favicons, resume PDFs) stay under `public/` and the Sanity Studio + schema definitions live in `/sanity`, mounted at `/admin` via `sanity.config.ts`.

## Build, Test, and Development Commands
- `npm run dev`: starts the Next.js dev server with hot reload at `http://localhost:3000`.
- `npm run build`: compiles the production bundle (run before Fly/Vercel deploys).
- `npm run start`: serves the built bundle locally; use to reproduce prod issues.
- `npm run lint`: runs `next lint` with the repo ESLint rules; gate every PR on this.
- `npx sanity dev --host localhost`: spins up the embedded Sanity Studio for schema validation when editing content models.

## Coding Style & Naming Conventions
Use TypeScript everywhere; the project is `strict: true`. Prefer functional React components with the App Router convention of colocating `page.tsx`, `layout.tsx`, and route metadata. Import styles via Tailwind utility classes; keep custom CSS inside `src/app/globals.css`. Components use PascalCase filenames (`TechSection.tsx`), hooks/utilities use camelCase (`src/lib/fetchProjects.ts`). Run ESLint before pushing, and match the formatting already in the repo (double quotes, semicolons, 2-space indents).

## Testing Guidelines
There is no dedicated test harness yet, so rely on `npm run lint` plus manual verification across key routes (home, `/blogs`, `/projects`, `/resume`). When adding complex logic, prefer colocated integration tests in `src/__tests__` using React Testing Library or Playwright, and name files `<Component>.test.tsx`. Block merges if new code lacks coverage or cannot be exercised manually.

## Commit & Pull Request Guidelines
Recent history favors short, imperative messages (`Updated about text`, `bump next version`). Follow that style, keep the subject under ~60 characters, and squash fixups before pushing. PRs should describe the change, list testing commands, reference any tracking issue, and include screenshots or recordings for UI updates (desktop + mobile). Flag migrations or new env vars explicitly.

## Security & Configuration Tips
Set `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`, `NEXT_PUBLIC_POSTHOG_KEY`, and `NEXT_PUBLIC_POSTHOG_HOST` in `.env.local` before running the app; the Sanity config hard-fails if they are missing. Never commit `.env*` files, and rotate PostHog keys if exposed in logs or screenshots.
