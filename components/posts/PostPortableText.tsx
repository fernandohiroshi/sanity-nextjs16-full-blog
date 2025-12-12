import Image from 'next/image'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

import { urlForImage } from '@/lib/sanity'

const fileUrlFromRef = (ref: string) => {
  const [, id, extension] = ref.split('-')
  return `https://cdn.sanity.io/files/${process.env.SANITY_PROJECT_ID}/${process.env.SANITY_DATASET}/${id}.${extension}`
}

const components: PortableTextComponents = {
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
      const ref = value.asset?._ref
      if (!ref) return null
      const url = urlForImage(ref).width(800).height(600).url()

      return (
        <div className="my-4">
          <Image
            src={url}
            alt={(value as { alt?: string }).alt || 'Imagem'}
            width={800}
            height={600}
            className="rounded-md"
            loading="lazy"
          />
          {(value as { caption?: string }).caption && (
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {(value as { caption?: string }).caption}
            </p>
          )}
        </div>
      )
    },
  },

  block: {
    normal: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic my-4">{children}</blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6 my-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6 my-4">{children}</ol>,
  },

  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },

  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const href = (value as { href?: string })?.href || '#'
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          {children}
        </a>
      )
    },
  },
}

type PostPortableTextProps = {
  value: PortableTextBlock[]
}

export const PostPortableText = ({ value }: PostPortableTextProps) => (
  <div className="prose prose-sm sm:prose lg:prose-lg max-w-none wrap-break-word">
    <PortableText value={value} components={components} />
  </div>
)
