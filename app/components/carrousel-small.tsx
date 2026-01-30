"use client";

import { useState } from "react";
import Image from "next/image";

interface CarouselImage {
  id: number;
  src: string;
  alt?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const prev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const getPosition = (i: number) => {
    if (i === index) return "center";
    if (i === (index - 1 + total) % total) return "left";
    if (i === (index + 1) % total) return "right";
    return "hidden";
  };

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden py-16">
      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-4 z-20 bg-white/80 rounded-full p-3 shadow"
      >
        ‹
      </button>

      {/* Carousel */}
      <div className="relative w-full max-w-5xl h-[320px] flex items-center justify-center">
        {images.map((img, i) => {
          const position = getPosition(i);

          return (
            <div
              key={img.id}
              className={`
                absolute transition-all duration-500 ease-in-out
                ${position === "center" && "scale-110 z-10 opacity-100"}
                ${position === "left" && "-translate-x-64 scale-90 opacity-60"}
                ${position === "right" && "translate-x-64 scale-90 opacity-60"}
                ${position === "hidden" && "opacity-0 scale-75"}
              `}
            >
              <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={img.src}
                  alt={img.alt || ""}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-4 z-20 bg-white/80 rounded-full p-3 shadow"
      >
        ›
      </button>
    </div>
  );
}
