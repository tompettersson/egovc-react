/**
 * Upload downloaded media files to Payload CMS
 * Run with: npx tsx scripts/upload-media-to-payload.ts
 */

import { getPayload } from 'payload'
import config from '../src/payload.config'
import fs from 'fs'
import path from 'path'

const PUBLIC_DIR = path.join(process.cwd(), 'public')

interface MediaFile {
  path: string
  filename: string
  category: string
  alt: string
}

// Collect all media files from public directory
function collectMediaFiles(): MediaFile[] {
  const files: MediaFile[] = []

  // Hero images
  const heroDir = path.join(PUBLIC_DIR, 'images/heroes')
  if (fs.existsSync(heroDir)) {
    fs.readdirSync(heroDir).forEach(file => {
      if (!file.startsWith('.')) {
        const name = file.replace(/\.[^/.]+$/, '').replace(/-/g, ' ').replace(/Hero\d?/, 'Hero')
        files.push({
          path: path.join(heroDir, file),
          filename: file,
          category: 'hero',
          alt: `${name} - EGovC Hero Image`,
        })
      }
    })
  }

  // Sector images
  const sectorDir = path.join(PUBLIC_DIR, 'images/sectors')
  if (fs.existsSync(sectorDir)) {
    fs.readdirSync(sectorDir).forEach(file => {
      if (!file.startsWith('.')) {
        const sector = file.replace('sector-', '').replace(/\.[^/.]+$/, '')
        files.push({
          path: path.join(sectorDir, file),
          filename: file,
          category: 'sector',
          alt: `${sector.charAt(0).toUpperCase() + sector.slice(1)} Sektor`,
        })
      }
    })
  }

  // Icons
  const iconDir = path.join(PUBLIC_DIR, 'images/icons')
  if (fs.existsSync(iconDir)) {
    fs.readdirSync(iconDir).forEach(file => {
      if (!file.startsWith('.')) {
        const name = file.replace('-icon.png', '').replace(/\.[^/.]+$/, '')
        files.push({
          path: path.join(iconDir, file),
          filename: file,
          category: 'icon',
          alt: `${name.charAt(0).toUpperCase() + name.slice(1)} Icon`,
        })
      }
    })
  }

  // Values
  const valuesDir = path.join(PUBLIC_DIR, 'images/values')
  if (fs.existsSync(valuesDir)) {
    fs.readdirSync(valuesDir).forEach(file => {
      if (!file.startsWith('.')) {
        const value = file.replace('value-', '').replace(/\.[^/.]+$/, '')
        files.push({
          path: path.join(valuesDir, file),
          filename: file,
          category: 'value',
          alt: `${value.charAt(0).toUpperCase() + value.slice(1)} - EGovC Wert`,
        })
      }
    })
  }

  // Team photos
  const teamDir = path.join(PUBLIC_DIR, 'images/team')
  if (fs.existsSync(teamDir)) {
    fs.readdirSync(teamDir).forEach(file => {
      if (!file.startsWith('.')) {
        const name = file.replace('team-', '').replace(/\.[^/.]+$/, '').replace(/-/g, ' ')
        files.push({
          path: path.join(teamDir, file),
          filename: file,
          category: 'team',
          alt: `${name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} - EGovC Team`,
        })
      }
    })
  }

  // Reference photos
  const refDir = path.join(PUBLIC_DIR, 'images/references')
  if (fs.existsSync(refDir)) {
    fs.readdirSync(refDir).forEach(file => {
      if (!file.startsWith('.')) {
        const name = file.replace('ref-', '').replace(/\.[^/.]+$/, '').replace(/-/g, ' ')
        files.push({
          path: path.join(refDir, file),
          filename: file,
          category: 'reference',
          alt: `${name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} - Referenz`,
        })
      }
    })
  }

  // Case study images
  const casesDir = path.join(PUBLIC_DIR, 'images/cases')
  if (fs.existsSync(casesDir)) {
    fs.readdirSync(casesDir).forEach(file => {
      if (!file.startsWith('.')) {
        const name = file.replace('case-', '').replace(/\.[^/.]+$/, '').replace(/-/g, ' ')
        files.push({
          path: path.join(casesDir, file),
          filename: file,
          category: 'case-study',
          alt: `${name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} - Case Study`,
        })
      }
    })
  }

  // Misc images
  const miscDir = path.join(PUBLIC_DIR, 'images/misc')
  if (fs.existsSync(miscDir)) {
    fs.readdirSync(miscDir).forEach(file => {
      if (!file.startsWith('.')) {
        const name = file.replace(/\.[^/.]+$/, '').replace(/-/g, ' ')
        files.push({
          path: path.join(miscDir, file),
          filename: file,
          category: 'misc',
          alt: name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        })
      }
    })
  }

  return files
}

async function uploadMediaToPayload() {
  console.log('🚀 Starting media upload to Payload CMS...\n')

  const payload = await getPayload({ config })
  const files = collectMediaFiles()

  console.log(`📁 Found ${files.length} media files to upload\n`)

  let uploaded = 0
  let failed = 0

  for (const file of files) {
    try {
      // Check if file already exists by filename
      const existing = await payload.find({
        collection: 'media',
        where: {
          filename: { equals: file.filename },
        },
        limit: 1,
      })

      if (existing.docs.length > 0) {
        console.log(`  ⏭️  Skipped (exists): ${file.filename}`)
        continue
      }

      // Read file and create buffer
      const fileBuffer = fs.readFileSync(file.path)
      const mimeType = getMimeType(file.filename)

      // Create media document
      await payload.create({
        collection: 'media',
        data: {
          alt: file.alt,
        },
        file: {
          data: fileBuffer,
          mimetype: mimeType,
          name: file.filename,
          size: fileBuffer.length,
        },
      })

      console.log(`  ✅ Uploaded: ${file.filename}`)
      uploaded++
    } catch (error) {
      console.error(`  ❌ Failed: ${file.filename}`, error instanceof Error ? error.message : error)
      failed++
    }
  }

  console.log('\n' + '='.repeat(50))
  console.log('🎉 Media upload complete!')
  console.log(`   ✅ Uploaded: ${uploaded}`)
  console.log(`   ⏭️  Skipped: ${files.length - uploaded - failed}`)
  console.log(`   ❌ Failed: ${failed}`)
  console.log('='.repeat(50))

  process.exit(0)
}

function getMimeType(filename: string): string {
  const ext = path.extname(filename).toLowerCase()
  const mimeTypes: Record<string, string> = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.pdf': 'application/pdf',
  }
  return mimeTypes[ext] || 'application/octet-stream'
}

uploadMediaToPayload().catch((error) => {
  console.error('❌ Upload failed:', error)
  process.exit(1)
})
