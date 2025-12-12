import { DateRange } from "@/components/ui/DateRange";

interface ExperienceTimelineSectionProps {
  experiences: Experience[];
}

export function ExperienceTimelineSection({
  experiences,
}: ExperienceTimelineSectionProps) {
  if (!experiences?.length) {
    return null;
  }

  return (
    <section className="pb-24">
      <div className="w-full rounded-[32px] px-6 py-10 sm:px-10 sm:py-14">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-neutral-400">
            Timeline
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Experience
          </h2>
          <p className="max-w-3xl text-sm text-neutral-400">
            Highlights from the products, teams, and missions that have shaped
            how I build. Each stop is a chapter focused on impact, momentum, and
            thoughtful execution.
          </p>
        </div>

        <div className="relative mt-10">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-white/60 via-white/20 to-transparent md:block" />
          <div className="space-y-6">
            {experiences.map((experience) => (
              <article
                key={experience.slug}
                className="group relative rounded-3xl bg-white/[0.02] p-6 pl-6 transition sm:p-8 sm:pl-16"
              >
                <span className="absolute left-3 top-10 flex h-3 w-3 items-center justify-center rounded-full bg-white text-transparent md:left-5">
                  ●
                </span>
                <div className="flex flex-col gap-3 text-neutral-300">
                  <DateRange
                    dateRange={experience.dateRange}
                    className="text-xs uppercase tracking-[0.3em] text-neutral-400"
                  />
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-200">
                      {experience.title}
                    </p>
                    <h3 className="text-2xl font-semibold text-white">
                      {experience.organization}
                    </h3>
                  </div>
                  {experience.description && (
                    <p className="text-base leading-relaxed text-neutral-300">
                      {experience.description}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
