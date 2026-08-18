"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PiArrowUpRightBold } from "react-icons/pi";
import { HOME_PAGE_PROJECTS } from "@/constants/my-data";
import { V1Section } from "./v1-section";
import { V1_TRANSITION } from "./v1-constants";

export function FeaturedProjectsSectionV1() {
  const projects = HOME_PAGE_PROJECTS.filter((project) => project.current);

  return (
    <V1Section title="Selected work">
      {/* Project grid */}
      <div className="grid w-full gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ ...V1_TRANSITION, delay: i * 0.08 }}
            className="group/project flex flex-col gap-3"
          >
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
          </motion.article>
        ))}
      </div>

      {/* View all */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ...V1_TRANSITION, delay: 0.2 }}
        className="mt-10 flex w-full"
      >
        <Link
          href="/v1/projects"
          className="text-sm text-neutral-500 hover:text-neutral-100 transition-colors duration-300"
        >
          View all projects
        </Link>
      </motion.div>
    </V1Section>
  );
}
