"use client";

import { useEffect, useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import { parsePosition, computeCardTransform } from "./scroll-stack.utils";
import type { CardTransform } from "./scroll-stack.types";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface UseScrollStackParams {
  scrollerRef: React.RefObject<HTMLDivElement | null>;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  useWindowScroll?: boolean;
  bottomOffset?: number;
  onStackComplete?: () => void;
}

export function useScrollStack({
  scrollerRef,
  itemDistance = 750,
  itemScale = 0.05,
  itemStackDistance = 22,
  stackPosition = "70px",
  useWindowScroll = true,
  bottomOffset = 60,
  onStackComplete,
}: UseScrollStackParams) {
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const cardTopsRef = useRef<number[]>([]);
  const cardHeightsRef = useRef<number[]>([]);
  const lastTransformsRef = useRef<Map<number, CardTransform>>(new Map());
  const isUpdatingRef = useRef(false);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return { scrollTop: window.scrollY, containerHeight: window.innerHeight };
    }
    const scroller = scrollerRef.current;
    return {
      scrollTop: scroller ? scroller.scrollTop : 0,
      containerHeight: scroller ? scroller.clientHeight : 0,
    };
  }, [useWindowScroll, scrollerRef]);

  const measureCardTops = useCallback(() => {
    if (!cardsRef.current.length) return;
    if (useWindowScroll) {
      cardTopsRef.current = cardsRef.current.map((card, idx) => {
        const rect = card.getBoundingClientRect();
        const currentTranslateY = lastTransformsRef.current.get(idx)?.translateY ?? 0;
        return rect.top + window.scrollY - currentTranslateY;
      });
      cardHeightsRef.current = cardsRef.current.map(
        (card) => card.offsetHeight || card.getBoundingClientRect().height
      );
    } else {
      cardTopsRef.current = cardsRef.current.map((card) => card.offsetTop);
      cardHeightsRef.current = cardsRef.current.map((card) => card.offsetHeight);
    }
  }, [useWindowScroll]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;
    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const defaultStackTop = parsePosition(stackPosition, containerHeight);
    const lastIdx = cardsRef.current.length - 1;
    const lastCardTop = cardTopsRef.current[lastIdx] ?? 0;
    const lastCardHeight = cardHeightsRef.current[lastIdx] ?? 0;
    const lastTargetTop =
      Math.min(defaultStackTop, containerHeight - lastCardHeight - bottomOffset) +
      itemStackDistance * lastIdx;
    const pinEnd = lastCardTop - lastTargetTop;
    const scaleStep = itemScale > 0 ? itemScale : 0.05;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const cardTop = cardTopsRef.current[i] ?? 0;
      const cardHeight = cardHeightsRef.current[i] ?? 0;

      const newTransform = computeCardTransform(
        i,
        cardTop,
        cardHeight,
        defaultStackTop,
        containerHeight,
        bottomOffset,
        itemStackDistance,
        pinEnd,
        scrollTop,
        cardTopsRef.current,
        cardsRef.current.length,
        scaleStep
      );

      const last = lastTransformsRef.current.get(i);
      const changed =
        !last ||
        Math.abs(last.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(last.scale - newTransform.scale) > 0.002;

      if (changed) {
        card.style.transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale})`;
        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === lastIdx) {
        const pinStart = cardTop - (defaultStackTop + itemStackDistance * i);
        const inView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (inView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!inView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    stackPosition,
    bottomOffset,
    itemScale,
    itemStackDistance,
    onStackComplete,
    getScrollData,
  ]);

  useIsomorphicLayoutEffect(() => {
    if (!useWindowScroll && !scrollerRef.current) return;

    cardsRef.current = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : (scrollerRef.current?.querySelectorAll(".scroll-stack-card") ?? [])
    ) as HTMLElement[];

    cardsRef.current.forEach((card, i) => {
      card.style.marginBottom = i < cardsRef.current.length - 1 ? `${itemDistance}px` : "0px";
      card.style.zIndex = `${10 + i}`;
      card.style.willChange = "transform";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.transform = "translateZ(0)";
    });

    measureCardTops();

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1,
    });

    const handleScroll = () => updateCardTransforms();
    lenis.on("scroll", handleScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);
    lenisRef.current = lenis;

    const handleResize = () => {
      measureCardTops();
      updateCardTransforms();
    };

    if (useWindowScroll) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleResize);
    }

    const t1 = setTimeout(() => { measureCardTops(); updateCardTransforms(); }, 300);
    const t2 = setTimeout(() => { measureCardTops(); updateCardTransforms(); }, 1200);
    updateCardTransforms();

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      lenis.destroy();
      if (useWindowScroll) {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      }
      cardsRef.current = [];
      lastTransformsRef.current.clear();
    };
  }, [itemDistance, useWindowScroll, measureCardTops, updateCardTransforms, scrollerRef]);

  return { scrollerRef };
}
