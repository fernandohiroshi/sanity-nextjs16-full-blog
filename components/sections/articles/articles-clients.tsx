'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { Search } from 'lucide-react'

import Socials from './socials'
import type { ArticleCard } from '@/types/types'

type PartnerCard = {
  href: string
  image: string
}

type ArticlesSectionClientProps = {
  articles: ArticleCard[]
  partners: PartnerCard[]
}

export const ArticlesSectionClient = ({ articles, partners }: ArticlesSectionClientProps) => {
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

  return (
    <section className="w-full flex justify-center py-16">
      <div className="max space-y-8">
        <div>
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Entre os artigos mais recentes
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
            Turismo, notícias e bastidores da tríplice fronteira
          </h2>
          <p className="max-w-2xl mx-auto md:mx-0 text-muted-foreground text-xs sm:text-sm md:text-base">
            Notícias, bastidores da hotelaria, experiências de viagem e eventos em Foz do Iguaçu e
            na tríplice fronteira.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-start">
          <Link href={articles[0].href} className="block h-full" aria-label={articles[0].title}>
            <Card className="h-full overflow-hidden p-0 shadow-sm transition-colors hover:bg-muted/40 hover:shadow-md">
              <div className="grid h-full gap-0 md:grid-rows-[auto_minmax(0,1fr)]">
                <div className="relative aspect-16/8 w-full overflow-hidden">
                  <Image
                    src={articles[0].image}
                    alt={articles[0].title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                    sizes="(min-width: 1024px) 720px, 100vw"
                  />
                </div>
                <CardContent className="flex flex-col gap-1.5 py-3.5">
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    {articles[0].category ? (
                      <Badge
                        variant="outline"
                        className="rounded-full bg-muted px-2 py-[2px] text-[10px] uppercase tracking-wide border-0 leading-none"
                      >
                        {articles[0].category}
                      </Badge>
                    ) : null}
                    <span>{articles[0].date}</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold leading-snug line-clamp-3">
                    {articles[0].title}
                  </h3>

                  {articles[0].excerpt ? (
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 md:line-clamp-3">
                      {articles[0].excerpt}
                    </p>
                  ) : null}
                </CardContent>
              </div>
            </Card>
          </Link>

          <div className="space-y-4">
            <div className="space-y-3">
              <form className="relative" onSubmit={handleSearchSubmit}>
                <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar artigos..."
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
            <div className="space-y-3">
              {articles.slice(1, 4).map((article) => (
                <Link key={article.title} href={article.href} className="block">
                  <Card className="p-0 shadow-sm transition-colors hover:bg-muted/40 hover:shadow-md">
                    <CardHeader className="flex flex-row items-center gap-3 py-3.5 px-2">
                      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md border bg-muted sm:h-24 sm:w-36">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          sizes="112px"
                          className="object-cover transition-transform duration-500 ease-out hover:scale-110"
                        />
                      </div>
                      <div className="space-y-0.5">
                        <CardTitle className="text-[10px] sm:text-sm font-medium leading-snug line-clamp-2">
                          {article.title}
                        </CardTitle>
                        {article.excerpt ? (
                          <p className="text-[11px] text-muted-foreground leading-snug line-clamp-2 md:line-clamp-3">
                            {article.excerpt}
                          </p>
                        ) : null}
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.1fr)] items-stretch">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Artigos recentes
              </p>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-2">
                {articles.slice(4, 12).map((article) => (
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
                      <CardContent className="flex flex-1 flex-col gap-1 pt-1.5 pb-3">
                        <div className="inline-flex items-center gap-1.5 text-[9px] font-medium text-muted-foreground uppercase tracking-wide">
                          {article.category ? (
                            <Badge
                              variant="outline"
                              className="rounded-full bg-muted px-1.5 py-px text-[9px] border-0 leading-none"
                            >
                              {article.category}
                            </Badge>
                          ) : null}
                        </div>
                        <h4 className="text-xs sm:text-sm font-semibold leading-snug line-clamp-2">
                          {article.title}
                        </h4>
                        {article.excerpt ? (
                          <p className="text-[11px] text-muted-foreground leading-snug line-clamp-2">
                            {article.excerpt}
                          </p>
                        ) : null}
                        <p className="text-[11px] text-muted-foreground">{article.date}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4 h-full">
            <Socials />

            <div className="flex flex-col gap-3 px-2 mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground pl-2">
                Parceiros
              </p>
              <div className="space-y-2 pt-1">
                {partners.map((partner, index) => (
                  <Link
                    key={`${partner.href}-${index}`}
                    href={partner.href}
                    className="block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex justify-start py-1">
                      <div className="relative h-43 w-full overflow-hidden rounded-lg">
                        <Image
                          src={partner.image}
                          alt="Parceiro"
                          title="Click para visitar"
                          fill
                          sizes="(min-width: 1024px) 320px, 280px"
                          className="object-cover object-top transition-transform duration-500 ease-out hover:scale-105 rounded-lg"
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-4">
          <Button
            variant="outline"
            className="rounded-full px-6 py-2 text-sm font-medium hover:bg-muted"
            asChild
          >
            <Link href="/blog">Ver mais</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
