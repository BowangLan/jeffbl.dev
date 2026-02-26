"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useV1Store } from "./v1-state";
import { HERO_WIDTH_2 } from "./v1-constants";

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

function generateMockData(): ContributionWeek[] {
  const weeks: ContributionWeek[] = [];
  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  const startDate = new Date(oneYearAgo);
  startDate.setDate(startDate.getDate() - startDate.getDay());

  let currentDate = new Date(startDate);

  for (let week = 0; week < 52; week++) {
    const days: ContributionDay[] = [];

    for (let day = 0; day < 7; day++) {
      const dateStr = currentDate.toISOString().split("T")[0];
      const isWeekend = day === 0 || day === 6;
      const baseChance = isWeekend ? 0.3 : 0.7;
      const hasActivity = Math.random() < baseChance;

      let count = 0;
      let level = 0;

      if (hasActivity && currentDate <= today) {
        const random = Math.random();
        if (random < 0.3) {
          count = Math.floor(Math.random() * 3) + 1;
          level = 1;
        } else if (random < 0.6) {
          count = Math.floor(Math.random() * 5) + 4;
          level = 2;
        } else if (random < 0.85) {
          count = Math.floor(Math.random() * 7) + 9;
          level = 3;
        } else {
          count = Math.floor(Math.random() * 10) + 16;
          level = 4;
        }
      }

      days.push({ date: dateStr, count, level });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    weeks.push({ days });
  }

  return weeks;
}

export function GitHubContributionsSection() {
  const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const initStep = useV1Store((state) => state.initStep);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/github-contributions");
        const data = await res.json();
        if (data.weeks?.length && !data.error) {
          setWeeks(data.weeks);
        } else if (weeks.length === 0) {
          setWeeks(generateMockData());
        }
      } catch {
        if (weeks.length === 0) {
          setWeeks(generateMockData());
        }
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  if (isLoading) {
    return (
      <div className="h-32 flex items-center justify-center text-neutral-500">
        Loading...
      </div>
    );
  }

  if (initStep !== 2) {
    return null;
  }

  const GAP_SIZE = 3;

  return (
    <div
      className="overflow-x-auto flex-none"
      style={{
        marginLeft: `${window.innerWidth / 2 - HERO_WIDTH_2 / 2}px`,
      }}
    >
      <div className={`flex w-max px-8 py-2 h-fit`} style={{ gap: `${GAP_SIZE}px` }}>
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className={`flex flex-col flex-none`} style={{ gap: `${GAP_SIZE}px` }}>
            {week.days.map((day, dayIndex) => {
              const delay = 0.01 * weekIndex + 0.03 * dayIndex;
              // const delay = (weekIndex * 7 + dayIndex) * 0.01;
              return (
                <motion.div
                  key={day.date}
                  initial={{ opacity: 0, x: 3 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut", delay } }}
                  exit={{ opacity: 0, x: 3 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`w-[10px] h-[10px] sm:w-[14px] sm:h-[14px] rounded-sm ${LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0]}`}
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
