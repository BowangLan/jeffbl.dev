import { SocialMedia } from "@/components/SocialMedia";
import { ExternalLink } from "./Link";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/constants";

const HERO_TEXT_1 =
  "I'm a University New Grad from UW. I've been coding for the past 6 years. Nowadays, I built user-centric software to solve real-world problems.";

export function HomeHero() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-8 sm:py-20">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-2 justify-between">
          <h1 className="text-2xl font-normal tracking-tight text-white sm:text-2xl md:text-3xl">
            Jeffrey Lan
          </h1>
        </div>

        <div className="flex flex-col gap-4 text-base leading-relaxed text-neutral-200 sm:text-lg sm:leading-">
          <p>{HERO_TEXT_1}</p>
        </div>

        <div>
          <div className="flex items-center gap-6">
            {/* GitHub */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="group/external-link hover:scale-110 hover:rotate-12 trans inline-flex items-center"
            >
              <FaGithub
                size={24}
                className="text-neutral-100 group-hover/external-link:text-neutral-100 trans"
              />
            </a>

            {/* LinkedIn */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="group/external-link hover:scale-110 hover:rotate-12 trans inline-flex items-center"
            >
              <FaLinkedinIn
                size={24}
                className="text-neutral-100 group-hover/external-link:text-neutral-100 trans"
              />
            </a>

            {/* resume */}
            {/* <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="group/external-link hover:scale-110 hover:rotate-12 trans inline-flex items-center"
            >
              <FaFilePdf
                size={24}
                className="text-neutral-100 group-hover/external-link:text-neutral-100 trans"
              />
              <span>Resume</span>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
