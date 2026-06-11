'use client'

import { useEffect, useState } from 'react'
import type { Landmark } from '@/lib/cities'

// 단청 오방색 — 전통 한국 건축 단청에서 영감
const DANCHEONG = ['#C62828', '#F9A825', '#1B5E20', '#1A237E']
// 한자 수 一二三四
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
      {/* ── 글래스모피즘 배경 패널 ─────────────────────
          backdrop-blur가 뒤의 도시 배경사진을 번지게 함    */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          backgroundColor: `${color}18`,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRight: `1px solid ${color}22`,
          borderTop: 'none',
        }}
      />

      {/* ── 호버 시 글래스 밝아짐 ───────────────────── */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ backgroundColor: `${color}20` }}
      />

      {/* ── 단청 오방색 상단 라인 ────────────────────── */}
      <div className="absolute top-0 left-0 right-0 flex h-[2px] z-10">
        {DANCHEONG.map((dc, i) => (
          <div
            key={i}
            className="flex-1"
            style={{ backgroundColor: i === 1 ? color : dc }}
          />
        ))}
      </div>

      {/* ── 누끼 사진 (object-contain) — 둥둥 떠다님 ──
          배경이 투명이므로 object-contain으로 누끼 유지   */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: '14px',
          bottom: '52px',
          animation: visible
            ? `float ${floatDuration}s ease-in-out ${floatDelay}s infinite`
            : 'none',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={landmark.image}
          alt={landmark.name}
          className="w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
          style={{
            objectFit: 'contain',
            opacity: 0,
            transition: 'opacity 0.6s ease',
            filter: `drop-shadow(0 4px 16px ${color}55)`,
          }}
          onLoad={(e) => { (e.target as HTMLImageElement).style.opacity = '1' }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
      </div>

      {/* ── 한자 번호 (우측 상단) ──────────────────── */}
      <div className="absolute top-4 right-3 z-10 select-none text-right">
        <p
          className="font-bold leading-none opacity-35 group-hover:opacity-80 transition-opacity duration-300"
          style={{ color, fontSize: '13px' }}
        >
          {HANJA[index] ?? String(landmark.id)}
        </p>
      </div>

      {/* ── 하단 텍스트 영역 (글래스 footer) ──────── */}
      <div
        className="absolute bottom-0 left-0 right-0 px-3 py-2 z-10"
        style={{
          backgroundColor: `${color}22`,
          borderTop: `1px solid ${color}28`,
        }}
      >
        <p
          className="text-white font-bold text-[10px] tracking-[0.15em] uppercase leading-tight truncate"
          style={{ textShadow: `0 1px 4px rgba(0,0,0,0.8)` }}
        >
          {landmark.name}
        </p>
        <p
          className="text-[9px] font-light leading-none mt-0.5 truncate"
          style={{ color, opacity: 0.85 }}
        >
          {landmark.nameKo}
        </p>
      </div>
    </div>
  )
}
