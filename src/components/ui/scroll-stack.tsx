"use client";

import React, { useRef } from "react";
import { ScrollStackItem } from "./scroll-stack/scroll-stack-item";
import { useScrollStack } from "./scroll-stack/use-scroll-stack";
import type { ScrollStackProps } from "./scroll-stack/scroll-stack.types";

export { ScrollStackItem } from "./scroll-stack/scroll-stack-item";
export type { ScrollStackProps, ScrollStackItemProps } from "./scroll-stack/scroll-stack.types";

export function ScrollStack({
  children,
  className = "",
  innerClassName = "",
  itemDistance = 750,
  itemScale = 0.05,
  itemStackDistance = 22,
  stackPosition = "70px",
  useWindowScroll = true,
  bottomOffset = 60,
  onStackComplete,
}: ScrollStackProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useScrollStack({
    scrollerRef,
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    useWindowScroll,
    bottomOffset,
    onStackComplete,
  });

  return (
    <div
      ref={scrollerRef}
      className={`relative w-full ${
        useWindowScroll ? "overflow-visible h-auto" : "h-full overflow-y-auto"
      } overflow-x-visible ${className}`.trim()}
      style={{
        overscrollBehavior: "contain",
        WebkitOverflowScrolling: "touch",
        scrollBehavior: "smooth",
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
        willChange: "scroll-position",
      }}
    >
      <div className={`scroll-stack-inner pt-0 px-0 ${innerClassName}`.trim()}>
        {children}
        <div className="scroll-stack-end w-full h-px pointer-events-none" />
      </div>
    </div>
  );
}

export default ScrollStack;
