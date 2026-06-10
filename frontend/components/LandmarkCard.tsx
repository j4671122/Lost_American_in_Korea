'use client'

import { useEffect, useState } from 'react'
import type { Landmark } from '@/lib/cities'

type Props = {
  landmark: Landmark
  color: string
  index: number
}

export default function LandmarkCard({ landmark, color, index }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 90)
    return () => clearTimeout(t)
  }, [index])

  const num = String(landmark.id).padStart(2, '0')

  return (
    <div
      className="group relative flex-1 h-full overflow-hidden cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.55s ease, transform 0.55s ease',
      }}
    >
      {/* Photo — zooms in on hover */}
      <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={landmark.image}
          alt={landmark.name}
          className="w-full h-full object-cover"
          style={{ opacity: 0, transition: 'opacity 0.6s ease' }}
          onLoad={(e) => { (e.target as HTMLImageElement).style.opacity = '1' }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
      </div>

      {/* Dark base layer */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

      {/* Gradient — bottom heavy, deepens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent
                      opacity-80 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Top accent line with glow */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 group-hover:h-[3px]"
        style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}aa` }}
      />

      {/* Number — top left */}
      <span
        className="absolute top-3 left-3 text-[11px] font-black tracking-widest select-none
                   opacity-40 group-hover:opacity-90 transition-opacity duration-300"
        style={{ color }}
      >
        {num}
      </span>

      {/* Right divider */}
      <div className="absolute top-4 right-0 bottom-4 w-px bg-white/10 group-hover:bg-white/0 transition-colors duration-300" />

      {/* Text — slides up on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-8
                   translate-y-1 group-hover:translate-y-0 transition-transform duration-350"
      >
        <p
          className="text-white font-bold text-[11px] tracking-[0.18em] uppercase leading-tight"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.9)' }}
        >
          {landmark.name}
        </p>
        <p
          className="text-white/0 group-hover:text-white/65 text-[10px] mt-1.5 leading-snug
                     transition-colors duration-400 line-clamp-2"
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
        >
          {landmark.description}
        </p>
      </div>
    </div>
  )
}
