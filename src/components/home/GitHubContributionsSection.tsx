"use client";

import { SectionTitle } from "@/components/ui/title";
import { useEffect, useState } from "react";
import { GITHUB_URL } from "@/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionWeek {
  days: ContributionDay[];
}

export function GitHubContributionsSection() {
  const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchContributionData();
  }, []);

  const fetchContributionData = async () => {
    try {
      const response = await fetch("/api/github-contributions");
      const data = await response.json();

      if (data.error) {
        console.error("Failed to fetch contributions:", data.error);
        // Fall back to mock data
        generateMockData();
        return;
      }

      setWeeks(data.weeks || []);
      setTotalContributions(data.totalContributions || 0);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching contributions:", error);
      // Fall back to mock data
      generateMockData();
    }
  };

  const generateMockData = () => {
    const weeks: ContributionWeek[] = [];
    const today = new Date();
    const oneYearAgo = new Date(today);
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    const startDate = new Date(oneYearAgo);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    let currentDate = new Date(startDate);
    let totalCount = 0;

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
          totalCount += count;
        }

        days.push({ date: dateStr, count, level });
        currentDate.setDate(currentDate.getDate() + 1);
      }

      weeks.push({ days });
    }

    setWeeks(weeks);
    setTotalContributions(totalCount);
    setIsLoading(false);
  };

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0:
        return "bg-neutral-800/50";
      case 1:
        return "bg-neutral-700/60";
      case 2:
        return "bg-neutral-600/70";
      case 3:
        return "bg-neutral-400/85";
      case 4:
        return "bg-neutral-200";
      default:
        return "bg-neutral-700/60";
    }
  };

  const monthLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayLabels = ["Mon", "Wed", "Fri"];

  return (
    <div>
      <div className="flex flex-col gap-4">
        {/* Stats */}
        <div className="flex items-center gap-4 text-sm">
          <p className="text-neutral-400">
            {totalContributions.toLocaleString()} contributions in the last year
          </p>
          {/* <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-100 trans"
            >
              View on GitHub →
            </a> */}

          <div className="flex-1"></div>
        </div>

        {/* Contribution Graph */}
        <div className="overflow-x-auto flex-none">
          <div className="block w-max min-w-full">
            {isLoading ? (
              <div className="h-32 flex items-center justify-center text-neutral-500">
                Loading...
              </div>
            ) : (
              <TooltipProvider delayDuration={0}>
                <div className="relative">
                  {/* Day labels */}
                  {/* <div className="absolute left-0 top-0 flex flex-col gap-[3px] text-[10px] text-neutral-500 pt-3">
                    {dayLabels.map((day, i) => (
                      <div
                        key={day}
                        className="h-[10px] leading-[10px]"
                        style={{ marginTop: i === 0 ? 0 : 10 }}
                      >
                        {day}
                      </div>
                    ))}
                  </div> */}

                  {/* Graph */}
                  <div className="">
                    <div className="flex gap-[3px]">
                      {weeks.map((week, weekIndex) => (
                        <div
                          key={weekIndex}
                          className="flex flex-col gap-[3px]"
                        >
                          {week.days.map((day) => {
                            return (
                              <Tooltip key={day.date}>
                                <TooltipTrigger asChild>
                                  <div
                                    className={`w-[10px] h-[10px] sm:h-[11px] sm:w-[11px] rounded-sm ${getLevelColor(
                                      day.level
                                    )} hover:ring-1 hover:ring-neutral-400 trans cursor-default`}
                                  />
                                </TooltipTrigger>
                                <TooltipContent
                                  className="bg-neutral-900 border border-neutral-700 text-neutral-100"
                                  sideOffset={8}
                                >
                                  {day.count} contribution
                                  {day.count !== 1 ? "s" : ""} on {day.date}
                                </TooltipContent>
                              </Tooltip>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TooltipProvider>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <span>Less</span>
          <div className="flex gap-[3px]">
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`w-[10px] h-[10px] rounded-sm ${getLevelColor(level)}`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
