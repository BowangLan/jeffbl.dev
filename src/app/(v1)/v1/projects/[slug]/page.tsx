import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "@/components/Link";
import { ALL_PROJECTS } from "@/constants/my-data";
import { HERO_WIDTH_2 } from "../../v1-constants";
import { V1Frame } from "../../v1-frame";

export function generateStaticParams() {
  return ALL_PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found | Jeffrey Lan" };
  return {
    title: `${project.title} | Jeffrey Lan`,
    description: project.shortDescription,
  };
}

function formatDateString(date: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default async function V1ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const paragraphs = project.longDescription
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <main className="relative w-full pb-16">
      <V1Frame />

      <div className="mx-auto w-full px-8" style={{ maxWidth: HERO_WIDTH_2 }}>
        <nav className="pt-8">
          <Link
            href="/v1/projects"
            className="text-sm text-neutral-500 hover:text-neutral-100 transition-colors duration-300"
          >
            ← Projects
          </Link>
        </nav>

        <header className="flex flex-col gap-4 pt-10 pb-10">
          <p className="font-mono text-xs text-neutral-500">
            {formatDateString(project.dateRange.start)}
            {" - "}
            {project.dateRange.ongoing
              ? "Present"
              : formatDateString(project.dateRange.end ?? "")}
          </p>

          <h1 className="text-4xl font-light text-neutral-100 md:text-5xl">
            {project.title}
          </h1>

          <p className="max-w-prose text-base leading-relaxed text-neutral-400">
            {project.shortDescription}
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-4">
            {project.websiteUrl && (
              <ExternalLink
                href={project.websiteUrl}
                className="text-sm text-neutral-300 hover:text-neutral-100"
              >
                Website
              </ExternalLink>
            )}
            {project.githubUrl && (
              <ExternalLink
                href={project.githubUrl}
                className="text-sm text-neutral-300 hover:text-neutral-100"
              >
                GitHub
              </ExternalLink>
            )}
          </div>
        </header>

        <section className="relative flex flex-col gap-5 pt-10">
          <div className="v1-line absolute top-0 -left-8 -right-8 h-px pointer-events-none" />
          {paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="max-w-prose text-sm leading-relaxed text-neutral-400 md:text-base"
            >
              {paragraph}
            </p>
          ))}
        </section>

        <section className="flex flex-col gap-4 pt-10">
          <h2 className="text-sm text-neutral-500">Built with</h2>
          <div className="flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag.slug}
                className="cursor-default select-none rounded-md border border-neutral-700 px-2 py-1 text-xs text-neutral-400"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
