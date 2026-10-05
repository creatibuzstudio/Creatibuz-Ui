"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface AiCenterHubProps {
  hubRef: React.RefObject<HTMLDivElement | null>;
}

export function AiCenterHub({ hubRef }: AiCenterHubProps) {
  return (
    <div className="hidden lg:col-span-4 lg:flex items-center justify-center py-8 lg:py-0 z-30">
      <div ref={hubRef} className="relative flex items-center justify-center">
        {/* Outward Expanding Energy Ripple Ring */}
        <motion.div
          animate={{
            scale: [0.95, 1.45],
            opacity: [0.75, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeOut",
            repeatDelay: 1.2,
          }}
          className="absolute inset-0 rounded-full border border-primary pointer-events-none"
        />

        {/* Soft Outer Ambient Glow */}
        <div className="absolute inset-0 rounded-full bg-primary/25 blur-3xl pointer-events-none scale-150" />

        {/* Central Orb with Creatibuz Symbol */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 45px rgba(248,88,0,0.55)",
              "0 0 85px rgba(248,88,0,0.85)",
              "0 0 45px rgba(248,88,0,0.55)",
            ],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-[150px] h-[150px] rounded-full bg-primary flex items-center justify-center shadow-[0_0_60px_rgba(248,88,0,0.55)] cursor-pointer select-none"
        >
          <Image
            src="/creatibuz-symbol.png"
            alt="Creatibuz Studio"
            width={100}
            height={100}
            className="w-[130px] h-[130px] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}

export default AiCenterHub;
