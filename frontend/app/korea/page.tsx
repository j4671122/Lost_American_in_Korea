'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

const DANCHEONG = ['#C62828', '#F9A825', '#1B5E20', '#1A237E', '#C62828']

const TIMELINE = [
  {
    year: '1443 — 1446',
    yearKo: '세종대왕',
    title: 'Creation of Hangul',
    titleKo: '한글 창제',
    body: 'King Sejong the Great commissioned a new writing system to give all Korean people — not just scholars who could read Classical Chinese — their own language. Hangul is one of the most scientifically designed alphabets ever created: each character visually mirrors the shape your mouth makes to produce that sound. The linguistic identity of Korea was born here.',
    color: '#C62828',
  },
  {
    year: '1876',
    yearKo: '개항',
    title: 'Opening to the World',
    titleKo: '개국과 근대화',
    body: "The Treaty of Ganghwa forced Korea open to international trade following Japanese military pressure — Korea's first modern treaty with a foreign power. Incheon became the gateway where Western influence, foreign architecture, and new foods like jajangmyeon entered the peninsula. Korea's rapid transformation had begun.",
    color: '#F9A825',
  },
  {
    year: '1910 — 1945',
    yearKo: '일제강점기',
    title: 'Japanese Colonial Period',
    titleKo: '식민지 시대',
    body: "Japan annexed Korea and ruled for 35 years — systematically suppressing Korean language, culture, and identity. Koreans were forced to adopt Japanese names; Hangul was banned from schools. The trauma of this era shapes Korean national consciousness to this day. When you visit Dokdo, Gwangju, or Seodaemun Prison, you are walking through living memory.",
    color: '#1B5E20',
  },
  {
    year: '1945',
    yearKo: '광복절',
    title: 'Liberation',
    titleKo: '해방',
    body: "Japan's defeat in World War II ended colonial rule on August 15th — a date Koreans still celebrate as 광복절 (Liberation Day). The joy was immediately complicated by the division of the peninsula at the 38th parallel between Soviet and American occupation zones. Korea's independence arrived already fractured.",
    color: '#1A237E',
  },
  {
    year: '1950 — 1953',
    yearKo: '육이오',
    title: 'The Korean War',
    titleKo: '한국전쟁',
    body: "North Korea invaded the South on June 25, 1950 — 육이오 (6-2-5) in Korean. Three years of devastating conflict left the peninsula in ruins and the division permanent. Busan's Gamcheon Village, Jeonju's resilient food culture, and the warmth Korean elders show to Americans all trace back to the refugees, soldiers, and survivors of this war. The armistice was signed in 1953; technically, the war never ended.",
    color: '#C62828',
  },
  {
    year: '1960s — 1980s',
    yearKo: '한강의 기적',
    title: 'The Miracle on the Han River',
    titleKo: '경제 성장',
    body: "In two decades, South Korea transformed from one of the poorest countries on earth to an industrial powerhouse. This '한강의 기적' (Miracle on the Han River) was driven by state-directed export industries, the sacrifices of a generation who worked 80-hour weeks, and global demand for Korean steel, ships, and electronics. Seoul's hyper-density, Daejeon's KAIST, and Incheon's Songdo smart city are all children of this era.",
    color: '#F9A825',
  },
  {
    year: '1980 — 1987',
    yearKo: '민주화운동',
    title: 'The Democracy Movement',
    titleKo: '민주화',
    body: "The May 18th Gwangju Uprising of 1980 — where civilian protesters were killed by military forces — became the defining symbol of Korean resistance. Seven years later, massive nationwide demonstrations finally broke military rule. Korea's democracy was not given — it was won by ordinary people in the streets. Gwangju carries this weight with dignity.",
    color: '#1B5E20',
  },
  {
    year: '1990s — Present',
    yearKo: '한류',
    title: 'Korean Culture Goes Global',
    titleKo: '한류 시대',
    body: "From the 1997 Asian financial crisis came a decision to invest in cultural exports. The result: K-pop, K-drama, Korean cinema, Korean food, and Korean beauty have spread to every corner of the world. BTS filled stadiums worldwide. Parasite won the Oscar. Squid Game broke Netflix records. Korea — a country that was rebuilding from war rubble 70 years ago — is now one of the most culturally influential nations on earth.",
    color: '#1A237E',
  },
]

