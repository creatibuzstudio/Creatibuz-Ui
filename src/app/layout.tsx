import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/lib/fonts";
import {
  siteMetadata,
  siteViewport,
  organizationJsonLd,
} from "@/config/site";
import "./globals.css";

export const viewport: Viewport = siteViewport;
export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col justify-between bg-[#080808] text-white font-sans selection:bg-[#F85800] selection:text-white">
        {children}
      </body>
    </html>
  );
}
