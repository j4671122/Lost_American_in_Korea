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
    highlight: 'The most scientifically designed alphabet ever created — each character mirrors the shape your mouth makes to produce that sound.',
    body: 'King Sejong the Great commissioned a new writing system to give all Korean people their own language. Before Hangul, only scholars who could read Classical Chinese had access to written knowledge. With 24 symbols that can be combined into thousands of syllable blocks, Hangul gave an entire nation its voice.',
    color: '#C62828',
    stat: '24 characters',
  },
  {
    year: '1876',
    yearKo: '개항',
    title: 'Opening to the World',
    titleKo: '개국과 근대화',
    highlight: 'The Treaty of Ganghwa opened Korea for the first time — and nothing would ever be the same.',
    body: "Japanese military pressure forced Korea to sign its first modern treaty with a foreign power. Incheon became the gateway where Western influence, foreign architecture, and new foods like jajangmyeon entered the peninsula. Korea's rapid transformation had begun — but so had the vulnerability that would define the next century.",
    color: '#F9A825',
    stat: '1883 Incheon Port',
  },
  {
    year: '1910 — 1945',
    yearKo: '일제강점기',
    title: 'Japanese Colonial Period',
    titleKo: '식민지 시대',
    highlight: 'For 35 years, Koreans were forbidden from speaking their own language or using their own names.',
    body: 'Japan annexed Korea and systematically suppressed Korean language, culture, and identity. The trauma of this era shapes Korean national consciousness to this day. When you visit Dokdo, Gwangju, or Seodaemun Prison, you are walking through living memory — history that for many Koreans is not history at all, but still-open wounds.',
    color: '#1B5E20',
    stat: '35 years of occupation',
  },
  {
    year: '1945',
    yearKo: '광복절',
    title: 'Liberation',
    titleKo: '해방',
    highlight: "August 15th — 광복절. Liberation Day. Korea's independence arrived, but already fractured.",
    body: "Japan's defeat in World War II ended colonial rule. The joy was immediately complicated by the division of the peninsula at the 38th parallel between Soviet and American occupation zones. Two Koreas began to form. The families that would be separated for 80+ years at the DMZ — their last moments together were in this brief, joyful, heartbroken August of 1945.",
    color: '#1A237E',
    stat: 'Aug 15, 1945',
  },
  {
    year: '1950 — 1953',
    yearKo: '육이오',
    title: 'The Korean War',
    titleKo: '한국전쟁',
    highlight: '육이오 (6-2-5). June 25, 1950. Three years of war that technically never ended.',
    body: "North Korea invaded the South. Three years of devastating conflict left the peninsula in ruins and the division permanent. The armistice was signed in 1953 — but no peace treaty. The Korean War is still technically ongoing. Busan's Gamcheon Village, Jeonju's resilient food culture, and the warmth Korean elders show to Americans all trace back to the refugees and survivors of this war.",
    color: '#C62828',
    stat: '2.5M+ casualties',
  },
  {
    year: '1960s — 1980s',
    yearKo: '한강의 기적',
    title: 'The Miracle on the Han River',
    titleKo: '경제 성장',
    highlight: "In 20 years, South Korea transformed from one of the world's poorest nations to an industrial powerhouse.",
    body: "The '한강의 기적' was driven by state-directed export industries, the sacrifice of a generation who worked 80-hour weeks, and global demand for Korean steel, ships, and electronics. GDP grew from $67 per capita (1953) to over $10,000 by 1995. Seoul's hyper-density, Daejeon's KAIST, and Incheon's Songdo smart city are all children of this era.",
    color: '#F9A825',
    stat: '$67 → $35,000 GDP/capita',
  },
  {
    year: '1980 — 1987',
    yearKo: '민주화운동',
    title: 'The Democracy Movement',
    titleKo: '민주화',
    highlight: "Korea's democracy was not given. It was won by ordinary people in the streets — at the cost of their lives.",
    body: "The May 18th Gwangju Uprising of 1980 — where civilian protesters were killed by military forces — became the defining symbol of Korean resistance. Photographs were smuggled out of the country. The world saw. Seven years of protests finally broke military rule in 1987. Gwangju carries this weight not with bitterness, but with dignity.",
    color: '#1B5E20',
    stat: 'May 18, 1980',
  },
  {
    year: '1990s — Present',
    yearKo: '한류',
    title: 'Korean Culture Goes Global',
    titleKo: '한류 시대',
    highlight: 'A country that was rebuilding from war rubble 70 years ago now shapes global culture.',
    body: "From the 1997 Asian financial crisis came a decision to invest in cultural exports. BTS filled stadiums worldwide. Parasite won the Oscar. Squid Game broke Netflix records. Korean food, skincare, cinema, and fashion are global forces. The Korean Wave — 한류 — was not an accident. It was a decision made by a nation that refused to let its story end in tragedy.",
    color: '#1A237E',
    stat: '$12B+ cultural exports',
  },
]

