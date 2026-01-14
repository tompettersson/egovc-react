import { postgresAdapter } from '@payloadcms/db-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { SectorPages } from './collections/SectorPages'
import { Whitepapers } from './collections/Whitepapers'
import { References } from './collections/References'
import { BlogPosts } from './collections/BlogPosts'

// Globals
import { Homepage } from './globals/Homepage'
import { SiteSettings } from './globals/SiteSettings'
import { CareerPage } from './globals/CareerPage'
import { TeamPage } from './globals/TeamPage'
import { NetworkPage } from './globals/NetworkPage'
import { WhitepaperPage } from './globals/WhitepaperPage'
import { BlogPage } from './globals/BlogPage'
import { LegalPages } from './globals/LegalPages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  // Localization for multi-language support (German default, English)
  localization: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    fallback: true,
  },
  collections: [
    Users,
    Media,
    SectorPages,
    Whitepapers,
    References,
    BlogPosts,
  ],
  globals: [
    Homepage,
    SiteSettings,
    CareerPage,
    TeamPage,
    NetworkPage,
    WhitepaperPage,
    BlogPage,
    LegalPages,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'super-secret-key-change-in-production',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // PostgreSQL for Vercel deployment
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [
    // Vercel Blob Storage for media files
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
})
