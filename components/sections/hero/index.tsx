import { getHeroAds } from '@/lib/hero'
import { HeroCarousel } from './hero-carousel'

const HeroSection = async () => {
  const ads = await getHeroAds()

  if (!ads.length) {
    return null
  }

  return <HeroCarousel ads={ads} />
}

export default HeroSection
