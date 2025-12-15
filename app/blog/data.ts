import { notFound } from 'next/navigation'

import type { ArticleCard } from '@/types/types'
import { getArticlesForCards } from '@/lib/posts'
import type { BlogSearchParams } from '@/lib/blog'
import {
  filterArticlesBySearchAndCategory,
  getBlogCategoryNames,
  normalizeBlogSearch,
  paginateArticles,
} from '@/lib/blog'

export async function getAllArticles(): Promise<ArticleCard[]> {
  const articles = await getArticlesForCards()
  return articles
}

export type BlogPageData = {
  paginatedArticles: ArticleCard[]
  totalPages: number
  currentPage: number
  categoryNames: string[]
  search: string
  categoryFilter: string
}

export async function getBlogPageData(
  searchParams: BlogSearchParams,
  pageSize: number = 9,
): Promise<BlogPageData> {
  const allArticles = await getAllArticles()

  if (!allArticles.length) {
    notFound()
  }

  const { search, categoryFilter, page } = normalizeBlogSearch(searchParams)

  const filtered = filterArticlesBySearchAndCategory(allArticles, search, categoryFilter)

  const {
    paginated: paginatedArticles,
    totalPages,
    currentPage,
  } = paginateArticles(filtered, page, pageSize)

  const categoryNames = getBlogCategoryNames()

  return {
    paginatedArticles,
    totalPages,
    currentPage,
    categoryNames,
    search,
    categoryFilter,
  }
}
