/**
 * API Route zum Aktualisieren von Blog-Posts mit neuen Bildern
 */

import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

const SEED_SECRET = process.env.SEED_SECRET || 'egovc-seed-2026'

export async function POST(request: NextRequest) {
  try {
    // Authentifizierung prüfen
    const authHeader = request.headers.get('Authorization')
    if (!authHeader || authHeader !== `Bearer ${SEED_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { action } = body

    const payload = await getPayload({ config })

    if (action === 'update-blog-images') {
      // Blog-Posts mit neuen europäischen Bildern aktualisieren
      // Neue IDs nach direktem Vercel Blob Upload
      const updates = [
        { postId: 1, imageId: 87 }, // blog-european-1.jpg
        { postId: 2, imageId: 88 }, // blog-european-2.jpg
        { postId: 3, imageId: 89 }, // blog-european-3.jpg
      ]

      const results = []
      for (const update of updates) {
        const result = await payload.update({
          collection: 'blog-posts',
          id: update.postId,
          data: {
            featuredImage: update.imageId,
          },
        })
        results.push({ postId: result.id, title: result.title, newImageId: update.imageId })
      }

      return NextResponse.json({
        success: true,
        message: `${results.length} Blog-Posts aktualisiert`,
        updates: results,
      })
    }

    if (action === 'set-blog-hero') {
      // Blog-Page Hero-Hintergrundbild setzen
      // Neue ID nach direktem Vercel Blob Upload
      try {
        // Erst versuchen das Global zu lesen um zu sehen ob es existiert
        const existingBlogPage = await payload.findGlobal({
          slug: 'blog-page',
        }).catch(() => null)

        console.log('Existing blog_page:', JSON.stringify(existingBlogPage, null, 2))

        // Update mit allen erforderlichen Hero-Feldern
        const blogPage = await payload.updateGlobal({
          slug: 'blog-page',
          data: {
            hero: {
              title: existingBlogPage?.hero?.title || 'Blog',
              subtitle: existingBlogPage?.hero?.subtitle || 'Neuigkeiten und Einblicke',
              backgroundImage: 90, // blog-hero-background.jpg
            },
            intro: existingBlogPage?.intro || 'Erfahren Sie mehr über aktuelle Entwicklungen...',
          },
        })

        return NextResponse.json({
          success: true,
          message: 'Blog-Hero-Hintergrundbild gesetzt',
          backgroundImage: blogPage.hero?.backgroundImage,
          heroData: blogPage.hero,
        })
      } catch (err) {
        console.error('Set blog hero error:', err)
        return NextResponse.json({
          error: 'Failed to set blog hero',
          details: String(err),
        }, { status: 500 })
      }
    }

    return NextResponse.json({ error: 'Unknown action. Use: update-blog-images, set-blog-hero' }, { status: 400 })
  } catch (error) {
    console.error('Update Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error', details: String(error) },
      { status: 500 }
    )
  }
}
