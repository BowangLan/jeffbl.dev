import Link from "next/link";
import {
  PiArrowUpRightBold,
  PiGithubLogoBold,
  PiGlobeSimpleBold,
} from "react-icons/pi";

import { DateRange } from "@/components/ui/DateRange";
import { TagPillGroup } from "@/components/ui/Tag";

interface FeaturedProjectsSectionProps {
  projects: Project[];
}

export function FeaturedProjectsSection({
  projects,
}: FeaturedProjectsSectionProps) {
  if (!projects?.length) {
    return null;
  }

  return (
    <section className="pb-16">
      <div className="w-full space-y-10 rounded-[32px] px-6 py-10 sm:px-10 sm:py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Recent Projects
            </h2>
            <p className="max-w-2xl text-base text-neutral-400">
              A few builds that capture how I think about polish, pace, and
              delivering lovable products for teams.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
          >
            View all projects
            <PiArrowUpRightBold />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent p-6 transition hover:border-white/30 sm:p-8"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
              </div>
              <div className="relative flex flex-col gap-4">
                <div className="flex flex-wrap items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <DateRange
                    dateRange={project.dateRange}
                    className="text-xs uppercase tracking-[0.2em] text-neutral-400"
                  />
                </div>

                {project.description && (
                  <p className="text-base leading-relaxed text-neutral-300">
                    {project.description}
                  </p>
                )}

                <TagPillGroup tags={project.tags} />

                <div className="flex flex-wrap items-center gap-3 pt-2 text-sm text-neutral-300">
                  {project.websiteUrl && (
                    <Link
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 transition hover:border-white/40 hover:text-white"
                    >
                      <PiGlobeSimpleBold className="text-lg" />
                      Live site
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 transition hover:border-white/40 hover:text-white"
                    >
                      <PiGithubLogoBold className="text-lg" />
                      Source
                    </Link>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
                  >
                    Read more
                    <PiArrowUpRightBold />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
