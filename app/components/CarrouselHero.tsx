"use client"

import { useEffect, useState } from "react"

export interface HeroSlide {
  title: string
  subtitle: string
  image: string
  buttonText?: string
  buttonHref?: string
}

interface HeroCarouselProps {
  slides: HeroSlide[]
  interval?: number
}

export default function HeroCarousel({
  slides,
  interval = 6000,
}: HeroCarouselProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [slides.length, interval])

  return (
    <section className="relative h-[300px] lg:h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-20 flex h-full w-full items-center justify-center px-6">
            <div className="max-w-4xl text-center text-white">
              <h1 className="text-4xl lg:text-8xl font-bold leading-tight sm:text-4xl md:text-6xl">
                {slide.title}
              </h1>

              <p className="mt-4 lg:mt-32 text-base text-sm md:text-xl text-gray-200">
                {slide.subtitle}
              </p>

              {slide.buttonText && slide.buttonHref && (
                <a
                  href={slide.buttonHref}
                  className="mt-2 lg:mt-8 inline-block rounded-xl bg-[#F03C2B] px-4 lg:px-8 py-2 lg:py-3 text-base font-semibold text-white transition hover:bg-[#F03C2B]/80"
                >
                  {slide.buttonText}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition
              ${index === current ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  )
}
