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
      const updates = [
        { postId: 1, imageId: 83 }, // blog-european-1.jpg
        { postId: 2, imageId: 84 }, // blog-european-2.jpg
        { postId: 3, imageId: 85 }, // blog-european-3.jpg
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
      // Blog-Page Hero-Hintergrundbild setzen (nested in hero object)
      const blogPage = await payload.updateGlobal({
        slug: 'blog-page',
        data: {
          hero: {
            backgroundImage: 86, // blog-hero-background.jpg
          },
        },
      })

      return NextResponse.json({
        success: true,
        message: 'Blog-Hero-Hintergrundbild gesetzt',
        backgroundImage: blogPage.hero?.backgroundImage,
      })
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
