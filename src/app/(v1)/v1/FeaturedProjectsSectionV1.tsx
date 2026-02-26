"use client";

import Link from "next/link";
import { Lato } from "next/font/google";
import { motion } from "motion/react";
import { ExternalLink } from "@/components/Link";
import { HOME_PAGE_PROJECTS } from "@/constants/my-data";
import { cn } from "@/lib/utils";

const fontSans = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const TRANSITION = {
  ease: [0.215, 0.61, 0.355, 1.0] as const,
  type: "tween" as const,
  duration: 0.5,
};

export function FeaturedProjectsSectionV1() {
  const projects = HOME_PAGE_PROJECTS.filter((project) => project.current);

  return (
    <section
      className={cn(
        "mx-auto w-full px-7 py-12",
        "flex flex-col items-center"
      )}
      style={{ maxWidth: 56 * 16 }}
    >
      
      {/* Project grid */}
      <div className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 w-full">
        {projects.map((project, i) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ ...TRANSITION, delay: i * 0.08 }}
            className="flex flex-col gap-3 group/project"
          >
            <h3 className="flex items-center gap-2 text-base font-normal text-neutral-100 hover:text-neutral-50 transition-colors duration-300">
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

            <p className="text-sm leading-relaxed text-neutral-400 group-hover/project:text-neutral-300 transition-colors duration-300">
              {project.shortDescription}
            </p>

            <div className="flex items-center gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag.slug}
                  className="text-xs text-neutral-400 group-hover/project:text-neutral-100 transition-colors duration-300 rounded-md flex items-center gap-1 border border-neutral-700 group-hover/project:border-neutral-500 px-2 py-1 cursor-default select-none"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      {/* View all */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ...TRANSITION, delay: 0.2 }}
        className="flex mt-10 w-full"
      >
        <Link
          href="/projects"
          className="text-sm text-neutral-500 hover:text-neutral-100 transition-colors duration-300"
        >
          View All
        </Link>
      </motion.div>
    </section>
  );
}
