import { SectionTitle } from "@/components/ui/title";
import { HOME_PAGE_EXPERIENCES } from "@/constants/my-data";
import { formatDate } from "@/lib/utils";

function formatDateString(date: string) {
  if (!date) return "";
  // turn "2025-04-01" into "Apr 2025"
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export function ExperienceTimelineSection() {
  const experiences = HOME_PAGE_EXPERIENCES;

  return (
    <section className="mx-auto w-full max-w-4xl px-6 sm:px-8">
      <div>
        <SectionTitle className="text-lg sm:text-xl">Experiences</SectionTitle>

        <div className="space-y-10 sm:pl-[27%]">
          {experiences.map((experience) => (
            <article key={experience.slug} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <div className="flex sm:items-baseline flex-col sm:flex-row gap-3">
                  <h3 className="text-base/tight font-normal text-neutral-100">
                    {experience.organization}
                  </h3>
                  {/* <div className="flex-1"></div>
                  <p className="text-sm text-neutral-500">
                    {experience.location}
                  </p> */}
                  <p className="text-sm/tight text-neutral-500">
                    {formatDateString(experience.dateRange.start)} -{" "}
                    {experience.dateRange.ongoing
                      ? "Present"
                      : formatDateString(experience.dateRange.end ?? "")}
                  </p>
                </div>
                <p className="text-sm text-neutral-500">{experience.title}</p>
              </div>

              {experience.shortDescription && (
                <p className="text-sm leading-relaxed text-neutral-400 max-w-prose">
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
