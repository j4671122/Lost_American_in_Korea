'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cities } from '@/lib/cities'
import { guides } from '@/lib/guides'

export default function NavBar() {
  const pathname = usePathname()
  const activeCityId = pathname.split('/').pop() ?? 'seoul'
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const [showLogoModal, setShowLogoModal] = useState(false)

  return (
    <>
    <nav className="flex items-stretch h-24 bg-black/90 backdrop-blur-sm shrink-0">
      {/* Logo */}
      <button
        onClick={() => setShowLogoModal(true)}
        className="flex items-center justify-center w-28 shrink-0 border-r border-white/10 px-2 hover:bg-white/5 transition-colors duration-200 cursor-pointer"
        aria-label="Lost American in Korea"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.jpg" alt="Lost American in Korea" className="w-full h-20 object-contain" />
      </button>

      {/* City tabs */}
      <div className="flex flex-1 min-w-0">
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

      {/* Guide link */}
      <Link
        href="/guide"
        className="flex flex-col items-center justify-center w-16 shrink-0 border-l border-white/10 gap-1 hover:bg-white/5 transition-colors duration-200"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-white/30 hover:text-white/70 transition-colors duration-200">
          Guide
        </span>
        <div className="flex gap-[3px]">
          {guides.slice(0, 4).map((g) => {
            const c = cities.find((ci) => ci.id === g.cityId)
            return (
              <span
                key={g.cityId}
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: c?.color ?? '#fff', opacity: 0.5 }}
              />
            )
          })}
        </div>
      </Link>
    </nav>

    {/* Logo fullscreen modal */}
    {showLogoModal && (
      <div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer"
        style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', backgroundColor: 'rgba(0,0,0,0.75)' }}
        onClick={() => setShowLogoModal(false)}
      >
        {/* Logo image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.jpg"
          alt="Lost American in Korea"
          className="w-64 h-64 object-contain mb-10 select-none"
          style={{ filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.15))' }}
        />

        {/* Typography */}
        <div className="flex flex-col items-center gap-3 select-none">
          <p className="text-white/30 text-xs tracking-[0.5em] uppercase font-light">Welcome to</p>
          <h1
            className="text-white text-7xl font-black tracking-[0.25em] uppercase leading-none"
            style={{ textShadow: '0 0 60px rgba(255,255,255,0.2)' }}
          >
            Lost American
          </h1>
          <div className="flex items-center gap-4 w-full">
            <div className="flex-1 h-px bg-white/20" />
            <p className="text-white/60 text-2xl font-light tracking-[0.6em] uppercase">in Korea</p>
            <div className="flex-1 h-px bg-white/20" />
          </div>
        </div>

        <p className="absolute bottom-10 text-white/20 text-xs tracking-[0.3em] uppercase">Click anywhere to close</p>
      </div>
    )}
    </>
  )
}
