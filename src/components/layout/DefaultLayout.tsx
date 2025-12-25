"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { VARIANTS } from "@/lib/animate";
import { HomeNavigation } from "../HomeNavigation";

export default function DefaultLayout({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: string;
}) {
  return (
    <div className="z-10 flex flex-col items-stretch flex-1 w-full px-4 mx-auto lg:max-w-4xl md:px-8 xl:max-w-6xl min-h-[calc(100vh-228px)]">
      <HomeNavigation active={active ?? ""} />

      <AnimatePresence>
        <motion.main
          className=""
          variants={{
            [VARIANTS.INITIAL]: {
              opacity: 0,
              y: 20,
              filter: "blur(4px)",
            },
            [VARIANTS.VISIBLE]: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            },
            [VARIANTS.EXIT]: {
              opacity: 0,
              y: 20,
              filter: "blur(4px)",
            },
          }}
          initial={VARIANTS.INITIAL}
          animate={VARIANTS.VISIBLE}
          whileInView={VARIANTS.VISIBLE}
          exit={VARIANTS.EXIT}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
