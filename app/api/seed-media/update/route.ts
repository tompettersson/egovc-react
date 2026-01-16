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
      try {
        // Payload updateGlobal erstellt den Eintrag automatisch falls er nicht existiert
        const blogPage = await payload.updateGlobal({
          slug: 'blog-page',
          data: {
            hero: {
              title: 'Blog',
              subtitle: 'Neuigkeiten und Einblicke aus der digitalen Transformation',
              backgroundImage: 90,
            },
            intro: 'Erfahren Sie mehr über aktuelle Entwicklungen in der Digitalisierung der öffentlichen Verwaltung, des Gesundheitswesens und kirchlicher Organisationen.',
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

    if (action === 'init-blog-page') {
      // Initialisiere blog_page Global falls es nicht existiert
      try {
        // findGlobal erstellt den Eintrag automatisch bei Payload
        const existing = await payload.findGlobal({
          slug: 'blog-page',
        })

        return NextResponse.json({
          success: true,
          message: 'blog_page Global gefunden/initialisiert',
          data: existing,
        })
      } catch (err) {
        return NextResponse.json({
          error: 'Init failed',
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
