import type { GlobalConfig } from 'payload'

export const BlogPage: GlobalConfig = {
  slug: 'blog-page',
  label: 'Blog-Seite',
  admin: {
    group: 'Seiten',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'group',
      name: 'hero',
      label: 'Hero-Bereich',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'Blog',
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Untertitel',
          defaultValue: 'Neuigkeiten und Einblicke aus der digitalen Transformation',
        },
      ],
    },
    {
      name: 'intro',
      type: 'textarea',
      label: 'Einführungstext',
      defaultValue: 'Erfahren Sie mehr über aktuelle Entwicklungen in der Digitalisierung der öffentlichen Verwaltung, des Gesundheitswesens und kirchlicher Organisationen.',
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
      ],
    },
  ],
}
