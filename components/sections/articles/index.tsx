import type { ArticleCard } from '@/types/types'
import { getArticlesForCards } from '@/lib/posts'
import { ArticlesSectionClient } from './articles-clients'

async function getArticles(): Promise<ArticleCard[]> {
  const articles = await getArticlesForCards()
  return articles
}

const ArticlesSection = async () => {
  const articles = await getArticles()

  if (!articles.length) {
    return null
  }

  const lastFeaturedArticle = articles[0]
  const featuredArticles = articles.slice(1, 4)
  const recentArticles = articles.slice(4, 12)
  const eventArticles = articles
    .filter((article) => article.category === 'Evento' || article.category === 'Gastronomia')
    .slice(0, 4)

  return (
    <ArticlesSectionClient
      lastFeaturedArticle={lastFeaturedArticle}
      featuredArticles={featuredArticles}
      recentArticles={recentArticles}
      eventArticles={eventArticles}
    />
  )
}

export default ArticlesSection
