/**
 * Script zum Hochladen von Blog-Bildern über die Payload REST API
 *
 * Verwendung:
 * 1. API-Key im Admin Panel generieren: /admin/account → API Key
 * 2. In .env.local eintragen: PAYLOAD_API_KEY=xxx
 * 3. Ausführen: npx tsx scripts/upload-blog-images.ts
 */

import 'dotenv/config'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const TEMP_IMAGES_DIR = path.join(__dirname, '..', 'temp-images')
const API_BASE = process.env.PAYLOAD_API_URL || 'https://egovc-react.vercel.app'
const API_KEY = process.env.PAYLOAD_API_KEY

interface ImageToUpload {
  filename: string
  altText: string
}

const imagesToUpload: ImageToUpload[] = [
  {
    filename: 'blog-european-1.jpg',
    altText: 'Drei Geschäftsleute bei einer Besprechung im Büro',
  },
  {
    filename: 'blog-european-2.jpg',
    altText: 'Team arbeitet gemeinsam am Laptop',
  },
  {
    filename: 'blog-european-3.jpg',
    altText: 'Zwei Kollegen diskutieren am MacBook',
  },
  {
    filename: 'blog-hero-background.jpg',
    altText: 'Modernes Büro für digitale Transformation',
  }
]

async function uploadImage(image: ImageToUpload): Promise<{ id: number; filename: string } | null> {
  const filePath = path.join(TEMP_IMAGES_DIR, image.filename)

  if (!fs.existsSync(filePath)) {
    console.log(`❌ Datei nicht gefunden: ${filePath}`)
    return null
  }

  const formData = new FormData()
  const fileBuffer = fs.readFileSync(filePath)
  const blob = new Blob([fileBuffer], { type: 'image/jpeg' })
  formData.append('file', blob, image.filename)
  formData.append('alt', image.altText)

  const response = await fetch(`${API_BASE}/api/media`, {
    method: 'POST',
    headers: {
      'Authorization': `users API-Key ${API_KEY}`,
    },
    body: formData,
  })

  if (!response.ok) {
    const error = await response.json()
    console.error(`❌ Fehler beim Hochladen von ${image.filename}:`, error)
    return null
  }

  const result = await response.json()
  return { id: result.doc.id, filename: result.doc.filename }
}

async function uploadImages() {
  console.log('🚀 Starte Bild-Upload über REST API...\n')

  if (!API_KEY) {
    console.error('❌ PAYLOAD_API_KEY nicht gesetzt!')
    console.log('\nSo generierst du einen API-Key:')
    console.log('1. Gehe zu: https://egovc-react.vercel.app/admin/account')
    console.log('2. Scrolle zu "API Key" und klicke "Generate new API key"')
    console.log('3. Kopiere den Key und füge ihn in .env.local ein:')
    console.log('   PAYLOAD_API_KEY=dein-api-key-hier')
    process.exit(1)
  }

  console.log(`📡 API: ${API_BASE}`)
  console.log(`🔑 API-Key: ${API_KEY.substring(0, 8)}...`)
  console.log('')

  const results: Array<{ id: number; filename: string }> = []

  for (const image of imagesToUpload) {
    console.log(`📤 Lade hoch: ${image.filename}`)
    const result = await uploadImage(image)
    if (result) {
      console.log(`✅ Hochgeladen: ${result.filename} (ID: ${result.id})`)
      results.push(result)
    }
  }

  console.log('\n✨ Upload abgeschlossen!')
  console.log('\nHochgeladene Bilder:')
  results.forEach(r => console.log(`  - ID ${r.id}: ${r.filename}`))

  process.exit(0)
}

uploadImages().catch(console.error)
