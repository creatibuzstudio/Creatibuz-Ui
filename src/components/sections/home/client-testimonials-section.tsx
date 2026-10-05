"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DEFAULT_REVIEWS } from "@/data/testimonials.data";
import { Review, reviewService } from "@/services/review.service";
import { TestimonialCard } from "./testimonials/testimonial-card";
import { VideoModal } from "./testimonials/video-modal";

export function ClientTestimonialsSection() {
  const [playingVideoUrl, setPlayingVideoUrl] = useState<string | null>(null);
  const [reviews, setReviews] = useState<Review[]>(DEFAULT_REVIEWS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewList = await reviewService.getAllReviews();
        if (reviewList && reviewList.length > 0) {
          setReviews(reviewList);
        }
      } catch {
        // Silently preserve DEFAULT_REVIEWS fallback
      }
    };

    fetchReviews();
  }, []);

  const totalReviews = reviews.length;

  const paginate = useCallback(
    (step: number) => {
      if (totalReviews === 0) return;
      setCurrentIndex((prev) => {
        let next = prev + step;
        if (next < 0) next = totalReviews - 1;
        if (next >= totalReviews) next = 0;
        return next;
      });
    },
    [totalReviews]
  );

  const jumpTo = useCallback(
    (targetIndex: number) => {
      if (targetIndex === currentIndex) return;
      setCurrentIndex(targetIndex);
    },
    [currentIndex]
  );

  // Auto-play timer (advances every 5 seconds when not hovered)
  useEffect(() => {
    if (isPaused || totalReviews <= 1) return;

    autoPlayRef.current = setInterval(() => {
      paginate(1);
    }, 3000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, paginate, totalReviews]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  // Helpers for 3D curved album coverflow physics
  const getX = (offset: number) => {
    if (offset === 0) return "0%";
    if (offset === 1) return "48%";
    if (offset === -1) return "-48%";
    if (offset === 2) return "86%";
    if (offset === -2) return "-86%";
    return offset > 0 ? "120%" : "-120%";
  };

  const getScale = (offset: number) => {
    if (offset === 0) return 1;
    if (Math.abs(offset) === 1) return 0.86;
    if (Math.abs(offset) === 2) return 0.72;
    return 0.5;
  };

  const getRotateY = (offset: number) => {
    if (offset === 0) return 0;
    // Both sides curve inward towards center highlight
    if (offset === -1) return 24;
    if (offset === 1) return -24;
    if (offset === -2) return 36;
    if (offset === 2) return -36;
    return offset > 0 ? -45 : 45;
  };

  const getOpacity = (offset: number) => {
    if (offset === 0) return 1;
    if (Math.abs(offset) === 1) return 0.65;
    if (Math.abs(offset) === 2) return 0.25;
    return 0;
  };

  const getZIndex = (offset: number) => {
    if (offset === 0) return 40;
    if (Math.abs(offset) === 1) return 20;
    if (Math.abs(offset) === 2) return 10;
    return 0;
  };

  const getFilter = (offset: number) => {
    if (offset === 0) return "brightness(1) blur(0px)";
    if (Math.abs(offset) === 1) return "brightness(0.75) blur(0.5px)";
    if (Math.abs(offset) === 2) return "brightness(0.4) blur(1.5px)";
    return "brightness(0.2) blur(3px)";
  };

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32 select-none bg-background"
    >
      {/* Background Subtle Ambience & Grid Lines */}
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none z-0">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.08]" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-white/[0.08]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/[0.03] rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Header Container */}
      <div className="max-w-4xl w-full mx-auto px-6 flex flex-col items-center text-center mb-10 sm:mb-14 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-header-text tracking-tight leading-tight flex flex-col items-center gap-2">
          <span>
            What SaaS Teams Say About <br />
          </span>
          <span>
            <span className="">Working </span>
            <span className="font-serif italic font-normal text-primary mt-1 text-3xl md:text-4xl lg:text-[42px]">
              with Creatibuz Studio
            </span>
          </span>
        </h2>
      </div>

      {/* 3D Album Coverflow Stage */}
      <div
        className="relative w-full max-w-[1400px] mx-auto px-4 relative z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ perspective: "1300px" }}
      >
        <div className="relative w-full h-[520px] sm:h-[480px] md:h-[450px] flex items-center justify-center">
          {reviews.map((rev, idx) => {
            // Calculate circular offset
            let offset = idx - currentIndex;
            if (offset > totalReviews / 2) offset -= totalReviews;
            if (offset < -totalReviews / 2) offset += totalReviews;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            return (
              <motion.div
                key={rev.id || idx}
                initial={false}
                animate={{
                  x: getX(offset),
                  scale: getScale(offset),
                  rotateY: getRotateY(offset),
                  opacity: getOpacity(offset),
                  zIndex: getZIndex(offset),
                  filter: getFilter(offset),
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
                onClick={() => {
                  if (!isCenter) jumpTo(idx);
                }}
                className={`absolute inset-0 m-auto h-fit w-full max-w-[92vw] sm:max-w-xl md:max-w-2xl lg:max-w-[700px] transition-shadow duration-300 ${
                  isCenter
                    ? "cursor-default drop-shadow-[0_20px_50px_rgba(254,90,0,0.12)]"
                    : "cursor-pointer hover:brightness-95"
                } ${Math.abs(offset) > 1 ? "hidden md:block" : ""} ${
                  !isVisible ? "pointer-events-none" : ""
                }`}
              >
                <TestimonialCard
                  item={rev}
                  onPlayVideo={(url) => setPlayingVideoUrl(url)}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
