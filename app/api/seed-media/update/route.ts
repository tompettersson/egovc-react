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
      // Initialisiere blog_page Global via direktem SQL
      try {
        const db = (payload as any).db
        const pool = db?.pool

        if (!pool) {
          return NextResponse.json({
            error: 'Pool not available',
            dbKeys: Object.keys(db || {}),
          }, { status: 500 })
        }

        // Prüfe ob blog_page_locales Tabelle existiert
        const tablesResult = await pool.query(`
          SELECT table_name FROM information_schema.tables
          WHERE table_schema = 'public' AND table_name LIKE 'blog_page%'
        `)

        const tables = tablesResult.rows.map((r: any) => r.table_name)

        // Prüfe blog_page Eintrag
        const checkResult = await pool.query('SELECT * FROM blog_page LIMIT 1')
        const blogPageRow = checkResult.rows[0]

        // Prüfe blog_page_locales Einträge
        let localesRows: any[] = []
        if (tables.includes('blog_page_locales')) {
          const localesResult = await pool.query('SELECT * FROM blog_page_locales LIMIT 5')
          localesRows = localesResult.rows
        }

        return NextResponse.json({
          success: true,
          tables,
          blogPageRow,
          localesRows,
          hint: 'If blog_page_locales is empty or missing, run Payload migrations',
        })
      } catch (err) {
        return NextResponse.json({
          error: 'Init failed',
          details: String(err),
        }, { status: 500 })
      }
    }

    if (action === 'fix-blog-page-locales') {
      // Erstelle fehlenden Eintrag in blog_page_locales
      try {
        const db = (payload as any).db
        const pool = db?.pool

        if (!pool) {
          return NextResponse.json({ error: 'Pool not available' }, { status: 500 })
        }

        // Prüfe ob blog_page_locales Tabelle existiert
        const tablesResult = await pool.query(`
          SELECT table_name FROM information_schema.tables
          WHERE table_schema = 'public' AND table_name = 'blog_page_locales'
        `)

        if (tablesResult.rows.length === 0) {
          return NextResponse.json({
            error: 'blog_page_locales table does not exist',
            hint: 'Run Payload migrations: npx payload migrate',
          }, { status: 500 })
        }

        // Prüfe ob bereits Locale-Einträge existieren
        const localesCheck = await pool.query('SELECT * FROM blog_page_locales WHERE _parent_id = 1 LIMIT 1')

        if (localesCheck.rows.length > 0) {
          return NextResponse.json({
            success: true,
            message: 'Locale entries already exist',
            locales: localesCheck.rows,
          })
        }

        // Erstelle Locale-Einträge für de und en
        await pool.query(`
          INSERT INTO blog_page_locales (_parent_id, _locale, seo_meta_title, seo_meta_description)
          VALUES
            (1, 'de', 'Blog | EGovC', 'Neuigkeiten und Einblicke aus der digitalen Transformation'),
            (1, 'en', 'Blog | EGovC', 'News and insights from digital transformation')
          ON CONFLICT DO NOTHING
        `)

        return NextResponse.json({
          success: true,
          message: 'Locale entries created',
        })
      } catch (err) {
        return NextResponse.json({
          error: 'Fix locales failed',
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
