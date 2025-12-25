"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { SocialMedia } from "./SocialMedia";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className="relative z-10 w-full pt-10 pb-12"
      style={{
        display: pathname === "/admin" ? "none" : "block",
      }}
    >
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <div className="flex flex-col gap-6 border-t border-neutral-700 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-neutral-400">
            &copy; {new Date().getFullYear()} Jeffrey Lan
          </span>
          {/* <SocialMedia size="sm" /> */}
        </div>
      </div>
    </footer>
  );
}
