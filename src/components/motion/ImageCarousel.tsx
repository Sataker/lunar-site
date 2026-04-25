"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const mobileTrackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const syncMode = () => setIsMobile(mediaQuery.matches);

    syncMode();
    mediaQuery.addEventListener("change", syncMode);
    return () => mediaQuery.removeEventListener("change", syncMode);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(index);

      if (isMobile && mobileTrackRef.current) {
        const width = mobileTrackRef.current.clientWidth;
        mobileTrackRef.current.scrollTo({
          left: index * width,
          behavior: "smooth",
        });
      }
    },
    [isMobile],
  );

  useEffect(() => {
    if (isMobile) return;

    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval, isMobile]);

  const handleMobileScroll = useCallback(() => {
    if (!mobileTrackRef.current) return;

    const width = mobileTrackRef.current.clientWidth;
    if (width <= 0) return;

    const index = Math.round(mobileTrackRef.current.scrollLeft / width);
    if (index !== current) {
      setCurrent(index);
    }
  }, [current]);

  return (
    <div className="relative">
      {isMobile ? (
        <div
          ref={mobileTrackRef}
          onScroll={handleMobileScroll}
          className="carousel-mobile-track relative overflow-x-auto rounded-xl border border-border shadow-2xl snap-x snap-mandatory scroll-smooth bg-[#0b0f14]"
          aria-label="Screenshots"
        >
          <div className="flex">
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full shrink-0 snap-start bg-[#0b0f14] flex items-center justify-center"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block w-full h-auto object-contain object-center"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-xl border border-border shadow-2xl bg-[#0b0f14]">
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
              className="absolute inset-0 w-full h-full object-contain object-center bg-[#0b0f14]"
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
              <path
                d="M12 5L7 10L12 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all cursor-pointer"
            aria-label="Next screenshot"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M8 5L13 10L8 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/35 backdrop-blur-sm">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              index === current
                ? "bg-accent w-6"
                : "bg-white/35 hover:bg-white/60 w-2"
            }`}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
