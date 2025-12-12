import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import type { ArticleCard } from '@/types/types'
import { getArticlesForCards } from '@/lib/posts'
import { NewsArticlesGrid } from '@/components/sections/articles/blocks/news-articles'

export const metadata: Metadata = {
  title: 'Blog | Silvana Canal',
}

type BlogSearchParams = {
  q?: string
  category?: string
}

async function getAllArticles(): Promise<ArticleCard[]> {
  const articles = await getArticlesForCards()
  return articles
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<BlogSearchParams>
}) {
  const { q, category } = await searchParams

  const allArticles = await getAllArticles()

  if (!allArticles.length) {
    notFound()
  }

  const search = (q ?? '').trim().toLowerCase()
  const categoryFilter = (category ?? '').trim()

  const filtered = allArticles.filter((article) => {
    const matchesCategory = categoryFilter ? article.category === categoryFilter : true

    const matchesSearch = search
      ? article.title.toLowerCase().includes(search) ||
        (article.excerpt ?? '').toLowerCase().includes(search)
      : true

    return matchesCategory && matchesSearch
  })

  return (
    <main className="max py-10 space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">Blog</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          Todos os artigos
        </h1>
        {categoryFilter ? (
          <p className="text-sm text-muted-foreground">
            Filtrando pela categoria <span className="font-semibold">{categoryFilter}</span>
          </p>
        ) : null}
        {search ? (
          <p className="text-xs text-muted-foreground">Resultados para &quot;{q}&quot;</p>
        ) : null}
      </header>

      {filtered.length ? (
        <NewsArticlesGrid articles={filtered} />
      ) : (
        <p className="text-sm text-muted-foreground">Nenhum artigo encontrado.</p>
      )}
    </main>
  )
}
