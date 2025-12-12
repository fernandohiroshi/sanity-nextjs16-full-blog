import Image from 'next/image'
import Link from 'next/link'

import type { ArticleCard } from '@/types/types'
import { Badge } from '@/components/ui/badge'

export type EventArticlesListProps = {
  articles: ArticleCard[]
}

export const EventArticlesList = ({ articles }: EventArticlesListProps) => (
  <div className="space-y-2 pt-1.5">
    {articles.map((article) => (
      <Link
        key={article.title}
        href={article.href}
        className="block rounded-lg border bg-background/90 text-left shadow-sm transition-colors hover:bg-muted/40 hover:shadow-md overflow-hidden"
      >
        <div className="flex items-center gap-3 p-2">
          <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-md border bg-muted sm:h-24 sm:w-32">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(min-width: 1024px) 192px, (min-width: 640px) 160px, 120px"
              className="object-cover transition-transform duration-500 ease-out hover:scale-110"
            />
          </div>
          <div className="space-y-0.5 pr-2">
            {article.category ? (
              <Badge
                variant="outline"
                className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground border-0 px-0 py-px bg-muted/70 w-fit leading-none"
              >
                {article.category}
              </Badge>
            ) : null}
            <p className="text-sm font-medium leading-snug line-clamp-3">{article.title}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
)
