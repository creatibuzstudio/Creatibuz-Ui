"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

interface BlogsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function BlogsPagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: BlogsPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Blog pagination"
      className={`flex items-center justify-center gap-2.5 sm:gap-3 select-none ${className}`}
    >
      {pages.map((page) => {
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-[6px] text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center ${
              isActive
                ? "bg-primary text-white shadow-[0_0_15px_rgba(254,90,0,0.5)] scale-105"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next page arrow button */}
      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-[6px] text-zinc-400 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}

export default BlogsPagination;
