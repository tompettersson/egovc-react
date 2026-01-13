/**
 * Download media files from egovc.de
 * Run with: npx tsx scripts/download-media.ts
 */

import fs from 'fs'
import path from 'path'
import https from 'https'
import http from 'http'

const mediaUrls = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), '_input/media-urls.json'), 'utf-8')
)

const OUTPUT_DIR = path.join(process.cwd(), 'public/images')
const PDF_DIR = path.join(process.cwd(), 'public/downloads')

// Create directories
const dirs = [
  path.join(OUTPUT_DIR, 'heroes'),
  path.join(OUTPUT_DIR, 'sectors'),
  path.join(OUTPUT_DIR, 'icons'),
  path.join(OUTPUT_DIR, 'values'),
  path.join(OUTPUT_DIR, 'team'),
  path.join(OUTPUT_DIR, 'references'),
  path.join(OUTPUT_DIR, 'cases'),
  path.join(OUTPUT_DIR, 'misc'),
  PDF_DIR,
]

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
    console.log(`Created directory: ${dir}`)
  }
})

function downloadFile(url: string, destPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath)
    const protocol = url.startsWith('https') ? https : http

    protocol.get(url, (response) => {
      // Follow redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location
        if (redirectUrl) {
          downloadFile(redirectUrl, destPath).then(resolve).catch(reject)
          return
        }
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`))
        return
      }

      response.pipe(file)
      file.on('finish', () => {
        file.close()
        resolve()
      })
    }).on('error', (err) => {
      fs.unlink(destPath, () => {}) // Delete partial file
      reject(err)
    })
  })
}

async function downloadAllMedia() {
  console.log('🚀 Starting media download...\n')

  let downloaded = 0
  let failed = 0
  const errors: string[] = []

  // Download logos
  console.log('📁 Downloading logos...')
  for (const item of mediaUrls.images.logos) {
    const destPath = path.join(OUTPUT_DIR, 'misc', item.filename)
    try {
      await downloadFile(item.url, destPath)
      console.log(`  ✅ ${item.filename}`)
      downloaded++
    } catch (err) {
      console.log(`  ❌ ${item.filename}: ${err}`)
      errors.push(`${item.filename}: ${err}`)
      failed++
    }
  }

  // Download heroes
  console.log('\n📁 Downloading hero images...')
  for (const item of mediaUrls.images.heroes) {
    const destPath = path.join(OUTPUT_DIR, 'heroes', item.filename)
    try {
      await downloadFile(item.url, destPath)
      console.log(`  ✅ ${item.filename}`)
      downloaded++
    } catch (err) {
      console.log(`  ❌ ${item.filename}: ${err}`)
      errors.push(`${item.filename}: ${err}`)
      failed++
    }
  }

  // Download sectors
  console.log('\n📁 Downloading sector images...')
  for (const item of mediaUrls.images.sectors) {
    const destPath = path.join(OUTPUT_DIR, 'sectors', item.filename)
    try {
      await downloadFile(item.url, destPath)
      console.log(`  ✅ ${item.filename}`)
      downloaded++
    } catch (err) {
      console.log(`  ❌ ${item.filename}: ${err}`)
      errors.push(`${item.filename}: ${err}`)
      failed++
    }
  }

  // Download vision/mission icons
  console.log('\n📁 Downloading vision/mission icons...')
  for (const item of mediaUrls.images.visionMission) {
    const destPath = path.join(OUTPUT_DIR, 'icons', item.filename)
    try {
      await downloadFile(item.url, destPath)
      console.log(`  ✅ ${item.filename}`)
      downloaded++
    } catch (err) {
      console.log(`  ❌ ${item.filename}: ${err}`)
      errors.push(`${item.filename}: ${err}`)
      failed++
    }
  }

  // Download values
  console.log('\n📁 Downloading value icons...')
  for (const item of mediaUrls.images.values) {
    const destPath = path.join(OUTPUT_DIR, 'values', item.filename)
    try {
      await downloadFile(item.url, destPath)
      console.log(`  ✅ ${item.filename}`)
      downloaded++
    } catch (err) {
      console.log(`  ❌ ${item.filename}: ${err}`)
      errors.push(`${item.filename}: ${err}`)
      failed++
    }
  }

  // Download team photos
  console.log('\n📁 Downloading team photos...')
  for (const item of mediaUrls.images.team) {
    const destPath = path.join(OUTPUT_DIR, 'team', item.filename)
    try {
      await downloadFile(item.url, destPath)
      console.log(`  ✅ ${item.filename}`)
      downloaded++
    } catch (err) {
      console.log(`  ❌ ${item.filename}: ${err}`)
      errors.push(`${item.filename}: ${err}`)
      failed++
    }
  }

  // Download references
  console.log('\n📁 Downloading reference photos...')
  for (const item of mediaUrls.images.references) {
    const destPath = path.join(OUTPUT_DIR, 'references', item.filename)
    try {
      await downloadFile(item.url, destPath)
      console.log(`  ✅ ${item.filename}`)
      downloaded++
    } catch (err) {
      console.log(`  ❌ ${item.filename}: ${err}`)
      errors.push(`${item.filename}: ${err}`)
      failed++
    }
  }

  // Download case studies
  console.log('\n📁 Downloading case study images...')
  for (const item of mediaUrls.images.caseStudies) {
    const destPath = path.join(OUTPUT_DIR, 'cases', item.filename)
    try {
      await downloadFile(item.url, destPath)
      console.log(`  ✅ ${item.filename}`)
      downloaded++
    } catch (err) {
      console.log(`  ❌ ${item.filename}: ${err}`)
      errors.push(`${item.filename}: ${err}`)
      failed++
    }
  }

  // Download misc
  console.log('\n📁 Downloading misc images...')
  for (const item of mediaUrls.images.misc) {
    const destPath = path.join(OUTPUT_DIR, 'misc', item.filename)
    try {
      await downloadFile(item.url, destPath)
      console.log(`  ✅ ${item.filename}`)
      downloaded++
    } catch (err) {
      console.log(`  ❌ ${item.filename}: ${err}`)
      errors.push(`${item.filename}: ${err}`)
      failed++
    }
  }

  // Download PDFs
  console.log('\n📁 Downloading PDFs...')
  for (const item of mediaUrls.pdfs) {
    const destPath = path.join(PDF_DIR, item.filename)
    try {
      await downloadFile(item.url, destPath)
      console.log(`  ✅ ${item.filename}`)
      downloaded++
    } catch (err) {
      console.log(`  ❌ ${item.filename}: ${err}`)
      errors.push(`${item.filename}: ${err}`)
      failed++
    }
  }

  console.log('\n' + '='.repeat(50))
  console.log(`🎉 Download complete!`)
  console.log(`   ✅ Downloaded: ${downloaded}`)
  console.log(`   ❌ Failed: ${failed}`)

  if (errors.length > 0) {
    console.log('\n⚠️ Errors:')
    errors.forEach(e => console.log(`   - ${e}`))
  }
}

downloadAllMedia().catch(console.error)
