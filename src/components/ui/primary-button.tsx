"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PrimaryButtonProps {
  /** Button text label */
  text?: string;
  /** Custom children (alternative to text) */
  children?: React.ReactNode;
  /** Optional link destination. If provided, renders as Next.js Link */
  href?: string;
  /** Optional click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  /** Additional classes applied to the core button / link element */
  className?: string;
  /** Additional classes applied to the outer motion wrapper */
  containerClassName?: string;
  /** Show or hide the circular rotated arrow (default: true) */
  showArrow?: boolean;
  /** Optional target for links */
  target?: string;
  /** Optional rel attribute */
  rel?: string;
  /** Button HTML type when rendered as button */
  type?: "button" | "submit" | "reset";
  /** Disabled state */
  disabled?: boolean;
}

/**
 * Reusable PrimaryButton component matching the signature Hero CTA style:
 * - Radiant primary orange glow effect
 * - Smooth spring scale on hover & tap
 * - White circular arrow badge with 45deg rotate transition
 */
export function PrimaryButton({
  text,
  children,
  href,
  onClick,
  className,
  containerClassName,
  showArrow = true,
  target,
  rel,
  type = "button",
  disabled = false,
}: PrimaryButtonProps) {
  const content = (
    <>
      <span className="tracking-tight">{text || children}</span>
      {showArrow && (
        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-primary shrink-0 shadow-sm group-hover:rotate-45 transition-transform duration-300">
          <ArrowUpRight className="w-4 h-4 sm:w-8 sm:h-8 stroke-2" />
        </div>
      )}
    </>
  );

  const baseButtonClasses = cn(
    "relative z-10 inline-flex items-center gap-5 bg-primary hover:bg-[#ff6814] text-white pl-6 sm:pl-8 pr-2 sm:pr-2.5 py-2 sm:py-2 rounded-full font-medium text-[15px] sm:text-[20px] shadow-[0_0_30px_rgba(248,88,0,0.35)] transition-all duration-300 font-display cursor-pointer",
    disabled && "opacity-60 cursor-not-allowed pointer-events-none",
    className
  );

  return (
    <motion.div
      whileHover={disabled ? undefined : { scale: 1.04 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "relative group inline-flex items-center justify-center",
        containerClassName
      )}
    >
      {/* Orange Ambient Glow */}
      <div className="absolute -inset-3 sm:-inset-4 bg-primary/50 rounded-full blur-2xl group-hover:bg-primary/75 group-hover:blur-3xl transition-all duration-500 pointer-events-none" />

      {href ? (
        <Link
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          className={baseButtonClasses}
        >
          {content}
        </Link>
      ) : (
        <button
          type={type}
          disabled={disabled}
          onClick={onClick}
          className={baseButtonClasses}
        >
          {content}
        </button>
      )}
    </motion.div>
  );
}

export default PrimaryButton;
