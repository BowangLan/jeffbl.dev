"use client";

import { motion } from "motion/react";
import { HOME_PAGE_EXPERIENCES } from "@/constants/my-data";
import { V1Section } from "./v1-section";
import { V1_TRANSITION } from "./v1-constants";

function formatDateString(date: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function ExperienceTimelineSectionV1() {
  const experiences = HOME_PAGE_EXPERIENCES;

  return (
    <V1Section title="Experience">
      <div className="w-full space-y-10">
        {experiences.map((experience, i) => (
          <motion.article
            key={experience.slug}
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ ...V1_TRANSITION, delay: i * 0.08 }}
            className="grid gap-x-8 gap-y-2 sm:grid-cols-[176px_1fr]"
          >
            <p className="font-mono text-xs leading-6 text-neutral-500">
              {formatDateString(experience.dateRange.start)}
              {" - "}
              {experience.dateRange.ongoing
                ? "Present"
                : formatDateString(experience.dateRange.end ?? "")}
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-0.5">
                <h3 className="text-base font-normal text-neutral-100">
                  {experience.organization}
                </h3>
                <p className="text-sm text-neutral-500">{experience.title}</p>
              </div>

              {experience.shortDescription && (
                <p className="max-w-prose text-sm leading-relaxed text-neutral-400">
                  {experience.shortDescription}
                </p>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </V1Section>
  );
}
