import type { Metadata } from 'next'

import Link from 'next/link'
import Image from 'next/image'
import { Search } from 'lucide-react'

import { buildBlogPageHref } from '@/lib/blog'
import type { BlogSearchParams } from '@/lib/blog'
import { getBlogPageData } from './data'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BlogCategorySelect } from '@/components/blog-category-select'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export const metadata: Metadata = {
  title: 'Blog | Silvana Canal',
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<BlogSearchParams>
}) {
  const params = await searchParams

  const { paginatedArticles, totalPages, currentPage, categoryNames, search, categoryFilter } =
    await getBlogPageData(params, 9)

  return (
    <main className="max py-12 space-y-10">
      <header className="space-y-4">
        <div className="space-y-3 text-center md:text-left">
          <p className="text-xs font-medium tracking-[0.25em] text-muted-foreground uppercase">
            Blog
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            Todas as categorias
          </h1>
          {categoryFilter ? (
            <p className="text-sm text-muted-foreground">
              Filtrando pela categoria <span className="font-semibold">{categoryFilter}</span>
            </p>
          ) : null}
          {search ? (
            <p className="text-xs text-muted-foreground">Resultados para &quot;{params.q}&quot;</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <BlogCategorySelect categoryNames={categoryNames} currentCategory={categoryFilter} />

          <form className="w-full max-w-md md:ml-auto" action="/blog" method="get">
            <div className="flex h-9 items-center rounded-md border bg-background px-2">
              <Input
                type="search"
                name="q"
                defaultValue={params.q ?? ''}
                placeholder="Buscar artigos..."
                className="h-7 flex-1 border-0 bg-transparent p-0 text-xs sm:text-sm shadow-none focus-visible:ring-0 focus-visible:outline-none"
              />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="ml-1 h-7 w-7 shrink-0 text-muted-foreground hover:text-foreground"
              >
                <Search className="h-4 w-4" />
                <span className="sr-only">Buscar</span>
              </Button>
            </div>
          </form>
        </div>
      </header>

      {paginatedArticles.length ? (
        <section className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {paginatedArticles.map((article) => (
              <Link key={article.title} href={article.href} className="block h-full">
                <Card className="overflow-hidden p-0 flex h-full flex-col shadow-sm transition-colors hover:bg-muted/40 hover:shadow-md">
                  <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                      sizes="(min-width: 1024px) 420px, 100vw"
                    />
                  </div>
                  <CardContent className="flex flex-1 flex-col gap-1 pt-2 pb-3">
                    <div className="inline-flex items-center gap-1.5 text-[9px] font-medium text-muted-foreground uppercase tracking-wide">
                      <span>{article.date}</span>
                      {article.category ? (
                        <Badge
                          variant="outline"
                          className="rounded-full bg-muted px-1.5 py-px text-[9px] border-0 leading-none"
                        >
                          {article.category}
                        </Badge>
                      ) : null}
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    {article.excerpt ? (
                      <p className="text-xs sm:text-sm text-muted-foreground leading-snug line-clamp-2">
                        {article.excerpt}
                      </p>
                    ) : null}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {totalPages > 1 ? (
            <Pagination className="pt-2">
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious
                      href={buildBlogPageHref(
                        { q: params.q, category: params.category },
                        currentPage - 1,
                      )}
                    />
                  </PaginationItem>
                )}

                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href={buildBlogPageHref(
                        { q: params.q, category: params.category },
                        pageNumber,
                      )}
                      isActive={pageNumber === currentPage}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext
                      href={buildBlogPageHref(
                        { q: params.q, category: params.category },
                        currentPage + 1,
                      )}
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          ) : null}
        </section>
      ) : (
        <p className="text-sm text-muted-foreground">Nenhum artigo encontrado.</p>
      )}
    </main>
  )
}
