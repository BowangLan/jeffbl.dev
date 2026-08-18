"use client";

import { motion } from "motion/react";
import { V1Section } from "./v1-section";
import { ABOUT_PARAGRAPHS, ABOUT_TECH, V1_TRANSITION } from "./v1-constants";

export function AboutSectionV1() {
  return (
    <V1Section title="About" hairline={false}>
      <div className="flex flex-col gap-5">
        {ABOUT_PARAGRAPHS.map((paragraph, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ ...V1_TRANSITION, delay: i * 0.08 }}
            className="max-w-prose text-sm md:text-base leading-relaxed text-neutral-400"
          >
            {paragraph}
          </motion.p>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ ...V1_TRANSITION, delay: 0.16 }}
          className="mt-2 flex flex-wrap items-center gap-2"
        >
          {ABOUT_TECH.map((tech) => (
            <span
              key={tech}
              className="cursor-default select-none rounded-md border border-neutral-700 px-2 py-1 text-xs text-neutral-400 hover:border-neutral-500 hover:text-neutral-100 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </V1Section>
  );
}
