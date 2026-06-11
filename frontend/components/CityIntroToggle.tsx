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
      {/* 슬라이드다운 패널 */}
      <div
        className="absolute top-full right-0 mt-2 w-72 overflow-hidden transition-all duration-300 ease-in-out rounded-lg shadow-xl"
        style={{ maxHeight: open ? '200px' : '0px', opacity: open ? 1 : 0 }}
      >
        <div
          className="p-4 text-white text-sm leading-relaxed"
          style={{ backgroundColor: city.color + 'dd' }}
        >
          <div className="flex items-baseline gap-2 mb-2">
            <p className="font-bold text-base">{city.name}</p>
            <p className="text-sm opacity-60 font-light">{city.nameKo}</p>
          </div>
          <p className="opacity-90 text-sm leading-relaxed">{city.description}</p>
        </div>
      </div>

      {/* 토글 버튼 */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all duration-200 hover:brightness-110 shrink-0"
        style={{ backgroundColor: city.color }}
      >
        <span>{city.name}</span>
        <span className="opacity-60 text-[10px] font-light">{city.nameKo}</span>
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
