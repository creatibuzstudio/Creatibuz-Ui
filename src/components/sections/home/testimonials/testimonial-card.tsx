"use client";

import Image from "next/image";
import { Star, Play, User as UserIcon } from "lucide-react";
import { Review } from "@/services/review.service";

interface TestimonialCardProps {
  item: Review;
  onPlayVideo?: (url: string) => void;
}

export function TestimonialCard({ item, onPlayVideo }: TestimonialCardProps) {
  const rating = Math.min(Math.max(item.rating || 5, 1), 5);

  return (
    <div className="w-[440px] sm:w-[500px] shrink-0 bg-card rounded-xl p-3 sm:p-4 border border-white/5 flex items-stretch gap-5 group transition-colors hover:border-white/10 select-none">
      {/* Thumbnail Container */}
      <div
        className={`w-[140px] sm:w-[160px] aspect-square rounded-xl relative overflow-hidden bg-gray-900 shrink-0 ${
          item.videoUrl ? "cursor-pointer" : ""
        }`}
        onClick={() => (item.videoUrl && onPlayVideo ? onPlayVideo(item.videoUrl) : undefined)}
      >
        <div className="w-full h-full relative flex items-center justify-center bg-gray-800 transition-transform duration-500 group-hover:scale-105">
          {item.thumbUrl ? (
            <Image
              src={item.thumbUrl}
              alt={item.client?.name || "Client Thumbnail"}
              fill
              sizes="160px"
              className="object-cover"
            />
          ) : (
            <UserIcon className="w-16 h-16 text-gray-600" />
          )}
        </div>

        {/* Play Button Overlay */}
        {item.videoUrl && (
          <div className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-white/95 shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110 z-20">
            <Play className="w-3.5 h-3.5 fill-[#5D5FEF] text-[#5D5FEF] ml-0.5" />
          </div>
        )}
      </div>

      {/* Review Content */}
      <div className="flex flex-col justify-between h-full py-1 pr-1 w-full flex-1">
        <div>
          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-3 text-[#F59E0B]">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#F59E0B] stroke-none" />
            ))}
            {[...Array(5 - rating)].map((_, i) => (
              <Star key={`empty-${i}`} className="w-4 h-4 text-gray-700 stroke-none" />
            ))}
          </div>

          <p className="text-primary-text text-[13.5px] leading-relaxed mb-4 font-normal line-clamp-3">
            {item.reviewText}
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-primary-text text-[15px] md:text-lg tracking-tight mb-0.5">
            {item.client?.name || "Anonymous Client"}
          </h4>
          <p className="text-[13px] text-primary-text font-normal">
            {item.client?.role || "Client"}
          </p>
        </div>
      </div>
    </div>
  );
}
