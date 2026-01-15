/**
 * Upload Karriere Hero Image to Payload CMS
 */
import { config as dotenvConfig } from 'dotenv'
dotenvConfig({ path: '.env.local' })

import { getPayload } from 'payload'
import config from '@payload-config'
import fs from 'fs'
import path from 'path'

async function uploadImage() {
  console.log('🚀 Uploading Karriere Hero Image...\n')

  const payload = await getPayload({ config })

  const filePath = path.resolve('./media/karriere-hero.jpg')
  if (!fs.existsSync(filePath)) {
    console.error('❌ Image file not found')
    process.exit(1)
  }

  const fileBuffer = fs.readFileSync(filePath)
  const stats = fs.statSync(filePath)

  try {
    const media = await payload.create({
      collection: 'media',
      data: {
        alt: 'Team collaboration in modern office - Karriere Hero',
      },
      file: {
        data: fileBuffer,
        name: 'karriere-hero.jpg',
        mimetype: 'image/jpeg',
        size: stats.size,
      },
    })

    console.log('✅ Image uploaded successfully!')
    console.log(`   ID: ${media.id}`)
    console.log(`   URL: ${media.url}`)
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Upload failed:', error)
    process.exit(1)
  }
}

uploadImage()
