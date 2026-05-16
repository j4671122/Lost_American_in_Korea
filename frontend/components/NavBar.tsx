'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cities } from '@/lib/cities'

export default function NavBar() {
  const pathname = usePathname()
  const activeCityId = pathname.split('/').pop() ?? 'seoul'
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)

  return (
    <nav className="flex items-stretch h-24 bg-black/90 backdrop-blur-sm shrink-0">
      {/* Logo */}
      <div className="flex items-center justify-center w-20 shrink-0 border-r border-white/10 px-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.jpg" alt="Lost American in Korea" className="w-full h-14 object-contain" />
      </div>

      {/* City tabs */}
      <div className="flex flex-1">
        {cities.map((city) => {
          const isActive = city.id === activeCityId
          const isHovered = hoveredCity === city.id

          return (
            <Link
              key={city.id}
              href={`/cities/${city.id}`}
              className="flex-1 flex flex-col items-center border-r border-white/10 last:border-r-0 relative overflow-hidden"
              style={{ backgroundColor: isActive ? city.color + '22' : 'transparent' }}
              onMouseEnter={() => setHoveredCity(city.id)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              {/* Building image — upside-down at the top */}
              <div className="w-full h-[60px] relative overflow-hidden">
                {/* Gradient placeholder (always visible behind the image) */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${city.color}33, ${city.color}11)`,
                  }}
                />
                {/* Actual building image, flipped vertically */}
                <div
                  className="absolute inset-0"
                  style={{
                    transform: `scaleY(-1) scale(${isHovered || isActive ? 1.15 : 1})`,
                    transformOrigin: 'center bottom',
                    filter:
                      isHovered || isActive
                        ? `drop-shadow(0 0 6px ${city.color}) brightness(1.25)`
                        : 'none',
                    transition: 'transform 0.25s ease, filter 0.25s ease',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/cities/${city.id}/nav-building.png`}
                    alt=""
                    className="w-full h-full object-cover object-top"
                    style={{ opacity: 0, transition: 'opacity 0.3s' }}
                    onLoad={(e) => {
                      ;(e.target as HTMLImageElement).style.opacity = '1'
                    }}
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />
                </div>
              </div>

              {/* City name */}
              <div
                className="h-[36px] flex items-center justify-center w-full transition-colors duration-200"
                style={{ backgroundColor: isActive ? city.color : 'transparent' }}
              >
                <span
                  className="text-xs font-semibold tracking-wide leading-tight px-1 text-center transition-colors duration-200"
                  style={{
                    color: isActive
                      ? '#ffffff'
                      : isHovered
                        ? city.color
                        : 'rgba(255,255,255,0.45)',
                  }}
                >
                  {city.name}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
