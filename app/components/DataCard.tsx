"use client";

import { useState } from "react";
import CountUp from "./CountUp";

interface DataCardProps {
    title: string;
    value: number;
    description: string;
    imageUrl?: string;
    tag?: string;
    valueText?: string;
}

export default function DataCard({ title, value, description, imageUrl, tag, valueText }: DataCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective h-[180] lg:h-[300]" style={{ perspective: "1000px" }}>
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative w-[180] lg:w-[300] h-full cursor-pointer transition-all duration-300 hover:scale-110"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped 
            ? "rotateX(180deg) perspective(1000px)" 
            : "rotateX(0deg) perspective(1000px)",
          transformOrigin: "center",
        }}
        onMouseEnter={(e) => {
          if (!isFlipped) {
            e.currentTarget.style.transform = "rotateX(-5deg) perspective(1000px)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isFlipped) {
            e.currentTarget.style.transform = "rotateX(0deg) perspective(1000px)";
          }
        }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-[#F98E26]/70 rounded-xl shadow-lg 
            p-2 lg:p-8
            flex flex-col items-center text-center justify-center"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <h3 className="text-md lg:text-2xl lg:mb-4 text-white">{title}</h3>
          {imageUrl && <img src={imageUrl} alt={title} className="w-20 h-20 mb-4" />}
          <CountUp end={value} duration={1500} textSize="3xl lg:text-4xl" bold={true} align="center" color="white"/>
          {/* show the provided static text value if passed */}
          {valueText && <p className="text-white text-sm mt-1">{valueText}</p>}
          <p className="text-white mt-2 hidden lg:block">
              {description}
          </p>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-[#F98E26]/70 bg-opacity-80 rounded-xl shadow-lg 
            p-2 lg:p-8
            flex flex-col items-center text-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
          }}
        >
          <p className="text-white text-sm lg:text-base">
            {description}
            {tag && (<><br /><br /><a href={tag} className="text-grey-600 underline" onClick={(e) => { e.stopPropagation(); }}>Más información</a></>)}
          </p>
        </div>
      </div>
    </div>
  );
}