"use client";

import { Lato } from "next/font/google";
import { motion } from "motion/react";
import { HOME_PAGE_EXPERIENCES } from "@/constants/my-data";
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

function formatDateString(date: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export function ExperienceTimelineSectionV1() {
  const experiences = HOME_PAGE_EXPERIENCES;

  return (
    <section
      className={cn(
        "mx-auto w-full px-7 py-12",
        "flex flex-col items-center"
      )}
      style={{ maxWidth: 56 * 16 }}
    >
      {/* Timeline */}
      <div className="w-full space-y-10 sm:pl-[27%]">
        {experiences.map((experience, i) => (
          <motion.article
            key={experience.slug}
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ ...TRANSITION, delay: i * 0.08 }}
            className="flex flex-col gap-3"
          >
            <div className="flex flex-col gap-1.5">
              <div className="flex sm:items-baseline flex-col sm:flex-row gap-3">
                <h3 className="text-base font-normal text-neutral-100">
                  {experience.organization}
                </h3>
                <p className="text-sm text-neutral-500">
                  {formatDateString(experience.dateRange.start)} -{" "}
                  {experience.dateRange.ongoing
                    ? "Present"
                    : formatDateString(experience.dateRange.end ?? "")}
                </p>
              </div>
              <p className="text-sm text-neutral-500">{experience.title}</p>
            </div>

            {experience.shortDescription && (
              <p className="text-sm leading-relaxed text-neutral-400 max-w-prose">
                {experience.shortDescription}
              </p>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
