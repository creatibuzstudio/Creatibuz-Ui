"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { JELLY_ICONS } from "@/data/orbit-icons.data";
import { JellyIconItem } from "./cta/jelly-icon-item";

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
        {/* Atmospheric Glow Background */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse 68% 54% at 50% 50%, #FD5A00 0%, rgba(253, 90, 0, 0.8) 18%, rgba(215, 75, 0, 0.5) 38%, rgba(130, 42, 0, 0.22) 60%, rgba(40, 12, 0, 0.06) 80%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255, 120, 20, 0.22) 0%, transparent 45%)",
          }}
        />

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
          <div
            className="absolute rounded-full border border-dashed border-white/[0.12] pointer-events-none"
            style={{ width: "700px", height: "700px" }}
          />
          {/* Middle Ring (900px diameter) */}
          <div
            className="absolute rounded-full border border-dashed border-white/[0.12] pointer-events-none"
            style={{ width: "900px", height: "900px" }}
          />
          {/* Outer Ring (1100px diameter) */}
          <div
            className="absolute rounded-full border border-dashed border-white/[0.12] pointer-events-none"
            style={{ width: "1100px", height: "1100px" }}
          />

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
              className="group inline-flex items-center gap-5 rounded-full bg-white text-black font-semibold text-sm sm:text-base px-6 pr-1.5 py-1.5 hover:bg-zinc-100 transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
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
