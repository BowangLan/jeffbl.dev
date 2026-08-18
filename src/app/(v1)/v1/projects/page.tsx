import type { Metadata } from "next";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";
import { ARCHIVE_PROJECTS, HOME_PAGE_PROJECTS } from "@/constants/my-data";
import { HERO_WIDTH_2 } from "../v1-constants";
import { V1Frame } from "../v1-frame";

export const metadata: Metadata = {
  title: "Projects | Jeffrey Lan",
  description: "Projects built by Jeffrey Lan over the years.",
};

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid w-full gap-x-12 gap-y-10 sm:grid-cols-2">
      {projects.map((project) => (
        <article key={project.slug} className="group/project flex flex-col gap-3">
          <h3 className="flex items-center gap-2 text-base font-normal text-neutral-100">
            <Link
              href={`/v1/projects/${project.slug}`}
              className="hover:underline underline-offset-4 decoration-neutral-600"
            >
              {project.title}
            </Link>
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.title} website`}
                className="text-neutral-500 hover:text-neutral-100 transition-colors duration-300"
              >
                <PiArrowUpRightBold className="size-3.5" />
              </a>
            )}
          </h3>

          <p className="text-sm leading-relaxed text-neutral-400 group-hover/project:text-neutral-300 transition-colors duration-300">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag.slug}
                className="flex cursor-default select-none items-center gap-1 rounded-md border border-neutral-700 px-2 py-1 text-xs text-neutral-400 transition-colors duration-300 group-hover/project:border-neutral-500 group-hover/project:text-neutral-100"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function V1ProjectsPage() {
  return (
    <main className="relative w-full pb-16">
      <V1Frame />

      <div className="mx-auto w-full px-8" style={{ maxWidth: HERO_WIDTH_2 }}>
        <nav className="pt-8">
          <Link
            href="/"
            className="text-sm text-neutral-500 hover:text-neutral-100 transition-colors duration-300"
          >
            ← Home
          </Link>
        </nav>

        <header className="pt-10 pb-12">
          <h1 className="text-4xl font-light text-neutral-100">Projects</h1>
        </header>

        <section className="flex flex-col gap-6 pb-16">
          <h2 className="text-xl font-light text-neutral-200">Now building</h2>
          <ProjectGrid projects={HOME_PAGE_PROJECTS} />
        </section>

        <section className="relative flex flex-col gap-6 pt-12">
          <div className="v1-line absolute top-0 -left-8 -right-8 h-px pointer-events-none" />
          <h2 className="text-xl font-light text-neutral-200">Earlier</h2>
          <ProjectGrid projects={ARCHIVE_PROJECTS} />
        </section>
      </div>
    </main>
  );
}
