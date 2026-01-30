"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  start?: number;
  textSize?: string;
  bold?: boolean;
  align?: "left" | "center" | "right";
  color?: "white" | "black" | "red" | "gray";
}


const colorClasses = {
  white: "text-white",
  black: "text-black",
  red: "text-red-500",
  gray: "text-gray-500",
};

export default function CountUp({
  end,
  duration = 1500,
  start = 0,
  textSize = "xl",
  bold = false,
  align = "center",
  color = "white",
}: CountUpProps) {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  // 👀 Trigger when visible
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // 🔢 Animate count
  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const percentage = Math.min(progress / duration, 1);
      const value = Math.floor(start + percentage * (end - start));

      setCount(value);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, start, end, duration]);

  return (
    <span
      ref={ref}
      className={`
        ${"text-" + textSize}
        ${colorClasses[color]}
        ${bold ? "font-bold" : ""}
        ${align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center"}
      `}
    >
      {count.toLocaleString()}
    </span>
  );
}
