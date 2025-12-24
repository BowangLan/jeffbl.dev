import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ExternalLink } from "./Link";
import { HOME_PAGE_PROJECTS } from "@/constants/my-data";

export function FeaturedProjectsSection() {
  const projects = HOME_PAGE_PROJECTS.filter((project) => project.current);

  return (
    <section className="mx-auto w-full max-w-4xl px-6 sm:px-8">
      <div>
        <SectionTitle>Current Projects</SectionTitle>

        <div className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="flex flex-col gap-3 py-4">
              <h3 className="flex items-center gap-2 text-base font-normal text-zinc-100 hover:text-zinc-50 trans">
                {project.websiteUrl ? (
                  <ExternalLink href={project.websiteUrl}>
                    {project.title}
                  </ExternalLink>
                ) : (
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:underline"
                  >
                    {project.title}
                  </Link>
                )}
              </h3>

              <p className="text-sm leading-relaxed text-neutral-400">
                {project.shortDescription}
              </p>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className="flex mt-8">
          <Link
            href="/projects"
            className="text-sm text-zinc-500 hover:text-zinc-100 trans"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
