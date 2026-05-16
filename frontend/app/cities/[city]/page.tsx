import { notFound } from 'next/navigation'
import { cities, getCityById } from '@/lib/cities'
import CityScene from '@/components/CityScene'
import LandmarkCard from '@/components/LandmarkCard'
import CityIntroToggle from '@/components/CityIntroToggle'

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.id }))
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: cityId } = await params
  const city = getCityById(cityId)

  if (!city) notFound()

  return (
    <div className="flex flex-col h-full">
      {/* City scene */}
      <div className="flex-1 relative overflow-hidden">
        <CityScene cityId={city.id} cityName={city.name} cityColor={city.color} />
      </div>

      {/* Bottom bar */}
      <div className="bg-black/70 backdrop-blur-sm shrink-0">
        <p
          className="text-xs font-bold tracking-[0.3em] px-8 pt-3 pb-1"
          style={{ color: city.color }}
        >
          LANDMARKS
        </p>
        <div className="flex items-center px-8 pb-4 gap-4">
          <div className="flex gap-6 flex-1">
            {city.landmarks.map((landmark) => (
              <LandmarkCard key={landmark.id} landmark={landmark} color={city.color} />
            ))}
          </div>
          <CityIntroToggle city={city} />
        </div>
      </div>
    </div>
  )
}
