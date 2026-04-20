"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  interval?: number;
}

export default function ImageCarousel({
  images,
  interval = 5000,
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-xl border border-[var(--color-border)] shadow-2xl">
        {/* First image sets the aspect ratio */}
        <img
          src={images[0].src}
          alt=""
          className="w-full h-auto block invisible"
          aria-hidden="true"
        />

        {/* All images stacked absolutely, only current one is visible */}
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={image.alt}
            animate={{ opacity: index === current ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all cursor-pointer"
          aria-label="Previous screenshot"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all cursor-pointer"
          aria-label="Next screenshot"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === current
                ? "bg-[var(--color-accent)] w-6"
                : "bg-[var(--color-muted)]/30 hover:bg-[var(--color-muted)]/60 w-2"
            }`}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
