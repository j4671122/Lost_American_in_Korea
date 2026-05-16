'use client'

import { useState } from 'react'
import type { City } from '@/lib/cities'

type Props = {
  city: City
}

export default function CityIntroToggle({ city }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative flex flex-col items-end shrink-0">
      {/* Slide-up panel */}
      <div
        className="absolute bottom-full right-0 mb-2 w-72 overflow-hidden transition-all duration-300 ease-in-out rounded-lg shadow-xl"
        style={{
          maxHeight: open ? '200px' : '0px',
          opacity: open ? 1 : 0,
        }}
      >
        <div
          className="p-4 text-white text-sm leading-relaxed"
          style={{ backgroundColor: city.color + 'dd' }}
        >
          <p className="font-bold text-base mb-1">{city.name}</p>
          <p className="opacity-90">{city.description}</p>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all duration-200 hover:brightness-110 shrink-0"
        style={{ backgroundColor: city.color }}
      >
        <span>{city.name}</span>
        <span
          className="transition-transform duration-300"
          style={{ display: 'inline-block', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          ▲
        </span>
      </button>
    </div>
  )
}
