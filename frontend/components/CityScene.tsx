'use client'

import { useState } from 'react'

type Props = {
  cityId: string
  cityName: string
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
      onError={(e) => {
        ;(e.target as HTMLImageElement).style.display = 'none'
      }}
    />
  )
}

export default function CityScene({ cityId, cityName, cityColor }: Props) {
  return (
    <>
      {/* Background photo — fallback to city color tint if image missing */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/cities/${cityId}/background.jpg')`,
          backgroundColor: cityColor + '22',
        }}
      />

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Left building */}
      <div className="absolute left-0 top-0 bottom-0 w-64 pointer-events-none">
        <OptionalImg
          src={`/cities/${cityId}/building-left.png`}
          alt=""
          className="w-full h-full object-contain object-bottom"
        />
      </div>

      {/* Right building */}
      <div className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none">
        <OptionalImg
          src={`/cities/${cityId}/building-right.png`}
          alt=""
          className="w-full h-full object-contain object-bottom"
        />
      </div>

      {/* Person — center */}
      <div className="absolute inset-0 flex items-end justify-center pb-4 pointer-events-none">
        <div className="w-48 h-4/5">
          <OptionalImg
            src={`/cities/${cityId}/person.png`}
            alt=""
            className="w-full h-full object-contain object-bottom"
          />
        </div>
      </div>

      {/* City name */}
      <div className="absolute top-6 left-0 right-0 flex justify-center pointer-events-none">
        <h1
          className="text-6xl font-black tracking-[0.2em] text-white select-none"
          style={{ textShadow: `0 0 40px ${cityColor}88, 0 2px 8px rgba(0,0,0,0.8)` }}
        >
          {cityName.toUpperCase()}
        </h1>
      </div>
    </>
  )
}