const CONCEPTS = [
  {
    word: '눈치',
    romanized: 'Nunchi',
    meaning: 'Reading the room',
    detail: "The subtle ability to gauge the mood and feelings of others without being told. Someone with good 눈치 understands what is needed before it is asked. It's why Koreans often communicate indirectly — and why they're so skilled at it.",
    example: 'Notice a Korean host refill your glass before it\'s empty? That\'s 눈치.',
    color: '#C62828',
  },
  {
    word: '빨리빨리',
    romanized: 'Ppalli-ppalli',
    meaning: 'Hurry, hurry',
    detail: "Korea's defining tempo — a cultural expectation of speed in everything from service to construction. Born from the urgency of rapid development. Korean Wi-Fi is the fastest in the world. Delivery arrives in an hour. Convenience stores never close.",
    example: '5G was deployed nationwide before most countries had 4G.',
    color: '#F9A825',
  },
  {
    word: '한',
    romanized: 'Han',
    meaning: 'Collective sorrow',
    detail: "A uniquely Korean emotional concept — the deep, simmering sorrow that comes from centuries of suffering, loss, and suppressed grief. Han is not merely sadness. It is a collective wound held in the national soul, expressed in the wail of pansori music and the weight of Gwangju.",
    example: 'You\'ll hear it in every great Korean song. You\'ll feel it at Seodaemun Prison.',
    color: '#1B5E20',
  },
  {
    word: '정',
    romanized: 'Jeong',
    meaning: 'Deep affection',
    detail: "The warm, almost inexplicable bond that forms between people who have shared time and experience together. 정 cannot be rushed — it builds slowly through shared meals, hardship, and everyday moments. It is the reason Koreans feed you until you physically cannot move.",
    example: 'When a shopkeeper insists on giving you extra — that is 정.',
    color: '#1A237E',
  },
]

const STATS = [
  { value: '8', label: 'Key Eras' },
  { value: '580+', label: 'Years of History' },
  { value: '51M', label: 'People' },
  { value: '1', label: 'Peninsula' },
]

