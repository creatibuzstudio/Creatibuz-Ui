"use client";

import { useEffect, useState } from "react";
import { GridSpark } from "@/components/ui/section-container";
import { DEFAULT_REVIEWS } from "@/data/testimonials.data";
import { Review, reviewService } from "@/services/review.service";
import { TestimonialCard } from "./testimonials/testimonial-card";
import { VideoModal } from "./testimonials/video-modal";

export function ClientTestimonialsSection() {
  const [playingVideoUrl, setPlayingVideoUrl] = useState<string | null>(null);
  const [reviews, setReviews] = useState<Review[]>(DEFAULT_REVIEWS);

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

  const getRowData = (rowNumber: number) => {
    const list = reviews && reviews.length > 0 ? reviews : DEFAULT_REVIEWS;
    const perRow = Math.ceil(list.length / 2);
    const startIdx = (rowNumber - 1) * perRow;
    const endIdx = startIdx + perRow;

    let rowReviews = list.slice(startIdx, endIdx);
    if (rowReviews.length === 0) {
      rowReviews = [...list];
    }

    // Ensure at least 8 items in the base set so it spans past any screen width
    let baseSet = [...rowReviews];
    while (baseSet.length < 8) {
      baseSet = [...baseSet, ...rowReviews];
    }

    // Duplicate baseSet exactly once for a seamless infinite loop
    return [...baseSet, ...baseSet];
  };

  const row1 = getRowData(1);
  const row2 = getRowData(2);

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32 select-none"
    >
      {/* Background Grid Lines & Cross Markers */}
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none z-0">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.12]" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-white/[0.12]" />
      </div>

      {/* Header Container */}
      <div className="max-w-4xl w-full mx-auto px-6 flex flex-col items-center text-center mb-14 md:mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-header-text tracking-tight leading-tight flex flex-col items-center gap-2">
          <span>What SaaS Teams Say About Working</span>
          <span className="font-serif italic font-normal text-header-text mt-1 text-3xl md:text-4xl lg:text-[42px]">
            with Creatibuz Studio
          </span>
        </h2>
      </div>

      {/* Infinite Marquee Rows */}
      {reviews.length > 0 && (
        <div className="w-full overflow-hidden space-y-6 py-2 relative z-10">
          {/* Row 1: Left */}
          <div className="flex animate-marquee gap-6 will-change-transform">
            {row1.map((item, idx) => (
              <TestimonialCard
                key={`${item.id}-r1-${idx}`}
                item={item}
                onPlayVideo={(url) => setPlayingVideoUrl(url)}
              />
            ))}
          </div>

          {/* Row 2: Right */}
          <div className="flex animate-marquee-reverse gap-6 will-change-transform">
            {row2.map((item, idx) => (
              <TestimonialCard
                key={`${item.id}-r2-${idx}`}
                item={item}
                onPlayVideo={(url) => setPlayingVideoUrl(url)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Video Modal */}
      <VideoModal
        videoUrl={playingVideoUrl}
        onClose={() => setPlayingVideoUrl(null)}
      />
    </section>
  );
}
