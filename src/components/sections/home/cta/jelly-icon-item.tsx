"use client";

import Image from "next/image";
import { motion, MotionValue, useSpring, useTransform } from "framer-motion";
import { FloatingIconConfig } from "@/data/orbit-icons.data";

interface JellyIconItemProps {
  icon: FloatingIconConfig;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function JellyIconItem({ icon, mouseX, mouseY }: JellyIconItemProps) {
  // Proximity-based calculation: ONLY moves when cursor is near this specific icon/area
  const rawX = useTransform([mouseX, mouseY], (values: number[]) => {
    const [mx = 99999, my = 99999] = values;
    if (mx > 50000) return 0;

    const dx = mx - icon.xOffset;
    const dy = my - icon.yOffset;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const PROXIMITY_RADIUS = 270;

    if (dist < PROXIMITY_RADIUS) {
      const ratio = 1 - dist / PROXIMITY_RADIUS;
      const smoothFactor = Math.sin((ratio * Math.PI) / 2);
      const maxDisplacement = 28 * icon.jellyFactor;
      const angle = Math.atan2(dy, dx);
      return Math.cos(angle) * smoothFactor * maxDisplacement;
    }

    return 0;
  });

  const rawY = useTransform([mouseX, mouseY], (values: number[]) => {
    const [mx = 99999, my = 99999] = values;
    if (mx > 50000) return 0;

    const dx = mx - icon.xOffset;
    const dy = my - icon.yOffset;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const PROXIMITY_RADIUS = 270;

    if (dist < PROXIMITY_RADIUS) {
      const ratio = 1 - dist / PROXIMITY_RADIUS;
      const smoothFactor = Math.sin((ratio * Math.PI) / 2);
      const maxDisplacement = 28 * icon.jellyFactor;
      const angle = Math.atan2(dy, dx);
      return Math.sin(angle) * smoothFactor * maxDisplacement;
    }

    return 0;
  });

  // Elastic jelly spring physics
  const springConfig = { damping: 11, stiffness: 160, mass: 0.65 };
  const springX = useSpring(rawX, springConfig);
  const springY = useSpring(rawY, springConfig);

  // Subtle organic tilt as it stretches
  const rotateSpring = useTransform(springX, [-30, 30], [-8, 8]);

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 pointer-events-auto select-none"
      style={{
        x: springX,
        y: springY,
        rotate: rotateSpring,
        translateX: `calc(-50% + ${icon.xOffset}px)`,
        translateY: `calc(-50% + ${icon.yOffset}px)`,
      }}
      whileHover={{ scale: 1.18 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 350, damping: 14 }}
    >
      <Image
        src={icon.src}
        alt={icon.name}
        width={icon.size || 50}
        height={icon.size || 50}
        className="w-full h-full object-contain pointer-events-none select-none"
      />
    </motion.div>
  );
}
