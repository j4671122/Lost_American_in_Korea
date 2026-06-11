'use client'

import { useEffect, useState } from 'react'
import Reveal from '@/components/Reveal'

/* ── Korean Flag SVG ─────────────────────────── */
function TaegeukFlag({ size = 320, glowing = false }: { size?: number; glowing?: boolean }) {
  const w = size
  const h = Math.round(size * 2 / 3)

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 270 180"
      style={{
        filter: glowing
          ? 'drop-shadow(0 0 24px rgba(205,46,58,0.45)) drop-shadow(0 0 48px rgba(0,52,120,0.35))'
          : 'none',
        transition: 'filter 2s ease-in-out',
      }}
    >
      {/* White background */}
      <rect width="270" height="180" fill="white" rx="2" />

      {/* Taegeuk centered at 135,90 — rotated 135° for Korean flag orientation */}
      <g transform="translate(135 90) rotate(135)">
        {/* Yang (red) half */}
        <path
          d="M0-45a45 45 0 0 1 0 90 22.5 22.5 0 0 1 0-45 22.5 22.5 0 0 0 0-45"
          fill="#CD2E3A"
        />
        {/* Yin (blue) half */}
        <path
          d="M0-45a45 45 0 0 0 0 90 22.5 22.5 0 0 0 0-45 22.5 22.5 0 0 1 0-45"
          fill="#003478"
        />
        {/* Inner dots */}
        <circle cy="-22.5" r="11.25" fill="#CD2E3A" />
        <circle cy="22.5" r="11.25" fill="#003478" />
      </g>

      {/* 건(乾) — top-left — 3 solid lines */}
      <g transform="translate(48 42) rotate(-45)">
        <rect x="-19" y="-9" width="38" height="5.5" fill="black" />
        <rect x="-19" y="-1" width="38" height="5.5" fill="black" />
        <rect x="-19" y="7" width="38" height="5.5" fill="black" />
      </g>

      {/* 이(離) — top-right — solid·broken·solid */}
      <g transform="translate(222 42) rotate(45)">
        <rect x="-19" y="-9" width="38" height="5.5" fill="black" />
        <rect x="-19" y="-1" width="16" height="5.5" fill="black" />
        <rect x="3"   y="-1" width="16" height="5.5" fill="black" />
        <rect x="-19" y="7"  width="38" height="5.5" fill="black" />
      </g>

      {/* 감(坎) — bottom-left — broken·solid·broken */}
      <g transform="translate(48 138) rotate(45)">
        <rect x="-19" y="-9" width="16" height="5.5" fill="black" />
        <rect x="3"   y="-9" width="16" height="5.5" fill="black" />
        <rect x="-19" y="-1" width="38" height="5.5" fill="black" />
        <rect x="-19" y="7"  width="16" height="5.5" fill="black" />
        <rect x="3"   y="7"  width="16" height="5.5" fill="black" />
      </g>

      {/* 곤(坤) — bottom-right — 3 broken lines */}
      <g transform="translate(222 138) rotate(-45)">
        <rect x="-19" y="-9" width="16" height="5.5" fill="black" />
        <rect x="3"   y="-9" width="16" height="5.5" fill="black" />
        <rect x="-19" y="-1" width="16" height="5.5" fill="black" />
        <rect x="3"   y="-1" width="16" height="5.5" fill="black" />
        <rect x="-19" y="7"  width="16" height="5.5" fill="black" />
        <rect x="3"   y="7"  width="16" height="5.5" fill="black" />
      </g>
    </svg>
  )
}

