'use client'

import { useEffect, useState } from 'react'
import type { Landmark } from '@/lib/cities'

// 단청 오방색 (五方色) — traditional Korean decorative palette
const DANCHEONG = ['#C62828', '#F9A825', '#1B5E20', '#1A237E']
// 한자 수 (漢字數) — Sino-Korean numerals for landmark numbering
const HANJA = ['一', '二', '三', '四']

type Props = {
  landmark: Landmark
  color: string
  index: number
}

export default function LandmarkCard({ landmark, color, index }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 90)
    return () => clearTimeout(t)
  }, [index])

  // Each card floats at a slightly different period and phase
  const floatDuration = 3.6 + index * 0.45
  const floatDelay = index * 0.8

  return (
    <div
      className="group relative flex-1 h-full overflow-hidden cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity 0.6s ease ${index * 90}ms`,
      }}
    >
      {/* ── 둥둥 떠다니는 사진 레이어 ──────────────────
          사진 컨테이너가 카드보다 12px씩 크게 확장되므로
          위아래로 8px 움직여도 여백이 가려지지 않는다     */}
      <div
        className="absolute -inset-3"
        style={{
          animation: visible
            ? `float ${floatDuration}s ease-in-out ${floatDelay}s infinite`
            : 'none',
        }}
      >
        <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={landmark.image}
            alt={landmark.name}
            className="w-full h-full object-cover"
            style={{ opacity: 0, transition: 'opacity 0.6s ease' }}
            onLoad={(e) => { (e.target as HTMLImageElement).style.opacity = '1' }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
        </div>
      </div>

      {/* ── 도시 색상 컬러 틴트 오버레이 ────────────── */}
      <div
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-60"
        style={{
          background: `linear-gradient(150deg, ${color}30 0%, ${color}08 45%, ${color}45 100%)`,
        }}
      />

      {/* ── 하단 그라디언트 (도시 색상) ─────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${color}cc 0%, ${color}55 30%, transparent 60%)`,
          opacity: 0.8,
        }}
      />

      {/* ── 호버 시 밝아짐 ──────────────────────────── */}
      <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors duration-500" />

      {/* ── 단청 5색 상단 라인 ─────────────────────────
          전통 한국 건축 단청의 오방색에서 영감               */}
      <div className="absolute top-0 left-0 right-0 flex h-[3px]">
        {DANCHEONG.map((dc, i) => (
          <div
            key={i}
            className="flex-1 transition-all duration-300 group-hover:h-[4px]"
            style={{ backgroundColor: i === 1 ? color : dc }}
          />
        ))}
      </div>

      {/* ── 한자 번호 (漢字) ─────────────────────────── */}
      <div className="absolute top-3 left-3 flex flex-col items-center select-none">
        <span
          className="font-bold leading-none opacity-50 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color, fontSize: '14px' }}
        >
          {HANJA[index] ?? String(landmark.id)}
        </span>
        <span
          className="text-[8px] font-light leading-none mt-0.5 opacity-25 group-hover:opacity-50 transition-opacity duration-300"
          style={{ color }}
        >
          {String(landmark.id).padStart(2, '0')}
        </span>
      </div>

      {/* ── 우측 구분선 ────────────────────────────── */}
      <div className="absolute top-4 right-0 bottom-4 w-px bg-white/10 group-hover:bg-white/0 transition-colors duration-300" />

      {/* ── 텍스트 — 호버 시 슬라이드업 ────────────── */}
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-350">
        <p
          className="text-white font-bold text-[10px] tracking-[0.18em] uppercase leading-tight"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.9)' }}
        >
          {landmark.name}
        </p>
        <p
          className="text-[10px] mt-0.5 leading-none font-light"
          style={{ color, opacity: 0.8, textShadow: '0 1px 4px rgba(0,0,0,0.9)' }}
        >
          {landmark.nameKo}
        </p>
        <p
          className="text-white/0 group-hover:text-white/65 text-[9px] mt-1.5 leading-snug transition-colors duration-400 line-clamp-2"
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
        >
          {landmark.description}
        </p>
      </div>
    </div>
  )
}
