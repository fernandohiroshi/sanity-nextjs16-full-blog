import type { Metadata } from 'next'

import Link from 'next/link'
import Image from 'next/image'

import { buildBlogPageHref } from '@/lib/blog'
import type { BlogSearchParams } from '@/lib/blog'
import { getBlogPageData } from './data'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BlogCategorySelect } from '@/components/blog-category-select'
import { BlogSearchForm } from '@/components/blog-search-form'
import HeroSection from '@/components/sections/hero'
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
    <main className="max py-4 space-y-10">
      <HeroSection />

      <header className="space-y-4">
        <div className="space-y-3 text-center md:text-left">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              Blog
            </h1>
            {totalPages > 1 ? (
              <Badge variant="outline" className="text-[11px] font-medium px-2 py-0.5">
                Página <span className="font-semibold mx-0.5">{currentPage}</span> de {totalPages}
              </Badge>
            ) : null}
          </div>

          <p className="text-sm text-muted-foreground max-w-xl mx-auto md:mx-0 hidden md:block">
            Conteúdos sobre marketing, turismo, eventos, hotelaria, viagens, gastronomia em Foz do
            Iguaçu e região, e muito mais.
          </p>
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

          <BlogSearchForm className="w-full max-w-md md:ml-auto" defaultValue={params.q ?? ''} />
        </div>
      </header>

      {paginatedArticles.length ? (
        <section className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {paginatedArticles.map((article, index) => (
              <Link key={article.title} href={article.href} className="block h-full">
                <Card className="overflow-hidden p-0 flex h-full flex-col shadow-sm transition-colors hover:bg-muted/40 hover:shadow-md">
                  <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                      sizes="(min-width: 1024px) 420px, 100vw"
                      priority={index === 0}
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
