export type SanityPostBase = {
  _id: string
  title: string
  slug?: {
    current?: string
  }
  date: string
  category?: string
  image?: {
    asset?: {
      _ref?: string
    }
  }
}
