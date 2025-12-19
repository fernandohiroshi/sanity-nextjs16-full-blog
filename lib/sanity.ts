import { createClient } from 'next-sanity'
import type { QueryParams } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const projectId = process.env.SANITY_PROJECT_ID!
export const dataset = process.env.SANITY_DATASET!
const apiVersion = '2025-01-01'
const useCdn = false
const token = process.env.SANITY_READ_TOKEN

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token,
})

const imageBuilder = createImageUrlBuilder({ projectId, dataset })

export const urlForImage = (source: unknown) => imageBuilder.image(source as never)

export const getImageUrl = (source: unknown, width: number, height: number) =>
  urlForImage(source).width(width).height(height).url()

export async function sanityFetch<T>(query: string, params: QueryParams = {}): Promise<T> {
  return sanityClient.fetch<T>(query, params)
}
