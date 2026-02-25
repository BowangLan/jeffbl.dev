"use client";

import { TooltipProvider } from "@/components/ui/tooltip";

export function GlobalProviders({ children }: { children: React.ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
