import { SocialMedia } from "@/components/SocialMedia";
import { ExternalLink } from "./Link";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/constants";
import { GitHubContributionsSection } from "./home/GitHubContributionsSection";

const HERO_TEXT_1 = `

<p>
I'm a software engineer based in <span class='font-medium text-zinc-100'>Seattle, WA</span> building modern full-stack web & mobile applications. 
</p>
<p>I enjoy crafting clean interfaces, reliable systems, and the small details that make software feel well-made, while also focusing on using up-to-date technologies and best practices</p>
</p>

`.trim();

const HERO_SUBTEXT = "Full-Stack Developer, New Grad";

const LOCATION = "Seattle, WA, USA";

export function HomeHero() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-8 sm:py-20">
      <div className="flex flex-col gap-8">
        <div>
          <div className="flex items-center gap-2 justify-between">
            <h1 className="text-2xl font-normal tracking-tight text-zinc-50 sm:text-2xl md:text-3xl">
              Jeffrey Lan
            </h1>
          </div>

          <div className="flex items-center gap-2 font-normal mt-2">
            <span className="text-neutral-400 text-base md:text-lg">
              {HERO_SUBTEXT}
            </span>
          </div>
        </div>

        <div
          className="flex flex-col gap-4 text-base leading-relaxed text-neutral-300 sm:text-lg"
          dangerouslySetInnerHTML={{ __html: HERO_TEXT_1 }}
        ></div>

        <div>
          <div className="flex items-center gap-6 sm:gap-8">
            {/* GitHub */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="group/external-link text-neutral-400 hover:text-neutral-100 pb-1 hover:scale-105 text-base trans inline-flex items-center gap-2 border-b border-transparent hover:border-neutral-100"
            >
              <FaGithub size={18} className="trans" />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="group/external-link text-neutral-400 hover:text-neutral-100 pb-1 hover:scale-105 text-base trans inline-flex items-center gap-2 border-b border-transparent hover:border-neutral-100"
            >
              <FaLinkedinIn size={18} className="trans" />
              LinkedIn
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

        <GitHubContributionsSection />
      </div>
    </section>
  );
}
