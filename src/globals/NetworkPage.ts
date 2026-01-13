import type { GlobalConfig } from 'payload'

export const NetworkPage: GlobalConfig = {
  slug: 'network-page',
  label: 'Netzwerk-Seite',
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
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Untertitel',
          defaultValue: 'Für den öffentlichen Sektor',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
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
        },
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'Wer Wir Sind',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
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
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
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
        },
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'Individuelle Lösungen',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
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
      ],
    },
  ],
}
