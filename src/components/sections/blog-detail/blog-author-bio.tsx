"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogAuthor } from "@/types/blogs.types";
import { Globe } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";

interface BlogAuthorBioProps {
  author: BlogAuthor;
}

export function BlogAuthorBio({ author }: BlogAuthorBioProps) {
  return (
    <SectionContainer
      showTopBorder={false}
      showBottomBorder={false}
      crossMarkers={false}
      noPadding={true}
      containerClassName="bg-[#0C0E12]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-32 lg:pb-36">
      <div className="p-6 sm:p-8 rounded-2xl bg-[#14161C] border border-white/10 shadow-lg flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
        {/* Author Avatar */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-primary/40 shrink-0 bg-[#0C0E12] shadow-md">
          <Image
            src={author.image}
            alt={author.name}
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <div>
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
            <div className="flex items-center justify-center sm:justify-start gap-2 pt-2 sm:pt-0">
              {author.socials?.linkedin && (
                <Link
                  href={author.socials.linkedin}
                  target="_blank"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              )}
              {author.socials?.twitter && (
                <Link
                  href={author.socials.twitter}
                  target="_blank"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Twitter / X Profile"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              )}
              <Link
                href="https://creatibuzstudio.com"
                target="_blank"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Creatibuz Studio"
              >
                <Globe className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <p className="text-zinc-300 text-sm leading-relaxed mt-2 font-normal">
            {author.bio ||
              "Passionate about craft, precision UI/UX, and scaling modern digital products that empower human-centered software experiences."}
          </p>
        </div>
      </div>
    </div>
    </SectionContainer>
  );
}

export default BlogAuthorBio;
