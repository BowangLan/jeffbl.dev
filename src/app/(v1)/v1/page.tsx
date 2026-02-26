"use client";

import { V1Hero } from "./v1-hero";
import { FeaturedProjectsSectionV1 } from "./FeaturedProjectsSectionV1";
import { ExperienceTimelineSectionV1 } from "./ExperienceTimelineSectionV1";
import { GitHubContributionsSection } from "./GithubContributionV1";
import { useV1Store } from "./v1-state";

export default function V1() {
  const initStep = useV1Store((state) => state.initStep);

  if (initStep === 1) {
    return (
      <>
        <V1Hero />
      </>
    );
  }

  return (
    <>
      <V1Hero />
      <GitHubContributionsSection />
      <FeaturedProjectsSectionV1 />
      <ExperienceTimelineSectionV1 />
    </>
  );
}