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
        <CityScene cityId={city.id} cityName={city.name} cityNameKo={city.nameKo} cityColor={city.color} />
        {/* City intro — overlaid bottom-right of scene */}
        <div className="absolute bottom-5 right-5 z-10">
          <CityIntroToggle city={city} />
        </div>
      </div>

      {/* Landmark strip — full-bleed cinematic photos, no label */}
      <div className="h-48 flex shrink-0 bg-black">
        {city.landmarks.map((landmark, i) => (
          <LandmarkCard key={landmark.id} landmark={landmark} color={city.color} index={i} />
        ))}
      </div>
    </div>
  )
}
