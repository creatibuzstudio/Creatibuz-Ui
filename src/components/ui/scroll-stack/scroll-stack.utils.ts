import type { CardTransform } from "./scroll-stack.types";

export function calculateProgress(
  scrollTop: number,
  start: number,
  end: number
): number {
  if (scrollTop <= start) return 0;
  if (scrollTop >= end) return 1;
  return (scrollTop - start) / (end - start);
}

export function parsePosition(
  value: string | number,
  containerHeight: number
): number {
  if (typeof value === "string") {
    if (value.includes("%") || value.includes("vh")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    if (value.includes("px")) {
      return parseFloat(value);
    }
  }
  return parseFloat(value as string);
}

export function computeCardTransform(
  i: number,
  cardTop: number,
  cardHeight: number,
  defaultStackTop: number,
  containerHeight: number,
  bottomOffset: number,
  itemStackDistance: number,
  pinEnd: number,
  scrollTop: number,
  cardTops: number[],
  cardsLength: number,
  scaleStep: number
): CardTransform {
  const baseTargetTop = Math.min(
    defaultStackTop,
    containerHeight - cardHeight - bottomOffset
  );
  const targetTop = baseTargetTop + itemStackDistance * i;
  const pinStart = cardTop - targetTop;

  let scale = 1.0;
  for (let j = i + 1; j < cardsLength; j++) {
    const jCardTop = cardTops[j] ?? 0;
    const jPinStart = jCardTop - (defaultStackTop + itemStackDistance * j);
    const scaleStart = Math.min(jCardTop - containerHeight / 2, jPinStart - 100);
    scale -= scaleStep * calculateProgress(scrollTop, scaleStart, jPinStart);
  }

  let translateY = 0;
  if (scrollTop >= pinStart && scrollTop <= pinEnd) {
    translateY = scrollTop - cardTop + targetTop;
  } else if (scrollTop > pinEnd) {
    translateY = pinEnd - cardTop + targetTop;
  }

  return {
    translateY: Math.round(translateY * 100) / 100,
    scale: Math.round(scale * 1000) / 1000,
  };
}
