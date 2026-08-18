"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { HERO_HEIGHT_2, HERO_WIDTH_2, V1_TRANSITION } from "./v1-constants";

// Compact identity bar that takes over once the hero scrolls out of view.
export function V1StickyHeader() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > HERO_HEIGHT_2);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -48, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -48, opacity: 0 }}
          transition={V1_TRANSITION}
          className="fixed top-0 inset-x-0 z-30 border-b border-neutral-800 bg-neutral-900/70 backdrop-blur-md"
        >
          <div
            className="mx-auto flex h-12 w-full items-center justify-between px-8"
            style={{ maxWidth: HERO_WIDTH_2 }}
          >
            <Link href="/" className="text-sm text-neutral-100">
              <span className="font-thin">{`Hi, I'm `}</span>
              <span className="font-medium">Jeffrey Lan</span>
            </Link>
            <a
              href="mailto:hello@jeffbl.dev"
              className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors duration-300"
            >
              hello@jeffbl.dev
            </a>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
