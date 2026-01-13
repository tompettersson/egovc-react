/**
 * JSON-LD Structured Data Components for SEO
 * Implements Schema.org markup for better search engine understanding
 * Note: dangerouslySetInnerHTML is safe here as content is hardcoded JSON, not user input
 */

import Script from 'next/script'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://egovc.de'

// Organization Schema - Company info
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'EGovC GmbH',
    alternateName: 'EGovC',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/images/misc/egovc-logo.svg`,
      width: 200,
      height: 60,
    },
    description: 'EGovC ist der Ansprechpartner für digitale Transformation im öffentlichen Sektor - Verwaltung, Gesundheitswesen und Kirche.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pfarrgasse 17',
      addressLocality: 'Pfungstadt',
      postalCode: '64319',
      addressCountry: 'DE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+49-6157-9130351',
      contactType: 'customer service',
      email: 'info@egovc.de',
      availableLanguage: ['German', 'English'],
    },
    sameAs: [
      'https://www.linkedin.com/company/egovc/',
      'https://www.xing.com/companies/egovcgmbh',
    ],
    foundingDate: '2020',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 50,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Germany',
    },
    knowsAbout: [
      'Digital Transformation',
      'E-Government',
      'Public Administration Digitalization',
      'Healthcare Digitalization',
      'Church Administration',
    ],
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Website Schema - Site-wide info
export function WebsiteSchema({ locale = 'de' }: { locale?: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'EGovC – We Create Future',
    description: locale === 'de'
      ? 'Digitale Transformation für den öffentlichen Sektor'
      : 'Digital Transformation for the Public Sector',
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    inLanguage: [
      { '@type': 'Language', name: 'German', alternateName: 'de' },
      { '@type': 'Language', name: 'English', alternateName: 'en' },
    ],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string
  url: string
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Article Schema for Blog Posts
interface ArticleSchemaProps {
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt?: string
  author?: string
  image?: string
  locale?: string
}

export function ArticleSchema({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
  author = 'EGovC Team',
  image,
  locale = 'de',
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${BASE_URL}/${locale}/blog/${slug}`,
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/${locale}/blog/${slug}`,
    },
    image: image || `${BASE_URL}/images/heroes/Start-Hero.jpg`,
    inLanguage: locale === 'de' ? 'de-DE' : 'en-US',
  }

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Service Schema for Sector Pages
interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  image?: string
}

export function ServiceSchema({
  name,
  description,
  url,
  image,
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    image,
    provider: {
      '@id': `${BASE_URL}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Germany',
    },
    serviceType: 'Digital Transformation Consulting',
  }

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// FAQ Schema for Homepage
interface FAQItem {
  question: string
  answer: string
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// LocalBusiness Schema (alternative to Organization for local SEO)
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#localbusiness`,
    name: 'EGovC GmbH',
    image: `${BASE_URL}/images/misc/egovc-logo.svg`,
    url: BASE_URL,
    telephone: '+49-6157-9130351',
    email: 'info@egovc.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pfarrgasse 17',
      addressLocality: 'Pfungstadt',
      postalCode: '64319',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.8063,
      longitude: 8.6042,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '€€€',
  }

  return (
    <Script
      id="localbusiness-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
