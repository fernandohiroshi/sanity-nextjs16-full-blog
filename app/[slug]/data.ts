import { notFound } from 'next/navigation'

import type { SanityPostWithExcerpt } from '@/lib/posts'
import { getPostBySlug } from '@/lib/posts'

export async function getPostPageData(slug: string): Promise<SanityPostWithExcerpt> {
  if (!slug) {
    notFound()
  }

  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return post
}
