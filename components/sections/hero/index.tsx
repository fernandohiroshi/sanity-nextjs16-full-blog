import { getHeroAds } from '@/lib/hero'
import { HeroSectionClient } from './hero-client'

const HeroSection = async () => {
  const ads = await getHeroAds()

  if (!ads.length) {
    return null
  }

  return <HeroSectionClient ads={ads} />
}

export default HeroSection
