"use client";

import { CoachingCard, type CoachingItem } from "@/components/coaching-ui";
import { useCallback, useEffect, useRef, useState } from "react";

function ScrollArrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Zurück scrollen" : "Weiter scrollen"}
      className="flex h-8 w-8 shrink-0 items-center justify-center text-[#9ca3af] transition-colors hover:text-[#6b7280]"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        {direction === "left" ? (
          <path
            d="M10 3L5 8L10 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M6 3L11 8L6 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

export function CoachingCardsCarousel({ items }: { items: CoachingItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateProgress = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    setScrollProgress(maxScroll > 0 ? container.scrollLeft / maxScroll : 0);
  }, []);

  const scrollByAmount = useCallback((direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const amount = direction === "left" ? -360 : 360;
    container.scrollBy({ left: amount, behavior: "smooth" });
  }, []);

  useEffect(() => {
    updateProgress();
    window.addEventListener("resize", updateProgress);
    return () => window.removeEventListener("resize", updateProgress);
  }, [updateProgress]);

  const thumbWidth = 28;

  return (
    <>
      <div
        ref={scrollRef}
        onScroll={updateProgress}
        className="coaching-carousel -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 lg:-mx-8 lg:px-8"
      >
        {items.map((item) => (
          <CoachingCard
            key={`${item.overlayTitle}-${item.title}`}
            item={item}
            className="w-[min(85vw,340px)] shrink-0 snap-start sm:w-[360px]"
          />
        ))}
      </div>

      <div className="mt-8 flex items-center gap-3">
        <ScrollArrow direction="left" onClick={() => scrollByAmount("left")} />
        <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-[#e5e7eb]">
          <div
            className="absolute top-0 h-full rounded-full bg-[#9ca3af] transition-[left,width] duration-150"
            style={{
              width: `${thumbWidth}%`,
              left: `${scrollProgress * (100 - thumbWidth)}%`,
            }}
          />
        </div>
        <ScrollArrow direction="right" onClick={() => scrollByAmount("right")} />
      </div>
    </>
  );
}
