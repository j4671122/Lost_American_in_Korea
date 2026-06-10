import Link from 'next/link'
import { cities } from '@/lib/cities'

const GUIDE_IDS = ['jeonju', 'gwangju', 'jeju', 'dokdo']

export default function GuidePage() {
  const guideCities = GUIDE_IDS.map((id) => cities.find((c) => c.id === id)!)

  return (
    <main className="min-h-screen flex flex-col">

      {/* Top nav */}
      <nav className="flex items-center justify-between px-8 py-5 shrink-0">
        <Link
          href="/cities/seoul"
          className="text-white/40 hover:text-white text-xs tracking-[0.3em] uppercase transition-colors duration-200"
        >
          ← Lost American
        </Link>
        <span className="text-white/20 text-xs tracking-[0.4em] uppercase">IMP · Term III</span>
      </nav>

      {/* Hero typography */}
      <header className="flex flex-col items-center justify-center text-center px-8 py-20 shrink-0">
        <p className="text-white/30 text-[11px] tracking-[0.6em] uppercase mb-6">
          A curated guide to Korea
        </p>
        <h1
          className="text-[clamp(64px,12vw,160px)] font-black leading-none tracking-[0.15em] text-white uppercase"
          style={{ textShadow: '0 0 80px rgba(255,255,255,0.08)' }}
        >
          Korea
        </h1>
        <p className="text-white/20 text-[clamp(14px,2vw,22px)] tracking-[0.6em] uppercase font-light mt-2 mb-10">
          Travel Guide
        </p>
        <div className="flex items-center gap-4 w-full max-w-xl">
          <div className="flex-1 h-px bg-white/10" />
          <p className="text-white/25 text-[10px] tracking-[0.45em] uppercase whitespace-nowrap">
            Jeonju · Gwangju · Jeju · Dokdo
          </p>
          <div className="flex-1 h-px bg-white/10" />
        </div>
      </header>

      {/* City grid */}
      <section className="flex-1 grid grid-cols-2 gap-px bg-white/5 border-t border-white/5">
        {guideCities.map((city, i) => (
          <Link
            key={city.id}
            href={`/guide/${city.id}`}
            className="group relative overflow-hidden aspect-[16/10] block"
          >
            {/* Background photo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/cities/${city.id}/background.jpg`}
              alt={city.name}
              className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* City color top line */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: city.color, boxShadow: `0 0 12px ${city.color}` }}
            />

            {/* Index number */}
            <span
              className="absolute top-5 right-6 text-xs font-black tracking-widest opacity-30 group-hover:opacity-70 transition-opacity duration-300"
              style={{ color: city.color }}
            >
              0{i + 1}
            </span>

            {/* City name */}
            <div className="absolute bottom-0 left-0 p-7">
              <p
                className="text-[10px] tracking-[0.45em] uppercase mb-2 transition-colors duration-300"
                style={{ color: city.color }}
              >
                Korea Guide
              </p>
              <h2 className="text-white text-3xl font-black tracking-[0.1em] uppercase leading-none">
                {city.name}
              </h2>
              <p className="text-white/0 group-hover:text-white/50 text-xs mt-2 tracking-widest uppercase transition-colors duration-300">
                Explore →
              </p>
            </div>
          </Link>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-6 shrink-0 border-t border-white/5">
        <p className="text-white/15 text-[10px] tracking-[0.4em] uppercase">
          Lost American in Korea · IMP Term III
        </p>
      </footer>

    </main>
  )
}
