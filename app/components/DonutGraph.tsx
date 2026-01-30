"use client"

import { useRef, useState } from "react"

export type DonutSegment = {
  id: string
  label: string
  value: number
  color: string
}

type DonutGraphProps = {
  segments: DonutSegment[]
  size?: number
  thickness?: number
}

export default function DonutGraph({
  segments,
  size = 200,
  thickness = 20,
}: DonutGraphProps) {
  const donutRef = useRef<HTMLDivElement | null>(null)
  const [activeSegment, setActiveSegment] = useState<DonutSegment | null>(null)

  const total = segments.reduce((sum, s) => sum + s.value, 0)

  // Build angle map
  let currentAngle = 0
  const computedSegments = segments.map(segment => {
    const angle = (segment.value / total) * 360
    const startAngle = currentAngle
    const endAngle = currentAngle + angle
    currentAngle = endAngle

    return { ...segment, startAngle, endAngle }
  })

  const gradient = computedSegments
    .map(
      s =>
        `${s.color} ${(s.startAngle / 360) * 100}% ${(s.endAngle / 360) * 100}%`
    )
    .join(", ")

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!donutRef.current) return

    const rect = donutRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2

    const x = e.clientX - cx
    const y = e.clientY - cy

    let angle = Math.atan2(y, x) * (180 / Math.PI)
    angle = angle < 0 ? angle + 360 : angle
    angle = (angle + 900) % 360 // start from top

    const clicked = computedSegments.find(
      s => angle >= s.startAngle && angle < s.endAngle
    )

    if (clicked) setActiveSegment(clicked)
  }

  return (
    <div
      ref={donutRef}
      onClick={handleClick}
      className="relative cursor-pointer rounded-full transition-all duration-300"
      style={{
        width: size,
        height: size,
        background: `conic-gradient(${gradient})`,
      }}
    >
      {/* Donut hole */}
      <div
        className="absolute inset-0 flex items-center justify-center rounded-full bg-white"
        style={{ margin: thickness }}
      >
        {activeSegment ? (
          <div className="text-center">
            <p className="text-xs text-gray-500">
              {activeSegment.label}
            </p>
            <p className="text-xl font-bold">
              {activeSegment.value}
            </p>
            <p className="text-xs text-gray-400">
              {Math.round((activeSegment.value / total) * 100)}%
            </p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xs text-gray-400">Total</p>
            <p className="text-xl font-bold">{total}</p>
          </div>
        )}
      </div>
    </div>
  )
}
