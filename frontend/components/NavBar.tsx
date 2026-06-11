'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cities, getCityBackgroundImage } from '@/lib/cities'
import { guides } from '@/lib/guides'

export default function NavBar() {
  const pathname = usePathname()
  const activeCityId = pathname.split('/').pop() ?? 'seoul'
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const [hoveredAction, setHoveredAction] = useState<'korea' | 'guide' | null>(null)
  const [showLogoModal, setShowLogoModal] = useState(false)

  return (
    <>
    <nav className="nav-scrollbar flex items-stretch h-16 md:h-24 bg-black/92 backdrop-blur-md shrink-0 border-b border-white/10 overflow-x-auto overflow-y-hidden md:overflow-visible">

      {/* ── 로고 ── */}
      <button
        onClick={() => setShowLogoModal(true)}
        className="flex flex-col items-center justify-center w-20 md:w-36 shrink-0 border-r border-white/10 px-2 md:px-3 py-2 hover:bg-white/5 transition-colors duration-200 cursor-pointer gap-1 md:gap-1.5"
        aria-label="Lost American in Korea"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.jpg" alt="Lost American in Korea" className="w-9 h-9 md:w-14 md:h-14 object-contain" />
        <div className="hidden md:block text-center leading-none space-y-0.5">
          <p className="text-white text-[8px] font-black tracking-[0.28em] uppercase">Lost American</p>
          <p className="text-white/35 text-[7px] tracking-[0.22em] uppercase">in Korea</p>
        </div>
      </button>

      {/* ── 도시 탭 ── */}
      <div className="flex flex-1 min-w-max md:min-w-0">
        {cities.map((city) => {
          const isActive = city.id === activeCityId
          const isHovered = hoveredCity === city.id

          return (
            <Link
              key={city.id}
              href={`/cities/${city.id}`}
              className="w-[76px] md:w-auto md:flex-1 flex flex-col items-center border-r border-white/10 last:border-r-0 relative overflow-hidden transition-colors duration-200"
              style={{ backgroundColor: isActive ? city.color + '22' : 'transparent' }}
              onMouseEnter={() => setHoveredCity(city.id)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              {/* 건물 이미지 */}
              <div className="hidden md:block w-full h-[52px] relative overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background: isHovered
                      ? `linear-gradient(to top, ${city.color}44, ${city.color}18)`
                      : isActive
                      ? `linear-gradient(to top, ${city.color}28, ${city.color}0a)`
                      : 'linear-gradient(to top, rgba(255,255,255,0.07), rgba(255,255,255,0.015))',
                    transition: 'background 0.25s ease',
                  }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getCityBackgroundImage(city.id)}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    transform: `scale(${isHovered ? 1.1 : 1})`,
                    filter: isHovered ? 'brightness(1.15)' : isActive ? 'brightness(0.85) saturate(1.2)' : 'grayscale(0.4) brightness(0.55)',
                    transition: 'transform 0.25s ease, filter 0.25s ease',
                    opacity: 0,
                  }}
                  onLoad={(e) => { ;(e.target as HTMLImageElement).style.opacity = '1' }}
                  onError={(e) => { ;(e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>

              {/* 도시명 (영어 + 한국어) */}
              <div
                className="h-16 md:h-[44px] flex flex-col items-center justify-center w-full px-2 transition-colors duration-200"
                style={{ backgroundColor: isHovered ? city.color : isActive ? city.color + '18' : 'transparent' }}
              >
                <span
                  className="text-[10px] md:text-[10px] font-bold tracking-wide leading-none text-center transition-colors duration-200"
                  style={{ color: isHovered || isActive ? '#ffffff' : 'rgba(255,255,255,0.46)' }}
                >
                  {city.name}
                </span>
                <span
                  className="text-[9px] leading-none mt-1 md:mt-0.5 transition-colors duration-200"
                  style={{ color: isHovered ? 'rgba(0,0,0,0.72)' : isActive ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.55)' }}
                >
                  {city.nameKo}
                </span>
              </div>
              {isActive && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-[2px] md:top-0 md:bottom-auto"
                  style={{ backgroundColor: city.color, boxShadow: `0 0 8px ${city.color}` }}
                />
              )}
            </Link>
          )
        })}
      </div>

      {/* ── 한국 역사 링크 ── */}
      <Link
        href="/korea"
        className="flex flex-col items-center justify-center w-16 md:w-16 shrink-0 border-l border-white/10 gap-1.5 hover:bg-white/5 transition-colors duration-200"
        onMouseEnter={() => setHoveredAction('korea')}
        onMouseLeave={() => setHoveredAction(null)}
      >
        <span className="text-[8px] tracking-[0.25em] font-bold text-white/40 transition-colors duration-200 uppercase">
          Korea
        </span>
        <div className="flex gap-[3px]">
          {['#C62828', '#F9A825', '#1B5E20', '#1A237E'].map((c, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full transition-colors duration-200"
              style={{ backgroundColor: hoveredAction === 'korea' ? c : 'rgba(255,255,255,0.24)' }}
            />
          ))}
        </div>
      </Link>

      {/* ── 여행가이드 링크 ── */}
      <Link
        href="/guide"
        className="flex flex-col items-center justify-center w-16 md:w-16 shrink-0 border-l border-white/10 gap-1.5 hover:bg-white/5 transition-colors duration-200"
        onMouseEnter={() => setHoveredAction('guide')}
        onMouseLeave={() => setHoveredAction(null)}
      >
        <span className="text-[8px] tracking-[0.25em] font-bold text-white/40 transition-colors duration-200 uppercase">
          Guide
        </span>
        <div className="flex gap-[3px]">
          {guides.slice(0, 4).map((g) => {
            const c = cities.find((ci) => ci.id === g.cityId)
            return (
              <span
                key={g.cityId}
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: hoveredAction === 'guide' ? c?.color ?? '#fff' : 'rgba(255,255,255,0.24)' }}
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
