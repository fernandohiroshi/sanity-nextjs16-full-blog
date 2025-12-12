import groq from 'groq'

import type { ArticleCard } from '@/types/types'
import { sanityFetch } from '@/lib/sanity'
import { ArticlesSectionClient } from './ArticlesSectionClient'

type SanityArticle = {
  _id: string
  title: string
  slug?: {
    current?: string
  }
  date: string
  category?: string
  imageUrl?: string
  excerpt?: string
}

const ARTICLES_QUERY = groq`*[_type == "post"] | order(date desc) {
  _id,
  title,
  slug,
  date,
  category,
  "imageUrl": image.asset->url,
  "excerpt": pt::text(excerpt[0])[0..200]
}`

async function getArticles(): Promise<ArticleCard[]> {
  const data = await sanityFetch<SanityArticle[]>(ARTICLES_QUERY)

  const articles: ArticleCard[] = data
    .filter((item) => item.slug?.current && item.imageUrl)
    .map((item) => ({
      title: item.title,
      category: item.category,
      href: `/posts/${item.slug!.current!}`,
      date: item.date,
      image: item.imageUrl!,
      excerpt: item.excerpt,
    }))

  return articles
}

const ArticlesSection = async () => {
  const articles = await getArticles()

  if (!articles.length) {
    return null
  }

  const featuredArticle = articles[0]
  const popularArticles = articles.slice(1, 4)
  const recentArticles = articles.slice(4, 12)
  const eventArticles = articles
    .filter((article) => article.category === 'Evento' || article.category === 'Gastronomia')
    .slice(0, 4)

  return (
    <ArticlesSectionClient
      featuredArticle={featuredArticle}
      popularArticles={popularArticles}
      recentArticles={recentArticles}
      eventArticles={eventArticles}
    />
  )
}

export default ArticlesSection
