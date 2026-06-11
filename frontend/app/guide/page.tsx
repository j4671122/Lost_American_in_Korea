import Link from 'next/link'
import { cities } from '@/lib/cities'
import { guides } from '@/lib/guides'

export default function GuidePage() {
  const guideCities = guides
    .map((g) => ({ guide: g, city: cities.find((c) => c.id === g.cityId)! }))
    .filter((x) => x.city)

  return (
    <main className="min-h-screen flex flex-col">

      {/* 상단 내비 */}
      <nav className="flex items-center justify-between px-8 py-5 shrink-0">
        <Link
          href="/cities/seoul"
          className="text-white/40 hover:text-white text-xs tracking-[0.3em] uppercase transition-colors duration-200"
        >
          ← Lost American
        </Link>
        <span className="text-white/20 text-xs tracking-[0.4em] uppercase">IMP · Term III</span>
      </nav>

      {/* 헤더 타이포그래피 */}
      <header className="flex flex-col items-center justify-center text-center px-8 pt-10 pb-14 shrink-0">
        <p className="text-white/25 text-[11px] tracking-[0.5em] uppercase mb-5">
          길 위에서 · on the road
        </p>
        <h1
          className="font-black leading-none tracking-[0.12em] text-white"
          style={{ fontSize: 'clamp(56px,11vw,140px)', textShadow: '0 0 80px rgba(255,255,255,0.06)' }}
        >
          한국
        </h1>
        <p className="text-white/20 tracking-[0.5em] font-light mt-2 mb-8"
           style={{ fontSize: 'clamp(13px,2vw,20px)' }}>
          여행 기록 · Travel Notes
        </p>
        <div className="flex items-center gap-4 w-full max-w-2xl">
          <div className="flex-1 h-px bg-white/8" />
          <p className="text-white/20 text-[10px] tracking-[0.4em] uppercase whitespace-nowrap">
            {guideCities.length}개 도시
          </p>
          <div className="flex-1 h-px bg-white/8" />
        </div>
      </header>

      {/* 도시 그리드 — 3열 */}
      <section className="flex-1 grid grid-cols-3 gap-px bg-white/5 border-t border-white/5">
        {guideCities.map(({ city, guide }, i) => (
          <Link
            key={city.id}
            href={`/guide/${city.id}`}
            className="group relative overflow-hidden block"
            style={{ aspectRatio: '16/9' }}
          >
            {/* 배경 사진 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/cities/${city.id}/background.jpg`}
              alt={city.name}
              className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* 오버레이 */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/25 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

            {/* 도시 컬러 상단 라인 */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ backgroundColor: city.color, boxShadow: `0 0 10px ${city.color}99` }}
            />

            {/* 번호 */}
            <span
              className="absolute top-4 right-4 text-[10px] font-black tracking-widest opacity-25 group-hover:opacity-60 transition-opacity duration-300"
              style={{ color: city.color }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* 도시 정보 */}
            <div className="absolute bottom-0 left-0 p-5">
              <p
                className="text-[8px] tracking-[0.4em] uppercase mb-1 transition-colors duration-300"
                style={{ color: city.color }}
              >
                여행기록
              </p>
              <h2 className="text-white text-lg font-black tracking-[0.08em] uppercase leading-none">
                {city.name}
              </h2>
              <p
                className="text-sm font-light leading-none mt-1 mb-1.5"
                style={{ color: city.color + 'aa' }}
              >
                {city.nameKo}
              </p>
              <p className="text-white/0 group-hover:text-white/40 text-[10px] tracking-widest uppercase transition-colors duration-300">
                보러 가기 →
              </p>
            </div>

            {/* 랜드마크 수 힌트 */}
            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[9px] tracking-wider text-white/40">
                명소 {guide.landmarks.length}곳
                {guide.food.length > 0 ? ` · 음식 ${guide.food.length}종` : ''}
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* 푸터 */}
      <footer className="text-center py-5 shrink-0 border-t border-white/5">
        <p className="text-white/12 text-[10px] tracking-[0.4em] uppercase">
          Lost American in Korea · IMP Term III
        </p>
      </footer>

    </main>
  )
}
