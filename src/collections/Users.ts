import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    // API-Keys für automatisierte API-Zugriffe (Uploads, Content-Management)
    useAPIKey: true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
