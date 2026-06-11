'use client'

import { useState } from 'react'
import LandmarkCard from './LandmarkCard'
import type { Landmark } from '@/lib/cities'

type Props = {
  landmarks: Landmark[]
  color: string
}

export default function LandmarkStrip({ landmarks, color }: Props) {
  const [open, setOpen] = useState(true)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  const panelHeight = open
    ? (hoveredIdx !== null ? '360px' : '210px')
    : '0px'

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10">

      {/* Toggle tab */}
      <div className="flex justify-center">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2.5 px-6 py-2 rounded-t-2xl text-[10px] font-bold tracking-[0.35em] uppercase transition-colors duration-300"
          style={{
            backgroundColor: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderTop: `1px solid ${color}44`,
            borderLeft: `1px solid ${color}28`,
            borderRight: `1px solid ${color}28`,
            color: open ? color : 'rgba(255,255,255,0.35)',
          }}
        >
          <span>Landmarks</span>
          <span style={{
            display: 'inline-block',
            transform: open ? 'rotate(0deg)' : 'rotate(180deg)',
            transition: 'transform 0.38s cubic-bezier(0.4,0,0.2,1)',
          }}>▼</span>
        </button>
      </div>

      {/* Frosted glass panel */}
      <div
        style={{
          height: panelHeight,
          overflow: 'hidden',
          transition: 'height 0.4s cubic-bezier(0.4,0,0.2,1)',
          backgroundColor: 'rgba(0,0,0,0.52)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          borderTop: `1px solid ${open ? color + '28' : 'transparent'}`,
          backgroundImage: [
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
            'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '14px 14px',
        }}
      >
        <div className="flex h-full">
          {landmarks.map((landmark, i) => (
            <LandmarkCard
              key={landmark.id}
              landmark={landmark}
              color={color}
              index={i}
              isExpanded={hoveredIdx === i}
              onHover={() => setHoveredIdx(i)}
              onLeave={() => setHoveredIdx(null)}
            />
          ))}
        </div>
      </div>

    </div>
  )
}
