import { getImageUrl, sanityFetch } from '@/lib/sanity'

export type HeroAd = {
  kind: 'ad'
  href: string
  image: string
}

type HeroDocument = {
  kind: 'ad'
  adImage?: unknown
  adUrl?: string
}

export async function getHeroAds(): Promise<HeroAd[]> {
  const heroes = await sanityFetch<HeroDocument[]>(
    `*[_type == "hero"]{
      kind,
      adImage,
      adUrl
    } | order(_createdAt desc)`,
  )

  if (!heroes?.length) return []

  const ads: HeroAd[] = []

  for (const hero of heroes) {
    if (hero.kind === 'ad' && hero.adImage && hero.adUrl) {
      ads.push({
        kind: 'ad',
        href: hero.adUrl,
        image: getImageUrl(hero.adImage, 1400, 600),
      })
    }
  }

  return ads
}
