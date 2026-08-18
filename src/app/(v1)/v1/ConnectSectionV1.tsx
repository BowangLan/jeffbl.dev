"use client";

import { motion } from "motion/react";
import { ExternalLink } from "@/components/Link";
import { EMAIL_1_URL, RESUME_URL } from "@/constants";
import { SocialItems } from "./social-items";
import { V1Section } from "./v1-section";
import { V1_TRANSITION } from "./v1-constants";

export function ConnectSectionV1() {
  return (
    <V1Section title="Get in touch">
      <div className="flex flex-col gap-6">
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-30px" }}
          transition={V1_TRANSITION}
          className="max-w-prose text-sm md:text-base leading-relaxed text-neutral-400"
        >
          Open to interesting products, teams, and collaborations.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ ...V1_TRANSITION, delay: 0.08 }}
          href={`mailto:${EMAIL_1_URL}`}
          className="w-fit text-2xl font-light text-neutral-100 underline decoration-neutral-700 underline-offset-8 transition-colors duration-300 hover:decoration-neutral-100 md:text-4xl"
        >
          {EMAIL_1_URL}
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ ...V1_TRANSITION, delay: 0.16 }}
          className="mt-2 flex items-center gap-6"
        >
          <SocialItems iconSize={20} stagger={0.05} />
          <span className="v1-line h-4 w-px" />
          <ExternalLink
            href={RESUME_URL}
            className="text-sm text-neutral-400 hover:text-neutral-100"
          >
            Resume
          </ExternalLink>
        </motion.div>
      </div>
    </V1Section>
  );
}

export function V1Footer() {
  return (
    <footer className="relative w-full">
      <div className="v1-line absolute top-0 left-0 h-px w-full pointer-events-none" />
      <div
        className="mx-auto flex w-full items-center justify-between px-8 py-6"
        style={{ maxWidth: 56 * 16 }}
      >
        <p className="text-xs text-neutral-500">© 2026 Jeffrey Lan</p>
        <p className="text-xs text-neutral-500">Seattle, WA</p>
      </div>
    </footer>
  );
}
