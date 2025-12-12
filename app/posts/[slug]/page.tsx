import Image from 'next/image'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import groq from 'groq'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

import { sanityFetch } from '@/lib/sanity'

type SanityArticle = {
  _id: string
  title: string
  slug?: {
    current?: string
  }
  date: string
  category?: string
  imageUrl?: string
  excerpt?: PortableTextBlock[]
}

const fileUrlFromRef = (ref: string) => {
  // refs vêm no formato "file-<id>-<extension>", ex: file-abc123-mp4
  const [, id, extension] = ref.split('-')
  return `https://cdn.sanity.io/files/${process.env.SANITY_PROJECT_ID}/${process.env.SANITY_DATASET}/${id}.${extension}`
}

const portableComponents: PortableTextComponents = {
  // TIPOS ESPECIAIS (vídeos, arquivos)
  types: {
    file: ({ value }) => {
      const ref = (value as { asset?: { _ref?: string } }).asset?._ref
      if (!ref) return null
      const url = fileUrlFromRef(ref)

      return (
        <div className="my-4 overflow-hidden rounded-md border bg-muted">
          <video controls className="w-full h-full">
            <source src={url} />
            Seu navegador não suporta a reprodução de vídeo.
          </video>
        </div>
      )
    },

    videoEmbed: ({ value }) => {
      const url = (value as { url?: string })?.url
      if (!url) return null

      return (
        <div className="my-4 overflow-hidden rounded-md border bg-muted">
          <div className="aspect-video">
            <iframe
              src={url}
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )
    },

    image: ({ value }) => {
      const url = value.asset?.url
      if (!url) return null
      return (
        <div className="my-4">
          <Image
            src={url}
            alt={value.alt || 'Imagem'}
            width={800}
            height={600}
            className="rounded-md"
          />
        </div>
      )
    },
  },

  // BLOCOS (parágrafos, headings, blockquote)
  block: {
    normal: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic my-4">{children}</blockquote>
    ),
  },

  // LISTAS
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6 my-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6 my-4">{children}</ol>,
  },

  // LIST ITEMS
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },

  // MARKS (strong, em, link)
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const href = value?.href || '#'
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {children}
        </a>
      )
    },
  },
}

const ALL_POSTS_QUERY = groq`*[_type == "post"] | order(date desc) {
  _id,
  title,
  slug,
  date,
  category,
  "imageUrl": image.asset->url,
  excerpt
}`

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  if (!slug) notFound()

  const data = await sanityFetch<SanityArticle[]>(ALL_POSTS_QUERY)
  const post = data.find((item) => item.slug?.current === slug)

  if (!post) notFound()

  const formattedDate = post.date
    ? format(new Date(post.date), "d 'de' MMMM 'de' yyyy", { locale: ptBR })
    : ''

  return (
    <main className="py-10">
      <div className="max">
        <article className="max-w-3xl mx-auto px-2 space-y-6">
          <header className="space-y-3">
            <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              {post.category}
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{post.title}</h1>
            {formattedDate && <p className="text-sm text-muted-foreground">{formattedDate}</p>}
          </header>

          {post.imageUrl && (
            <div className="relative w-full aspect-video overflow-hidden rounded-lg border bg-muted">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 960px, 100vw"
              />
            </div>
          )}

          {post.excerpt && (
            <div className="prose prose-sm sm:prose lg:prose-lg max-w-none wrap-break-word">
              <PortableText value={post.excerpt} components={portableComponents} />
            </div>
          )}
        </article>
      </div>
    </main>
  )
}
