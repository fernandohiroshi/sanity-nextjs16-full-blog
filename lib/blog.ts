import type { ArticleCard } from '@/types/types'
import { articleCategories } from '@/components/articles/articles.config'

export type BlogSearchParams = {
  q?: string
  category?: string
  page?: string
}

export function normalizeBlogSearch(params: BlogSearchParams) {
  const search = (params.q ?? '').trim().toLowerCase()
  const categoryFilter = (params.category ?? '').trim()
  const pageParam = params.page ?? '1'

  const pageNumber = Number.parseInt(pageParam, 10)
  const safePage = Number.isNaN(pageNumber) ? 1 : Math.max(1, pageNumber)

  return { search, categoryFilter, page: safePage }
}

export function filterArticlesBySearchAndCategory(
  articles: ArticleCard[],
  search: string,
  categoryFilter: string,
): ArticleCard[] {
  return articles.filter((article) => {
    const matchesCategory = categoryFilter ? article.category === categoryFilter : true

    const matchesSearch = search
      ? article.title.toLowerCase().includes(search) ||
        (article.excerpt ?? '').toLowerCase().includes(search)
      : true

    return matchesCategory && matchesSearch
  })
}

export function paginateArticles(
  articles: ArticleCard[],
  page: number,
  pageSize: number,
): {
  paginated: ArticleCard[]
  totalPages: number
  currentPage: number
} {
  const safePageSize = pageSize > 0 ? pageSize : 10
  const totalPages = Math.max(1, Math.ceil(articles.length / safePageSize))
  const currentPage = Math.min(totalPages, Math.max(1, page))
  const startIndex = (currentPage - 1) * safePageSize

  return {
    paginated: articles.slice(startIndex, startIndex + safePageSize),
    totalPages,
    currentPage,
  }
}

export function getBlogCategoryNames(): string[] {
  return articleCategories.map((category) => category.label)
}

export function buildBlogPageHref(
  base: { q?: string; category?: string },
  targetPage: number,
): string {
  const params = new URLSearchParams()

  if (base.q) params.set('q', base.q)
  if (base.category) params.set('category', base.category)
  if (targetPage > 1) params.set('page', String(targetPage))

  const queryString = params.toString()
  return queryString ? `/blog?${queryString}` : '/blog'
}
