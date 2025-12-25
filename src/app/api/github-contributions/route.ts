import { NextResponse } from "next/server";

const GITHUB_USERNAME = "BowangLan";

interface GitHubContribution {
  date: string;
  count: number;
  level: number;
}

export async function GET() {
  try {
    // Using GitHub's GraphQL API to fetch contribution data
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN || ""}`,
      },
      body: JSON.stringify({
        query: `
          query($userName:String!) {
            user(login: $userName) {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                      contributionLevel
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          userName: GITHUB_USERNAME,
        },
      }),
      next: {
        revalidate: 3600, // Cache for 1 hour
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub data");
    }

    const data = await response.json();

    if (data.errors) {
      console.error("GitHub API errors:", data.errors);
      throw new Error("GitHub API returned errors");
    }

    const calendar = data.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      throw new Error("No contribution data found");
    }

    // Transform the data to match our component's expected format
    const weeks = calendar.weeks.map((week: any) => ({
      days: week.contributionDays.map((day: any) => ({
        date: day.date,
        count: day.contributionCount,
        level: getLevelFromContributionLevel(day.contributionLevel),
      })),
    }));

    return NextResponse.json({
      weeks,
      totalContributions: calendar.totalContributions,
    });
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);

    // Return fallback data if API fails
    return NextResponse.json(
      {
        weeks: [],
        totalContributions: 0,
        error: "Failed to fetch contribution data",
      },
      { status: 500 }
    );
  }
}

function getLevelFromContributionLevel(level: string): number {
  switch (level) {
    case "NONE":
      return 0;
    case "FIRST_QUARTILE":
      return 1;
    case "SECOND_QUARTILE":
      return 2;
    case "THIRD_QUARTILE":
      return 3;
    case "FOURTH_QUARTILE":
      return 4;
    default:
      return 0;
  }
}
