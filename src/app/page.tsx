import DefaultLayout from "@/components/layout/DefaultLayout";
import { FeaturedProjectsSection } from "@/components/FeaturedProjectsSection";
import { ExperienceTimelineSection } from "@/components/ExperienceTimelineSection";
import { HomeNavigation } from "@/components/HomeNavigation";
import { HomeHero } from "@/components/HomeHero";
import { HOME_PAGE_PROJECTS, HOME_PAGE_EXPERIENCES } from "@/constants/my-data";
import { ConnectSection } from "@/components/home/ConnectSection";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="relative flex min-h-screen flex-col -mx-4 text-[15px] sm:text-base md:-mx-8">
        <HomeNavigation />

        <HomeHero />

        <div className="space-y-16 pb-16 sm:space-y-20 sm:pb-20">
          <FeaturedProjectsSection />

          <ExperienceTimelineSection />

          <ConnectSection />
        </div>
      </div>
    </DefaultLayout>
  );
}
