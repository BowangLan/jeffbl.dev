"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { HERO_WIDTH_2, V1_TRANSITION } from "./v1-constants";

// Standard section: a full-width top hairline that crosses the two vertical
// column lines, plus a column-aligned content container.
export function V1Section({
  title,
  children,
  className,
  hairline = true,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  hairline?: boolean;
}) {
  return (
    <section className="relative w-full">
      {hairline && (
        <div className="v1-line absolute top-0 left-0 h-px w-full pointer-events-none" />
      )}
      <div
        className={cn("mx-auto w-full px-8 pt-12 pb-16", className)}
        style={{ maxWidth: HERO_WIDTH_2 }}
      >
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-30px" }}
            transition={V1_TRANSITION}
            className="mb-8 text-xl font-light text-neutral-200"
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
}
