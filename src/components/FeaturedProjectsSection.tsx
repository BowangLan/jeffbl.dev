import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ExternalLink } from "./Link";
import { HOME_PAGE_PROJECTS } from "@/constants/my-data";
import { TeckStackIcons } from "./TechStack";

export function FeaturedProjectsSection() {
  const projects = HOME_PAGE_PROJECTS.filter((project) => project.current);

  return (
    <section className="mx-auto w-full max-w-4xl px-6 sm:px-8">
      <div>
        <SectionTitle>Current Projects</SectionTitle>

        <div className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3 gap-y-8">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col gap-3 group/project"
            >
              <h3 className="flex items-center gap-2 text-base font-normal text-neutral-100 hover:text-neutral-50 trans">
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

              <p className="text-sm leading-relaxed text-neutral-400 group-hover/project:text-neutral-300 trans">
                {project.shortDescription}
              </p>

              {/* Stack */}
              <div className="flex items-center gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag.slug}
                    className="text-xs text-neutral-400 group-hover/project:text-neutral-100 trans rounded-md flex items-center gap-1 border border-neutral-800 group-hover/project:border-neutral-500 px-2 py-1 cursor-default select-none"
                    style={{
                      borderStyle: "dashed",
                    }}
                  >
                    {/* <TeckStackIcons.react className="text-neutral-400" /> */}
                    {tag.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className="flex mt-8">
          <Link
            href="/projects"
            className="text-sm text-neutral-500 hover:text-neutral-100 trans"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
