import React from "react";

interface TextMarqueeRowProps {
  items: string[];
  direction?: "left" | "right";
}

export function TextMarqueeRow({
  items,
  direction = "left",
}: TextMarqueeRowProps) {
  const repeated = [...items, ...items, ...items, ...items];
  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="w-full bg-primary py-3 md:py-3.5 overflow-hidden shadow-md">
      <div className={`${animationClass} flex items-center`}>
        {repeated.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center text-white text-base md:text-xl lg:text-2xl tracking-wide shrink-0"
          >
            <span>{item}</span>
            <span className="mx-4 sm:mx-6 text-white/90 text-sm font-black">
              •
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TextMarqueeRow;
