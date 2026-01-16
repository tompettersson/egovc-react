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
      // Blog-Page Hero-Hintergrundbild setzen - via direktem SQL
      try {
        const db = (payload as any).db
        const pool = db?.pool

        if (!pool) {
          return NextResponse.json({ error: 'Pool not available' }, { status: 500 })
        }

        // Prüfe ob Spalte existiert
        const columnCheck = await pool.query(`
          SELECT column_name FROM information_schema.columns
          WHERE table_name = 'blog_page' AND column_name = 'hero_background_image_id'
        `)

        // Falls Spalte fehlt, füge sie hinzu (Migration nachholen)
        if (columnCheck.rows.length === 0) {
          await pool.query(`
            ALTER TABLE blog_page
            ADD COLUMN hero_background_image_id integer REFERENCES media(id)
          `)
        }

        // Setze hero_background_image_id
        const updateResult = await pool.query(`
          UPDATE blog_page
          SET hero_background_image_id = 90, updated_at = NOW()
          WHERE id = 1
          RETURNING id, hero_background_image_id
        `)

        if (updateResult.rows.length === 0) {
          return NextResponse.json({
            error: 'No rows updated',
            hint: 'blog_page entry might not exist',
          }, { status: 500 })
        }

        return NextResponse.json({
          success: true,
          message: 'Blog-Hero-Hintergrundbild gesetzt via SQL',
          updatedRow: updateResult.rows[0],
          columnCreated: columnCheck.rows.length === 0,
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
      // Zeige blog_page Tabellenstruktur
      try {
        const db = (payload as any).db
        const pool = db?.pool

        if (!pool) {
          return NextResponse.json({
            error: 'Pool not available',
            dbKeys: Object.keys(db || {}),
          }, { status: 500 })
        }

        // Hole Spalteninfo für blog_page
        const columnsResult = await pool.query(`
          SELECT column_name, data_type, is_nullable
          FROM information_schema.columns
          WHERE table_schema = 'public' AND table_name = 'blog_page'
          ORDER BY ordinal_position
        `)

        const columns = columnsResult.rows

        // Prüfe blog_page Eintrag
        const checkResult = await pool.query('SELECT * FROM blog_page LIMIT 1')
        const blogPageRow = checkResult.rows[0]

        return NextResponse.json({
          success: true,
          columns,
          blogPageRow,
          hint: 'Look for the backgroundImage column name',
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
