"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";

type Slide = {
  src: StaticImageData;
  alt: string;
};

export default function ImageCarousel({ slides }: { slides: Slide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const startXRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);
  const dragThreshold = 80;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === slides.length - 1 ? 0 : current + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    startXRef.current = event.clientX;
    isDraggingRef.current = true;
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || startXRef.current === null) {
      return;
    }

    const deltaX = event.clientX - startXRef.current;
    if (Math.abs(deltaX) > dragThreshold) {
      if (deltaX > 0) {
        setActiveIndex((current) =>
          current === 0 ? slides.length - 1 : current - 1,
        );
      } else {
        setActiveIndex((current) =>
          current === slides.length - 1 ? 0 : current + 1,
        );
      }

      isDraggingRef.current = false;
      startXRef.current = null;
    }
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    startXRef.current = null;
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-black/50">
      <div
        className="relative aspect-22/20 w-full overflow-hidden"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <Image
          src={slides[activeIndex].src}
          alt={slides[activeIndex].alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === activeIndex
                ? "bg-white"
                : "bg-white/30 hover:bg-white/70"
            }`}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
