export type PostType = 'normal' | 'featured' | 'event' | 'ad'

export type ArticleCard = {
  title: string
  category?: string
  date: string // ISO format YYYY-MM-DD
  href: string
  image: string
  excerpt?: string
  postType: PostType
}
