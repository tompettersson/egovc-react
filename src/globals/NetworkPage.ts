import type { GlobalConfig } from 'payload'

export const NetworkPage: GlobalConfig = {
  slug: 'network-page',
  label: 'Netzwerk-Seite',
  admin: {
    group: 'Seiten',
  },
  access: {
    read: () => true,
  },
  fields: [
    // Hero Section
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Bereich',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'Europäisches eGovernment Netzwerk',
          localized: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Untertitel',
          defaultValue: 'Für den öffentlichen Sektor',
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
          localized: true,
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          label: 'Hintergrundbild',
          relationTo: 'media',
        },
      ],
    },

    // About Section
    {
      name: 'about',
      type: 'group',
      label: 'Über uns',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          defaultValue: 'ÜBER UNS',
          localized: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'Wer Wir Sind',
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
          localized: true,
        },
      ],
    },

    // Vision & Mission Section
    {
      name: 'visionMission',
      type: 'group',
      label: 'Vision & Mission',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'Vision & Mission',
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
          localized: true,
        },
      ],
    },

    // Solutions Section
    {
      name: 'solutions',
      type: 'group',
      label: 'Lösungen',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          defaultValue: 'LEISTUNGSSPEKTRUM',
          localized: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'Individuelle Lösungen',
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
          localized: true,
        },
      ],
    },

    // Topics Section
    {
      name: 'topics',
      type: 'group',
      label: 'Themenfelder',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'Themenfelder',
          localized: true,
        },
        {
          name: 'fields',
          type: 'array',
          label: 'Felder',
          fields: [
            {
              name: 'id',
              type: 'text',
              label: 'ID',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              label: 'Titel',
              required: true,
              localized: true,
            },
            {
              name: 'icon',
              type: 'upload',
              label: 'Icon',
              relationTo: 'media',
            },
          ],
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
          localized: true,
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          maxLength: 160,
          localized: true,
        },
        {
          name: 'ogImage',
          type: 'upload',
          label: 'Social Media Bild',
          relationTo: 'media',
        },
      ],
    },
  ],
}
