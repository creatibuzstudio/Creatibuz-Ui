import React from "react";
import { GridSpark } from "@/components/ui/section-container";

export function FooterBoundarySparks() {
  return (
    <div className="relative z-20 mx-auto h-0 w-full max-w-7xl">
      <div className="absolute left-1/2 top-0 h-px w-screen -translate-x-1/2 bg-white/[0.12]" />
      <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
        <GridSpark className="h-5 w-5 text-primary-text sm:h-6 sm:w-6" />
      </div>
      <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2">
        <GridSpark className="h-5 w-5 text-primary-text sm:h-6 sm:w-6" />
      </div>
    </div>
  );
}