const CONCEPTS = [
  {
    word: '눈치',
    romanized: 'Nunchi',
    meaning: 'Reading the room',
    detail: "The subtle ability to gauge the mood and feelings of others without being told. Considered an essential social skill — someone with good 눈치 understands what is needed before it is asked. A foundational concept for understanding why Koreans often communicate indirectly.",
    color: '#C62828',
  },
  {
    word: '빨리빨리',
    romanized: 'Ppalli-ppalli',
    meaning: 'Hurry, hurry',
    detail: "Korea's defining tempo — a cultural expectation of speed in everything from service to construction to conversation. Born from the urgency of rapid development, 빨리빨리 explains why Korean Wi-Fi is the fastest in the world, delivery arrives in an hour, and convenience stores never close.",
    color: '#F9A825',
  },
  {
    word: '한',
    romanized: 'Han',
    meaning: 'Collective sorrow',
    detail: "A uniquely Korean emotional concept — the deep, simmering sorrow that comes from a history of suffering, loss, and suppressed grief. Han is not merely sadness; it is a collective wound held in the national soul. It is expressed in the wail of pansori music, in the weight of Gwangju, and in the stories of families separated by the DMZ.",
    color: '#1B5E20',
  },
  {
    word: '정',
    romanized: 'Jeong',
    meaning: 'Deep affection',
    detail: "The warm, almost inexplicable bond that forms between people who have shared time and experience together. 정 cannot be rushed or forced — it builds slowly through shared meals, hardship, and everyday moments. When a Korean shopkeeper insists on giving you extra, that is 정.",
    color: '#1A237E',
  },
]

