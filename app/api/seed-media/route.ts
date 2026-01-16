/**
 * API Route zum Hochladen von Media-Dateien via direktem Vercel Blob Upload
 *
 * Workaround: Payload's Local API triggert Cloud Storage Upload nicht korrekt.
 * Lösung: Erst direkt zu Vercel Blob hochladen, dann Payload Media-Eintrag erstellen.
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
import { put } from '@vercel/blob'

const SEED_SECRET = process.env.SEED_SECRET || 'egovc-seed-2026'

// URLs der vorbereiteten Bilder (Unsplash - lizenzfrei)
const BLOG_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
    alt: 'Drei Geschäftsleute bei einer Besprechung im Büro',
    filename: 'blog-european-1.jpg',
    width: 1200,
    height: 800,
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
    alt: 'Team arbeitet gemeinsam am Laptop',
    filename: 'blog-european-2.jpg',
    width: 1200,
    height: 800,
  },
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80',
    alt: 'Zwei Kollegen diskutieren am MacBook',
    filename: 'blog-european-3.jpg',
    width: 1200,
    height: 800,
  },
  {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
    alt: 'Modernes Büro für digitale Transformation',
    filename: 'blog-hero-background.jpg',
    width: 1920,
    height: 1080,
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

    const blobToken = process.env.BLOB_READ_WRITE_TOKEN
    if (!blobToken) {
      return NextResponse.json({ error: 'BLOB_READ_WRITE_TOKEN not configured' }, { status: 500 })
    }

    const payload = await getPayload({ config })
    const results: Array<{ id: number; filename: string; url: string; blobUrl: string }> = []

    for (const image of BLOG_IMAGES) {
      console.log(`📤 Lade ${image.filename} von Unsplash...`)

      // 1. Bild von Unsplash herunterladen
      const imageResponse = await fetch(image.url)
      if (!imageResponse.ok) {
        console.error(`❌ Fehler beim Download: ${image.url}`)
        continue
      }

      const imageBuffer = await imageResponse.arrayBuffer()
      console.log(`📦 Heruntergeladen: ${image.filename} (${imageBuffer.byteLength} bytes)`)

      // 2. Direkt zu Vercel Blob hochladen
      console.log(`☁️ Uploading to Vercel Blob: ${image.filename}`)
      const blob = await put(image.filename, imageBuffer, {
        access: 'public',
        contentType: 'image/jpeg',
        token: blobToken,
        addRandomSuffix: true, // Verhindert Konflikte bei existierenden Dateien
      })
      console.log(`✅ Blob uploaded: ${blob.url}`)

      // 3. Payload Media-Eintrag erstellen mit Blob-URL
      // Extrahiere echten Dateinamen aus Blob-URL (hat Random-Suffix)
      const blobFilename = blob.pathname.split('/').pop() || image.filename

      // Wir setzen die URL direkt, da wir den Cloud Storage Adapter umgehen
      const mediaDoc = await payload.create({
        collection: 'media',
        data: {
          alt: image.alt,
          // Diese Felder werden normalerweise vom Upload-Prozess gesetzt
          // Wir setzen sie manuell, da wir den direkten Blob-Upload nutzen
          filename: blobFilename,
          mimeType: 'image/jpeg',
          filesize: imageBuffer.byteLength,
          width: image.width,
          height: image.height,
          url: blob.url,
        },
      })

      console.log(`✅ Payload Media erstellt: ${mediaDoc.id}`)
      results.push({
        id: mediaDoc.id as number,
        filename: image.filename,
        url: mediaDoc.url as string,
        blobUrl: blob.url,
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

export async function GET(request: NextRequest) {
  // Debug: Check if Vercel Blob token is available
  const blobToken = process.env.BLOB_READ_WRITE_TOKEN
  const tokenAvailable = !!blobToken
  const tokenPrefix = blobToken ? blobToken.substring(0, 20) + '...' : 'NOT SET'

  // Extract store ID from token
  const storeId = blobToken?.match(/^vercel_blob_rw_([a-z\d]+)_[a-z\d]+$/i)?.[1]?.toLowerCase()
  const baseUrl = storeId ? `https://${storeId}.public.blob.vercel-storage.com` : 'NOT_AVAILABLE'

  // Check if action=list-blobs is requested
  const { searchParams } = new URL(request.url)
  if (searchParams.get('action') === 'list-blobs' && blobToken) {
    try {
      const { list } = await import('@vercel/blob')
      const result = await list({ token: blobToken })
      return NextResponse.json({
        blobs: result.blobs.slice(0, 20).map(b => ({
          pathname: b.pathname,
          size: b.size,
          uploadedAt: b.uploadedAt,
        })),
        hasMore: result.hasMore,
        cursor: result.cursor,
      })
    } catch (error) {
      return NextResponse.json({ error: String(error) }, { status: 500 })
    }
  }

  return NextResponse.json({
    info: 'POST mit Authorization: Bearer YOUR_SECRET und body: {"action": "upload-blog-images"}',
    images: BLOG_IMAGES.map(img => ({ filename: img.filename, alt: img.alt })),
    debug: {
      blobTokenAvailable: tokenAvailable,
      blobTokenPrefix: tokenPrefix,
      storeId,
      baseUrl,
      nodeEnv: process.env.NODE_ENV,
    },
    listBlobsUrl: '/api/seed-media?action=list-blobs',
  })
}
