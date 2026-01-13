import type { GlobalConfig } from 'payload'

export const CareerPage: GlobalConfig = {
  slug: 'career-page',
  label: 'Karriere-Seite',
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
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
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
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
        },
        {
          name: 'callToAction',
          type: 'text',
          label: 'Call-to-Action Text',
        },
        {
          name: 'additionalText',
          type: 'textarea',
          label: 'Zusätzlicher Text',
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
