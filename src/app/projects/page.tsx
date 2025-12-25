import DefaultLayout from "@/components/layout/DefaultLayout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { HOME_PAGE_PROJECTS } from "@/constants/my-data";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";

export default function ProjectsPage() {
  const projects = HOME_PAGE_PROJECTS;

  return (
    <DefaultLayout>
      <div className="relative flex min-h-screen flex-col -mx-4 text-[15px] sm:text-base md:-mx-8">
        <section className="mx-auto w-full max-w-4xl px-6 pt-12 sm:px-8 sm:pt-16">
          <SectionTitle>Projects</SectionTitle>
          <p className="max-w-2xl text-sm text-neutral-400 sm:text-base">
            A curated set of product and UI experiments focused on clarity,
            polish, and careful interactions.
          </p>
        </section>

        <section className="mx-auto w-full max-w-4xl px-6 pb-16 sm:px-8 sm:pb-20">
          <div className="grid gap-6 sm:gap-8">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="group flex flex-col gap-3 border-b border-neutral-800/70 pb-6 last:border-b-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-normal text-neutral-100 group-hover:text-neutral-50 trans">
                    {project.websiteUrl ? (
                      <Link
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 underline underline-offset-4 decoration-neutral-700 hover:decoration-neutral-100 trans"
                      >
                        {project.title}
                        <PiArrowUpRightBold className="size-4 text-neutral-500 group-hover:text-neutral-100 trans" />
                      </Link>
                    ) : (
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:underline"
                      >
                        {project.title}
                      </Link>
                    )}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
                  {project.shortDescription}
                </p>

                {project.tags?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag.name}
                        className="rounded-full border border-neutral-800 px-2 py-1 text-[11px] uppercase tracking-wide text-neutral-400"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
