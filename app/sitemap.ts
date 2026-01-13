import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://egovc.de'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config })

  // Static pages for both locales
  const locales = ['de', 'en']
  const staticPages = [
    '',
    '/verwaltung',
    '/gesundheitswesen',
    '/kirche',
    '/karriere',
    '/team',
    '/network',
    '/whitepaper',
    '/blog',
  ]

  const staticEntries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const page of staticPages) {
      staticEntries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            de: `${BASE_URL}/de${page}`,
            en: `${BASE_URL}/en${page}`,
          },
        },
      })
    }
  }

  // Dynamic blog posts
  const blogEntries: MetadataRoute.Sitemap = []
  try {
    const blogPosts = await payload.find({
      collection: 'blog-posts',
      where: {
        status: { equals: 'published' },
      },
      limit: 1000,
    })

    for (const post of blogPosts.docs) {
      for (const locale of locales) {
        blogEntries.push({
          url: `${BASE_URL}/${locale}/blog/${post.slug}`,
          lastModified: new Date(post.updatedAt),
          changeFrequency: 'monthly',
          priority: 0.6,
          alternates: {
            languages: {
              de: `${BASE_URL}/de/blog/${post.slug}`,
              en: `${BASE_URL}/en/blog/${post.slug}`,
            },
          },
        })
      }
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  // Note: Individual whitepaper pages are not implemented - whitepapers are listed on /whitepaper page
  // If individual whitepaper detail pages are added, include them in the sitemap here

  return [...staticEntries, ...blogEntries]
}
