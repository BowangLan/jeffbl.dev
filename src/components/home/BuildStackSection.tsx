import { SectionTitle } from "@/components/ui/title";
import { TeckStackIcons } from "@/components/TechStack";

type IconKey = keyof typeof TeckStackIcons;

const BUILD_STACK = [
  {
    label: "Framework",
    items: [
      { name: "Next.js", icon: "nextjs" as IconKey },
      { name: "TanStack Start", icon: "tanstackstart" as IconKey },
      { name: "Electron", icon: "electron" as IconKey },
      { name: "React Native", icon: "reactnative" as IconKey },
      { name: "Expo", icon: "expo" as IconKey },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "Convex", icon: "convex" as IconKey },
      { name: "PostgreSQL", icon: "postgresql" as IconKey },
      { name: "Redis", icon: "redis" as IconKey },
    ],
  },
  {
    label: "Deployment",
    items: [
      { name: "Vercel", icon: "vercel" as IconKey },
      { name: "Railway", icon: "railway" as IconKey },
    ],
  },
];

export function BuildStackSection() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 sm:px-8">
      <div>
        <SectionTitle>Build Stack</SectionTitle>

        <p className="text-sm leading-relaxed text-neutral-100">
          When building things, here&apos;s what I like to use.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BUILD_STACK.map((group) => (
            <div key={group.label} className="space-y-4">
              <h3 className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                {group.label}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {group.items.map((item) => {
                  const Icon = TeckStackIcons[item.icon];
                  return (
                    <div
                      key={item.name}
                      className="group flex flex-col items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 pt-5 pb-4 transition-all hover:border-white/20 hover:bg-white/10"
                    >
                      <Icon
                        size={32}
                        className="shrink-0 brightness-0 invert opacity-80 transition-opacity group-hover:opacity-100"
                      />
                      <span className="text-center text-xs text-neutral-300">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
