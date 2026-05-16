'use client'

import type { Landmark } from '@/lib/cities'
import PixelLandmark from './PixelLandmark'

type Props = {
  landmark: Landmark
  color: string
}

export default function LandmarkCard({ landmark, color }: Props) {
  return (
    <div className="group relative flex flex-col items-center cursor-pointer">
      {/* Tooltip — appears above image on hover, tail at BOTTOM pointing down */}
      <div
        className="absolute bottom-full mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 w-52"
        style={{ left: '50%', transform: 'translateX(-50%)' }}
      >
        <div
          className="rounded-lg px-3 py-2 text-white text-center shadow-lg"
          style={{ backgroundColor: color }}
        >
          <p className="font-bold text-xs leading-tight">{landmark.name}</p>
          <p className="text-xs mt-1 opacity-90 leading-tight">{landmark.description}</p>
        </div>
        {/* Tail: downward-pointing ▼ */}
        <div className="flex justify-center">
          <div
            className="w-0 h-0"
            style={{
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderTop: `10px solid ${color}`,
            }}
          />
        </div>
      </div>

      {/* Circle — pixel art base, real photo fades in on top when available */}
      <div
        className="w-16 h-16 rounded-full overflow-hidden border-2 transition-transform duration-200 group-hover:scale-[1.4] group-hover:z-10 relative bg-[#0a0a0a]"
        style={{ borderColor: color }}
      >
        {/* Pixel art always visible as base */}
        <PixelLandmark type={(landmark.id - 1) % 5} color={color} />

        {/* Real photo overlaid — fades in when loaded, hidden on error */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={landmark.image}
          alt={landmark.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0, transition: 'opacity 0.4s' }}
          onLoad={(e) => {
            ;(e.target as HTMLImageElement).style.opacity = '1'
          }}
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
        />
      </div>
    </div>
  )
}
