"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import { PrimaryButton } from "@/components/ui/primary-button";
import { JELLY_ICONS } from "@/data/orbit-icons.data";
import { JellyIconItem } from "./cta/jelly-icon-item";
import { CAL_CONFIG } from "@/config/cal.config";

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
    <section id="cta" className="relative w-full overflow-hidden bg-black">
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

        {/* Center ambient glow for mobile depth */}
        <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_600px_400px_at_50%_50%,rgba(254,90,0,0.22)_0%,rgba(254,90,0,0.06)_50%,transparent_80%)]" />

        {/* Static Concentric Dashed Orbit Rings & Icons Container */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[1300px] flex items-center justify-center pointer-events-none z-10 scale-[0.38] sm:scale-[0.65] md:scale-[0.88] lg:scale-100 origin-center transition-transform duration-500">
          {/* Inner Ring (900px diameter) */}
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
              stroke="rgba(255, 255, 255, 0.22)"
              strokeWidth="1.5"
              strokeDasharray={`${ORBIT_DASH_SIZE} ${ORBIT_DASH_GAP}`}
            />
          </svg>
          {/* Middle Ring (1100px diameter) */}
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
              stroke="rgba(255, 255, 255, 0.18)"
              strokeWidth="1.5"
              strokeDasharray={`${ORBIT_DASH_SIZE} ${ORBIT_DASH_GAP}`}
            />
          </svg>
          {/* Outer Ring (1300px diameter) */}
          <svg
            className="absolute pointer-events-none"
            style={{ width: "1300px", height: "1300px" }}
            viewBox="0 0 1300 1300"
          >
            <circle
              cx="650"
              cy="650"
              r="649"
              fill="none"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="1.5"
              strokeDasharray={`${ORBIT_DASH_SIZE} ${ORBIT_DASH_GAP}`}
            />
          </svg>

          {/* Jelly Floating Icons on Orbits */}
          <div className="absolute inset-0 pointer-events-none">
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
        <div className="relative z-20 max-w-2xl mx-auto px-4 sm:px-6 text-center pointer-events-auto flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold text-white text-[24px] sm:text-3xl md:text-4xl lg:text-[42px] text-center leading-[1.2] sm:leading-[1.18] tracking-tight max-w-[500px] mx-auto text-balance"
          >
            Ready to build something{" "}
            <br className="hidden sm:inline" />that actually converts?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-300/90 text-[13px] sm:text-base text-center max-w-[450px] mx-auto mt-3 sm:mt-4 leading-relaxed font-normal text-balance"
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
            className="mt-6 sm:mt-8"
          >
            <PrimaryButton
              text="Request Free Audit"
              dataCalLink={CAL_CONFIG.calLink}
              variant="white"
              size="md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
