'use client'

import { useEffect, useState } from 'react'
import type { Landmark } from '@/lib/cities'

const DANCHEONG = ['#C62828', '#F9A825', '#1B5E20', '#1A237E']
const HANJA = ['一', '二', '三', '四']

type Props = {
  landmark: Landmark
  color: string
  index: number
  isExpanded: boolean
  onHover: () => void
  onLeave: () => void
}

export default function LandmarkCard({ landmark, color, index, isExpanded, onHover, onLeave }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 90)
    return () => clearTimeout(t)
  }, [index])

  const floatDuration = 3.6 + index * 0.45
  const floatDelay = index * 0.8

  return (
    <div
      className="relative flex-1 h-full overflow-hidden cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity 0.6s ease ${index * 90}ms`,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Glassmorphism background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: isExpanded ? `${color}28` : `${color}18`,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRight: `1px solid ${color}22`,
          transition: 'background-color 0.4s ease',
        }}
      />

      {/* Dancheong top line */}
      <div className="absolute top-0 left-0 right-0 flex h-[2px] z-10">
        {DANCHEONG.map((dc, i) => (
          <div key={i} className="flex-1" style={{ backgroundColor: i === 1 ? color : dc }} />
        ))}
      </div>

      {/* Description panel — fades in at top when expanded */}
      <div
        className="absolute left-0 right-0 z-20 px-3 pt-5"
        style={{
          top: 0,
          opacity: isExpanded ? 1 : 0,
          transform: isExpanded ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s',
          pointerEvents: 'none',
        }}
      >
        <p
          className="text-white/80 leading-relaxed"
          style={{
            fontSize: '11px',
            textShadow: '0 1px 8px rgba(0,0,0,0.95)',
            display: '-webkit-box',
            WebkitLineClamp: 5,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          } as React.CSSProperties}
        >
          {landmark.description}
        </p>
      </div>

      {/* Floating cut-out photo — shifts down to make room for description */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: isExpanded ? '130px' : '14px',
          bottom: '52px',
          transition: 'top 0.4s cubic-bezier(0.4,0,0.2,1)',
          animation: visible ? `float ${floatDuration}s ease-in-out ${floatDelay}s infinite` : 'none',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={landmark.image}
          alt={landmark.name}
          className="w-full h-full"
          style={{
            objectFit: 'contain',
            opacity: 0,
            transition: 'opacity 0.6s ease',
            filter: `drop-shadow(0 4px 16px ${color}55)`,
          }}
          onLoad={e => { (e.target as HTMLImageElement).style.opacity = '1' }}
          onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
      </div>

      {/* Hanja number */}
      <div className="absolute top-4 right-3 z-10 select-none text-right">
        <p
          className="font-bold leading-none"
          style={{
            color,
            fontSize: '13px',
            opacity: isExpanded ? 0.85 : 0.35,
            transition: 'opacity 0.3s ease',
          }}
        >
          {HANJA[index] ?? String(landmark.id)}
        </p>
      </div>

      {/* Glass footer */}
      <div
        className="absolute bottom-0 left-0 right-0 px-3 py-2 z-10"
        style={{
          backgroundColor: `${color}22`,
          borderTop: `1px solid ${color}28`,
        }}
      >
        <p
          className="text-white font-bold text-[10px] tracking-[0.15em] uppercase leading-tight truncate"
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
        >
          {landmark.name}
        </p>
        <p
          className="text-[9px] font-light leading-none mt-0.5 truncate"
          style={{ color: 'rgba(255,255,255,0.80)' }}
        >
          {landmark.nameKo}
        </p>
      </div>
    </div>
  )
}
