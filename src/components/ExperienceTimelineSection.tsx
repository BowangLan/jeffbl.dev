import { SectionTitle } from "@/components/ui/SectionTitle";
import { HOME_PAGE_EXPERIENCES } from "@/constants/my-data";

export function ExperienceTimelineSection() {
  const experiences = HOME_PAGE_EXPERIENCES;

  return (
    <section className="mx-auto w-full max-w-4xl px-6 sm:px-8">
      <div>
        <SectionTitle className="text-lg sm:text-xl">Now</SectionTitle>

        <div className="space-y-10">
          {experiences.map((experience) => (
            <article key={experience.slug} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-normal text-white">
                  {experience.organization}
                </h3>
                <p className="text-sm text-neutral-500">{experience.title}</p>
              </div>

              {experience.shortDescription && (
                <p className="text-sm leading-relaxed text-neutral-400">
                  {experience.shortDescription}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
