import type { GlobalConfig } from 'payload'

export const WhitepaperPage: GlobalConfig = {
  slug: 'whitepaper-page',
  label: 'Whitepaper-Seite',
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
          defaultValue: 'Whitepaper',
        },
        {
          name: 'intro',
          type: 'textarea',
          label: 'Einführungstext',
          defaultValue: 'In unseren Whitepapern erhalten Sie exklusive, praktische Tipps, Hintergründe und Best Practice-Beispiele aus dem Verwaltungsalltag, welche Ihnen bei Ihrem Vorhaben wichtige Anhaltspunkte bieten. Sie haben konkrete Fragen oder Anmerkungen? Dann nutzen Sie gerne unser Kontaktformular.',
        },
      ],
    },

    // Form Section
    {
      name: 'form',
      type: 'group',
      label: 'Formular-Bereich',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'Whitepaper & Success Stories anfordern',
        },
        {
          name: 'note',
          type: 'textarea',
          label: 'Hinweistext',
          defaultValue: 'Füllen Sie einfach das beistehende Formular aus und Sie erhalten binnen kürzester Zeit das Whitepaper in PDF-Form. Bitte geben Sie Ihre dienstliche E-Mail-Adresse an, da wir dieses Angebot exklusiv für Organisationen der öffentlichen Verwaltung bereitstellen.',
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
