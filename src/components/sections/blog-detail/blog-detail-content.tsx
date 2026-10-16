"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Share2, Lightbulb, Bookmark } from "lucide-react";
import { BlogPost } from "@/types/blogs.types";

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
    <article className="relative w-full py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Key Takeaways Box */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-[#181A20] to-[#14161B] border border-primary/25 shadow-lg"
          >
            <div className="flex items-center gap-2.5 mb-4 text-primary">
              <Lightbulb className="w-5 h-5 stroke-[2.2]" />
              <h2 className="text-base sm:text-lg font-bold tracking-tight text-white font-sans">
                Key Takeaways
              </h2>
            </div>
            <ul className="space-y-3">
              {post.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                  <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Lead Excerpt */}
        {post.excerpt && (
          <p className="text-lg sm:text-xl text-zinc-200 font-serif italic leading-relaxed mb-8 pl-4 border-l-2 border-primary">
            &ldquo;{post.excerpt}&rdquo;
          </p>
        )}

        {/* Formatted Article Body */}
        <div className="text-zinc-300 text-base sm:text-lg leading-relaxed font-sans space-y-6">
          {post.content.split("\n\n").map((paragraph, index) => {
            // Check if paragraph is a heading
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="text-2xl sm:text-3xl font-bold text-white tracking-tight pt-6 pb-2 font-sans border-b border-white/5"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={index}
                  className="text-xl sm:text-2xl font-semibold text-white tracking-tight pt-4 pb-1 font-sans text-primary"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("> ")) {
              return (
                <blockquote
                  key={index}
                  className="p-5 my-4 bg-white/[0.02] border-l-4 border-primary rounded-r-xl italic text-zinc-200"
                >
                  {paragraph.replace("> ", "")}
                </blockquote>
              );
            }
            return (
              <p key={index} className="text-zinc-300 font-normal leading-[1.8]">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Article Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
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

        {/* Share Section */}
        <div className="mt-8 p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white font-semibold text-sm">
            <Share2 className="w-4 h-4 text-primary" />
            <span>Share this insight with your network:</span>
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
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-all"
            >
              Post on X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-primary hover:bg-[#ff6a14] text-xs font-semibold text-white transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogDetailContent;
