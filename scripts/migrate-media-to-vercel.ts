/**
 * Media Migration Script: SQLite + Local Files → Vercel (Neon + Blob)
 *
 * Migrates all media entries from local SQLite database and local files
 * to Vercel's Neon PostgreSQL and Blob Storage.
 *
 * Prerequisites:
 * - .env.local with DATABASE_URL, BLOB_READ_WRITE_TOKEN, PAYLOAD_SECRET
 * - Local payload.db file
 * - Local media/ folder with image files
 *
 * Usage:
 * npx tsx scripts/migrate-media-to-vercel.ts
 */

// Load environment variables from .env.local
import { config as dotenvConfig } from 'dotenv'
dotenvConfig({ path: '.env.local' })

import { getPayload } from 'payload'
import config from '@payload-config'
import Database from 'better-sqlite3'
import fs from 'fs'
import path from 'path'

interface MediaEntry {
  id: number
  alt: string
  filename: string
  mime_type: string
  filesize: number
  width: number
  height: number
}

async function migrateMedia() {
  console.log('🚀 Starting Media Migration to Vercel...\n')

  // Check environment variables
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL not set in .env.local')
    process.exit(1)
  }
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('❌ BLOB_READ_WRITE_TOKEN not set in .env.local')
    console.error('   Get it from: Vercel Dashboard → Project → Storage → Blob → Settings')
    process.exit(1)
  }

  // Initialize Payload with production config (connects to Neon + Blob)
  console.log('📦 Initializing Payload with production config...')
  const payload = await getPayload({ config })

  // Open SQLite database
  console.log('📂 Opening local SQLite database...')
  const dbPath = path.resolve('./payload.db')
  if (!fs.existsSync(dbPath)) {
    console.error('❌ payload.db not found')
    process.exit(1)
  }

  const db = new Database(dbPath, { readonly: true })

  // Get all media entries from SQLite
  const mediaEntries = db.prepare('SELECT id, alt, filename, mime_type, filesize, width, height FROM media').all() as MediaEntry[]
  console.log(`📊 Found ${mediaEntries.length} media entries in SQLite\n`)

  // Check which files already exist in Vercel (to avoid duplicates)
  const existingMedia = await payload.find({
    collection: 'media',
    limit: 1000,
  })
  const existingFilenames = new Set(existingMedia.docs.map((m) => m.filename))
  console.log(`📋 ${existingFilenames.size} media files already in Vercel\n`)

  // Migration stats
  let migrated = 0
  let skipped = 0
  let failed = 0

  // Migrate each entry
  for (const entry of mediaEntries) {
    // Skip if already exists
    if (existingFilenames.has(entry.filename)) {
      console.log(`⏭️  Skipped (exists): ${entry.filename}`)
      skipped++
      continue
    }

    // Find local file
    const filePath = path.join('./media', entry.filename)
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${entry.filename}`)
      failed++
      continue
    }

    try {
      // Read file
      const fileBuffer = fs.readFileSync(filePath)

      // Upload to Vercel via Payload API
      await payload.create({
        collection: 'media',
        data: {
          alt: entry.alt || entry.filename.replace(/\.[^/.]+$/, '').replace(/-/g, ' '),
        },
        file: {
          data: fileBuffer,
          name: entry.filename,
          mimetype: entry.mime_type || 'image/jpeg',
          size: entry.filesize || fileBuffer.length,
        },
      })

      console.log(`✅ Migrated: ${entry.filename}`)
      migrated++

      // Small delay to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 100))
    } catch (error) {
      console.error(`❌ Failed: ${entry.filename}`, error instanceof Error ? error.message : error)
      failed++
    }
  }

  // Close SQLite connection
  db.close()

  // Summary
  console.log('\n' + '='.repeat(50))
  console.log('📊 Migration Summary:')
  console.log(`   ✅ Migrated: ${migrated}`)
  console.log(`   ⏭️  Skipped:  ${skipped}`)
  console.log(`   ❌ Failed:   ${failed}`)
  console.log(`   📁 Total:    ${mediaEntries.length}`)
  console.log('='.repeat(50))

  if (failed === 0) {
    console.log('\n🎉 Migration completed successfully!')
  } else {
    console.log('\n⚠️  Migration completed with some failures. Check logs above.')
  }

  process.exit(0)
}

// Run migration
migrateMedia().catch((error) => {
  console.error('💥 Migration failed:', error)
  process.exit(1)
})
