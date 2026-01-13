import type { GlobalConfig } from 'payload'

export const TeamPage: GlobalConfig = {
  slug: 'team-page',
  label: 'Team-Seite',
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
          defaultValue: 'Willkommen bei EGovC – Lernen Sie unser Team kennen',
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

    // Team Members
    {
      name: 'members',
      type: 'array',
      label: 'Team-Mitglieder',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          label: 'Rolle',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          label: 'Foto',
          relationTo: 'media',
        },
      ],
    },

    // Departments
    {
      name: 'departments',
      type: 'array',
      label: 'Abteilungen',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Abteilungsname',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
        },
        {
          name: 'email',
          type: 'email',
          label: 'E-Mail',
        },
        {
          name: 'icon',
          type: 'upload',
          label: 'Icon',
          relationTo: 'media',
        },
      ],
    },

    // Values Section
    {
      name: 'values',
      type: 'group',
      label: 'Werte-Bereich',
      fields: [
        {
          name: 'intro',
          type: 'group',
          label: 'Einführung',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titel',
              defaultValue: 'Unsere Werte',
            },
            {
              name: 'subtitle',
              type: 'textarea',
              label: 'Untertitel',
              defaultValue: 'Sieben Werte sind der Wind in unseren Segeln,\ndie uns gemeinsam ans Ziel bringen.',
            },
          ],
        },
        {
          name: 'items',
          type: 'array',
          label: 'Werte',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titel',
              required: true,
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
