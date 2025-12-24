import { cn } from "@/lib/utils";
import { PiArrowUpRightBold } from "react-icons/pi";

export function ExternalLink({
  href,
  children,
  className,
  inline = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  inline?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group/external-link inline-flex tracking-tight items-center underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-100 trans",
        inline && "inline-flex items-center",
        className
      )}
    >
      {children}
      <PiArrowUpRightBold
        className={cn(
          "size-4 text-neutral-500 group-hover/external-link:text-neutral-100 trans",
          inline
            ? "size-2.5 translate-y-px ml-0 group-hover/external-link:ml-1 w-0 group-hover/external-link:w-4 trans group-hover/external-link:rotate-45"
            : "ml-2 size-4 group-hover/external-link:translate-x-0.5 group-hover/external-link:rotate-45 group-hover/external-link:size-4.5 trans"
        )}
      />
    </a>
  );
}
