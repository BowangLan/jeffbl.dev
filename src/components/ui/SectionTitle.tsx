import { cn } from "@/lib/utils";

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex items-center justify-between py-4 mb-6 sm:mb-8 relative">
      <h2
        className={cn(
          "text-xl font-normal text-neutral-100 motion-preset-blur-right-sm",
          className
        )}
      >
        {children}
      </h2>

      {/* <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-neutral-700 to-neutral-700/50" /> */}
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{
          borderBottom: "2px dashed var(--color-neutral-700)",
        }}
      />
    </div>
  );
}
