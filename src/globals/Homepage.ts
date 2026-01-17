import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
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
          required: true,
          defaultValue: 'Starten Sie mit uns Ihre digitale Transformation',
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

    // Three Pillars Section
    {
      name: 'threePillars',
      type: 'group',
      label: 'Drei Säulen',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Überschrift',
          defaultValue: 'Unsere Expertise',
        },
        {
          name: 'items',
          type: 'array',
          label: 'Säulen',
          maxRows: 3,
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
            },
            {
              name: 'icon',
              type: 'upload',
              label: 'Icon',
              relationTo: 'media',
            },
            {
              name: 'link',
              type: 'text',
              label: 'Link URL',
            },
          ],
        },
      ],
    },

    // Values Section
    {
      name: 'values',
      type: 'group',
      label: 'Werte',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Überschrift',
          defaultValue: 'Unsere Werte',
        },
        {
          name: 'subtitle',
          type: 'textarea',
          label: 'Untertitel',
        },
        {
          name: 'items',
          type: 'array',
          label: 'Werte Liste',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titel',
              required: true,
            },
            {
              name: 'tagline',
              type: 'text',
              label: 'Tagline',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Beschreibung',
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

    // FAQ Section
    {
      name: 'faq',
      type: 'group',
      label: 'FAQ Bereich',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Überschrift',
          defaultValue: 'FAQ',
        },
        {
          name: 'items',
          type: 'array',
          label: 'Fragen & Antworten',
          fields: [
            {
              name: 'question',
              type: 'text',
              label: 'Frage',
              required: true,
            },
            {
              name: 'answer',
              type: 'textarea',
              label: 'Antwort',
              required: true,
            },
          ],
        },
      ],
    },

    // CTA Section
    {
      name: 'cta',
      type: 'group',
      label: 'Call-to-Action',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Überschrift',
          defaultValue: 'Sind Sie bereit für Ihre digitale Zukunft?',
        },
        {
          name: 'subtitle',
          type: 'textarea',
          label: 'Untertitel',
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Button Text',
          defaultValue: 'Kontakt',
        },
      ],
    },

    // SEO Section
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
