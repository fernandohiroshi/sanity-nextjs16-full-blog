import Image from 'next/image'
import Link from 'next/link'

import type { ArticleCard } from '@/types/types'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export type NewsArticlesGridProps = {
  articles: ArticleCard[]
}

export const NewsArticlesGrid = ({ articles }: NewsArticlesGridProps) => (
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
