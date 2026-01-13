/**
 * Media Seed Script für EGovC
 *
 * Lädt Bilder aus public/images in Payload's Media Collection hoch
 * und verknüpft sie mit den entsprechenden Globals/Collections.
 *
 * Verwendung:
 *   npx tsx scripts/seed-media.ts
 */

import { getPayload } from 'payload'
import config from '../src/payload.config'
import path from 'path'
import fs from 'fs'

// Hilfsfunktion zum Hochladen eines Bildes
async function uploadImage(
  payload: any,
  filePath: string,
  alt: string
): Promise<number | null> {
  const absolutePath = path.resolve(process.cwd(), filePath)

  if (!fs.existsSync(absolutePath)) {
    console.log(`  ⚠️  Datei nicht gefunden: ${filePath}`)
    return null
  }

  try {
    const fileBuffer = fs.readFileSync(absolutePath)
    const fileName = path.basename(filePath)
    const mimeType = fileName.endsWith('.png') ? 'image/png'
      : fileName.endsWith('.svg') ? 'image/svg+xml'
      : fileName.endsWith('.webp') ? 'image/webp'
      : 'image/jpeg'

    const result = await payload.create({
      collection: 'media',
      data: {
        alt,
      },
      file: {
        data: fileBuffer,
        mimetype: mimeType,
        name: fileName,
        size: fileBuffer.length,
      },
    })

    console.log(`  ✅ Hochgeladen: ${fileName} (ID: ${result.id})`)
    return result.id
  } catch (error: any) {
    console.error(`  ❌ Fehler bei ${filePath}:`, error.message)
    return null
  }
}

