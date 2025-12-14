import { getImageUrl, sanityFetch } from '@/lib/sanity'

export type HeroAd = {
  kind: 'ad' | 'post'
  href: string
  image: string
}

type HeroDocument = {
  kind: 'article' | 'ad'
  adImage?: unknown
  adUrl?: string
  post?: {
    slug?: { current?: string }
    image?: unknown
  }
}

export async function getHeroAds(): Promise<HeroAd[]> {
  const heroes = await sanityFetch<HeroDocument[]>(
    `*[_type == "hero"]{
      kind,
      adImage,
      adUrl,
      post->{slug, image}
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
      continue
    }

    if (hero.kind === 'article' && hero.post?.slug?.current && hero.post.image) {
      ads.push({
        kind: 'post',
        href: `/${hero.post.slug.current}`,
        image: getImageUrl(hero.post.image, 1400, 600),
      })
    }
  }

  return ads
}
