import type { CollectionConfig } from 'payload'

export const SectorPages: CollectionConfig = {
  slug: 'sector-pages',
  labels: {
    singular: 'Sektor-Seite',
    plural: 'Sektor-Seiten',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Seitenname',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL-Slug',
      required: true,
      unique: true,
      admin: {
        description: 'z.B. "verwaltung", "gesundheitswesen", "kirche"',
      },
    },

    // Hero Section
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Bereich',
      fields: [
        {
          name: 'title',
          type: 'textarea',
          label: 'Titel',
          required: true,
          admin: {
            description: 'Kann Zeilenumbrüche enthalten (\\n)',
          },
        },
        {
          name: 'subtitle',
          type: 'textarea',
          label: 'Untertitel',
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          label: 'Hintergrundbild',
          relationTo: 'media',
        },
      ],
    },

    // Intro Section
    {
      name: 'intro',
      type: 'group',
      label: 'Einführung',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Untertitel',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
          admin: {
            description: 'Mehrzeilige Beschreibung (\\n\\n für Absätze)',
          },
        },
      ],
    },

    // Services Sections
    {
      name: 'sections',
      type: 'array',
      label: 'Service-Bereiche',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Bereichstitel',
          required: true,
        },
        {
          name: 'items',
          type: 'array',
          label: 'Services',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Service-Titel',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Beschreibung',
            },
            {
              name: 'actionType',
              type: 'select',
              label: 'Aktionstyp',
              options: [
                { label: 'Broschüre', value: 'brochure' },
                { label: 'Kontakt', value: 'contact' },
                { label: 'Link', value: 'link' },
              ],
            },
            {
              name: 'actionLabel',
              type: 'text',
              label: 'Button-Text',
            },
            {
              name: 'actionUrl',
              type: 'text',
              label: 'URL',
            },
          ],
        },
      ],
    },

    // Network Section
    {
      name: 'network',
      type: 'group',
      label: 'Netzwerk-Bereich',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
        },
        {
          name: 'linkUrl',
          type: 'text',
          label: 'Link URL',
        },
        {
          name: 'linkLabel',
          type: 'text',
          label: 'Link Text',
        },
      ],
    },

    // SEO
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Einstellungen',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
          maxLength: 60,
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          maxLength: 160,
        },
        {
          name: 'ogImage',
          type: 'upload',
          label: 'Social Media Bild',
          relationTo: 'media',
        },
        {
          name: 'noIndex',
          type: 'checkbox',
          label: 'Nicht indexieren',
          defaultValue: false,
        },
      ],
    },
  ],
}
