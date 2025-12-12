import groq from 'groq'

import { sanityFetch, getImageUrl } from './sanity'
import type { SanityPostBase } from '@/types/sanity'
import type { ArticleCard } from '@/types/types'
import type { PortableTextBlock } from '@portabletext/types'

export type SanityPostWithExcerpt = SanityPostBase & {
  excerpt?: PortableTextBlock[]
}

const POST_BY_SLUG_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  date,
  category,
  image,
  excerpt
}`

const ARTICLES_QUERY = groq`*[_type == "post"] | order(date desc) {
  _id,
  title,
  slug,
  date,
  category,
  image,
  "excerpt": pt::text(excerpt[0])[0..200]
}`

export async function getPostBySlug(slug: string) {
  return sanityFetch<SanityPostWithExcerpt | null>(POST_BY_SLUG_QUERY, { slug })
}

export async function getArticlesForCards(): Promise<ArticleCard[]> {
  const data =
    await sanityFetch<
      (SanityPostBase & { image?: { asset?: { _ref?: string } }; excerpt?: string })[]
    >(ARTICLES_QUERY)

  const articles: ArticleCard[] = data
    .filter((item) => item.slug?.current && item.image?.asset?._ref)
    .map((item) => ({
      title: item.title,
      category: item.category,
      href: `/posts/${item.slug!.current!}`,
      date: item.date,
      image: getImageUrl(item.image!.asset!._ref, 800, 450),
      excerpt: item.excerpt,
    }))

  return articles
}
