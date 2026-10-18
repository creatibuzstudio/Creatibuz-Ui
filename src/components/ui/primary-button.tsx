"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type GlowLevel = "sm" | "md" | "lg" | "none";

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
  /** Size preset: sm (compact), md (standard section CTA), lg (signature hero CTA) */
  size?: "sm" | "md" | "lg";
  /** Visual variant: primary (brand orange), white (light badge), dark, outline */
  variant?: "primary" | "white" | "dark" | "outline";
  /**
   * Ambient glow spread & intensity:
   * - "lg": Signature Hero section glow (-inset-3 to -inset-4, blur-2xl/3xl)
   * - "md": Moderate section glow (-inset-2 to -inset-2.5, blur-xl/2xl)
   * - "sm": Subtle compact glow (-inset-1 to -inset-1.5, blur-lg/xl)
   * - "none" / false: Disable glow completely
   * - true / omitted: Auto-matches the button size (sm/md/lg)
   */
  glow?: GlowLevel | boolean;
  /** Optional custom class names applied directly to the glow div */
  glowClassName?: string;
  /** Optional left/prefix icon (e.g. Mail, Sparkles) */
  icon?: React.ReactNode;
  /** Optional custom right arrow replacement (e.g. loader/spinner) */
  customArrow?: React.ReactNode;
  /** Full width mode */
  fullWidth?: boolean;
  /** Horizontal padding in CSS units (for example, "24px" or "1.5rem") */
  px?: React.CSSProperties["paddingLeft"];
  /** Vertical padding in CSS units */
  py?: React.CSSProperties["paddingTop"];
  /** Left padding in CSS units; takes precedence over px */
  pl?: React.CSSProperties["paddingLeft"];
  /** Right padding in CSS units; takes precedence over px */
  pr?: React.CSSProperties["paddingRight"];
  /** Button background color or CSS background value */
  bgColor?: React.CSSProperties["background"];
  /** Button label color */
  textColor?: React.CSSProperties["color"];
  /** Button label font size */
  textSize?: React.CSSProperties["fontSize"];
  /** Show or hide the circular rotated arrow (default: true) */
  showArrow?: boolean;
  /** Arrow icon width in CSS units */
  arrowWidth?: React.CSSProperties["width"];
  /** Arrow icon height in CSS units */
  arrowHeight?: React.CSSProperties["height"];
  /** Arrow icon stroke width */
  arrowStroke?: number;
  /** Arrow badge background color */
  arrowBg?: React.CSSProperties["backgroundColor"];
  /** Arrow badge width and height in CSS units */
  arrowBgSize?: React.CSSProperties["width"];
  /** Optional target for links */
  target?: string;
  /** Optional rel attribute */
  rel?: string;
  /** Button HTML type when rendered as button */
  type?: "button" | "submit" | "reset";
  /** Disabled state */
  disabled?: boolean;
}

const sizeClasses = {
  sm: {
    button: "pl-4 sm:pl-5 pr-1.5 py-1.5 text-xs sm:text-sm gap-2.5 font-medium",
    arrowBadge: "w-7 h-7 sm:w-8 sm:h-8",
    arrowIcon: "w-3.5 h-3.5 sm:w-4 sm:h-4",
  },
  md: {
    button: "pl-5 sm:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 text-[14px] sm:text-[16px] gap-3.5 font-medium",
    arrowBadge: "w-8 h-8 sm:w-9 sm:h-9",
    arrowIcon: "w-4 h-4 sm:w-4.5 sm:h-4.5",
  },
  lg: {
    button: "pl-6 sm:pl-8 pr-2 sm:pr-2.5 py-2 sm:py-2.5 text-[15px] sm:text-[20px] gap-5 font-medium",
    arrowBadge: "w-8 h-8 sm:w-12 sm:h-12",
    arrowIcon: "w-4 h-4 sm:w-8 sm:h-8",
  },
};

