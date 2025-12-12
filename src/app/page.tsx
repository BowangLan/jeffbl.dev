import Link from "next/link";
import { PiMoonBold } from "react-icons/pi";

import { SocialMedia } from "@/components/SocialMedia";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { FeaturedProjectsSection } from "@/components/FeaturedProjectsSection";
import { ExperienceTimelineSection } from "@/components/ExperienceTimelineSection";
import { getHomePageData } from "../../sanity/lib/api";

const navLinks = [
  { label: "About", href: "/" },
  { label: "Articles", href: "/blogs" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
];

export default async function Home() {
  const { projects, experiences } = await getHomePageData();
  return (
    <DefaultLayout>
      <div className="flex min-h-[440px] flex-col justify-center gap-0 pb-10 pt-10 text-neutral-200">
        <header className="pointer-events-none">
          <nav className="pointer-events-auto fixed left-1/2 top-8 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium shadow-[0_25px_70px_rgba(0,0,0,0.45)] backdrop-blur">
            <ul className="flex items-center gap-4 sm:gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            aria-label="Toggle theme"
            className="pointer-events-auto fixed right-6 top-8 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-neutral-200 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur transition hover:bg-white/10"
          >
            <PiMoonBold />
          </button>
        </header>

        <section className="flex flex-col gap-6 md:flex-row md:items-center py-12 sm:py-28 md:gap-12 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-white/5 text-3xl font-semibold text-white shadow-[0_20px_80px_rgba(0,0,0,0.6)] sm:h-28 sm:w-28">
              JL
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <h1 className="text-3xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl">
              Jeffrey Lan
            </h1>
            <p className="text-base font-medium uppercase tracking-wider text-neutral-400 pt-4">
              Software Engineer • Founder • Builder
            </p>
            <p className="text-base/loose font-normal max-w-prose text-neutral-400">
              I'm Jeffrey Lan, a software engineer based in Seattle. I love
              shipping fast, expressive interfaces and crafting thoughtful
              developer tools that help teams build ambitious experiences.
              Currently I'm exploring new product ideas and open to full-time
              roles.
            </p>
            <div className="pt-2">
              <SocialMedia size="sm" />
            </div>
          </div>
        </section>

        <FeaturedProjectsSection projects={projects} />
        <ExperienceTimelineSection experiences={experiences} />
      </div>
    </DefaultLayout>
  );
}
