"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface BlogsSearchBarProps {
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

export function BlogsSearchBar({
  value,
  onChange,
  className = "",
}: BlogsSearchBarProps) {
  return (
    <div className={`relative w-full max-w-xl mx-auto ${className}`}>
      <div className="relative flex items-center w-full bg-[#181A1E]/80 backdrop-blur-md border border-white/10 hover:border-white/20 focus-within:border-primary rounded-xl transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        {/* Search Icon */}
        <div className="pl-4 sm:pl-5 pr-2 text-zinc-400 pointer-events-none flex items-center">
          <Search className="w-5 h-5 stroke-[2]" />
        </div>

        {/* Input */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search Any Blog"
          className="w-full py-3.5 sm:py-4 pr-10 bg-transparent text-white placeholder:text-zinc-500 text-sm sm:text-base focus:outline-none font-sans"
        />

        {/* Clear Button */}
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute right-3 p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export default BlogsSearchBar;
