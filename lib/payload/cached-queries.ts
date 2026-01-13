import { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Reference } from '@/components/sections/ReferencesSection'

/**
 * Cached Payload instance - wiederverwendet innerhalb eines Request-Zyklus
 */
export const getCachedPayload = cache(async () => {
  return getPayload({ config })
})

/**
 * Cached Global - für homepage, site-settings, career-page, etc.
 */
export const getCachedGlobal = cache(async <T = any>(slug: string): Promise<T | null> => {
  try {
    const payload = await getCachedPayload()
    return await (payload as any).findGlobal({ slug })
  } catch (error) {
    console.error(`Error fetching global '${slug}':`, error)
    return null
  }
})

/**
 * Cached Sector Page - für verwaltung, gesundheitswesen, kirche
 */
export const getCachedSectorPage = cache(async (slug: string) => {
  try {
    const payload = await getCachedPayload()
    const result = await (payload as any).find({
      collection: 'sector-pages',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    return result.docs[0] || null
  } catch (error) {
    console.error(`Error fetching sector page '${slug}':`, error)
    return null
  }
})

/**
 * Cached Blog Post by Slug
 */
export const getCachedBlogPost = cache(async (slug: string) => {
  try {
    const payload = await getCachedPayload()
    const result = await (payload as any).find({
      collection: 'blog-posts',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    return result.docs[0] || null
  } catch (error) {
    console.error(`Error fetching blog post '${slug}':`, error)
    return null
  }
})

/**
 * Cached Blog Posts List
 */
export const getCachedBlogPosts = cache(async (limit = 100) => {
  try {
    const payload = await getCachedPayload()
    return await (payload as any).find({
      collection: 'blog-posts',
      limit,
      sort: '-publishedAt',
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return { docs: [] }
  }
})

/**
 * Cached References - für Testimonials auf mehreren Seiten
 */
export const getCachedReferences = cache(async (): Promise<Reference[]> => {
  try {
    const payload = await getCachedPayload()
    const result = await (payload as any).find({
      collection: 'references',
      sort: 'order',
      limit: 20,
    })

    return result.docs.map((doc: any) => ({
      id: doc.id,
      name: doc.name,
      title: doc.title,
      company: doc.company || undefined,
      quote: doc.quote,
      image: doc.image ? {
        url: doc.image.url,
        alt: doc.image.alt || doc.name,
      } : undefined,
    }))
  } catch (error) {
    console.error('Error fetching references:', error)
    return []
  }
})

/**
 * Cached Whitepapers
 */
export const getCachedWhitepapers = cache(async () => {
  try {
    const payload = await getCachedPayload()
    return await (payload as any).find({
      collection: 'whitepapers',
      limit: 100,
    })
  } catch (error) {
    console.error('Error fetching whitepapers:', error)
    return { docs: [] }
  }
})

/**
 * Cached Legal Pages - für Impressum, Datenschutz, Widerrufsbelehrung
 */
export interface LegalPageContent {
  title?: string
  content?: any // Lexical RichText
}

export interface LegalPagesData {
  impressum?: LegalPageContent
  datenschutz?: LegalPageContent
  widerruf?: LegalPageContent
}

export const getCachedLegalPages = cache(async (): Promise<LegalPagesData | null> => {
  try {
    const payload = await getCachedPayload()
    return await (payload as any).findGlobal({ slug: 'legal-pages' })
  } catch (error) {
    console.error('Error fetching legal pages:', error)
    return null
  }
})
