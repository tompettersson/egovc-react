import type { GlobalConfig } from 'payload'

export const CareerPage: GlobalConfig = {
  slug: 'career-page',
  label: 'Karriere-Seite',
  admin: {
    group: 'Seiten',
  },
  access: {
    read: () => true,
  },
  fields: [
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
          defaultValue: 'Was zeichnet uns aus',
          localized: true,
        },
        {
          name: 'paragraphs',
          type: 'array',
          label: 'Absätze',
          fields: [
            {
              name: 'text',
              type: 'textarea',
              label: 'Text',
              required: true,
              localized: true,
            },
          ],
        },
      ],
    },

    // Benefits Section
    {
      name: 'benefits',
      type: 'array',
      label: 'Vorteile',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          required: true,
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
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

    // Expectations Section
    {
      name: 'expectations',
      type: 'group',
      label: 'Erwartungen',
      fields: [
        {
          name: 'title',
          type: 'textarea',
          label: 'Titel',
          defaultValue: 'Was erwarten\nwir von unseren\nMitarbeitern',
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

    // Job Openings Section
    {
      name: 'jobOpenings',
      type: 'array',
      label: 'Stellenangebote',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Jobtitel',
          required: true,
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
          localized: true,
        },
        {
          name: 'callToAction',
          type: 'text',
          label: 'Call-to-Action Text',
          localized: true,
        },
        {
          name: 'additionalText',
          type: 'textarea',
          label: 'Zusätzlicher Text',
          localized: true,
        },
        {
          name: 'tasks',
          type: 'array',
          label: 'Aufgaben',
          fields: [
            {
              name: 'task',
              type: 'text',
              label: 'Aufgabe',
              localized: true,
            },
          ],
        },
        {
          name: 'profile',
          type: 'array',
          label: 'Profil',
          fields: [
            {
              name: 'requirement',
              type: 'text',
              label: 'Anforderung',
              localized: true,
            },
          ],
        },
        {
          name: 'jobBenefits',
          type: 'array',
          label: 'Job-Vorteile',
          fields: [
            {
              name: 'benefit',
              type: 'text',
              label: 'Vorteil',
              localized: true,
            },
          ],
        },
        {
          name: 'pdfUrl',
          type: 'text',
          label: 'PDF URL',
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