async function seedMedia() {
  console.log('🚀 Starte Media Seeding...\n')

  const payload = await getPayload({ config })

  // Mapping für hochgeladene Bilder
  const mediaIds: Record<string, number | null> = {}

  // ============================================
  // 1. TEAM-BILDER
  // ============================================
  console.log('👥 Team-Bilder hochladen...')

  const teamImages = [
    { path: 'public/images/team/adrian-sommer.jpg', alt: 'Adrian Sommer - Geschäftsführer EGovC', key: 'adrian-sommer' },
    { path: 'public/images/team/roland-lutz.jpg', alt: 'Roland Lutz - Team EGovC', key: 'roland-lutz' },
    { path: 'public/images/team/benjamin-bauer.jpg', alt: 'Benjamin Bauer - Team EGovC', key: 'benjamin-bauer' },
  ]

  for (const img of teamImages) {
    mediaIds[img.key] = await uploadImage(payload, img.path, img.alt)
  }

  // ============================================
  // 2. HERO-HINTERGRUNDBILDER
  // ============================================
  console.log('\n🖼️  Hero-Bilder hochladen...')

  const heroImages = [
    { path: 'public/images/hero-bg.jpg', alt: 'EGovC Hero Hintergrund', key: 'hero-bg' },
    { path: 'public/images/verwaltung-hero.jpg', alt: 'Verwaltung Hero Hintergrund', key: 'verwaltung-hero' },
    { path: 'public/images/gesundheitswesen-hero.jpg', alt: 'Gesundheitswesen Hero Hintergrund', key: 'gesundheitswesen-hero' },
    { path: 'public/images/kirche-hero.jpg', alt: 'Kirche Hero Hintergrund', key: 'kirche-hero' },
  ]

  for (const img of heroImages) {
    mediaIds[img.key] = await uploadImage(payload, img.path, img.alt)
  }

  // ============================================
  // 3. SEKTOR-ICONS (Three Pillars)
  // ============================================
  console.log('\n🏛️  Sektor-Icons hochladen...')

  const sectorImages = [
    { path: 'public/images/sectors/verwaltung.png', alt: 'Verwaltung Icon', key: 'sector-verwaltung' },
    { path: 'public/images/sectors/gesundheitswesen.png', alt: 'Gesundheitswesen Icon', key: 'sector-gesundheitswesen' },
    { path: 'public/images/sectors/kirche.png', alt: 'Kirche Icon', key: 'sector-kirche' },
  ]

  for (const img of sectorImages) {
    mediaIds[img.key] = await uploadImage(payload, img.path, img.alt)
  }

  // ============================================
  // 4. VISION/MISSION/ETHIK ICONS
  // ============================================
  console.log('\n🎯 Vision/Mission Icons hochladen...')

  const visionImages = [
    { path: 'public/images/vision.png', alt: 'Vision Icon', key: 'vision' },
    { path: 'public/images/mission.png', alt: 'Mission Icon', key: 'mission' },
    { path: 'public/images/ethik.png', alt: 'Ethik Icon', key: 'ethik' },
  ]

  for (const img of visionImages) {
    mediaIds[img.key] = await uploadImage(payload, img.path, img.alt)
  }

  // ============================================
  // 5. WERTE-ICONS
  // ============================================
  console.log('\n💎 Werte-Icons hochladen...')

  const valueImages = [
    { path: 'public/images/honesty.png', alt: 'Ehrlichkeit Icon', key: 'ehrlichkeit' },
    { path: 'public/images/mut.png', alt: 'Mut Icon', key: 'mut' },
    { path: 'public/images/vertrauen.png', alt: 'Vertrauen Icon', key: 'vertrauen' },
    { path: 'public/images/spass.png', alt: 'Spaß Icon', key: 'spass' },
    { path: 'public/images/teamgeist.png', alt: 'Teamgeist Icon', key: 'teamgeist' },
    { path: 'public/images/gleichheit.png', alt: 'Gleichheit Icon', key: 'gleichheit' },
    { path: 'public/images/bescheidenheit.png', alt: 'Bescheidenheit Icon', key: 'bescheidenheit' },
  ]

  for (const img of valueImages) {
    mediaIds[img.key] = await uploadImage(payload, img.path, img.alt)
  }

  // ============================================
  // 6. REFERENZEN-BILDER
  // ============================================
  console.log('\n🌟 Referenzen-Bilder hochladen...')

  const referenceImages = [
    { path: 'public/images/thorsten-stolz.jpg', alt: 'Thorsten Stolz - Landrat Main-Kinzig-Kreis', key: 'thorsten-stolz' },
    { path: 'public/images/birte-kruse.png', alt: 'Birte Kruse-Gobrecht - Bürgermeisterin Bargteheide', key: 'birte-kruse' },
    { path: 'public/images/roland-lutz.jpg', alt: 'Roland Lutz - Geschäftsführer medlytics', key: 'roland-lutz-ref' },
  ]

  for (const img of referenceImages) {
    mediaIds[img.key] = await uploadImage(payload, img.path, img.alt)
  }

  // ============================================
  // 7. BROSCHÜRE
  // ============================================
  console.log('\n📕 Broschüre-Bild hochladen...')

  mediaIds['brochure'] = await uploadImage(
    payload,
    'public/images/brochure/katalog-front.jpg',
    'EGovC Broschüre Cover'
  )

  // ============================================
  // GLOBALS MIT BILDERN AKTUALISIEREN
  // ============================================
  console.log('\n\n📝 Globals mit Bildern verknüpfen...')

  // Homepage aktualisieren
  if (mediaIds['hero-bg']) {
    console.log('  Aktualisiere Homepage Hero...')
    await payload.updateGlobal({
      slug: 'homepage',
      data: {
        hero: {
          backgroundImage: mediaIds['hero-bg'],
        },
      },
    })
  }

  // Team-Page aktualisieren mit Mitglieder-Bildern
  console.log('  Aktualisiere Team-Seite Mitglieder...')
  const teamPage = await payload.findGlobal({ slug: 'team-page' })

  if (teamPage.members && teamPage.members.length > 0) {
    const updatedMembers = teamPage.members.map((member: any) => {
      const memberKey = member.name.toLowerCase().replace(/\s+/g, '-').replace(/[äöü]/g, (m: string) => ({ 'ä': 'ae', 'ö': 'oe', 'ü': 'ue' }[m] || m))
      const imageId = mediaIds[memberKey]

      return {
        ...member,
        image: imageId || member.image,
      }
    })

    await payload.updateGlobal({
      slug: 'team-page',
      data: {
        members: updatedMembers,
      },
    })
  }

  // Sektor-Seiten Hero-Bilder aktualisieren
  console.log('  Aktualisiere Sektor-Seiten Hero-Bilder...')

  const sectorUpdates = [
    { slug: 'verwaltung', imageKey: 'verwaltung-hero' },
    { slug: 'gesundheitswesen', imageKey: 'gesundheitswesen-hero' },
    { slug: 'kirche', imageKey: 'kirche-hero' },
  ]

  for (const sector of sectorUpdates) {
    if (mediaIds[sector.imageKey]) {
      const existingSector = await payload.find({
        collection: 'sector-pages',
        where: { slug: { equals: sector.slug } },
      })

      if (existingSector.docs.length > 0) {
        await payload.update({
          collection: 'sector-pages',
          id: existingSector.docs[0].id,
          data: {
            hero: {
              ...existingSector.docs[0].hero,
              backgroundImage: mediaIds[sector.imageKey],
            },
          },
        })
        console.log(`    ✅ ${sector.slug} Hero aktualisiert`)
      }
    }
  }

  // ============================================
  // REFERENZEN ERSTELLEN
  // ============================================
  console.log('\n\n🌟 Referenzen erstellen...')

  const references = [
    {
      name: 'Thorsten Stolz',
      title: 'Landrat',
      company: 'Main-Kinzig-Kreis',
      quote: 'EGovC ist unser starker Partner in der digitalen Transformation. Ganzheitliche Strategien und Ansätze helfen uns, den Main-Kinzig-Kreis in das digitale Zeitalter zu heben. Gemeinsam mit uns, gestaltet EGovC unsere digitale Transformation auf Organisatorischer - und Leistungsebene. Weiter so!',
      image: mediaIds['thorsten-stolz'],
      featured: true,
      order: 1,
    },
    {
      name: 'Birte Kruse-Gobrecht',
      title: 'Bürgermeisterin a.D.',
      company: 'Stadt Bargteheide',
      quote: 'Gemeinsam gestalten – So würden wir die Zusammenarbeit mit EGovC beschreiben. Bedürfnisorientiert gestalten wir als Stadt Bargteheide, durch die Unterstützung von EGovC, unsere digitale Transformation.',
      image: mediaIds['birte-kruse'],
      featured: true,
      order: 2,
    },
    {
      name: 'Roland Lutz',
      title: 'Geschäftsführer',
      company: 'medlytics GmbH',
      quote: 'Vielen Dank, für eine fundierte und intensive Ausbildung zum „Digitalisierungsbeauftragten im Krankenhaus (KaDig)". Ihr habt uns praxisorientierte Inhalte, zeitgemäß und nachhaltig vermittelt. Wir konnten sofort von dem neuerlernten Wissen profitieren.',
      image: mediaIds['roland-lutz-ref'],
      featured: true,
      order: 3,
    },
  ]

  // Erst bestehende Referenzen löschen
  const existingRefs = await payload.find({ collection: 'references' })
  for (const ref of existingRefs.docs) {
    await payload.delete({ collection: 'references', id: ref.id })
  }

  // Neue Referenzen erstellen
  for (const ref of references) {
    await payload.create({
      collection: 'references',
      data: ref,
    })
    console.log(`  ✅ Referenz erstellt: ${ref.name}`)
  }

  console.log('\n\n✨ Media Seeding abgeschlossen!')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log(`Hochgeladene Bilder: ${Object.values(mediaIds).filter(Boolean).length}`)
  console.log(`Referenzen erstellt: ${references.length}`)
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

  process.exit(0)
}

seedMedia().catch((error) => {
  console.error('❌ Fehler beim Seeding:', error)
  process.exit(1)
})
