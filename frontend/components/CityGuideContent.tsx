'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { City } from '@/lib/cities'
import type { CityGuide } from '@/lib/guides'

type Props = {
  city: City
  guide: CityGuide
}

export default function CityGuideContent({ city, guide }: Props) {
  const tabs = [
    '소개',
    ...(guide.landmarks.length > 0 ? ['명소'] : []),
    ...(guide.food.length > 0 ? ['음식'] : []),
    ...(guide.cafes.length > 0 ? ['카페'] : []),
    ...(guide.extra ? guide.extra.map((e) => e.title) : []),
  ]

  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <>
      {/* ── 히어로 ─────────────────────────────────────── */}
      <section className="relative h-[65vh] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/cities/${city.id}/background.jpg`}
          alt={city.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: 'scale(1.05)', transformOrigin: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(120deg, ${city.color}18, transparent 60%)` }}
        />

        <Link
          href="/guide"
          className="absolute top-6 left-8 text-white/40 hover:text-white text-[11px] tracking-[0.35em] uppercase transition-colors duration-200"
        >
          ← 여행기록
        </Link>

        <div className="absolute bottom-0 left-0 right-0 px-10 pb-12">
          <p
            className="text-[10px] tracking-[0.6em] uppercase mb-2"
            style={{ color: city.color }}
          >
            한국 여행 기록
          </p>
          <h1
            className="font-black tracking-[0.12em] uppercase leading-none text-white"
            style={{
              fontSize: 'clamp(48px,9vw,110px)',
              textShadow: `0 0 80px ${city.color}33`,
            }}
          >
            {city.name}
          </h1>
          <p
            className="font-light tracking-[0.4em] mt-1 mb-4"
            style={{ fontSize: 'clamp(16px,2.5vw,28px)', color: city.color + 'cc' }}
          >
            {city.nameKo}
          </p>
          <p className="text-white/45 text-sm max-w-xl leading-relaxed">
            {guide.overview.split('.')[0]}.
          </p>
        </div>
      </section>

      {/* ── 스티키 탭 ─────────────────────────────────── */}
      <nav
        className="sticky top-0 z-20 flex items-stretch border-b border-white/10 overflow-x-auto"
        style={{ backgroundColor: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(20px)' }}
      >
        {tabs.map((tab) => {
          const active = activeTab === tab
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative px-7 py-4 text-[11px] tracking-[0.3em] uppercase font-semibold shrink-0 transition-colors duration-200"
              style={{ color: active ? city.color : 'rgba(255,255,255,0.3)' }}
            >
              {tab}
              {active && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: city.color, boxShadow: `0 0 8px ${city.color}` }}
                />
              )}
            </button>
          )
        })}
      </nav>

      {/* ── 컨텐츠 ────────────────────────────────────── */}
      <div
        key={activeTab}
        className="px-10 py-14 max-w-5xl mx-auto min-h-[50vh]"
        style={{ animation: 'fadeIn 0.3s ease' }}
      >

        {/* 소개 */}
        {activeTab === '소개' && (
          <div className="max-w-2xl">
            <SectionLabel color={city.color}>소개 · Overview</SectionLabel>
            <p className="text-white/75 text-lg leading-[2] font-light">{guide.overview}</p>
          </div>
        )}

        {/* 명소 */}
        {activeTab === '명소' && (
          <div className="space-y-10">
            <SectionLabel color={city.color}>명소 · Landmarks</SectionLabel>
            {guide.landmarks.map((lm, i) => (
              <div
                key={lm.id}
                className="flex gap-7 pl-5 border-l-2"
                style={{
                  borderColor: city.color + '55',
                  animation: `fadeUp 0.45s ease ${i * 65}ms both`,
                }}
              >
                <span
                  className="text-[28px] font-black shrink-0 leading-none mt-1"
                  style={{ color: city.color + '44' }}
                >
                  {String(lm.id).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 flex-wrap mb-2">
                    <h3 className="text-white font-bold text-xl leading-tight">{lm.name}</h3>
                    <span className="text-white/30 text-sm">{lm.nameKo}</span>
                  </div>
                  <p className="text-white/60 text-sm leading-[1.9]">{lm.description}</p>
                  {(lm.hours || lm.fee || lm.tip) && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {lm.hours && <Chip>{lm.hours}</Chip>}
                      {lm.fee && <Chip>₩ {lm.fee}</Chip>}
                      {lm.tip && <Chip color={city.color}>★ {lm.tip}</Chip>}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 음식 */}
        {activeTab === '음식' && (
          <div className="space-y-14">
            <SectionLabel color={city.color}>음식 · Food</SectionLabel>
            {guide.food.map((food, i) => (
              <div
                key={food.id}
                className="pb-14 border-b border-white/10 last:border-b-0 last:pb-0"
                style={{ animation: `fadeUp 0.45s ease ${i * 80}ms both` }}
              >
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3 className="text-white font-bold text-2xl">{food.name}</h3>
                  <span className="text-white/30 text-base">{food.nameKo}</span>
                </div>
                <div
                  className="h-px mt-3 mb-6"
                  style={{ background: `linear-gradient(to right, ${city.color}66, transparent)` }}
                />
                <p className="text-white/65 text-sm leading-[1.95] max-w-2xl mb-8">{food.description}</p>
                {food.restaurants && food.restaurants.length > 0 && (
                  <>
                    <p
                      className="text-[9px] tracking-[0.5em] uppercase mb-3"
                      style={{ color: city.color + '99' }}
                    >
                      추천 식당
                    </p>
                    <ul className="space-y-2">
                      {food.restaurants.map((r, ri) => (
                        <li key={ri} className="flex items-start gap-2.5 text-sm text-white/45">
                          <span className="mt-0.5 text-base leading-none" style={{ color: city.color + '77' }}>›</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 카페 */}
        {activeTab === '카페' && (
          <div>
            <SectionLabel color={city.color}>카페 · Cafes</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {guide.cafes.map((cafe, i) => (
                <div
                  key={cafe.id}
                  className="border border-white/10 rounded-xl p-6 hover:border-white/25 hover:bg-white/[0.02] transition-all duration-200"
                  style={{ animation: `fadeUp 0.4s ease ${i * 60}ms both` }}
                >
                  <div
                    className="w-5 h-[2px] mb-4 rounded-full"
                    style={{ backgroundColor: city.color }}
                  />
                  <h4 className="text-white font-semibold text-sm leading-snug mb-2">{cafe.name}</h4>
                  {cafe.description && (
                    <p className="text-white/40 text-xs leading-relaxed">{cafe.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 추가 섹션 (독도 등) */}
        {guide.extra?.map((extra) =>
          activeTab === extra.title ? (
            <div key={extra.title} className="max-w-2xl">
              <SectionLabel color={city.color}>{extra.title}</SectionLabel>
              <div className="space-y-5">
                {extra.content.split('\n\n').map((para, i) => {
                  const isHighlight = para.includes('Dokdo is Korean') || para.includes('독도는')
                  return (
                    <p
                      key={i}
                      className={
                        isHighlight
                          ? 'text-white font-bold text-base tracking-wide'
                          : 'text-white/65 text-sm leading-[1.95] font-light'
                      }
                      style={isHighlight ? { color: city.color } : {}}
                    >
                      {para}
                    </p>
                  )
                })}
              </div>
            </div>
          ) : null
        )}
      </div>

      {/* 푸터 */}
      <footer className="border-t border-white/5 py-10 text-center">
        <Link
          href="/guide"
          className="text-white/20 hover:text-white/50 text-[10px] tracking-[0.45em] uppercase transition-colors duration-200"
        >
          ← 모든 도시 보기
        </Link>
      </footer>
    </>
  )
}

function SectionLabel({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <p className="text-[11px] tracking-[0.45em] uppercase mb-8 font-semibold" style={{ color }}>
      {children}
    </p>
  )
}

function Chip({ color, children }: { color?: string; children: React.ReactNode }) {
  return (
    <span
      className="px-3 py-1 rounded-full text-[10px] tracking-wide border"
      style={
        color
          ? { borderColor: color + '44', color: color + 'cc' }
          : { borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.4)' }
      }
    >
      {children}
    </span>
  )
}
