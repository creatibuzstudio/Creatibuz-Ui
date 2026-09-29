"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { leftAiFeatures, rightAiFeatures } from "@/data/ai-features.data";
import { AiFeatureCard } from "./ai-powered-design/ai-feature-card";
import { AiCenterHub } from "./ai-powered-design/ai-center-hub";
import { AiCircuitOverlay } from "./ai-powered-design/ai-circuit-overlay";

export function AiPoweredDesignSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hubRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [paths, setPaths] = useState<string[]>([]);
  const [junctions, setJunctions] = useState<{
    left: { x: number; y: number };
    right: { x: number; y: number };
  } | null>(null);

  const updatePaths = useCallback(() => {
    if (!containerRef.current || !hubRef.current) return;
    const cRect = containerRef.current.getBoundingClientRect();
    const hRect = hubRef.current.getBoundingClientRect();

    const hubLeft = hRect.left - cRect.left;
    const hubRight = hRect.right - cRect.left;

    const points = cardRefs.current.map((card, i) => {
      if (!card) return null;
      const rect = card.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2 - cRect.top;
      const edgeX = i < 3 ? rect.right - cRect.left : rect.left - cRect.left;
      return { x: edgeX, y: centerY };
    });

    if (points.some((p) => p === null)) return;

    const midLeftY = points[1]!.y;
    const midRightY = points[4]!.y;
    const junctionLeftX = (hubLeft + points[1]!.x) / 2;
    const junctionRightX = (hubRight + points[4]!.x) / 2;

    setJunctions({
      left: { x: junctionLeftX, y: midLeftY },
      right: { x: junctionRightX, y: midRightY },
    });

    const r = 16;
    const newPaths: string[] = [
      `M ${hubLeft} ${midLeftY} L ${junctionLeftX} ${midLeftY} L ${junctionLeftX} ${points[0]!.y + r} Q ${junctionLeftX} ${points[0]!.y} ${junctionLeftX - r} ${points[0]!.y} L ${points[0]!.x} ${points[0]!.y}`,
      `M ${hubLeft} ${midLeftY} L ${points[1]!.x} ${midLeftY}`,
      `M ${hubLeft} ${midLeftY} L ${junctionLeftX} ${midLeftY} L ${junctionLeftX} ${points[2]!.y - r} Q ${junctionLeftX} ${points[2]!.y} ${junctionLeftX - r} ${points[2]!.y} L ${points[2]!.x} ${points[2]!.y}`,
      `M ${hubRight} ${midRightY} L ${junctionRightX} ${midRightY} L ${junctionRightX} ${points[3]!.y + r} Q ${junctionRightX} ${points[3]!.y} ${junctionRightX + r} ${points[3]!.y} L ${points[3]!.x} ${points[3]!.y}`,
      `M ${hubRight} ${midRightY} L ${points[4]!.x} ${midRightY}`,
      `M ${hubRight} ${midRightY} L ${junctionRightX} ${midRightY} L ${junctionRightX} ${points[5]!.y - r} Q ${junctionRightX} ${points[5]!.y} ${junctionRightX + r} ${points[5]!.y} L ${points[5]!.x} ${points[5]!.y}`,
    ];

    setPaths(newPaths);
  }, []);

  useEffect(() => {
    updatePaths();
    window.addEventListener("resize", updatePaths);
    const ro = new ResizeObserver(updatePaths);
    if (containerRef.current) ro.observe(containerRef.current);

    const t1 = setTimeout(updatePaths, 300);
    const t2 = setTimeout(updatePaths, 1000);

    return () => {
      window.removeEventListener("resize", updatePaths);
      ro.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [updatePaths]);

  return (
    <div id="ai-section" className="w-full flex flex-col items-center">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14 md:mb-20">
        <span className="text-primary text-base md:text-xl mb-3 font-mono">
          [ AI Powered Design ]
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-header-text tracking-tight leading-[1.15] text-center">
          Smarter Design,{" "}
          <span className="italic font-normal text-foreground">
            Supercharged by AI.
          </span>
        </h2>
        <p className="text-primary-text text-sm md:text-base text-center max-w-xl mx-auto mt-4 font-sans leading-relaxed">
          From wireframes to launch, we blend AI tools with strategy to deliver
          faster, sharper, and data-led design results.
        </p>
      </div>

      {/* Relative Canvas Area */}
      <div ref={containerRef} className="relative w-full max-w-6xl mx-auto">
        <AiCircuitOverlay paths={paths} junctions={junctions} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center">
          {/* Left Column: 3 Cards */}
          <div className="lg:col-span-4 flex flex-col gap-5 sm:gap-6 z-20">
            {leftAiFeatures.map((card, idx) => (
              <AiFeatureCard
                key={card.id}
                card={card}
                setRef={(el) => {
                  cardRefs.current[idx] = el;
                }}
              />
            ))}
          </div>

          {/* Center Column: Central Hub */}
          <AiCenterHub hubRef={hubRef} />

          {/* Right Column: 3 Cards */}
          <div className="lg:col-span-4 flex flex-col gap-5 sm:gap-6 z-20">
            {rightAiFeatures.map((card, idx) => (
              <AiFeatureCard
                key={card.id}
                card={card}
                setRef={(el) => {
                  cardRefs.current[idx + 3] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiPoweredDesignSection;
