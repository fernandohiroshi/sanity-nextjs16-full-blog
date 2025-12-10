'use client'

import Image from 'next/image'
import Link from 'next/link'

import type { ArticleCard } from './types'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export type FeaturedArticlesHeroProps = {
  article: ArticleCard
}

export const FeaturedArticlesHero = ({ article }: FeaturedArticlesHeroProps) => (
  <Link href={article.href} className="block h-full" aria-label={article.title}>
    <Card className="h-full overflow-hidden p-0 shadow-sm transition-colors hover:bg-muted/40 hover:shadow-md">
      <div className="grid h-full gap-0 md:grid-rows-[auto_minmax(0,1fr)]">
        <div className="relative aspect-16/8 w-full overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 ease-out hover:scale-105"
            sizes="(min-width: 1024px) 720px, 100vw"
          />
        </div>

        <CardContent className="flex flex-col gap-1.5 py-3.5">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
            {article.category ? (
              <Badge
                variant="outline"
                className="rounded-full bg-muted px-2 py-[2px] text-[10px] uppercase tracking-wide border-0 leading-none"
              >
                {article.category}
              </Badge>
            ) : null}
            <span>{article.date}</span>
          </div>

          <h3 className="text-lg md:text-xl font-semibold leading-snug line-clamp-3">
            {article.title}
          </h3>

          {article.excerpt ? (
            <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
          ) : null}
        </CardContent>
      </div>
    </Card>
  </Link>
)

export type PopularArticlesListProps = {
  articles: ArticleCard[]
}

export const PopularArticlesList = ({ articles }: PopularArticlesListProps) => (
  <div className="space-y-3">
    {articles.map((article) => (
      <Link key={article.title} href={article.href} className="block">
        <Card className="p-0 shadow-sm transition-colors hover:bg-muted/40 hover:shadow-md">
          <CardHeader className="flex flex-row items-center gap-3 py-5">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border bg-muted sm:h-20 sm:w-20">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="80px"
                className="object-cover transition-transform duration-500 ease-out hover:scale-110"
              />
            </div>
            <div className="space-y-1">
              <p className="text-[11px] text-muted-foreground">{article.date}</p>
              <CardTitle className="text-xs sm:text-sm font-semibold leading-snug line-clamp-3">
                {article.title}
              </CardTitle>
            </div>
          </CardHeader>
        </Card>
      </Link>
    ))}
  </div>
)

export type RecentArticlesGridProps = {
  articles: ArticleCard[]
}

export const RecentArticlesGrid = ({ articles }: RecentArticlesGridProps) => (
  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-2">
    {articles.map((article) => (
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
            <p className="text-[11px] text-muted-foreground">{article.date}</p>
          </CardContent>
        </Card>
      </Link>
    ))}
  </div>
)

export type EventArticlesListProps = {
  articles: ArticleCard[]
}

export const EventArticlesList = ({ articles }: EventArticlesListProps) => (
  <div className="space-y-2 pt-1.5">
    {articles.map((article) => (
      <div
        key={article.title}
        className="flex items-center gap-3 rounded-lg border bg-background/90 p-2.5 text-left shadow-sm transition-colors hover:bg-muted/40 hover:shadow-md"
      >
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border bg-muted sm:h-14 sm:w-14">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="56px"
            className="object-cover transition-transform duration-500 ease-out hover:scale-110"
          />
        </div>
        <div className="space-y-0.5">
          {article.category ? (
            <Badge
              variant="outline"
              className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground border-0 px-1.5 py-px bg-muted/70 w-fit leading-none"
            >
              {article.category}
            </Badge>
          ) : null}
          <p className="text-xs sm:text-sm font-semibold leading-snug line-clamp-3">
            {article.title}
          </p>
          <p className="text-[10px] sm:text-[11px] text-muted-foreground">{article.date}</p>
        </div>
      </div>
    ))}
  </div>
)
