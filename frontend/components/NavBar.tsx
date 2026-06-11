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

      {/* ── 로고 ── */}
      <button
        onClick={() => setShowLogoModal(true)}
        className="flex flex-col items-center justify-center w-36 shrink-0 border-r border-white/10 px-3 py-2 hover:bg-white/5 transition-colors duration-200 cursor-pointer gap-1.5"
        aria-label="Lost American in Korea"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.jpg" alt="Lost American in Korea" className="w-14 h-14 object-contain" />
        <div className="text-center leading-none space-y-0.5">
          <p className="text-white text-[8px] font-black tracking-[0.28em] uppercase">Lost American</p>
          <p className="text-white/35 text-[7px] tracking-[0.22em] uppercase">in Korea</p>
        </div>
      </button>

      {/* ── 도시 탭 ── */}
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
              {/* 건물 이미지 */}
              <div className="w-full h-[52px] relative overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${city.color}33, ${city.color}11)` }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    transform: `scaleY(-1) scale(${isHovered || isActive ? 1.15 : 1})`,
                    transformOrigin: 'center bottom',
                    filter: isHovered || isActive
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
                    onLoad={(e) => { ;(e.target as HTMLImageElement).style.opacity = '1' }}
                    onError={(e) => { ;(e.target as HTMLImageElement).style.display = 'none' }}
                  />
                </div>
              </div>

              {/* 도시명 (영어 + 한국어) */}
              <div
                className="h-[44px] flex flex-col items-center justify-center w-full px-1 transition-colors duration-200"
                style={{ backgroundColor: isActive ? city.color : 'transparent' }}
              >
                <span
                  className="text-[10px] font-bold tracking-wide leading-none text-center transition-colors duration-200"
                  style={{ color: isActive ? '#ffffff' : isHovered ? city.color : 'rgba(255,255,255,0.50)' }}
                >
                  {city.name}
                </span>
                <span
                  className="text-[9px] leading-none mt-0.5 transition-colors duration-200"
                  style={{ color: isActive ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.22)' }}
                >
                  {city.nameKo}
                </span>
              </div>
            </Link>
          )
        })}
      </div>

      {/* ── 여행가이드 링크 ── */}
      <Link
        href="/guide"
        className="flex flex-col items-center justify-center w-16 shrink-0 border-l border-white/10 gap-1.5 hover:bg-white/5 transition-colors duration-200"
      >
        <span className="text-[8px] tracking-[0.25em] font-bold text-white/40 hover:text-white/70 transition-colors duration-200 uppercase">
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

    {/* ── 로고 풀스크린 모달 ── */}
    {showLogoModal && (
      <div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer"
        style={{ backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)', backgroundColor: 'rgba(0,0,0,0.80)' }}
        onClick={() => setShowLogoModal(false)}
      >
        {/* 로고 이미지 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.jpg"
          alt="Lost American in Korea"
          className="w-56 h-56 object-contain mb-10 select-none"
          style={{ filter: 'drop-shadow(0 0 50px rgba(255,255,255,0.18))' }}
        />

        {/* 타이포그래피 */}
        <div className="flex flex-col items-center gap-4 select-none">
          <p className="text-white/25 text-[10px] tracking-[0.6em] uppercase font-light">Welcome to</p>
          <h1
            className="text-white font-black tracking-[0.22em] uppercase leading-none"
            style={{ fontSize: 'clamp(40px,8vw,100px)', textShadow: '0 0 80px rgba(255,255,255,0.18)' }}
          >
            Lost American
          </h1>
          <div className="flex items-center gap-5 w-full max-w-xl">
            <div className="flex-1 h-px bg-white/15" />
            <p className="text-white/55 tracking-[0.55em] uppercase font-light" style={{ fontSize: 'clamp(14px,2vw,22px)' }}>
              in Korea
            </p>
            <div className="flex-1 h-px bg-white/15" />
          </div>
        </div>

        <p className="absolute bottom-10 text-white/18 text-[10px] tracking-[0.3em] uppercase">
          Click anywhere to close
        </p>
      </div>
    )}
    </>
  )
}
