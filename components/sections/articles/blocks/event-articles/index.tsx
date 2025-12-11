import Image from 'next/image'

import type { ArticleCard } from '@/types/types'
import { Badge } from '@/components/ui/badge'

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
