"use client";

import React from "react";
import { motion } from "framer-motion";
import { GridSpark } from "@/components/ui/section-container";

interface AiCircuitOverlayProps {
  paths: string[];
  junctions: {
    left: { x: number; y: number };
    right: { x: number; y: number };
  } | null;
}

export function AiCircuitOverlay({ paths, junctions }: AiCircuitOverlayProps) {
  return (
    <>
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden lg:block overflow-visible">
        {/* Base Circuit Connector Lines */}
        {paths.map((p, idx) => (
          <path
            key={`base-${idx}`}
            d={p}
            fill="none"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="1.5"
          />
        ))}

        {/* Smooth Traveling Primary Color Light Beams from Logo to Cards */}
        {paths.map((p, idx) => {
          const isMiddle = idx === 1 || idx === 4;
          return (
            <motion.path
              key={`pulse-${idx}`}
              d={p}
              fill="none"
              stroke="#FE5A00"
              strokeWidth="2.2"
              strokeLinecap="round"
              initial={{ pathLength: 0.08, pathOffset: 0, opacity: 0 }}
              animate={{
                pathLength: isMiddle
                  ? [0.08, 0.35, 0.35, 0.08]
                  : [0.08, 0.22, 0.22, 0.08],
                pathOffset: [0, 0.12, 0.9, 1],
                opacity: [0, 0.95, 0.95, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.15, 0.92, 1],
                repeatDelay: 0.6,
              }}
            />
          );
        })}
      </svg>

      {/* Branch Junction Diamond Sparks */}
      {junctions && (
        <div className="hidden lg:block pointer-events-none">
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
            style={{ left: junctions.left.x, top: junctions.left.y }}
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                filter: [
                  "drop-shadow(0 0 2px rgba(248,88,0,0.4))",
                  "drop-shadow(0 0 12px rgba(248,88,0,1))",
                  "drop-shadow(0 0 2px rgba(248,88,0,0.4))",
                ],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.45, 0.9],
                repeatDelay: 0.6,
              }}
            >
              <GridSpark className="w-4 h-4 text-primary" />
            </motion.div>
          </div>

          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
            style={{ left: junctions.right.x, top: junctions.right.y }}
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                filter: [
                  "drop-shadow(0 0 2px rgba(248,88,0,0.4))",
                  "drop-shadow(0 0 12px rgba(248,88,0,1))",
                  "drop-shadow(0 0 2px rgba(248,88,0,0.4))",
                ],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.45, 0.9],
                repeatDelay: 0.6,
              }}
            >
              <GridSpark className="w-4 h-4 text-primary" />
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}

export default AiCircuitOverlay;
