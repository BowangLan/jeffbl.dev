"use client";

import DefaultLayout from "@/components/layout/DefaultLayout";
import { FeaturedProjectsSection } from "@/components/FeaturedProjectsSection";
import { ExperienceTimelineSection } from "@/components/ExperienceTimelineSection";
import { HomeNavigation } from "@/components/HomeNavigation";
import { HomeHero } from "@/components/HomeHero";
import { ConnectSection } from "@/components/home/ConnectSection";
import { BuildStackSection } from "@/components/home/BuildStackSection";
import { GitHubContributionsSection } from "@/components/home/GitHubContributionsSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <DefaultLayout active="/">
      <>
        <HomeHero />

        <div className="space-y-16 pb-16 sm:space-y-20 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FeaturedProjectsSection />
          </motion.div>

          {/* 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <GitHubContributionsSection />
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ExperienceTimelineSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <BuildStackSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <ConnectSection />
          </motion.div>
        </div>
      </>
    </DefaultLayout>
  );
}
