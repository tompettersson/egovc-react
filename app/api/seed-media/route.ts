/**
 * API Route zum Hochladen von Media-Dateien via Payload Local API
 *
 * Nutzung:
 * curl -X POST https://egovc-react.vercel.app/api/seed-media \
 *   -H "Authorization: Bearer YOUR_SECRET" \
 *   -H "Content-Type: application/json" \
 *   -d '{"action": "upload-blog-images"}'
 */

import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

const SEED_SECRET = process.env.SEED_SECRET || 'egovc-seed-2026'

// URLs der vorbereiteten Bilder (Unsplash - lizenzfrei)
const BLOG_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
    alt: 'Drei Geschäftsleute bei einer Besprechung im Büro',
    filename: 'blog-european-1.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
    alt: 'Team arbeitet gemeinsam am Laptop',
    filename: 'blog-european-2.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80',
    alt: 'Zwei Kollegen diskutieren am MacBook',
    filename: 'blog-european-3.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
    alt: 'Modernes Büro für digitale Transformation',
    filename: 'blog-hero-background.jpg',
  },
]

export async function POST(request: NextRequest) {
  try {
    // Authentifizierung prüfen
    const authHeader = request.headers.get('Authorization')
    if (!authHeader || authHeader !== `Bearer ${SEED_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { action } = body

    if (action !== 'upload-blog-images') {
      return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
    }

    const payload = await getPayload({ config })
    const results: Array<{ id: number; filename: string; url: string }> = []

    for (const image of BLOG_IMAGES) {
      console.log(`📤 Lade ${image.filename} von Unsplash...`)

      // Bild von Unsplash herunterladen
      const imageResponse = await fetch(image.url)
      if (!imageResponse.ok) {
        console.error(`❌ Fehler beim Download: ${image.url}`)
        continue
      }

      const imageBuffer = await imageResponse.arrayBuffer()
      // Payload File type uses: data, mimetype, name
      // Cloud storage adapters internally transform to: buffer, mimeType, filename
      const file = {
        data: Buffer.from(imageBuffer),
        mimetype: 'image/jpeg',
        name: image.filename,
        size: imageBuffer.byteLength,
      }

      // In Payload Media Collection hochladen
      const mediaDoc = await payload.create({
        collection: 'media',
        data: {
          alt: image.alt,
        },
        file,
      })

      console.log(`✅ Hochgeladen: ${mediaDoc.filename} (ID: ${mediaDoc.id})`)
      results.push({
        id: mediaDoc.id as number,
        filename: mediaDoc.filename as string,
        url: mediaDoc.url as string,
      })
    }

    return NextResponse.json({
      success: true,
      message: `${results.length} Bilder erfolgreich hochgeladen`,
      images: results,
    })
  } catch (error) {
    console.error('Seed Media Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error', details: String(error) },
      { status: 500 }
    )
  }
}

export async function GET() {
  // Debug: Check if Vercel Blob token is available
  const blobToken = process.env.BLOB_READ_WRITE_TOKEN
  const tokenAvailable = !!blobToken
  const tokenPrefix = blobToken ? blobToken.substring(0, 20) + '...' : 'NOT SET'

  return NextResponse.json({
    info: 'POST mit Authorization: Bearer YOUR_SECRET und body: {"action": "upload-blog-images"}',
    images: BLOG_IMAGES.map(img => ({ filename: img.filename, alt: img.alt })),
    debug: {
      blobTokenAvailable: tokenAvailable,
      blobTokenPrefix: tokenPrefix,
      nodeEnv: process.env.NODE_ENV,
    }
  })
}
