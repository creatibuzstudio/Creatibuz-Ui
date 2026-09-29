import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(248, 88, 0, 0.15), transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center max-w-lg mx-auto flex flex-col items-center">
        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">
          404 Not Found
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
          Lost in Digital Space
        </h1>
        <p className="text-zinc-400 text-base mb-8 leading-relaxed">
          The page you are looking for doesn&apos;t exist, has been removed, or
          is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium text-sm hover:brightness-110 transition-all duration-300 shadow-[0_0_25px_rgba(248,88,0,0.4)]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
