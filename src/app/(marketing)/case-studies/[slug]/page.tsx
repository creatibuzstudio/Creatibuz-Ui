import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { casestudyService, type CasestudyItem } from "@/services/casestudy.service";
import { featuredProjects, type FeaturedProject } from "@/data/featured-projects.data";

// Helper to find project from local data if API returns empty
function getFallbackProject(slug: string): CasestudyItem | null {
  const match = featuredProjects.find(
    (p) =>
      p.id === slug ||
      p.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .includes(slug.toLowerCase()) ||
      slug.toLowerCase().includes(p.id)
  );

  if (!match) return null;

  return {
    id: match.id,
    title: match.title,
    slug: slug,
    shortDescription: match.description,
    photoUrl: match.image || match.images.hero.src,
    images: [
      match.images.hero.src,
      match.images.rightTop?.src,
      match.images.rightBottom?.src,
    ].filter(Boolean),
    tag: match.tag,
    bgColor: match.bgColor || "#1D0C01",
    projectLink: match.link,
    stats: match.metrics.map((m) => ({ name: m.label, count: m.value })),
    metrics: match.metrics.map((m) => ({ name: m.label, count: m.value })),
    challenge:
      "Legacy workflow architecture created friction across user navigation, slowed task completion rates, and caused higher bounce during critical touchpoints.",
    challengePhoto: match.images.rightTop?.src || match.image,
    challengePhotoDescription:
      "Visual assessment of user friction zones, high-dropoff checkout steps, and layout bottlenecks.",
    solution:
      "Restructured user journey with a streamlined design system, patient/user-first information hierarchy, and intuitive micro-interactions that eliminated friction.",
    solutionPhoto: match.images.rightBottom?.src || match.image,
    solutionPhotoDescription:
      "Redesigned intuitive interface with simplified navigation, clear visual hierarchy, and 1-click workflows.",
    technologies: "Figma, Next.js, Design System, UX Research, Tailwind CSS",
    order: Number(match.id) || 1,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = (await casestudyService.getCasestudyBySlug(slug)) || getFallbackProject(slug);

  if (!project) {
    return {
      title: "Case Study | Creatibuz Studio",
      description: "Explore our featured design and engineering case studies.",
    };
  }

  return {
    title: `${project.title} | Case Study | Creatibuz Studio`,
    description: project.shortDescription || "Detailed project case study and impact metrics.",
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;

  let project = await casestudyService.getCasestudyBySlug(slug);
  if (!project) {
    project = getFallbackProject(slug);
  }

  // Fallback to first featured project if slug is "featured" or general
  if (!project && (slug === "featured" || slug === "1" || slug === "01")) {
    project = getFallbackProject("01");
  }

  if (!project) {
    notFound();
  }

  const bgColor = project.bgColor || "#1D0C01";
  const stats = project.stats || project.metrics || [];

  const galleryImages: string[] = Array.isArray(project.images)
    ? project.images
    : project.images?.hero
    ? [
        project.images.hero.src,
        project.images.rightTop?.src,
        project.images.rightBottom?.src,
      ].filter(Boolean)
    : [];

  const challengePhotosList =
    project.challengePhotos && project.challengePhotos.length > 0
      ? project.challengePhotos.filter((p) => p.photoUrl)
      : project.challengePhoto
      ? [
          {
            photoUrl: project.challengePhoto,
            description: project.challengePhotoDescription,
            title: "Challenge Analysis",
          },
        ]
      : [];

  const solutionPhotosList =
    project.solutionPhotos && project.solutionPhotos.length > 0
      ? project.solutionPhotos.filter((p) => p.photoUrl)
      : project.solutionPhoto
      ? [
          {
            photoUrl: project.solutionPhoto,
            description: project.solutionPhotoDescription,
            title: "Solution Strategy",
          },
        ]
      : [];

  return (
    <div
      className="min-h-screen w-full text-primary-text transition-colors duration-500 overflow-x-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Top Banner / Breadcrumb */}
      <div className="pt-28 md:pt-36 pb-8 border-b border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/#feature-works"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-primary" />
              <span>Back to Featured Works</span>
            </Link>

            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold px-4 py-2 rounded-full bg-primary hover:bg-primary/90 text-white transition-all shadow-[0_0_25px_rgba(254,90,0,0.4)]"
              >
                <span>Live Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <SectionContainer showTopBorder={false} showBottomBorder={true} className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {project.tag && (
            <div className="mb-4">
              <span className="text-primary text-sm md:text-base font-semibold uppercase tracking-wider font-sans">
                [ {project.tag} ]
              </span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.15] max-w-5xl">
            {project.title}
          </h1>

          {project.shortDescription && (
            <p className="text-lg md:text-xl text-[#ADADAD] leading-relaxed mt-6 max-w-4xl font-normal">
              {project.shortDescription}
            </p>
          )}

          {/* Key Impact Stats Bar */}
          {stats.length > 0 && (
            <div className="mt-12 md:mt-16 p-6 sm:p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl">
              <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-6 flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Measurable Impact & Client Outcomes
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                {stats.map((stat, idx) => (
                  <div key={idx} className={`${idx > 0 ? "pt-4 sm:pt-0 sm:pl-8" : ""}`}>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
                      {stat.count || stat.value}
                    </div>
                    <div className="text-sm md:text-base text-[#ADADAD] mt-2 font-normal leading-snug">
                      {stat.name || stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </SectionContainer>

      {/* Main Display Image */}
      {project.photoUrl && (
        <SectionContainer showTopBorder={false} showBottomBorder={true} className="py-8 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black/40">
              <Image
                src={project.photoUrl}
                alt={project.title}
                width={1920}
                height={1080}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </SectionContainer>
      )}

      {/* Multi-Image Gallery Showcase */}
      {galleryImages.length > 0 && (
        <SectionContainer showTopBorder={false} showBottomBorder={true} className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="mb-8">
              <span className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wider">
                [ Visual System & Screen Mockups ]
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
                Multi-View Design Showcase
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-white/10 bg-black/30 shadow-xl group hover:border-white/20 transition-all"
                >
                  <Image
                    src={img}
                    alt={`Mockup showcase ${i + 1}`}
                    width={1000}
                    height={750}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      )}

      {/* Challenge & Solution Grid (Photo-wise descriptions) */}
      {(project.challenge || project.solution || challengePhotosList.length > 0 || solutionPhotosList.length > 0) && (
        <SectionContainer showTopBorder={false} showBottomBorder={true} className="py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-16 md:space-y-24">
            {/* The Challenge */}
            {(project.challenge || challengePhotosList.length > 0) && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30 uppercase tracking-wider">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    The Challenge
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
                    Understanding the friction and user barriers.
                  </h3>
                  {project.challenge && (
                    <div
                      dangerouslySetInnerHTML={{ __html: project.challenge }}
                      className="blog-preview-content text-base md:text-lg text-[#ADADAD] leading-relaxed space-y-4"
                    />
                  )}
                </div>

                <div className="lg:col-span-7 space-y-6">
                  {challengePhotosList.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl transition-all hover:border-white/20"
                    >
                      {item.title && (
                        <div className="px-5 py-3 bg-black/60 border-b border-white/10 flex items-center justify-between">
                          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider font-mono">
                            {item.title}
                          </span>
                          <span className="text-[10px] text-gray-500 font-mono">Visual #{idx + 1}</span>
                        </div>
                      )}
                      <div className="relative w-full overflow-hidden bg-black/40">
                        <Image
                          src={item.photoUrl}
                          alt={item.title || `Challenge visual ${idx + 1}`}
                          width={1200}
                          height={800}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      {item.description && (
                        <div className="p-4 sm:p-5 bg-black/60 border-t border-white/10">
                          <div
                            dangerouslySetInnerHTML={{ __html: item.description }}
                            className="blog-preview-content text-xs sm:text-sm text-gray-300 italic font-mono space-y-2"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* The Solution */}
            {(project.solution || solutionPhotosList.length > 0) && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-7 order-2 lg:order-1 space-y-6">
                  {solutionPhotosList.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl transition-all hover:border-white/20"
                    >
                      {item.title && (
                        <div className="px-5 py-3 bg-black/60 border-b border-white/10 flex items-center justify-between">
                          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider font-mono">
                            {item.title}
                          </span>
                          <span className="text-[10px] text-gray-500 font-mono">Visual #{idx + 1}</span>
                        </div>
                      )}
                      <div className="relative w-full overflow-hidden bg-black/40">
                        <Image
                          src={item.photoUrl}
                          alt={item.title || `Solution visual ${idx + 1}`}
                          width={1200}
                          height={800}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      {item.description && (
                        <div className="p-4 sm:p-5 bg-black/60 border-t border-white/10">
                          <div
                            dangerouslySetInnerHTML={{ __html: item.description }}
                            className="blog-preview-content text-xs sm:text-sm text-gray-300 italic font-mono space-y-2"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-5 space-y-4 order-1 lg:order-2 lg:sticky lg:top-28">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                    <Lightbulb className="w-3.5 h-3.5" />
                    The Solution
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
                    Transforming complexity into effortless experience.
                  </h3>
                  {project.solution && (
                    <div
                      dangerouslySetInnerHTML={{ __html: project.solution }}
                      className="blog-preview-content text-base md:text-lg text-[#ADADAD] leading-relaxed space-y-4"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </SectionContainer>
      )}

      {/* Full Overview Rich Story */}
      {project.fullDescription && (
        <SectionContainer showTopBorder={false} showBottomBorder={true} className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            <span className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wider block mb-3">
              [ In-Depth Architecture ]
            </span>
            <div
              dangerouslySetInnerHTML={{ __html: project.fullDescription }}
              className="blog-preview-content text-gray-200 text-base md:text-lg leading-relaxed space-y-6"
            />
          </div>
        </SectionContainer>
      )}

      {/* Technologies & Next Step CTA */}
      <SectionContainer showTopBorder={false} showBottomBorder={false} className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-8">
          {project.technologies && (
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-400 font-medium block mb-3">
                Technologies & Core Capabilities
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {project.technologies.split(",").map((tech, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-full text-xs md:text-sm bg-white/10 text-white font-medium border border-white/10"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="pt-8 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Ready to elevate your project with proven design excellence?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mt-3 text-base">
              Let's partner to engineer high-converting digital products and memorable experiences.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact-section"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-base shadow-[0_0_30px_rgba(254,90,0,0.5)] transition-all"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/#feature-works"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-base border border-white/10 transition-all"
              >
                <span>View More Works</span>
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
