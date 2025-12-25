"use client";

import Link from "next/link";
import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

export function HomeNavigation({ active }: { active: string }) {
  return (
    <header className="mx-auto w-full max-w-4xl px-6 pt-8 sm:px-8 sm:pt-12">
      <nav>
        <ul className="flex items-center gap-6 text-sm sm:text-base font-light text-neutral-400">
          {navItems.map((link) => (
            <li key={link.text} className="relative">
              <Link
                href={link.href}
                className={cn(
                  "trans hover:text-neutral-50 inline-flex items-center gap-2",
                  active === link.href && "text-neutral-50"
                )}
              >
                {link.text}
              </Link>

              <AnimatePresence>
                {active === link.href && (
                  <motion.div
                    layout="position"
                    layoutId="navigation-underline"
                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-neutral-50"
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  ></motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