/* ── Main Page ───────────────────────────────── */
export default function DokdoPage() {
  const [glowing, setGlowing] = useState(false)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setEntered(true), 200)
    const t2 = setTimeout(() => setGlowing(true), 1200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div className="h-full overflow-y-auto scroll-smooth" style={{ backgroundColor: '#040c18', color: 'white' }}>

      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">

        {/* Ocean depth background */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 60%, #071530 0%, #040c18 70%)',
        }} />

        {/* Subtle wave layers */}
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{
          background: 'linear-gradient(to top, rgba(0,52,120,0.18), transparent)',
          animation: 'waveShift 8s ease-in-out infinite',
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{
          background: 'linear-gradient(to top, rgba(205,46,58,0.08), transparent)',
          animation: 'waveShift 5s ease-in-out infinite reverse',
        }} />

        {/* Top line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] flex">
          <div className="flex-1" style={{ backgroundColor: '#CD2E3A' }} />
          <div className="flex-1" style={{ backgroundColor: '#003478' }} />
          <div className="flex-1" style={{ backgroundColor: '#CD2E3A' }} />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8">

          {/* Korean Flag */}
          <div style={{
            opacity: entered ? 1 : 0,
            transform: entered ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.95)',
            transition: 'opacity 1.4s ease 0.3s, transform 1.4s ease 0.3s',
          }}>
            <TaegeukFlag size={320} glowing={glowing} />
          </div>

          {/* 독도 title */}
          <div style={{
            opacity: entered ? 1 : 0,
            transition: 'opacity 1.2s ease 0.9s',
          }}>
            <h1
              className="font-black leading-none tracking-[0.08em]"
              style={{
                fontSize: 'clamp(72px, 14vw, 140px)',
                color: 'white',
                textShadow: '0 0 80px rgba(205,46,58,0.4), 0 0 40px rgba(0,52,120,0.3)',
              }}
            >
              독도
            </h1>
            <p
              className="font-light tracking-[0.55em] uppercase mt-1"
              style={{
                fontSize: 'clamp(14px, 2vw, 20px)',
                color: 'rgba(255,255,255,0.45)',
                letterSpacing: '0.55em',
              }}
            >
              DOKDO
            </p>
          </div>

          {/* Subtitle */}
          <div
            className="flex items-center gap-5 w-full max-w-sm"
            style={{ opacity: entered ? 1 : 0, transition: 'opacity 1.2s ease 1.5s' }}
          >
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(205,46,58,0.45)' }} />
            <p
              className="font-bold tracking-[0.3em] uppercase whitespace-nowrap"
              style={{ fontSize: 'clamp(10px, 1.4vw, 13px)', color: '#CD2E3A' }}
            >
              대한민국의 영토
            </p>
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(205,46,58,0.45)' }} />
          </div>

          {/* Coordinates */}
          <p
            className="font-mono text-xs md:text-sm tracking-widest"
            style={{
              color: 'rgba(255,255,255,0.22)',
              opacity: entered ? 1 : 0,
              transition: 'opacity 1.2s ease 1.9s',
            }}
          >
            37°14&apos;22&quot;N · 131°51&apos;54&quot;E · East Sea
          </p>

          {/* Scroll indicator */}
          <div style={{ opacity: entered ? 1 : 0, transition: 'opacity 1s ease 2.5s' }}
            className="flex flex-col items-center gap-2 mt-4">
            <p className="text-[9px] tracking-[0.5em] uppercase" style={{ color: 'rgba(255,255,255,0.18)' }}>Scroll</p>
            <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, rgba(205,46,58,0.5), transparent)', animation: 'scrollPulse 2.2s ease-in-out infinite' }} />
          </div>
        </div>
      </section>

      {/* ── ENGLISH DECLARATION ── */}
      <section className="relative py-20 md:py-28 px-6 md:px-12" style={{ borderTop: '1px solid rgba(205,46,58,0.15)' }}>
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xs md:text-[13px] tracking-[0.5em] uppercase mb-8 font-semibold" style={{ color: '#CD2E3A' }}>
              Statement on Sovereignty
            </p>
          </Reveal>

          <div className="space-y-6 md:space-y-7">
            <Reveal delay={100}>
              <p className="text-base md:text-lg leading-[1.95] text-white/80">
                <strong className="text-white font-bold">Dokdo is Korean territory located in the East Sea.</strong>{' '}
                It consists of two main islands, Dongdo and Seodo, as well as several smaller rocky islets.
                Korea considers Dokdo to be its territory based on historical, geographical, and international
                legal grounds, and Korea currently administers the island.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <p className="text-base md:text-lg leading-[1.95] text-white/75">
                Japan refers to Dokdo as &ldquo;Takeshima&rdquo; and claims sovereignty over it. However,
                Korea does not regard Dokdo as a disputed territory, but as a{' '}
                <strong className="text-white font-semibold">clear part of Korean territory.</strong>{' '}
                For Koreans, the Dokdo issue is not only about ownership of a small island.
                It is also connected to Korean history, sovereignty, and the{' '}
                <strong className="text-white font-semibold">painful memory of Japanese colonial rule.</strong>
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-base md:text-lg leading-[1.95] text-white/75">
                Therefore, Dokdo is not just an island for Koreans. It is an{' '}
                <strong className="text-white font-semibold">important symbol of Korea&apos;s historical identity
                and national sovereignty.</strong>
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div
                className="pt-6 md:pt-8 border-t"
                style={{ borderColor: 'rgba(205,46,58,0.25)' }}
              >
                <p
                  className="font-black tracking-[0.12em] uppercase"
                  style={{
                    fontSize: 'clamp(20px, 3.5vw, 32px)',
                    color: '#CD2E3A',
                    textShadow: '0 0 30px rgba(205,46,58,0.35)',
                  }}
                >
                  Dokdo is Korean territory.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="flex items-center gap-6 px-6 md:px-12 py-8">
        <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(0,52,120,0.4)' }} />
        <div className="flex gap-3">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#CD2E3A' }} />
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#003478' }} />
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#CD2E3A' }} />
        </div>
        <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(0,52,120,0.4)' }} />
      </div>

      {/* ── KOREAN DECLARATION ── */}
      <section className="relative py-20 md:py-28 px-6 md:px-12" style={{ borderTop: '1px solid rgba(0,52,120,0.2)' }}>
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xs md:text-[13px] tracking-[0.5em] uppercase mb-8 font-semibold" style={{ color: '#003478', opacity: 0.85 }}>
              주권 선언
            </p>
          </Reveal>

          <div className="space-y-6 md:space-y-7">
            <Reveal delay={100}>
              <p className="text-base md:text-lg leading-[2] text-white/80" style={{ wordBreak: 'keep-all' }}>
                <strong className="text-white font-bold">독도는 동해에 위치한 대한민국의 영토이다.</strong>{' '}
                독도는 두 개의 큰 섬인 동도와 서도, 그리고 주변의 작은 바위섬들로 이루어져 있다.
                한국은 역사적, 지리적, 국제법적 근거를 바탕으로 독도가 대한민국의 영토라고 보고 있으며,
                현재도 독도를 실제로 관리하고 있다.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <p className="text-base md:text-lg leading-[2] text-white/75" style={{ wordBreak: 'keep-all' }}>
                일본은 독도를 &lsquo;다케시마&rsquo;라고 부르며 영유권을 주장하고 있지만, 한국은 독도를
                분쟁 지역이 아닌{' '}
                <strong className="text-white font-semibold">명백한 대한민국의 영토로</strong>{' '}
                보고 있다. 특히 독도 문제는 단순한 섬의 소유 문제가 아니라, 한국의 역사와 주권,
                그리고{' '}
                <strong className="text-white font-semibold">과거 식민지 역사와도 연결되어 있다.</strong>
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-base md:text-lg leading-[2] text-white/75" style={{ wordBreak: 'keep-all' }}>
                따라서 독도는 한국인들에게 단순한 섬이 아니라,{' '}
                <strong className="text-white font-semibold">대한민국의 역사적 정체성과 주권을 상징하는
                중요한 장소이다.</strong>
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div
                className="pt-6 md:pt-8 border-t"
                style={{ borderColor: 'rgba(0,52,120,0.35)' }}
              >
                <p
                  className="font-black tracking-[0.08em]"
                  style={{
                    fontSize: 'clamp(22px, 3.5vw, 34px)',
                    color: '#003478',
                    opacity: 0.95,
                    textShadow: '0 0 30px rgba(0,52,120,0.4)',
                  }}
                >
                  독도는 대한민국의 영토이다.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FINAL DECLARATION ── */}
      <section
        className="relative flex flex-col items-center justify-center py-28 md:py-36 px-6 text-center overflow-hidden"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(205,46,58,0.07) 0%, transparent 65%)',
        }} />

        <Reveal className="relative z-10 flex flex-col items-center gap-8 md:gap-10">
          <div className="w-16 h-[2px]" style={{ backgroundColor: '#CD2E3A', opacity: 0.7 }} />

          <TaegeukFlag size={160} glowing />

          <div className="flex flex-col items-center gap-3">
            <p
              className="font-black tracking-[0.1em] uppercase"
              style={{
                fontSize: 'clamp(18px, 3vw, 28px)',
                color: '#CD2E3A',
                textShadow: '0 0 40px rgba(205,46,58,0.5)',
              }}
            >
              Dokdo is Korean territory.
            </p>
            <p
              className="font-black tracking-[0.06em]"
              style={{
                fontSize: 'clamp(18px, 3vw, 28px)',
                color: '#003478',
                opacity: 0.9,
                textShadow: '0 0 40px rgba(0,52,120,0.5)',
              }}
            >
              독도는 대한민국의 영토이다.
            </p>
          </div>

          <div className="w-16 h-[2px]" style={{ backgroundColor: '#003478', opacity: 0.7 }} />
        </Reveal>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] flex">
          <div className="flex-1" style={{ backgroundColor: '#CD2E3A' }} />
          <div className="flex-1" style={{ backgroundColor: '#003478' }} />
          <div className="flex-1" style={{ backgroundColor: '#CD2E3A' }} />
        </div>
      </section>

    </div>
  )
}
