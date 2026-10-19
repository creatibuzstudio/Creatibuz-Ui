"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, Copy, Share2, Bookmark } from "lucide-react";
import { BlogPost } from "@/types/blogs.types";
import { SectionContainer } from "@/components/ui/section-container";

interface BlogDetailContentProps {
  post: BlogPost;
}

export function BlogDetailContent({ post }: BlogDetailContentProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <SectionContainer
      showTopBorder={true}
      showBottomBorder={false}
      crossMarkers={true}
      noPadding={true}
      containerClassName="bg-[#0C0E12]"
    >
      <article className="relative w-full pt-20 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24">
        {/* Center reading area (max-w-4xl) with empty left and right sides inside max-w-7xl container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 1. Key Takeaways Box (with spark/check icon) */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 sm:mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-[#16181F] to-[#121418] border border-primary/25 shadow-lg shadow-black/40"
            >
              <div className="flex items-center gap-2.5 mb-4 text-primary">
                <Sparkles className="w-5 h-5 text-primary stroke-[2]" />
                <h2 className="text-base sm:text-lg font-bold tracking-tight text-white font-sans">
                  Key Takeaways
                </h2>
              </div>
              <ul className="space-y-3.5">
                {post.keyTakeaways.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-[15px] text-zinc-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3] text-primary" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* 2. Lead Excerpt Quote */}
          {post.excerpt && (
            <div className="mb-10 sm:mb-12 pl-5 sm:pl-6 border-l-2 border-primary/80 py-1">
              <p className="text-lg sm:text-xl text-zinc-200 font-serif italic leading-relaxed">
                &ldquo;{post.excerpt}&rdquo;
              </p>
            </div>
          )}

          {/* 3. Formatted Article Body */}
          <div className="text-zinc-300 text-base sm:text-lg leading-relaxed font-sans space-y-6 sm:space-y-7">
            {post.content.split("\n\n").map((paragraph, index) => {
              // Check if paragraph is an H2 heading
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-2xl sm:text-3xl font-bold text-white tracking-tight pt-8 pb-2 font-sans border-b border-white/5"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }

              // Check if paragraph is an H3 heading
              if (paragraph.startsWith("### ")) {
                return (
                  <h3
                    key={index}
                    className="text-xl sm:text-2xl font-semibold text-white tracking-tight pt-5 pb-1 font-sans text-primary"
                  >
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }

              // Check if paragraph is a blockquote
              if (paragraph.startsWith("> ")) {
                return (
                  <blockquote
                    key={index}
                    className="p-5 sm:p-6 my-6 bg-white/[0.02] border-l-4 border-primary rounded-r-xl italic text-zinc-200 text-base sm:text-lg"
                  >
                    {paragraph.replace("> ", "")}
                  </blockquote>
                );
              }

              // Check if paragraph consists of bullet points (• or -)
              if (paragraph.includes("• ") || paragraph.startsWith("- ")) {
                const lines = paragraph
                  .split("\n")
                  .filter((l) => l.trim().length > 0);
                const isAllBullets = lines.every(
                  (l) => l.trim().startsWith("• ") || l.trim().startsWith("- ")
                );
                if (isAllBullets) {
                  return (
                    <ul key={index} className="space-y-2.5 my-4 pl-1">
                      {lines.map((line, lIdx) => (
                        <li
                          key={lIdx}
                          className="flex items-start gap-3 text-zinc-300 text-base sm:text-[17px]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                          <span className="leading-relaxed">
                            {line.replace(/^[•\-]\s*/, "")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                }
              }

              return (
                <p
                  key={index}
                  className="text-zinc-300 font-normal leading-[1.85] whitespace-pre-line"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* 4. Tags & Share Buttons */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 sm:mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-1.5 mr-2">
                <Bookmark className="w-3.5 h-3.5" />
                Tags:
              </span>
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Share Section (Copy link, X, LinkedIn) */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
              <Share2 className="w-4 h-4 text-primary" />
              <span>Share this article:</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  post.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-all"
              >
                Post on X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  typeof window !== "undefined" ? window.location.href : ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-primary hover:bg-[#ff6a14] text-xs font-semibold text-white transition-all shadow-md shadow-primary/20"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}

export default BlogDetailContent;
