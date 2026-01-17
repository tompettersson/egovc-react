import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Media',
    plural: 'Media',
  },
  admin: {
    group: 'Medien',
  },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 512,
        position: 'centre',
      },
      {
        name: 'hero',
        width: 1920,
        height: 1080,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      localized: true,
      admin: {
        description: 'Titel des Mediums für interne Identifikation und SEO',
      },
    },
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text',
      required: true,
      localized: true,
      admin: {
        description: 'Beschreibender Text für Barrierefreiheit (Screenreader)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Beschreibung',
      localized: true,
      admin: {
        description: 'Ausführlichere Beschreibung des Mediums (optional)',
      },
    },
  ],
}
