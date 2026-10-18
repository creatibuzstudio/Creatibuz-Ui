export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  image: string;
  badgeIcon: string;
  badgeAlt?: string;
  bio?: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  badgeTag: string;
  excerpt: string;
  content: string;
  image: string;
  alt: string;
  author: BlogAuthor;
  publishedAt: string;
  readingTime: string;
  views?: number;
  tags?: string[];
  keyTakeaways?: string[];
  metaTitle?: string;
  metaDescription?: string;
  focusKeyword?: string;
  secondaryKeywords?: string[];
}
