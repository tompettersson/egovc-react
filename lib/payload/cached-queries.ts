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
 * @param slug - Global slug
 * @param locale - Locale code (default: 'de')
 */
export const getCachedGlobal = cache(async <T = any>(slug: string, locale: string = 'de'): Promise<T | null> => {
  try {
    const payload = await getCachedPayload()
    return await (payload as any).findGlobal({
      slug,
      locale,
      fallbackLocale: 'de',
    })
  } catch (error) {
    console.error(`Error fetching global '${slug}':`, error)
    return null
  }
})

/**
 * Cached Sector Page - für verwaltung, gesundheitswesen, kirche
 * Note: SectorPages uses dictionary-based content, locale is not needed here
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
 * @param slug - Blog post slug
 * @param locale - Locale code (default: 'de')
 */
export const getCachedBlogPost = cache(async (slug: string, locale: string = 'de') => {
  try {
    const payload = await getCachedPayload()
    const result = await (payload as any).find({
      collection: 'blog-posts',
      where: { slug: { equals: slug } },
      limit: 1,
      locale,
      fallbackLocale: 'de',
    })
    return result.docs[0] || null
  } catch (error) {
    console.error(`Error fetching blog post '${slug}':`, error)
    return null
  }
})

/**
 * Cached Blog Posts List
 * @param limit - Max number of posts
 * @param locale - Locale code (default: 'de')
 */
export const getCachedBlogPosts = cache(async (limit = 100, locale: string = 'de') => {
  try {
    const payload = await getCachedPayload()
    return await (payload as any).find({
      collection: 'blog-posts',
      limit,
      sort: '-publishedAt',
      locale,
      fallbackLocale: 'de',
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return { docs: [] }
  }
})

/**
 * Cached References - für Testimonials auf mehreren Seiten
 * @param locale - Locale code (default: 'de')
 */
export const getCachedReferences = cache(async (locale: string = 'de'): Promise<Reference[]> => {
  try {
    const payload = await getCachedPayload()
    const result = await (payload as any).find({
      collection: 'references',
      sort: 'order',
      limit: 20,
      locale,
      fallbackLocale: 'de',
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
 * @param locale - Locale code (default: 'de')
 */
export const getCachedWhitepapers = cache(async (locale: string = 'de') => {
  try {
    const payload = await getCachedPayload()
    return await (payload as any).find({
      collection: 'whitepapers',
      limit: 100,
      locale,
      fallbackLocale: 'de',
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

/**
 * @param locale - Locale code (default: 'de')
 */
export const getCachedLegalPages = cache(async (locale: string = 'de'): Promise<LegalPagesData | null> => {
  try {
    const payload = await getCachedPayload()
    return await (payload as any).findGlobal({
      slug: 'legal-pages',
      locale,
      fallbackLocale: 'de',
    })
  } catch (error) {
    console.error('Error fetching legal pages:', error)
    return null
  }
})
