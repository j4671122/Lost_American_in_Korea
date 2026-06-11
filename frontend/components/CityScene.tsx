'use client'

import { useState } from 'react'
import { getCityBackgroundImage } from '@/lib/cities'

type Props = {
  cityId: string
  cityName: string
  cityNameKo: string
  cityColor: string
}

function OptionalImg({ src, alt, className }: { src: string; alt: string; className: string }) {
  const [visible, setVisible] = useState(false)
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease' }}
      onLoad={() => setVisible(true)}
      onError={(e) => { ;(e.target as HTMLImageElement).style.display = 'none' }}
    />
  )
}

export default function CityScene({ cityId, cityName, cityNameKo, cityColor }: Props) {
  return (
    <>
      {/* 배경 사진 */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${getCityBackgroundImage(cityId)}')`,
          backgroundColor: cityColor + '22',
        }}
      />

      {/* 그라디언트 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* 좌측 건물 */}
      <div className="absolute left-0 top-0 bottom-0 w-64 pointer-events-none">
        <OptionalImg
          src={`/cities/${cityId}/building-left.png`}
          alt=""
          className="w-full h-full object-contain object-bottom"
        />
      </div>

      {/* 우측 건물 */}
      <div className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none">
        <OptionalImg
          src={`/cities/${cityId}/building-right.png`}
          alt=""
          className="w-full h-full object-contain object-bottom"
        />
      </div>

      {/* 도시 이름 — 한/영 이중 표기 */}
      <div className="absolute top-6 left-0 right-0 flex flex-col items-center pointer-events-none gap-1">
        <h1
          className="font-black tracking-[0.2em] text-white select-none leading-none"
          style={{
            fontSize: 'clamp(36px,6vw,72px)',
            textShadow: `0 0 40px ${cityColor}88, 0 2px 8px rgba(0,0,0,0.8)`,
          }}
        >
          {cityName.toUpperCase()}
        </h1>
        <p
          className="font-light tracking-[0.5em] select-none"
          style={{
            fontSize: 'clamp(14px,2vw,22px)',
            color: '#000000',
            textShadow: '0 0 16px rgba(255,255,255,1), 0 1px 6px rgba(255,255,255,0.9)',
          }}
        >
          {cityNameKo}
        </p>
      </div>
    </>
  )
}
