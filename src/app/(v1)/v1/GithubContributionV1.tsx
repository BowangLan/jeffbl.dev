"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ExternalLink } from "@/components/Link";
import { GITHUB_URL } from "@/constants";
import { V1Section } from "./v1-section";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionWeek {
  days: ContributionDay[];
}

const LEVEL_COLORS: Record<number, string> = {
  0: "bg-neutral-800/50",
  1: "bg-neutral-700/60",
  2: "bg-neutral-500/85",
  3: "bg-neutral-400/85",
  4: "bg-neutral-200",
};

const GAP_SIZE = 3;

export function GitHubContributionsSection() {
  const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
  const [total, setTotal] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const res = await fetch("/api/github-contributions");
        const data = await res.json();
        if (cancelled) return;
        if (data.weeks?.length && !data.error) {
          setWeeks(data.weeks);
          if (typeof data.totalContributions === "number") {
            setTotal(data.totalContributions);
          }
        }
      } catch {
        // No fake fallback data: the section simply hides itself.
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (isLoading) {
    return (
      <V1Section title="GitHub activity">
        <div className="h-[110px] w-full animate-pulse rounded-md bg-neutral-800/40" />
      </V1Section>
    );
  }

  if (!weeks.length) return null;

  return (
    <V1Section title="GitHub activity">
      <div className="overflow-x-auto pb-2">
        <div className="flex w-max" style={{ gap: `${GAP_SIZE}px` }}>
          {weeks.map((week, weekIndex) => (
            <div
              key={weekIndex}
              className="flex flex-col flex-none"
              style={{ gap: `${GAP_SIZE}px` }}
            >
              {week.days.map((day, dayIndex) => {
                const delay = 0.008 * weekIndex + 0.03 * dayIndex;
                return (
                  <motion.div
                    key={day.date}
                    initial={{ opacity: 0, x: 3 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.2, ease: "easeOut", delay }}
                    title={`${day.count} contributions on ${day.date}`}
                    className={`h-[10px] w-[10px] rounded-sm sm:h-[12px] sm:w-[12px] ${
                      LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0]
                    }`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-4 text-sm text-neutral-500"
      >
        {total !== null && (
          <span>{total.toLocaleString()} contributions in the last year. </span>
        )}
        <ExternalLink href={GITHUB_URL} inline className="text-neutral-500 hover:text-neutral-100">
          Follow along on GitHub
        </ExternalLink>
      </motion.p>
    </V1Section>
  );
}
