import type { ArticleCard } from '../../../types/types'

// HERO ADS TYPE DERIVED FROM SHARED ARTICLECARD (ONLY href AND image USED HERE)
export type HeroAd = Pick<ArticleCard, 'href' | 'image'>

export const adsArticles: HeroAd[] = [
  {
    href: 'https://unsplash.com/photos/aerial-view-of-buildings-during-daytime-3ewkNkfJj2k',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    href: 'https://unsplash.com/photos/mountain-covered-snow-under-star-digital-wallpaper-Jztmx9yqjBw',
    image:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    href: 'https://unsplash.com/photos/two-person-standing-on-field-while-looking-at-mountain-1Z2niiBPg5A',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
  },
  {
    href: 'https://unsplash.com/photos/gray-concrete-building-near-body-of-water-during-daytime-WgGJjGN4_ck',
    image:
      'https://images.unsplash.com/photo-1438109491414-7198515b166b?auto=format&fit=crop&w=1400&q=80',
  },
]
