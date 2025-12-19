import type { ArticleCard } from '@/types/types'
import { getArticlesForCards } from '@/lib/posts'
import { sanityFetch, getImageUrl } from '@/lib/sanity'
import { ArticlesSectionClient } from './articles-clients'

type PartnerCard = {
  href: string
  image: string
}

async function getArticles(): Promise<ArticleCard[]> {
  const articles = await getArticlesForCards()
  return articles
}

async function getPartners(): Promise<PartnerCard[]> {
  const docs = await sanityFetch<
    {
      url?: string
      image?: unknown
    }[]
  >(`*[_type == "partner"]{url, image} | order(_createdAt desc)`)

  if (!docs?.length) return []

  return docs
    .filter((doc) => doc.url && doc.image)
    .map((doc) => ({
      href: doc.url as string,
      image: getImageUrl(doc.image, 300, 300),
    }))
}

const ArticlesSection = async () => {
  const [articles, partners] = await Promise.all([getArticles(), getPartners()])

  if (!articles.length) {
    return null
  }

  return <ArticlesSectionClient articles={articles} partners={partners} />
}

export default ArticlesSection
