import type { GlobalConfig } from 'payload'

export const LegalPages: GlobalConfig = {
  slug: 'legal-pages',
  label: 'Rechtliche Seiten',
  access: {
    read: () => true,
  },
  fields: [
    // Impressum
    {
      name: 'impressum',
      type: 'group',
      label: 'Impressum',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'Impressum',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Inhalt',
          admin: {
            description: 'Vollständiger Impressum-Text mit Firmendaten, Registerdaten, etc.',
          },
        },
      ],
    },

    // Datenschutz
    {
      name: 'datenschutz',
      type: 'group',
      label: 'Datenschutzerklärung',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'Datenschutzerklärung',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Inhalt',
          admin: {
            description: 'Vollständige Datenschutzerklärung gemäß DSGVO.',
          },
        },
      ],
    },

    // Widerrufsbelehrung
    {
      name: 'widerruf',
      type: 'group',
      label: 'Widerrufsbelehrung',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'Widerrufsbelehrung',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Inhalt',
          admin: {
            description: 'Widerrufsbelehrung für Verbraucher.',
          },
        },
      ],
    },
  ],
}