export default function KoreaPage() {
  const [activeIdx, setActiveIdx] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = TIMELINE.map((_, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIdx(i) },
        { threshold: 0.45 }
      )
      if (sectionRefs.current[i]) obs.observe(sectionRefs.current[i]!)
      return obs
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <div className="min-h-full bg-black text-white">

      {/* ── Hero ── */}
      <div className="relative flex flex-col items-center justify-center py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
        <div className="absolute top-0 left-0 right-0 flex h-[3px]">
          {DANCHEONG.map((c, i) => <div key={i} className="flex-1" style={{ backgroundColor: c }} />)}
        </div>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <p className="text-white/25 text-[10px] tracking-[0.6em] uppercase font-light">Lost American in Korea</p>
          <h1 className="font-black tracking-[0.15em] uppercase leading-none"
            style={{ fontSize: 'clamp(36px, 7vw, 88px)', textShadow: '0 0 60px rgba(255,255,255,0.1)' }}>
            Understanding Korea
          </h1>
          <p className="font-light tracking-[0.5em]"
            style={{ fontSize: 'clamp(16px, 2.5vw, 26px)', color: 'rgba(255,255,255,0.4)' }}>
            오늘의 한국
          </p>
          <p className="text-white/45 text-sm leading-relaxed tracking-wide max-w-2xl mt-2">
            Korea rebuilt itself from complete devastation in a single lifetime. To truly see this country,
            you need to know what shaped it — the language, the war, the miracle, and the culture that now moves the world.
          </p>
        </div>
      </div>

      {/* ── Timeline + Sticky Sidebar ── */}
      <div className="max-w-5xl mx-auto px-6 pb-24">

        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-white/8" />
          <p className="text-[10px] tracking-[0.5em] uppercase text-white/25 font-light">Timeline 역사</p>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        <div className="flex gap-10">

          {/* Sticky left sidebar */}
          <aside className="hidden md:block w-44 shrink-0">
            <div className="sticky top-8">
              <p className="text-white/20 text-[9px] tracking-[0.4em] uppercase mb-5 font-light">Era</p>
              <div className="flex flex-col gap-3">
                {TIMELINE.map((era, i) => (
                  <button
                    key={i}
                    onClick={() => sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                    className="text-left transition-all duration-300"
                    style={{
                      opacity: activeIdx === i ? 1 : 0.22,
                      transform: activeIdx === i ? 'translateX(4px)' : 'none',
                    }}
                  >
                    <p className="text-[9px] font-mono tracking-[0.2em]"
                      style={{ color: activeIdx === i ? era.color : 'rgba(255,255,255,0.5)' }}>
                      {era.year}
                    </p>
                    <p className="text-[10px] font-bold leading-tight text-white/80 mt-0.5">{era.titleKo}</p>
                  </button>
                ))}
              </div>

              {/* Progress line */}
              <div className="mt-6 relative h-[200px] w-[1px] bg-white/8 ml-0.5">
                <div
                  className="absolute top-0 left-0 w-full transition-all duration-500"
                  style={{
                    height: `${((activeIdx + 1) / TIMELINE.length) * 100}%`,
                    backgroundColor: TIMELINE[activeIdx]?.color ?? '#fff',
                    opacity: 0.6,
                  }}
                />
              </div>
            </div>
          </aside>

          {/* Timeline cards */}
          <div className="flex-1 flex flex-col gap-10">
            {TIMELINE.map((event, i) => (
              <div
                key={i}
                ref={el => { sectionRefs.current[i] = el }}
                className="rounded-xl p-6 border transition-all duration-500"
                style={{
                  backgroundColor: `${event.color}0d`,
                  borderColor: `${event.color}${activeIdx === i ? '44' : '18'}`,
                  transform: activeIdx === i ? 'none' : 'none',
                }}
              >
                {/* Dancheong top line */}
                <div className="h-[2px] w-full rounded-full mb-5" style={{ backgroundColor: event.color + '77' }} />

                <div className="flex items-baseline gap-3 mb-1.5">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-mono" style={{ color: event.color }}>
                    {event.year}
                  </span>
                  <span className="text-[10px] text-white/28 font-light">{event.yearKo}</span>
                </div>
                <h3 className="text-white font-bold text-lg leading-tight mb-0.5">{event.title}</h3>
                <p className="text-[10px] tracking-[0.22em] uppercase mb-4 font-light"
                  style={{ color: event.color, opacity: 0.65 }}>
                  {event.titleKo}
                </p>
                <p className="text-white/55 text-[13px] leading-relaxed">{event.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Korean Concepts ── */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-white/8" />
            <p className="text-[10px] tracking-[0.5em] uppercase text-white/25 font-light">Korean Concepts 개념</p>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          <Reveal className="text-center max-w-xl mx-auto mb-10">
            <p className="text-white/38 text-sm leading-relaxed">
              Four untranslatable Korean words that will help you understand everything you see, taste, and feel here.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CONCEPTS.map((c, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="rounded-xl p-5 border"
                  style={{ backgroundColor: `${c.color}0d`, borderColor: `${c.color}22` }}>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl font-bold leading-none" style={{ color: c.color }}>{c.word}</span>
                    <span className="text-white/30 text-[11px] tracking-widest">{c.romanized}</span>
                  </div>
                  <p className="text-white font-semibold text-sm mb-2">{c.meaning}</p>
                  <p className="text-white/50 text-[12px] leading-relaxed">{c.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="mt-20 text-center">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <Link href="/cities/seoul" className="px-6 py-2.5 bg-white text-black font-bold text-[11px] tracking-[0.3em] uppercase rounded-full hover:bg-white/88 transition-colors">
                Explore Cities
              </Link>
              <Link href="/guide" className="px-6 py-2.5 border border-white/15 text-white/45 font-bold text-[11px] tracking-[0.3em] uppercase rounded-full hover:border-white/35 hover:text-white/65 transition-all">
                Travel Guide
              </Link>
            </div>
            <p className="text-white/18 text-[10px] tracking-[0.35em] uppercase">
              대한민국에 오신 것을 환영합니다
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
