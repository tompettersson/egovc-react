import type { CollectionConfig } from 'payload'

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  labels: {
    singular: 'Blog-Artikel',
    plural: 'Blog-Artikel',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'categories', 'featured', 'publishedAt', 'updatedAt'],
    group: 'Inhalte',
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
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL-Slug',
      required: true,
      unique: true,
      admin: {
        description: 'URL-freundlicher Name (z.B. "digitalisierung-in-der-verwaltung")',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Kurzfassung',
      localized: true,
      admin: {
        description: 'Kurze Zusammenfassung für Vorschau (max. 200 Zeichen)',
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Inhalt',
      required: true,
      localized: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      label: 'Titelbild',
      relationTo: 'media',
    },
    {
      name: 'author',
      type: 'text',
      label: 'Autor',
      defaultValue: 'EGovC Team',
    },
    {
      name: 'categories',
      type: 'select',
      label: 'Kategorien',
      hasMany: true,
      options: [
        { label: 'Digitalisierung', value: 'digitalisierung' },
        { label: 'Verwaltung', value: 'verwaltung' },
        { label: 'Gesundheitswesen', value: 'gesundheitswesen' },
        { label: 'Kirche', value: 'kirche' },
        { label: 'KI & Technologie', value: 'ki-technologie' },
        { label: 'News', value: 'news' },
        { label: 'Events', value: 'events' },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Veröffentlichungsdatum',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Hervorgehoben',
      defaultValue: false,
      admin: {
        description: 'Artikel auf der Blog-Übersicht hervorheben',
      },
    },
    {
      type: 'group',
      name: 'seo',
      label: 'SEO',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta-Titel',
          localized: true,
          admin: {
            description: 'Überschreibt den Seitentitel für Suchmaschinen (max. 60 Zeichen)',
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta-Beschreibung',
          localized: true,
          admin: {
            description: 'Beschreibung für Suchmaschinen (max. 160 Zeichen)',
          },
        },
        {
          name: 'ogImage',
          type: 'upload',
          label: 'Social Media Bild',
          relationTo: 'media',
          admin: {
            description: 'Bild für Social Media Shares (1200x630px empfohlen)',
          },
        },
      ],
    },
  ],
}
