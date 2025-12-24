import Link from "next/link";
import { navItems } from "@/constants";

export function HomeNavigation() {
  return (
    <header className="mx-auto w-full max-w-4xl px-6 pt-8 sm:px-8 sm:pt-12">
      <nav>
        <ul className="flex items-center gap-6 text-sm font-light text-neutral-400">
          {navItems.map((link) => (
            <li key={link.text}>
              <Link href={link.href} className="transition hover:text-white">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