const variantClasses = {
  primary: {
    button: "bg-primary hover:bg-[#ff6814] text-white shadow-[0_0_30px_rgba(248,88,0,0.35)]",
    arrowBadge: "bg-white text-primary",
    arrowIcon: "text-primary",
  },
  white: {
    button: "bg-white hover:bg-zinc-100 text-black shadow-[0_10px_25px_rgba(0,0,0,0.3)]",
    arrowBadge: "bg-primary text-white",
    arrowIcon: "text-white",
  },
  dark: {
    button: "bg-[#181A1E] hover:bg-[#202328] text-white border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.4)]",
    arrowBadge: "bg-white/10 text-white",
    arrowIcon: "text-white",
  },
  outline: {
    button: "bg-transparent hover:bg-white/[0.08] text-white border border-white/15",
    arrowBadge: "bg-primary text-white",
    arrowIcon: "text-white",
  },
};

const glowConfig: Record<
  "primary" | "white" | "dark" | "outline",
  Record<"sm" | "md" | "lg", string>
> = {
  primary: {
    sm: "absolute -inset-1 sm:-inset-1.5 bg-primary/30 rounded-full blur-lg group-hover:bg-primary/45 group-hover:blur-xl transition-all duration-500 pointer-events-none",
    md: "absolute -inset-2 sm:-inset-2.5 bg-primary/40 rounded-full blur-xl group-hover:bg-primary/60 group-hover:blur-2xl transition-all duration-500 pointer-events-none",
    lg: "absolute -inset-3 sm:-inset-4 bg-primary/50 rounded-full blur-2xl group-hover:bg-primary/75 group-hover:blur-3xl transition-all duration-500 pointer-events-none",
  },
  white: {
    sm: "absolute -inset-1 sm:-inset-1.5 bg-white/15 rounded-full blur-lg group-hover:bg-white/25 group-hover:blur-xl transition-all duration-500 pointer-events-none",
    md: "absolute -inset-2 sm:-inset-2.5 bg-white/20 rounded-full blur-xl group-hover:bg-white/35 group-hover:blur-2xl transition-all duration-500 pointer-events-none",
    lg: "absolute -inset-3 sm:-inset-4 bg-white/30 rounded-full blur-2xl group-hover:bg-white/45 group-hover:blur-3xl transition-all duration-500 pointer-events-none",
  },
  dark: {
    sm: "absolute -inset-1 sm:-inset-1.5 bg-white/5 rounded-full blur-md group-hover:bg-white/10 transition-all duration-500 pointer-events-none",
    md: "absolute -inset-2 sm:-inset-2.5 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 group-hover:blur-2xl transition-all duration-500 pointer-events-none",
    lg: "absolute -inset-3 sm:-inset-4 bg-white/10 rounded-full blur-2xl group-hover:bg-white/15 group-hover:blur-3xl transition-all duration-500 pointer-events-none",
  },
  outline: {
    sm: "absolute -inset-1 sm:-inset-1.5 bg-primary/20 rounded-full blur-md transition-all duration-500 pointer-events-none",
    md: "absolute -inset-2 sm:-inset-2.5 bg-primary/30 rounded-full blur-lg transition-all duration-500 pointer-events-none",
    lg: "absolute -inset-3 sm:-inset-4 bg-primary/40 rounded-full blur-xl transition-all duration-500 pointer-events-none",
  },
};

/**
 * Reusable PrimaryButton component matching Creatibuz design standards:
 * - Dynamic ambient glow effect ("sm", "md", "lg", or "none")
 * - Smooth spring scale on hover & tap
 * - Circular arrow badge with rotate transition
 * - Fully configurable with sizes ("sm", "md", "lg") and variants
 */
