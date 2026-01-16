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
      // Initialisiere blog_page Global via direktem SQL Insert
      try {
        // Verwende Drizzle für direkten SQL-Zugriff
        const db = (payload as any).db

        // Prüfe zuerst ob bereits ein Eintrag existiert
        const checkResult = await db.execute({
          sql: `SELECT id FROM blog_page LIMIT 1`,
        })

        if (checkResult.rows && checkResult.rows.length > 0) {
          return NextResponse.json({
            success: true,
            message: 'blog_page existiert bereits',
            existingId: checkResult.rows[0].id,
          })
        }

        // Erstelle initialen Eintrag
        const insertResult = await db.execute({
          sql: `INSERT INTO blog_page (id, hero_title, hero_subtitle, intro, created_at, updated_at)
                VALUES (1, 'Blog', 'Neuigkeiten und Einblicke aus der digitalen Transformation',
                'Erfahren Sie mehr über aktuelle Entwicklungen in der Digitalisierung.',
                NOW(), NOW())
                ON CONFLICT (id) DO NOTHING
                RETURNING id`,
        })

        return NextResponse.json({
          success: true,
          message: 'blog_page initialisiert',
          result: insertResult,
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
