import Image from 'next/image'
import Link from 'next/link'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { ArticleCard } from '@/types/types'

type RelatedArticlesProps = {
  articles: ArticleCard[]
}

export const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  if (!articles?.length) return null

  return (
    <section className="mt-10 border-t pt-8">
      <div className="space-y-3">
        <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
          Mais sobre este tema
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {articles.map((article, index) => (
            <Link key={article.title} href={article.href} className="block h-full">
              <Card className="overflow-hidden p-0 flex h-full flex-col shadow-sm transition-colors hover:bg-muted/40 hover:shadow-md">
                <div className="relative aspect-16/10 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                    sizes="(min-width: 1024px) 320px, 100vw"
                    priority={index === 0}
                  />
                </div>
                <CardContent className="flex flex-1 flex-col gap-1.5 pt-2.5 pb-3">
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
                    {article.category ? (
                      <Badge
                        variant="outline"
                        className="rounded-full bg-muted px-2 py-[3px] text-[10px] border-0 leading-none"
                      >
                        {article.category}
                      </Badge>
                    ) : null}
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold leading-snug line-clamp-2">
                    {article.title}
                  </h4>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