export function PrimaryButton({
  text,
  children,
  href,
  onClick,
  className,
  containerClassName,
  size = "lg",
  variant = "primary",
  glow,
  glowClassName,
  icon,
  customArrow,
  fullWidth = false,
  px,
  py,
  pl,
  pr,
  bgColor,
  textColor,
  textSize,
  showArrow = true,
  arrowWidth,
  arrowHeight,
  arrowStroke = 2,
  arrowBg,
  arrowBgSize,
  target,
  rel,
  type = "button",
  disabled = false,
}: PrimaryButtonProps) {
  const currentSize = sizeClasses[size] || sizeClasses.lg;
  const currentVariant = variantClasses[variant] || variantClasses.primary;

  // Resolve dynamic glow level:
  // "lg" = Hero signature glow, "md" = section glow, "sm" = compact glow
  const resolveGlowLevel = (): "sm" | "md" | "lg" | null => {
    if (glow === false || glow === "none") return null;
    if (glow === "sm" || glow === "md" || glow === "lg") return glow;
    if (glow === true) {
      return size === "sm" ? "sm" : size === "lg" ? "lg" : "md";
    }
    // Default when glow is omitted on primary / white:
    if (variant === "primary" || variant === "white") {
      return size === "sm" ? "sm" : size === "lg" ? "lg" : "md";
    }
    return null;
  };

  const activeGlowLevel = resolveGlowLevel();
  const glowClasses = activeGlowLevel
    ? cn(
        glowConfig[variant]?.[activeGlowLevel] ?? glowConfig.primary[activeGlowLevel],
        glowClassName
      )
    : null;

  const buttonStyle: React.CSSProperties = {
    ...(px !== undefined && {
      paddingLeft: pl ?? px,
      paddingRight: pr ?? px,
    }),
    ...(pl !== undefined && { paddingLeft: pl }),
    ...(pr !== undefined && { paddingRight: pr }),
    ...(py !== undefined && { paddingTop: py, paddingBottom: py }),
    ...(bgColor !== undefined && { background: bgColor }),
    ...(textColor !== undefined && { color: textColor }),
    ...(textSize !== undefined && { fontSize: textSize }),
  };

  const arrowBadgeStyle: React.CSSProperties = {
    ...(arrowBg !== undefined && { backgroundColor: arrowBg }),
    ...(arrowBgSize !== undefined && {
      width: arrowBgSize,
      height: arrowBgSize,
    }),
  };

  const arrowStyle: React.CSSProperties = {
    ...(arrowWidth !== undefined && { width: arrowWidth }),
    ...(arrowHeight !== undefined && { height: arrowHeight }),
  };

  const content = (
    <>
      <span className="inline-flex items-center gap-2 tracking-tight">
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{text ?? children}</span>
      </span>

      {showArrow && (
        <div
          style={arrowBadgeStyle}
          className={cn(
            "rounded-full flex items-center justify-center shrink-0 shadow-sm group-hover:rotate-45 transition-transform duration-300",
            currentSize.arrowBadge,
            currentVariant.arrowBadge
          )}
        >
          {customArrow ?? (
            <ArrowUpRight
              style={arrowStyle}
              strokeWidth={arrowStroke}
              className={cn(currentSize.arrowIcon, currentVariant.arrowIcon)}
            />
          )}
        </div>
      )}
    </>
  );

  const baseButtonClasses = cn(
    "relative z-10 inline-flex items-center rounded-full transition-all duration-300 font-display cursor-pointer select-none",
    currentSize.button,
    currentVariant.button,
    fullWidth && "w-full justify-between",
    disabled && "opacity-60 cursor-not-allowed pointer-events-none",
    className
  );

  return (
    <motion.div
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={cn(
        "relative group inline-flex items-center justify-center",
        fullWidth && "w-full",
        containerClassName
      )}
    >
      {/* Ambient Dynamic Radial Glow */}
      {glowClasses && <div className={glowClasses} />}

      {href ? (
        <Link
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          style={buttonStyle}
          className={baseButtonClasses}
        >
          {content}
        </Link>
      ) : (
        <button
          type={type}
          disabled={disabled}
          onClick={onClick}
          style={buttonStyle}
          className={baseButtonClasses}
        >
          {content}
        </button>
      )}
    </motion.div>
  );
}

export default PrimaryButton;
