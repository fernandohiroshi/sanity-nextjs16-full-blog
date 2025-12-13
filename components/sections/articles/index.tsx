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

  return <ArticlesSectionClient articles={articles} />
}

export default ArticlesSection
