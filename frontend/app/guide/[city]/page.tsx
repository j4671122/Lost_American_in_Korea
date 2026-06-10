import { notFound } from 'next/navigation'
import { guides } from '@/lib/guides'
import { cities } from '@/lib/cities'
import CityGuideContent from '@/components/CityGuideContent'

export function generateStaticParams() {
  return guides.map((g) => ({ city: g.cityId }))
}

export default async function CityGuidePage({ params }: { params: Promise<{ city: string }> }) {
  const { city: cityId } = await params
  const city = cities.find((c) => c.id === cityId)
  const guide = guides.find((g) => g.cityId === cityId)

  if (!city || !guide) notFound()

  return <CityGuideContent city={city} guide={guide} />
}
