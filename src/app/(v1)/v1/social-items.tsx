import Link from "next/link";
import { GithubIcon } from "@/components/ui/github-icon";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";
import { XIcon } from "@/components/ui/x-icon";
import { GITHUB_URL, LINKEDIN_URL, X_URL } from "@/constants";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { motion } from "motion/react";
import { V1_EASE } from "./v1-constants";

interface SocialItemProps {
  index: number;
  icon: React.ReactNode;
  url: string;
  name: string;
  tooltip: string;
  stagger: number;
}

function SocialItem({ index, icon, url, name, tooltip, stagger }: SocialItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
      animate={{
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { ease: V1_EASE, type: "tween", duration: 0.5, delay: stagger * index },
      }}
      exit={{
        opacity: 0,
        x: 20,
        filter: "blur(6px)",
        transition: { ease: V1_EASE, type: "tween", duration: 0.3 },
      }}
    >
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Link
            href={url}
            target="_blank"
            rel="noreferrer"
            className="group/social-item inline-flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            {icon}
            <span className="text-sm font-medium sr-only">{name}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="bg-neutral-900 border border-neutral-700 text-neutral-100"
        >
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
}

const getSocialItems = (iconSize: number) => [
  {
    icon: <GithubIcon size={iconSize} />,
    url: GITHUB_URL,
    name: "GitHub",
    tooltip: "View my GitHub profile",
  },
  {
    icon: <LinkedinIcon size={iconSize} />,
    url: LINKEDIN_URL,
    name: "LinkedIn",
    tooltip: "View my LinkedIn profile",
  },
  {
    icon: <XIcon size={iconSize} />,
    url: X_URL,
    name: "X",
    tooltip: "View my X profile",
  },
];

export function SocialItems({
  className,
  iconSize = 24,
  stagger = 0.3,
}: {
  className?: string;
  iconSize?: number;
  stagger?: number;
}) {
  return (
    <div className={cn("flex flex-row items-center gap-4", className)}>
      {getSocialItems(iconSize).map((item, index) => (
        <SocialItem
          key={item.name}
          index={index}
          icon={item.icon}
          url={item.url}
          name={item.name}
          tooltip={item.tooltip}
          stagger={stagger}
        />
      ))}
    </div>
  );
}
