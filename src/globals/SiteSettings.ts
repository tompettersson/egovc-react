import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Seiteneinstellungen',
  access: {
    read: () => true,
  },
  fields: [
    // Company Information
    {
      name: 'companyName',
      type: 'text',
      label: 'Firmenname',
      defaultValue: 'EGovC GmbH',
    },

    // Address
    {
      name: 'address',
      type: 'group',
      label: 'Adresse',
      fields: [
        {
          name: 'street',
          type: 'text',
          label: 'Straße',
          defaultValue: 'Pfarrgasse 17',
        },
        {
          name: 'zip',
          type: 'text',
          label: 'PLZ',
          defaultValue: '64319',
        },
        {
          name: 'city',
          type: 'text',
          label: 'Stadt',
          defaultValue: 'Pfungstadt',
        },
        {
          name: 'country',
          type: 'text',
          label: 'Land',
          defaultValue: 'Deutschland',
        },
      ],
    },

    // Contact
    {
      name: 'phone',
      type: 'text',
      label: 'Telefon',
      defaultValue: '+49 6157 9130351',
    },
    {
      name: 'email',
      type: 'email',
      label: 'E-Mail',
      defaultValue: 'info@egovc.de',
    },

    // Legal / Registry
    {
      name: 'registry',
      type: 'group',
      label: 'Handelsregister',
      fields: [
        {
          name: 'court',
          type: 'text',
          label: 'Registergericht',
          defaultValue: 'Amtsgericht Darmstadt',
        },
        {
          name: 'number',
          type: 'text',
          label: 'Registernummer',
          defaultValue: 'HRB 96950',
        },
        {
          name: 'taxNumber',
          type: 'text',
          label: 'Steuernummer',
        },
        {
          name: 'vatId',
          type: 'text',
          label: 'USt-IdNr.',
          defaultValue: 'DE319550575',
        },
      ],
    },

    // CEO
    {
      name: 'ceo',
      type: 'text',
      label: 'Geschäftsführer',
      defaultValue: 'Adrian Sommer',
    },

    // Legal Links
    {
      name: 'agbPdfUrl',
      type: 'text',
      label: 'AGB PDF URL',
      defaultValue: 'https://egovc.de/wp-content/uploads/2024/07/AGB_EGOVC_GmbH.pdf',
    },
    {
      name: 'odrLink',
      type: 'text',
      label: 'ODR-Plattform Link',
      defaultValue: 'https://ec.europa.eu/consumers/odr/',
    },
    {
      name: 'disputeResolutionText',
      type: 'textarea',
      label: 'Streitbeilegungshinweis',
      defaultValue: 'Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung bereit. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
    },

    // Contact Person
    {
      name: 'contactPerson',
      type: 'group',
      label: 'Ansprechpartner (Impressum)',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name',
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Telefon',
        },
        {
          name: 'email',
          type: 'email',
          label: 'E-Mail',
        },
      ],
    },

    // Booking URL
    {
      name: 'bookingUrl',
      type: 'text',
      label: 'Terminbuchungs-URL',
      defaultValue: 'https://calendly.com/egovc',
    },

    // Newsletter
    {
      name: 'newsletterTitle',
      type: 'text',
      label: 'Newsletter Titel',
      defaultValue: 'Newsletter abonnieren',
    },
    {
      name: 'newsletterPlaceholder',
      type: 'text',
      label: 'Newsletter Platzhalter',
      defaultValue: 'Deine E-Mail Adresse',
    },
    {
      name: 'newsletterButtonLabel',
      type: 'text',
      label: 'Newsletter Button',
      defaultValue: 'senden',
    },

    // Social Links
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Media Links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          label: 'Plattform',
          required: true,
          options: [
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Twitter/X', value: 'twitter' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'YouTube', value: 'youtube' },
            { label: 'Xing', value: 'xing' },
          ],
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
        },
      ],
    },
  ],
}
