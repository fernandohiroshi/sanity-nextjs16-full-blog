'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

import { Search } from 'lucide-react'

import Socials from './socials'
import { FeaturedArticles, LastFeaturedArticles } from './blocks/featured-articles'

import { NewsArticlesGrid } from './blocks/news-articles'
import { EventArticlesList } from './blocks/event-articles'
import type { ArticleCard } from '@/types/types'
import { articleCategories, mainArticleCategoryLabels } from './articles.config'

export type ArticlesSectionClientProps = {
  lastFeaturedArticle: ArticleCard
  featuredArticles: ArticleCard[]
  recentArticles: ArticleCard[]
  eventArticles: ArticleCard[]
}

export const ArticlesSectionClient = ({
  lastFeaturedArticle,
  featuredArticles,
  recentArticles,
  eventArticles,
}: ArticlesSectionClientProps) => {
  const router = useRouter()
  const [searchText, setSearchText] = useState('')

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const query = searchText.trim()
    if (!query) {
      router.push('/blog')
      return
    }
    const params = new URLSearchParams({ q: query })
    router.push(`/blog?${params.toString()}`)
  }

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams({ category })
    router.push(`/blog?${params.toString()}`)
  }

  return (
    <section className="w-full flex justify-center py-16">
      <div className="max space-y-8">
        <div className="space-y-3 text-center md:text-left">
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Dentro dos artigos mais recentes
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Turismo, notícias e bastidores da tríplice fronteira
          </h2>
          <p className="max-w-2xl mx-auto md:mx-0 text-muted-foreground text-xs sm:text-sm md:text-base">
            Artigos jornalísticos com notícias, bastidores da hotelaria, experiências de viagem e
            eventos em Foz do Iguaçu e na tríplice fronteira.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-start">
          <LastFeaturedArticles article={lastFeaturedArticle} />

          <div className="space-y-4">
            <div className="space-y-3">
              <form className="relative" onSubmit={handleSearchSubmit}>
                <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar textos..."
                  className="h-9 pl-8 text-sm"
                  value={searchText}
                  onChange={(event) => setSearchText(event.target.value)}
                />
              </form>

              <div className="flex items-center justify-between gap-4 px-2">
                <div>
                  <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                    Artigos em destaque
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-[11px] font-medium text-muted-foreground rounded-full px-3 py-1 hover:bg-muted"
                  asChild
                >
                  <Link href="/blog">Ver todos</Link>
                </Button>
              </div>
            </div>

            <FeaturedArticles articles={featuredArticles} />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.1fr)] items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-base md:text-lg font-semibold tracking-tight">
                Categorias em foco
              </h3>

              <div className="flex flex-wrap items-center gap-3">
                <div className="w-full max-w-xs sm:w-auto">
                  <Select
                    onValueChange={(value) => {
                      handleCategoryClick(value)
                    }}
                  >
                    <SelectTrigger className="h-8 text-sm">
                      <SelectValue placeholder="Outras categorias" />
                    </SelectTrigger>
                    <SelectContent className="max-h-56 overflow-y-auto">
                      {articleCategories
                        .filter((category) => !mainArticleCategoryLabels.includes(category.label))
                        .map((category) => (
                          <SelectItem key={category.label} value={category.label}>
                            {category.label}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {mainArticleCategoryLabels.map((label) => (
                    <Button
                      key={label}
                      variant="outline"
                      size="sm"
                      className="rounded-full text-xs font-medium"
                      onClick={() => handleCategoryClick(label)}
                    >
                      {label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Artigos recentes
              </p>

              <NewsArticlesGrid articles={recentArticles} />
            </div>
          </div>

          <div className="space-y-4">
            <Socials />

            <Card className="border-dashed bg-muted/40 shadow-sm transition-colors hover:bg-muted/60 hover:shadow-md">
              <CardContent className="py-5 flex flex-col gap-3">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                  Eventos & gastronomia
                </p>
                <EventArticlesList articles={eventArticles} />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button
            variant="outline"
            className="rounded-full px-6 py-2 text-sm font-medium hover:bg-muted"
          >
            Ver mais
          </Button>
        </div>
      </div>
    </section>
  )
}
