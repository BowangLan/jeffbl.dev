import { SectionTitle } from "@/components/ui/SectionTitle";
import { ExternalLink } from "../Link";
import { EMAIL_1_URL, EMAIL_2_URL, LINKEDIN_URL } from "@/constants";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

export function ConnectSection() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 sm:px-8">
      <div>
        <SectionTitle>Connect</SectionTitle>

        <p>
          You can reach me at{" "}
          <ExternalLink href={`mailto:${EMAIL_1_URL}`} inline>
            {/* <AiFillMail className="mr-1 size-3 text-neutral-500 group-hover/external-link:text-neutral-100 trans" /> */}
            {EMAIL_1_URL}
          </ExternalLink>{" "}
          or{" "}
          <ExternalLink href={`mailto:${EMAIL_2_URL}`} inline>
            {EMAIL_2_URL}
          </ExternalLink>
          , or connect with me on{" "}
          <ExternalLink href={LINKEDIN_URL} inline>
            {/* <FaLinkedinIn className="mr-1 size-3 text-neutral-500 group-hover/external-link:text-neutral-100 trans" /> */}
            LinkedIn
          </ExternalLink>
        </p>
      </div>
    </section>
  );
}
