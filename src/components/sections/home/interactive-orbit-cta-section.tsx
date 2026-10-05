"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { JELLY_ICONS } from "@/data/orbit-icons.data";
import { JellyIconItem } from "./cta/jelly-icon-item";

// =========================================================================
// ⚙️ CUSTOM EDIT: Orbit Dashed Border Size & Gap
// Dash length (dash size) and Gap size (gap between dashes) change korte
// nicher variable gulo edit korun (pixels):
// =========================================================================
export const ORBIT_DASH_SIZE = 12; // Length of each dash line (default: 12px)
export const ORBIT_DASH_GAP = 10;  // Gap between dash lines (default: 10px)

export function InteractiveOrbitCtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values track cursor pixel coordinates relative to center (0, 0)
  // Default to 99999 so icons rest calmly when cursor is outside
  const mouseX = useMotionValue(99999);
  const mouseY = useMotionValue(99999);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(99999);
    mouseY.set(99999);
  };

  return (
    <SectionContainer
      id="cta"
      showTopBorder={false}
      showBottomBorder={false}
      crossMarkers={false}
      className="!p-0 !py-0 !px-0 w-full"
      containerClassName="relative w-full overflow-hidden bg-black"
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-[520px] sm:h-[580px] md:h-[640px] bg-black flex items-center justify-center overflow-hidden cursor-default"
      >
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <Image
            src="/cta-bg.png"
            alt="CTA Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Static Concentric Dashed Orbit Rings */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          style={{
            overflow: "hidden",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          {/* Inner Ring (700px diameter) */}
          <svg
            className="absolute pointer-events-none"
            style={{ width: "700px", height: "700px" }}
            viewBox="0 0 700 700"
          >
            <circle
              cx="350"
              cy="350"
              r="349"
              fill="none"
              stroke="rgba(255, 255, 255, 0.14)"
              strokeWidth="1"
              strokeDasharray={`${ORBIT_DASH_SIZE} ${ORBIT_DASH_GAP}`}
            />
          </svg>
          {/* Middle Ring (900px diameter) */}
          <svg
            className="absolute pointer-events-none"
            style={{ width: "900px", height: "900px" }}
            viewBox="0 0 900 900"
          >
            <circle
              cx="450"
              cy="450"
              r="449"
              fill="none"
              stroke="rgba(255, 255, 255, 0.14)"
              strokeWidth="1"
              strokeDasharray={`${ORBIT_DASH_SIZE} ${ORBIT_DASH_GAP}`}
            />
          </svg>
          {/* Outer Ring (1100px diameter) */}
          <svg
            className="absolute pointer-events-none"
            style={{ width: "1100px", height: "1100px" }}
            viewBox="0 0 1100 1100"
          >
            <circle
              cx="550"
              cy="550"
              r="549"
              fill="none"
              stroke="rgba(255, 255, 255, 0.14)"
              strokeWidth="1"
              strokeDasharray={`${ORBIT_DASH_SIZE} ${ORBIT_DASH_GAP}`}
            />
          </svg>

          {/* Jelly Floating Icons on Orbits */}
          <div className="absolute inset-0 pointer-events-none scale-[0.62] sm:scale-[0.80] md:scale-[0.92] lg:scale-100 origin-center">
            {JELLY_ICONS.map((icon) => (
              <JellyIconItem
                key={icon.name}
                icon={icon}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            ))}
          </div>
        </div>

        {/* Center Stationary CTA Content */}
        <div className="relative z-20 max-w-2xl mx-auto px-4 text-center pointer-events-auto flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold text-white text-3xl md:text-4xl lg:text-[42px] text-center leading-[1.18] tracking-tight max-w-3xl mx-auto"
          >
            Ready to build something
            <br className="hidden sm:inline" /> that actually converts?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-300/90 text-sm sm:text-base text-center max-w-lg mx-auto mt-4 leading-relaxed font-normal"
          >
            Stop waiting weeks for design feedback. Get your first draft in 48
            hours and launch your product before your competitors even finish
            planning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-5 rounded-full bg-white hover:bg-primary text-black hover:text-foreground font-display text-base md:text-lg px-6 pr-1.5 py-1.5 transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
            >
              <span>Request Free Audit</span>
              <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6 stroke-[2]" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
