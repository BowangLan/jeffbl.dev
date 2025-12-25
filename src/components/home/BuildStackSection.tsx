import { SectionTitle } from "@/components/ui/title";

const BUILD_STACK = [
  {
    label: "Framework",
    items: ["Next.js", "TanStack Start", "Electron", "React Native", "Expo"],
  },
  {
    label: "Database",
    items: ["Convex", "PostgreSQL", "Redis"],
  },
  {
    label: "Deployment",
    items: ["Vercel", "Railway"],
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

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {BUILD_STACK.map((group) => (
            <div
              key={group.label}
              className="rounded-lg border border-white/10 bg-white/5 p-4"
            >
              <h3 className="text-sm font-medium text-neutral-200">
                {group.label}
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                {group.items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
