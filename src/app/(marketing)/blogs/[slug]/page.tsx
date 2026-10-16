import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogService } from "@/services/blog.service";
import { BLOG_POSTS } from "@/data/blogs.data";
import {
  BlogDetailHeader,
  BlogDetailContent,
  BlogAuthorBio,
  BlogRelatedPosts,
} from "@/components/sections/blog-detail";
import { BlogsNewsletterOrbitSection } from "@/components/sections/blogs/blogs-newsletter-orbit-section";
import { BlogsBrandCtaSection } from "@/components/sections/blogs/blogs-brand-cta-section";
import { FaqSection } from "@/components/sections/home/faq-section";
import { SectionContainer } from "@/components/ui/section-container";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await blogService.getBlogBySlugWithFallback(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Creatibuz Studio",
    };
  }

  return {
    title: `${post.title} | Creatibuz Studio`,
    description: post.excerpt || `Read ${post.title} on Creatibuz Studio.`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 675,
          alt: post.alt || post.title,
        },
      ],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const [post, allBlogs] = await Promise.all([
    blogService.getBlogBySlugWithFallback(slug),
    blogService.getBlogsWithFallback(),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen w-full bg-[#0C0E12] text-primary-text flex flex-col justify-between overflow-hidden">
      {/* 1. Article Header with Breadcrumbs, Badges, Title, Author & Hero Graphic */}
      <BlogDetailHeader post={post} />

      {/* 2. Structured Article Body & Key Takeaways */}
      <BlogDetailContent post={post} />

      {/* 3. Written By Author Biography Card */}
      <BlogAuthorBio author={post.author} />

      {/* 4. Related Highlight Articles */}
      <BlogRelatedPosts currentSlug={post.slug} posts={allBlogs} />

      {/* 5. Stay in the loop Newsletter Orbit Section */}
      <BlogsNewsletterOrbitSection />

      {/* 6. FAQ Section */}
      <SectionContainer extendTopBorder={false} showTopBorder={true}>
        <FaqSection />
      </SectionContainer>

      {/* 7. Brand CTA Banner with Founders & Socials */}
      <BlogsBrandCtaSection />
    </div>
  );
}
