import type { CollectionConfig } from 'payload'

export const Whitepapers: CollectionConfig = {
  slug: 'whitepapers',
  labels: {
    singular: 'Whitepaper',
    plural: 'Whitepaper',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'category', 'featured', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Beschreibung',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      label: 'Typ',
      required: true,
      options: [
        { label: 'Whitepaper', value: 'whitepaper' },
        { label: 'Podcast', value: 'podcast' },
        { label: 'OMNIA', value: 'omnia' },
      ],
      defaultValue: 'whitepaper',
    },
    {
      name: 'pdfUrl',
      type: 'text',
      label: 'PDF URL',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'whitepaper' || siblingData?.type === 'omnia',
      },
    },
    {
      name: 'pdfFile',
      type: 'upload',
      label: 'PDF Datei',
      relationTo: 'media',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'whitepaper' || siblingData?.type === 'omnia',
      },
    },
    {
      name: 'podcastUrl',
      type: 'text',
      label: 'Podcast URL',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'podcast',
      },
    },
    {
      name: 'category',
      type: 'text',
      label: 'Kategorie',
      admin: {
        description: 'z.B. "OMNIA" für OMNIA-Produkte',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Hervorgehoben',
      defaultValue: false,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Reihenfolge',
      admin: {
        description: 'Niedrigere Zahlen werden zuerst angezeigt',
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      label: 'Titelbild',
      relationTo: 'media',
    },
  ],
}
