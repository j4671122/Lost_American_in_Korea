import { notFound } from 'next/navigation'
import { cities, getCityById } from '@/lib/cities'
import CityScene from '@/components/CityScene'
import LandmarkStrip from '@/components/LandmarkStrip'
import CityIntroToggle from '@/components/CityIntroToggle'

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.id }))
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: cityId } = await params
  const city = getCityById(cityId)

  if (!city) notFound()

  return (
    <div className="h-full relative overflow-hidden">
      {/* City scene — fills full height */}
      <CityScene cityId={city.id} cityName={city.name} cityNameKo={city.nameKo} cityColor={city.color} />

      {/* City intro — top right */}
      <div className="absolute top-5 right-5 z-20">
        <CityIntroToggle city={city} />
      </div>

      {/* Landmark strip — frosted glass overlay at bottom */}
      <LandmarkStrip landmarks={city.landmarks} color={city.color} />
    </div>
  )
}
