"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogAuthor } from "@/types/blogs.types";
import { Globe } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { motion } from "framer-motion";

interface BlogAuthorBioProps {
  author: BlogAuthor;
}

export function BlogAuthorBio({ author }: BlogAuthorBioProps) {
  const facebookUrl =
    author.socials?.facebook ??
    "https://www.facebook.com/profile.php?id=61594366565881";

  return (
    <SectionContainer
      showTopBorder={false}
      showBottomBorder={false}
      crossMarkers={false}
      noPadding={true}
      containerClassName="bg-[#0C0E12]"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 pb-20 md:pb-32 lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Mobile Layout (sm:hidden) - Clean, balanced editorial profile card */}
          <div className="flex sm:hidden flex-col rounded-2xl bg-[#14161C] border border-white/10 p-5 shadow-[0_8px_28px_rgba(0,0,0,0.25)] text-left">
            {/* Header row: Portrait frame + Author details & socials */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-[76px] h-[92px] rounded-xl overflow-hidden border border-white/15 bg-[#0C0E12] shrink-0 shadow-md">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  sizes="76px"
                  className="object-cover object-top"
                />
              </div>

              <div className="flex-1 min-w-0">
                <span className="text-primary text-[11px] font-semibold uppercase tracking-wider block mb-1">
                  Written By
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight leading-tight">
                  {author.name}
                </h3>
                <p className="text-zinc-400 text-xs font-medium mt-1 leading-snug">
                  {author.role} at Creatibuz Studio
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-2 mt-2.5">
                  <Link
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-zinc-400 transition-colors hover:bg-primary hover:text-white"
                    aria-label="Facebook Profile"
                  >
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                    </svg>
                  </Link>
                  {author.socials?.linkedin && (
                    <Link
                      href={author.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-zinc-400 transition-colors hover:bg-primary hover:text-white"
                      aria-label="LinkedIn Profile"
                    >
                      <svg className="w-3 w-3 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                  )}
                  <Link
                    href={author.socials?.website ?? "https://creatibuzstudio.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-zinc-400 transition-colors hover:bg-primary hover:text-white"
                    aria-label={author.socials?.website ? `${author.name} Website` : "Creatibuz Studio Website"}
                  >
                    <Globe className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bio text */}
            <p className="text-zinc-300 text-sm leading-relaxed font-normal pt-3.5 border-t border-white/5">
              {author.bio ||
                "Passionate about craft, precision UI/UX, and scaling modern digital products that empower human-centered software experiences."}
            </p>
          </div>

          {/* Desktop Layout (hidden sm:flex) - 100% UNCHANGED */}
          <div className="hidden sm:flex items-stretch overflow-hidden rounded-2xl bg-[#14161C] shadow-[0_8px_28px_rgba(0,0,0,0.2)] text-left">
            {/* Full-height author image */}
            <div className="relative w-[30%] min-w-24 max-w-56 shrink-0 bg-[#0C0E12]">
              <Image
                src={author.image}
                alt={author.name}
                fill
                sizes="224px"
                className="object-cover object-top"
              />
            </div>

            {/* Info */}
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-4 p-6 lg:p-8">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                    Written By
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {author.name}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm font-medium">
                    {author.role} at Creatibuz Studio
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex shrink-0 items-start gap-2">
                  <Link
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-zinc-400 transition-colors hover:bg-primary hover:text-white"
                    aria-label="Facebook Profile"
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                    </svg>
                  </Link>
                  {author.socials?.linkedin && (
                    <Link
                      href={author.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-zinc-400 transition-colors hover:bg-primary hover:text-white"
                      aria-label="LinkedIn Profile"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                  )}
                  <Link
                    href={author.socials?.website ?? "https://creatibuzstudio.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-zinc-400 transition-colors hover:bg-primary hover:text-white"
                    aria-label={author.socials?.website ? `${author.name} Website` : "Creatibuz Studio Website"}
                  >
                    <Globe className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed font-normal max-w-[444px]">
                {author.bio ||
                  "Passionate about craft, precision UI/UX, and scaling modern digital products that empower human-centered software experiences."}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}

export default BlogAuthorBio;