export default function KoreaPage() {
  const [activeIdx, setActiveIdx] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = TIMELINE.map((_, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIdx(i) },
        { threshold: 0.4 }
      )
      if (sectionRefs.current[i]) obs.observe(sectionRefs.current[i]!)
      return obs
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <div className="min-h-full bg-black text-white">

      {/* ── Hero ── */}
      <div className="relative flex flex-col items-center justify-center py-20 md:py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
        <div className="absolute top-0 left-0 right-0 flex h-[3px]">
          {DANCHEONG.map((c, i) => <div key={i} className="flex-1" style={{ backgroundColor: c }} />)}
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4 md:gap-5 w-full max-w-4xl">
          <p className="text-white/25 text-[11px] md:text-xs tracking-[0.6em] uppercase font-light">
            Lost American in Korea
          </p>

          <h1
            className="font-black tracking-[0.12em] uppercase leading-none"
            style={{
              fontSize: 'clamp(44px, 8.5vw, 106px)',
              textShadow: '0 0 60px rgba(255,255,255,0.1)',
            }}
          >
            Understanding Korea
          </h1>

          <p
            className="font-light tracking-[0.5em]"
            style={{
              fontSize: 'clamp(19px, 3vw, 31px)',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            오늘의 한국
          </p>

          <p className="text-white/50 text-base md:text-lg leading-relaxed tracking-wide max-w-2xl mt-2">
            Korea rebuilt itself from <strong className="text-white font-bold">complete devastation</strong> in a single lifetime.
            To truly see this country, you need to know what shaped it — the language, the war, the miracle, and the culture that now moves the world.
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-6 md:mt-8">
            {STATS.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <p className="font-black leading-none" style={{
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  color: DANCHEONG[i % 4],
                }}>{s.value}</p>
                <p className="text-[11px] md:text-xs text-white/30 uppercase tracking-[0.35em] font-light">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Timeline ── */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 pb-24">

        {/* Era color bar */}
        <Reveal>
          <div className="mb-4 flex h-1.5 rounded-full overflow-hidden">
            {TIMELINE.map((era, i) => (
              <div
                key={i}
                className="flex-1 transition-all duration-500"
                style={{
                  backgroundColor: era.color,
                  opacity: i <= activeIdx ? 1 : 0.2,
                }}
              />
            ))}
          </div>
        </Reveal>

        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <div className="flex-1 h-px bg-white/8" />
          <p className="text-xs md:text-[13px] tracking-[0.5em] uppercase text-white/25 font-light">Timeline 역사</p>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        <div className="flex gap-8 md:gap-10">

          {/* Sticky sidebar — desktop only */}
          <aside className="hidden md:block w-44 shrink-0">
            <div className="sticky top-8">
              <p className="text-white/20 text-[10px] tracking-[0.4em] uppercase mb-5 font-light">Era</p>
              <div className="flex flex-col gap-3">
                {TIMELINE.map((era, i) => (
                  <button
                    key={i}
                    onClick={() => sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                    className="text-left transition-all duration-300"
                    style={{
                      opacity: activeIdx === i ? 1 : 0.22,
                      transform: activeIdx === i ? 'translateX(5px)' : 'none',
                    }}
                  >
                    <p className="text-[10px] font-mono tracking-[0.2em]"
                      style={{ color: activeIdx === i ? era.color : 'rgba(255,255,255,0.5)' }}>
                      {era.year}
                    </p>
                    <p className="text-[11px] font-bold leading-tight text-white/80 mt-0.5">{era.titleKo}</p>
                  </button>
                ))}
              </div>

              {/* Progress bar */}
              <div className="mt-6 relative h-[200px] w-[1px] bg-white/8 ml-0.5">
                <div
                  className="absolute top-0 left-0 w-full transition-all duration-500"
                  style={{
                    height: `${((activeIdx + 1) / TIMELINE.length) * 100}%`,
                    backgroundColor: TIMELINE[activeIdx]?.color ?? '#fff',
                    opacity: 0.7,
                  }}
                />
              </div>

              <p className="mt-3 text-[10px] font-mono" style={{ color: TIMELINE[activeIdx]?.color, opacity: 0.6 }}>
                {activeIdx + 1} / {TIMELINE.length}
              </p>
            </div>
          </aside>

          {/* Timeline cards */}
          <div className="flex-1 flex flex-col gap-8 md:gap-10">
            {TIMELINE.map((event, i) => (
              <div
                key={i}
                ref={el => { sectionRefs.current[i] = el }}
                className="rounded-xl p-5 md:p-7 border transition-all duration-500"
                style={{
                  backgroundColor: `${event.color}0d`,
                  borderColor: `${event.color}${activeIdx === i ? '50' : '1a'}`,
                  boxShadow: activeIdx === i ? `0 0 32px ${event.color}12` : 'none',
                }}
              >
                {/* Dancheong top */}
                <div className="h-[2px] w-full rounded-full mb-5 md:mb-6" style={{ backgroundColor: event.color + '88' }} />

                {/* Year + stat */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs md:text-[13px] tracking-[0.3em] uppercase font-mono" style={{ color: event.color }}>
                      {event.year}
                    </span>
                    <span className="text-[11px] md:text-xs text-white/28 font-light">{event.yearKo}</span>
                  </div>
                  <span
                    className="text-[10px] md:text-[11px] px-2 py-0.5 rounded-full font-mono shrink-0"
                    style={{ backgroundColor: event.color + '18', color: event.color, opacity: 0.85 }}
                  >
                    {event.stat}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-black text-xl md:text-2xl leading-tight mb-0.5">{event.title}</h3>
                <p className="text-xs md:text-[13px] tracking-[0.22em] uppercase mb-4 font-light"
                  style={{ color: event.color, opacity: 0.65 }}>
                  {event.titleKo}
                </p>

                {/* Highlight quote */}
                <div
                  className="border-l-2 pl-4 mb-4"
                  style={{ borderColor: event.color + '88' }}
                >
                  <p
                    className="font-bold text-sm md:text-base leading-snug"
                    style={{ color: event.color }}
                  >
                    {event.highlight}
                  </p>
                </div>

                {/* Body */}
                <p className="text-white/55 text-sm md:text-base leading-relaxed">{event.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Korean Concepts ── */}
        <div className="mt-20 md:mt-28">
          <div className="flex items-center gap-4 mb-10 md:mb-14">
            <div className="flex-1 h-px bg-white/8" />
            <p className="text-xs md:text-[13px] tracking-[0.5em] uppercase text-white/25 font-light">Korean Concepts 개념</p>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          <Reveal className="text-center max-w-xl mx-auto mb-10">
            <p className="text-white/45 text-base md:text-lg leading-relaxed">
              Four <strong className="text-white font-bold">untranslatable Korean words</strong> that will help you understand everything you see, taste, and feel here.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {CONCEPTS.map((c, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className="rounded-xl p-5 md:p-7 border h-full flex flex-col"
                  style={{ backgroundColor: `${c.color}0d`, borderColor: `${c.color}22` }}
                >
                  {/* Korean word */}
                  <div className="flex items-baseline gap-3 mb-3">
                    <span
                      className="font-black leading-none"
                      style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: c.color }}
                    >
                      {c.word}
                    </span>
                    <span className="text-white/30 text-sm tracking-widest">{c.romanized}</span>
                  </div>

                  {/* Meaning */}
                  <p className="text-white font-bold text-base md:text-lg mb-3">{c.meaning}</p>

                  {/* Detail */}
                  <p className="text-white/55 text-sm md:text-base leading-relaxed flex-1">{c.detail}</p>

                  {/* Example */}
                  <div className="mt-4 pt-4 border-t" style={{ borderColor: c.color + '22' }}>
                    <p className="text-xs md:text-[13px] italic" style={{ color: c.color, opacity: 0.75 }}>
                      &ldquo;{c.example}&rdquo;
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="mt-20 md:mt-24 text-center">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-6">
              <Link href="/cities/seoul" className="px-6 md:px-8 py-3 bg-white text-black font-bold text-xs md:text-[13px] tracking-[0.3em] uppercase rounded-full hover:bg-white/88 transition-colors">
                Explore Cities
              </Link>
              <Link href="/guide" className="px-6 md:px-8 py-3 border border-white/15 text-white/45 font-bold text-xs md:text-[13px] tracking-[0.3em] uppercase rounded-full hover:border-white/35 hover:text-white/65 transition-all">
                Travel Guide
              </Link>
            </div>
            <p className="text-white/18 text-[11px] md:text-xs tracking-[0.35em] uppercase">
              대한민국에 오신 것을 환영합니다
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
