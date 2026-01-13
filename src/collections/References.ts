import type { CollectionConfig } from 'payload'

export const References: CollectionConfig = {
  slug: 'references',
  labels: {
    singular: 'Referenz',
    plural: 'Referenzen',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'title', 'featured', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel / Position',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      label: 'Unternehmen / Organisation',
    },
    {
      name: 'quote',
      type: 'textarea',
      label: 'Zitat / Testimonial',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Foto',
      relationTo: 'media',
    },
    {
      name: 'logo',
      type: 'upload',
      label: 'Logo (Organisation)',
      relationTo: 'media',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Hervorgehoben',
      defaultValue: false,
      admin: {
        description: 'Hervorgehobene Referenzen werden prominenter angezeigt',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Reihenfolge',
      defaultValue: 0,
      admin: {
        description: 'Niedrigere Zahlen werden zuerst angezeigt',
      },
    },
  ],
}
