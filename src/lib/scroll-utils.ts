import type React from "react";

export function smoothScrollTo(targetY: number, duration = 1200): void {
  const startY = window.scrollY;
  const difference = targetY - startY;
  let startTime: number | null = null;

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startY + difference * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

export function handleSectionScroll(
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  href: string,
  onComplete?: () => void
): void {
  if (href.startsWith("#")) {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const headerOffset = 90;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      smoothScrollTo(offsetPosition, 1200);
    }
    onComplete?.();
  }
}
