import Image from 'next/image'
import Link from 'next/link'

import type { ArticleCard } from '@/types/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export type LastFeaturedArticlesProps = {
  article: ArticleCard
}

export const LastFeaturedArticles = ({ article }: LastFeaturedArticlesProps) => (
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
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>
          ) : null}
        </CardContent>
      </div>
    </Card>
  </Link>
)

export type FeaturedArticlesProps = {
  articles: ArticleCard[]
}

export const FeaturedArticles = ({ articles }: FeaturedArticlesProps) => (
  <div className="space-y-1">
    {articles.map((article) => (
      <Link key={article.title} href={article.href} className="block">
        <Card className="p-0 shadow-sm transition-colors hover:bg-muted/40 hover:shadow-md">
          <CardHeader className="flex flex-row items-center gap-3 py-3.5">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md border bg-muted sm:h-28 sm:w-28">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="112px"
                className="object-cover transition-transform duration-500 ease-out hover:scale-110"
              />
            </div>
            <div className="space-y-0.5">
              <CardTitle className="text-[10px] sm:text-[11px] font-medium leading-snug line-clamp-2">
                {article.title}
              </CardTitle>
            </div>
          </CardHeader>
        </Card>
      </Link>
    ))}
  </div>
)
