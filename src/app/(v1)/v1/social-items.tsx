import Link from "next/link";
import { GithubIcon } from "@/components/ui/github-icon";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";
import { XIcon } from "@/components/ui/x-icon";
import { GITHUB_URL, LINKEDIN_URL, X_URL } from "@/constants";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { motion } from "motion/react";

interface SocialItemProps {
  index: number;
  icon: React.ReactNode;
  url: string;
  name: string;
  tooltip: string;
}

function SocialItem({ index, icon, url, name, tooltip }: SocialItemProps) {

  return (
    <motion.div
      initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)", transition: { ease: [0.215, 0.61, 0.355, 1.0] as const, type: "tween" as const, duration: 0.5, delay: 0.3 * index } }}
      exit={{ opacity: 0, x: 20, filter: "blur(6px)", transition: { ease: [0.215, 0.61, 0.355, 1.0] as const, type: "tween" as const, duration: 0.5 } }}
    >
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Link
            href={url}
            className="group/social-item inline-flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            {icon}
            <span className="text-sm font-medium sr-only">{name}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="bg-neutral-900 border border-neutral-700 text-neutral-100">
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
}

const ICON_SIZE = 24;

const socialItems = [
  {
    icon: <GithubIcon size={ICON_SIZE} />,
    url: GITHUB_URL,
    name: "GitHub",
    tooltip: "View my GitHub profile",
  },
  {
    icon: <LinkedinIcon size={ICON_SIZE} />,
    url: LINKEDIN_URL,
    name: "LinkedIn",
    tooltip: "View my LinkedIn profile",
  },
  {
    icon: <XIcon size={ICON_SIZE} />,
    url: X_URL,
    name: "X",
    tooltip: "View my X profile",
  },
];

export function SocialItems({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("flex flex-row items-center gap-4", className)}>
      {socialItems.map((item, index) => (
        <SocialItem key={item.name} index={index} icon={item.icon} url={item.url} name={item.name} tooltip={item.tooltip} />
      ))}
    </div>
  );
}