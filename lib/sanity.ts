import { createClient, type QueryParams } from '@sanity/client'

const projectId = process.env.SANITY_PROJECT_ID!
const dataset = process.env.SANITY_DATASET!
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

export async function sanityFetch<T>(query: string, params: QueryParams = {}): Promise<T> {
  return sanityClient.fetch<T>(query, params)
}
