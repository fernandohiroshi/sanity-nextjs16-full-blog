import Image from 'next/image'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { getImageUrl } from '@/lib/sanity'
import { PostPortableText } from '@/components/post-portable-text'
import { getPostPageData } from './data'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const post = await getPostPageData(slug)

  const formattedDate = post.date
    ? format(new Date(post.date), "d 'de' MMMM 'de' yyyy", { locale: ptBR })
    : ''

  return (
    <main className="py-10">
      <div className="max-w-7xl mx-auto">
        <article className="max-w-3xl mx-auto px-4 space-y-6">
          <header className="space-y-3">
            {post.category && (
              <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                {post.category}
              </p>
            )}
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{post.title}</h1>
            {formattedDate && <p className="text-sm text-muted-foreground">{formattedDate}</p>}
          </header>

          {post.image?.asset?._ref && (
            <div className="relative w-full aspect-video overflow-hidden rounded-lg border bg-muted">
              <Image
                src={getImageUrl(post.image.asset._ref, 960, 540)}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 960px, 100vw"
                priority
              />
            </div>
          )}

          {post.excerpt && <PostPortableText value={post.excerpt} />}
        </article>
      </div>
    </main>
  )
}
