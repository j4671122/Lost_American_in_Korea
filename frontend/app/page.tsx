'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { cities, getCityBackgroundImage } from '@/lib/cities'

const DANCHEONG = ['#C62828', '#F9A825', '#1B5E20', '#1A237E', '#C62828']

const CHAPTERS = [
  {
    n: '一',
    year: '1392 — 1897',
    title: 'A Kingdom Built to Last',
    ko: '조선',
    body: 'The Joseon Dynasty unified Korea under Confucian principles and gave its people Hangul — the world\'s most scientifically designed writing system, where each character mirrors the shape your mouth makes to produce that sound. For 500 years, Seoul was its heart. Those 500 years are still visible in every palace gate, royal tomb, and temple courtyard you\'ll walk past.',
    color: '#C62828',
  },
  {
    n: '二',
    year: '1910 — 1953',
    title: 'Occupation and War',
    ko: '전쟁',
    body: 'Japan annexed Korea in 1910 and systematically suppressed its language, names, and identity for 35 years. Liberation in 1945 brought immediate division at the 38th parallel. In 1950, war. When the armistice came in 1953, the peninsula was in rubble. The refugee camps became neighborhoods; those neighborhoods became cities — Busan\'s Gamcheon, Gwangju\'s resistance, Jeonju\'s food culture — all forged here.',
    color: '#1A237E',
  },
  {
    n: '三',
    year: '1960s — 1980s',
    title: 'The Miracle on the Han',
    ko: '기적',
    body: 'In one generation, South Korea rebuilt from rubble into an industrial powerhouse. The Han River Miracle. Streets that were dirt roads became 8-lane highways. Incheon became a global smart city built on reclaimed sea. KAIST in Daejeon produced engineers who changed the world. The energy you feel walking through Seoul today — it\'s still that same energy, running at full speed.',
    color: '#1B5E20',
  },
  {
    n: '四',
    year: '1990s — Now',
    title: 'Korea Moves the World',
    ko: '한류',
    body: 'BTS filled stadiums on every continent. Parasite won the Oscar. Squid Game broke Netflix. Korean food, skincare, cinema, and fashion are global forces. A country that was in ruins 70 years ago now shapes global culture. Hallyu — the Korean Wave — was not an accident. It was a decision. That\'s the Korea you\'re about to explore.',
    color: '#F9A825',
  },
]

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="h-screen overflow-y-auto bg-black text-white scroll-smooth">

      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        {/* 창호 격자 배경 */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: [
              'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px)',
              'linear-gradient(to right, rgba(255,255,255,0.018) 1px, transparent 1px)',
            ].join(', '),
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />

        {/* 단청 상단 */}
        <div className="absolute top-0 left-0 right-0 flex h-[3px]">
          {DANCHEONG.map((c, i) => <div key={i} className="flex-1" style={{ backgroundColor: c }} />)}
        </div>

        <div className="relative z-10 flex flex-col items-center gap-5 select-none px-6 text-center">
          <p style={{
            color: 'rgba(255,255,255,0.2)',
            fontSize: '10px',
            letterSpacing: '0.65em',
            textTransform: 'uppercase',
            fontWeight: 300,
            opacity: heroVisible ? 1 : 0,
            transition: 'opacity 1.2s ease 0.3s',
          }}>
            Welcome to
          </p>

          {/* LOST — letter by letter */}
          <div className="overflow-hidden flex justify-center" style={{ gap: '0.02em' }}>
            {'LOST'.split('').map((l, i) => (
              <span key={i} className="font-black leading-none inline-block" style={{
                fontSize: 'clamp(72px, 14vw, 160px)',
                letterSpacing: '-0.02em',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(110%)',
                transition: `opacity 0.55s ease ${200 + i * 60}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${200 + i * 60}ms`,
              }}>{l}</span>
            ))}
          </div>

          {/* AMERICAN — letter by letter */}
          <div className="overflow-hidden flex justify-center -mt-5 md:-mt-8" style={{ gap: '0.02em' }}>
            {'AMERICAN'.split('').map((l, i) => (
              <span key={i} className="font-black leading-none inline-block" style={{
                fontSize: 'clamp(72px, 14vw, 160px)',
                letterSpacing: '-0.02em',
                color: 'rgba(255,255,255,0.82)',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(110%)',
                transition: `opacity 0.55s ease ${500 + i * 45}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${500 + i * 45}ms`,
              }}>{l}</span>
            ))}
          </div>

          {/* in Korea */}
          <div className="flex items-center gap-5 w-full max-w-md mt-3" style={{
            opacity: heroVisible ? 1 : 0,
            transition: 'opacity 1s ease 1.3s',
          }}>
            <div className="flex-1 h-px bg-white/15" />
            <p className="font-light tracking-[0.6em] uppercase text-white/45" style={{ fontSize: 'clamp(13px, 2vw, 22px)' }}>
              in Korea
            </p>
            <div className="flex-1 h-px bg-white/15" />
          </div>

          {/* Korean subtitle */}
          <p style={{
            color: 'rgba(255,255,255,0.14)',
            fontSize: 'clamp(13px, 1.5vw, 17px)',
            letterSpacing: '0.55em',
            fontWeight: 300,
            opacity: heroVisible ? 1 : 0,
            transition: 'opacity 1s ease 1.7s',
          }}>
            한국에서 길을 잃다
          </p>

          {/* CTAs */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3" style={{
            opacity: heroVisible ? 1 : 0,
            transition: 'opacity 1s ease 2.1s',
          }}>
            <Link href="/cities/seoul" className="px-7 py-2.5 bg-white text-black font-bold text-[11px] tracking-[0.3em] uppercase rounded-full hover:bg-white/88 transition-colors">
              Enter Cities
            </Link>
            <Link href="/korea" className="px-7 py-2.5 border border-white/20 text-white/50 font-bold text-[11px] tracking-[0.3em] uppercase rounded-full hover:border-white/40 hover:text-white/75 transition-all">
              Korea Story
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2.5" style={{
          opacity: heroVisible ? 1 : 0,
          transition: 'opacity 1s ease 2.5s',
        }}>
          <p className="text-white/18 text-[9px] tracking-[0.5em] uppercase">Scroll</p>
          <div style={{
            width: '1px',
            height: '52px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)',
            animation: 'scrollPulse 2.2s ease-in-out infinite',
          }} />
        </div>
      </section>

      {/* ── 4 CHAPTERS ── */}
      {CHAPTERS.map((ch, i) => (
        <section key={i} className="relative min-h-screen flex items-center px-8 md:px-20"
          style={{ borderTop: `1px solid ${ch.color}18` }}>

          {/* Large ghost text */}
          <div
            className="absolute right-6 md:right-14 top-1/2 -translate-y-1/2 font-black pointer-events-none select-none"
            style={{
              fontSize: 'clamp(110px, 24vw, 280px)',
              color: ch.color,
              opacity: 0.04,
              letterSpacing: '-0.04em',
              lineHeight: 1,
            }}
          >
            {ch.ko}
          </div>

          {/* Left color bar */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[3px]"
            style={{ background: `linear-gradient(to bottom, transparent, ${ch.color}60, transparent)` }}
          />

          <Reveal className="max-w-2xl relative z-10">
            <div className="flex items-baseline gap-4 mb-7">
              <span className="font-bold select-none leading-none" style={{ color: ch.color, fontSize: '48px', opacity: 0.5 }}>
                {ch.n}
              </span>
              <span className="font-mono text-[11px] tracking-[0.4em] uppercase" style={{ color: ch.color, opacity: 0.75 }}>
                {ch.year}
              </span>
              <span className="text-[11px] font-light opacity-25 tracking-widest">{ch.ko}</span>
            </div>

            <h2 className="font-black uppercase leading-none mb-5"
              style={{ fontSize: 'clamp(28px, 5.5vw, 64px)' }}>
              {ch.title}
            </h2>

            <p className="text-white/50 leading-relaxed"
              style={{ fontSize: 'clamp(14px, 1.45vw, 18px)', maxWidth: '540px' }}>
              {ch.body}
            </p>

            {i === CHAPTERS.length - 1 && (
              <Link
                href="/korea"
                className="inline-flex items-center gap-2 mt-8 text-[11px] tracking-[0.35em] uppercase transition-opacity hover:opacity-100"
                style={{ color: ch.color, opacity: 0.65 }}
              >
                Full Korea Story →
              </Link>
            )}
          </Reveal>
        </section>
      ))}

      {/* ── 12 CITIES ── */}
      <section className="py-24 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <Reveal className="text-center mb-14">
          <p className="text-white/22 text-[10px] tracking-[0.6em] uppercase mb-4">Destinations</p>
          <h2 className="font-black uppercase leading-none" style={{ fontSize: 'clamp(40px, 9vw, 100px)' }}>
            12 Cities
          </h2>
          <p className="text-white/22 text-sm tracking-widest mt-2">12 Stories. One Journey.</p>
        </Reveal>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-w-4xl mx-auto">
          {cities.map((city, i) => (
            <Reveal key={city.id} delay={i * 45}>
              <Link
                href={`/cities/${city.id}`}
                className="group relative block overflow-hidden rounded-xl"
                style={{ aspectRatio: '2/3' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getCityBackgroundImage(city.id)}
                  alt={city.name}
                  className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  style={{ opacity: 0, transition: 'opacity 0.5s ease, transform 0.7s ease' }}
                  onLoad={e => { (e.target as HTMLImageElement).style.opacity = '1' }}
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: city.color + '28' }}
                />
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundColor: city.color }} />
                <div className="absolute bottom-0 left-0 p-3">
                  <p className="text-white font-bold text-[11px] tracking-[0.1em] uppercase leading-none">
                    {city.name}
                  </p>
                  <p className="text-[10px] font-light leading-none mt-0.5" style={{ color: city.color, opacity: 0.85 }}>
                    {city.nameKo}
                  </p>
                </div>
                <div
                  className="absolute top-3 right-3 text-[13px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: city.color }}
                >
                  →
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative flex flex-col items-center justify-center py-28 px-6 text-center"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>

        <Reveal className="flex flex-col items-center gap-7">
          <p className="text-white/20 text-[10px] tracking-[0.6em] uppercase">Begin</p>
          <h2 className="font-black leading-none uppercase" style={{ fontSize: 'clamp(28px, 5vw, 60px)' }}>
            Your Korea Starts Here
          </h2>
          <p className="text-white/35 text-sm leading-relaxed max-w-sm">
            Pick a city. Read the guide. Or let yourself get lost — that&apos;s the whole point.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/cities/seoul" className="px-8 py-3 bg-white text-black font-bold text-[11px] tracking-[0.3em] uppercase rounded-full hover:bg-white/88 transition-colors">
              Explore Cities
            </Link>
            <Link href="/guide" className="px-8 py-3 border border-white/15 text-white/50 font-bold text-[11px] tracking-[0.3em] uppercase rounded-full hover:border-white/40 hover:text-white/70 transition-all">
              Travel Guide
            </Link>
            <Link href="/korea" className="px-8 py-3 border border-white/15 text-white/50 font-bold text-[11px] tracking-[0.3em] uppercase rounded-full hover:border-white/40 hover:text-white/70 transition-all">
              Korea Story
            </Link>
          </div>
        </Reveal>

        {/* 단청 하단 */}
        <div className="absolute bottom-0 left-0 right-0 flex h-[3px]">
          {DANCHEONG.map((c, i) => <div key={i} className="flex-1" style={{ backgroundColor: c }} />)}
        </div>
      </section>

    </div>
  )
}
