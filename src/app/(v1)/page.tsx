"use client";

import { V1Hero } from "./v1/v1-hero";
import { V1StickyHeader } from "./v1/v1-sticky-header";
import { AboutSectionV1 } from "./v1/AboutSectionV1";
import { FeaturedProjectsSectionV1 } from "./v1/FeaturedProjectsSectionV1";
import { ExperienceTimelineSectionV1 } from "./v1/ExperienceTimelineSectionV1";
import { GitHubContributionsSection } from "./v1/GithubContributionV1";
import { ConnectSectionV1, V1Footer } from "./v1/ConnectSectionV1";
import { useV1Store } from "./v1/v1-state";

export default function V1() {
  const initStep = useV1Store((state) => state.initStep);

  return (
    <>
      <V1StickyHeader />
      <V1Hero />
      {initStep === 2 && (
        <>
          <AboutSectionV1 />
          <FeaturedProjectsSectionV1 />
          <ExperienceTimelineSectionV1 />
          <GitHubContributionsSection />
          <ConnectSectionV1 />
          <V1Footer />
        </>
      )}
    </>
  );
}
