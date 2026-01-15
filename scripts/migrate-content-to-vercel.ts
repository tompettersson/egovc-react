/**
 * Content Migration Script: SQLite → Vercel Neon PostgreSQL
 *
 * Migrates all Payload CMS content from local SQLite to Vercel Neon.
 * Based on seed-all-content.ts but with:
 * - dotenv support for Vercel environment variables
 * - blog-page Global data
 * - SEO metadata for all pages
 *
 * Prerequisites:
 * - .env.local with DATABASE_URL, BLOB_READ_WRITE_TOKEN, PAYLOAD_SECRET
 * - Media already migrated via migrate-media-to-vercel.ts
 *
 * Usage:
 * export $(grep -v '^#' .env.local | xargs) && npx tsx scripts/migrate-content-to-vercel.ts
 */

// Load environment variables from .env.local
import { config as dotenvConfig } from 'dotenv'
dotenvConfig({ path: '.env.local' })

import { getPayload } from 'payload'
import config from '../src/payload.config'

// ============================================
// SITE SETTINGS DATA
// ============================================
const siteSettingsData = {
  companyName: 'EGovC GmbH',
  address: {
    street: 'Pfarrgasse 17',
    zip: '64319',
    city: 'Pfungstadt',
    country: 'Deutschland',
  },
  phone: '+49 6157 9130351',
  email: 'info@egovc.de',
  registry: {
    court: 'Amtsgericht Darmstadt',
    number: 'HRB 102414',
    vatId: 'DE346376428',
  },
  ceo: 'Adrian Sommer',
  agbPdfUrl: 'https://egovc.de/wp-content/uploads/2024/07/AGB_EGOVC_GmbH.pdf',
  odrLink: 'https://ec.europa.eu/consumers/odr/',
  disputeResolutionText:
    'Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung bereit. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
  bookingUrl: 'https://calendly.com/egovc',
  newsletterTitle: 'Newsletter abonnieren',
  newsletterPlaceholder: 'Deine E-Mail Adresse',
  newsletterButtonLabel: 'senden',
  socialLinks: [
    { platform: 'linkedin' as const, url: 'https://www.linkedin.com/company/egovc/' },
    { platform: 'xing' as const, url: 'https://www.xing.com/companies/egovcgmbh' },
  ],
}

// ============================================
// HOMEPAGE DATA
// ============================================
const homepageData = {
  hero: {
    title: 'Starten Sie mit uns Ihre digitale Transformation',
    subtitle:
      'Wir unterstützen Sie bei der ganzheitlichen digitalen Transformation und der operativen und technischen Umsetzung der Leistungsdigitalisierung.',
  },
  threePillars: {
    title: 'Unsere Expertise',
    items: [
      {
        title: 'Verwaltung',
        description: 'Digitale Transformation für öffentliche Verwaltungen',
        link: '/verwaltung',
      },
      {
        title: 'Gesundheitswesen',
        description: 'Digitalisierung im Gesundheitssektor',
        link: '/gesundheitswesen',
      },
      {
        title: 'Kirche',
        description: 'Moderne Lösungen für kirchliche Organisationen',
        link: '/kirche',
      },
    ],
  },
  values: {
    title: 'Unsere Werte',
    subtitle: 'Sieben Werte sind der Wind in unseren Segeln, die uns gemeinsam ans Ziel bringen.',
    items: [
      {
        title: 'Ehrlichkeit',
        tagline: 'Wir sprechen Klartext – auch wenn es unbequem ist.',
        description: 'Echte Zusammenarbeit beginnt mit Ehrlichkeit.',
      },
      {
        title: 'Mut',
        tagline: 'Wir probieren aus, was andere nur planen.',
        description: 'Mut bedeutet für uns, neue Wege zu gehen.',
      },
      {
        title: 'Vertrauen',
        tagline: 'Vertrauen ist unser Betriebssystem.',
        description: 'Wir verlassen uns aufeinander – in Projekten, im Team, mit Kund:innen.',
      },
      {
        title: 'Gleichheit',
        tagline: 'Jede Stimme zählt.',
        description: 'Wir leben Gleichwertigkeit und respektieren unterschiedliche Perspektiven.',
      },
      {
        title: 'Spaß',
        tagline: 'Wir feiern Fortschritt.',
        description: 'Arbeit darf und soll Spaß machen.',
      },
      {
        title: 'Bescheidenheit',
        tagline: 'Wir stellen Wirkung vor Eitelkeit.',
        description:
          'Wir sind stolz auf das, was wir können – und wissen, dass wir nicht alles wissen.',
      },
      {
        title: 'Teamgeist',
        tagline: 'Alleine schnell, gemeinsam weit.',
        description: 'Wir sind ein Team, das sich gegenseitig stärkt.',
      },
    ],
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        question: 'Was macht EGovC?',
        answer:
          'Wir unterstützen öffentliche Verwaltungen und Unternehmen, das Gesundheitswesen, die Kirche bei ihrer ganzheitlichen digitalen Transformation, bei einzelnen Digitalisierungsprojekten und bei der operativen und technischen Umsetzung der Leistungsdigitalisierung.',
      },
      {
        question: 'Wann ist der richtige Zeitpunkt uns an Bord zu holen?',
        answer:
          'Jederzeit! Egal ob Sie sich noch nicht tiefgehend mit der Digitalisierung beschäftigt haben, mitten in der Transformation stecken, oder bereits erste Rückschläge erfahren haben.',
      },
      {
        question: 'Was ist unsere No-Code-Plattform?',
        answer:
          'OMNIA ist unsere leistungsstarke No-Code-Plattform, mit der Sie digitale Prozesse ohne Programmierkenntnisse erstellen und verwalten können.',
      },
      {
        question: 'Wie kam unsere Software OMNIA zustande?',
        answer:
          'OMNIA wurde aus den praktischen Anforderungen unserer Kunden heraus entwickelt und wird kontinuierlich weiterentwickelt.',
      },
      {
        question: 'Was ist das Europäische eGovernment Netzwerk?',
        answer:
          'Das EGovC Network ist ein europäisches Netzwerk für den Austausch von Best Practices und Innovationen im Bereich E-Government.',
      },
    ],
  },
  cta: {
    title: 'Sind Sie bereit für Ihre digitale Zukunft?',
    subtitle: 'Dann kontaktieren Sie uns jetzt für ein unverbindliches Erstgespräch!',
    buttonText: 'Kontakt',
  },
  seo: {
    metaTitle: 'EGovC - Digitale Transformation für den öffentlichen Sektor',
    metaDescription:
      'Wir unterstützen Sie bei der ganzheitlichen digitalen Transformation und der operativen und technischen Umsetzung der Leistungsdigitalisierung.',
  },
}

// ============================================
// BLOG PAGE DATA (NEW)
// ============================================
const blogPageData = {
  hero: {
    title: 'Blog',
    subtitle: 'Neuigkeiten und Einblicke aus der digitalen Transformation',
  },
  intro:
    'Erfahren Sie mehr über aktuelle Entwicklungen in der Digitalisierung der öffentlichen Verwaltung, des Gesundheitswesens und kirchlicher Organisationen.',
  seo: {
    metaTitle: 'Blog | EGovC - Neuigkeiten zur Digitalisierung',
    metaDescription:
      'Aktuelle Beiträge zu E-Government, digitaler Transformation und Innovationen im öffentlichen Sektor.',
  },
}

// ============================================
// SECTOR PAGES DATA
// ============================================
const sectorPagesData = [
  {
    title: 'Verwaltung',
    slug: 'verwaltung',
    hero: {
      title: 'Daseinsvorsorge.\nDigital.\nGestalten.',
      subtitle:
        'Ganzheitliche Digitale Transformation der öffentlichen Verwaltung – gemeinsam gestalten.',
    },
    intro: {
      title: 'Verwaltung Digital',
      subtitle: 'Inhalte, Herausforderungen, Lösungswege',
      description:
        'Die dauerhaft neuen Anforderungen an die öffentliche Verwaltung durch Gesetzeslagen und die Erwartungshaltungen der Kunden, stellen alle vor große Herausforderungen.',
    },
    sections: [
      {
        title: 'Beratung',
        items: [
          {
            title: 'Kickstart Digital',
            description: 'In wenigen Workshops zu nachhaltigen Ergebnissen.',
            actionType: 'brochure',
            actionLabel: 'Broschüre herunterladen',
            actionUrl:
              'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Kennenlernprodukt.pdf',
          },
          {
            title: 'Digitale Transformation',
            description: 'Die Digitalisierung als Katalysator der organisatorischen Transformation.',
            actionType: 'brochure',
            actionLabel: 'Broschüre herunterladen',
            actionUrl:
              'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Digitale_Transformation.pdf',
          },
        ],
      },
      {
        title: 'Software',
        items: [
          {
            title: 'OMNIA',
            description: 'Um ohne IT-Erfahrung Ihre Prozesse End-to-End digitalisieren zu können.',
            actionType: 'link',
            actionLabel: 'Zur Omnia Website',
            actionUrl: 'https://omnia.egovc.de/',
          },
        ],
      },
    ],
    network: {
      title: 'Network',
      description:
        'Das european eGovernment-Network ist eine Initiative der EGovC GmbH. Zusammen mit führenden Anbietern bieten wir ein umfassendes Dienstleisternetzwerk an.',
      linkUrl: '/network/',
      linkLabel: 'Zur Network Seite',
    },
    seo: {
      metaTitle: 'Verwaltung | EGovC',
      metaDescription:
        'Digitalisierung der öffentlichen Verwaltung. E-Government Lösungen für Kommunen, Städte und Behörden.',
    },
  },
  {
    title: 'Gesundheitswesen',
    slug: 'gesundheitswesen',
    hero: {
      title: 'Effizient.\nDigital.\nGesund.',
      subtitle:
        'Die analogen Aspekte des Gesundheitswesens digital nutzbar machen. Einfach – sicher – verfügbar.',
    },
    intro: {
      title: 'Gesundheitswesen Digital',
      subtitle: 'Inhalte, Herausforderungen, Lösungswege',
      description:
        'Die Transformation eines Krankenhauses, einer Pflegeeinrichtung oder eines Gesundheitsdienstleisters beginnt bei der Untersuchung der Organisation.',
    },
    sections: [
      {
        title: 'Beratung',
        items: [
          {
            title: 'Kickstart Digital',
            description: 'In wenigen Workshops zu nachhaltigen Ergebnissen.',
            actionType: 'brochure',
            actionLabel: 'Broschüre herunterladen',
            actionUrl:
              'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Kennenlernprodukt.pdf',
          },
        ],
      },
      {
        title: 'Software',
        items: [
          {
            title: 'OMNIA',
            description:
              'OMNIA ist das Patientenportal welches digitales Aufnahme-, Behandlungs- und Entlassmanagement vereint.',
            actionType: 'link',
            actionLabel: 'Zur Omnia Website',
            actionUrl: 'https://omnia.egovc.de/',
          },
        ],
      },
    ],
    network: {
      title: 'Network',
      description:
        'Das european eGovernment-Network deckt die komplette Themenbreite der Anwendungslandschaft im Gesundheitswesen ab.',
      linkUrl: '/network/',
      linkLabel: 'Zur Network Seite',
    },
    seo: {
      metaTitle: 'Gesundheitswesen | EGovC',
      metaDescription:
        'Digitalisierung im Gesundheitssektor. Patientenportale, Pflegeplanung und digitale Transformation für Krankenhäuser.',
    },
  },
  {
    title: 'Kirche',
    slug: 'kirche',
    hero: {
      title: 'Zukunft.\nNachhaltig.\nDigital.',
      subtitle:
        'Sinkende Mitgliederzahlen – gleichbleibende Kosten. Digitalisierung als größtmögliche Effizienzsteigerung.',
    },
    intro: {
      title: 'Kirche Digital',
      subtitle: 'Inhalte, Herausforderungen, Lösungswege',
      description:
        'Transformation der Kirche und kirchlicher Organisationen ist wichtiger als je zuvor.',
    },
    sections: [
      {
        title: 'Beratung',
        items: [
          {
            title: 'Kickstart Digital',
            description: 'In wenigen Workshops zu nachhaltigen Ergebnissen.',
            actionType: 'brochure',
            actionLabel: 'Broschüre herunterladen',
            actionUrl:
              'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Kennenlernprodukt.pdf',
          },
        ],
      },
      {
        title: 'Software',
        items: [
          {
            title: 'OMNIA',
            description: 'End-to-End Prozessdigitalisierung ohne IT-Erfahrung.',
            actionType: 'link',
            actionLabel: 'Zur Omnia Website',
            actionUrl: 'https://omnia.egovc.de/',
          },
        ],
      },
    ],
    network: {
      title: 'Network',
      description:
        'Das european eGovernment-Network deckt alle Belange der digitalen Transformation der Kirche ab.',
      linkUrl: '/network/',
      linkLabel: 'Zur Network Seite',
    },
    seo: {
      metaTitle: 'Kirche | EGovC',
      metaDescription:
        'Digitalisierung für kirchliche Organisationen. Prozessoptimierung und digitale Transformation für Kirchen und Gemeinden.',
    },
  },
]

// ============================================
// CAREER PAGE DATA
// ============================================
const careerPageData = {
  intro: {
    title: 'Was zeichnet uns aus',
    paragraphs: [
      {
        text: 'EGovC ist der Ansprechpartner für alle Fragen und Angelegenheiten rund um das Thema Digitalisierung im öffentlichen Sektor.',
      },
      {
        text: 'Unseren Kunden, aus allen Bereichen des öffentlichen Sektors, stehen wir bei jeglichen Themen im Kontext der Digitalisierung, beratend und unterstützend zur Seite.',
      },
      {
        text: 'In regelmäßigen Abstimmungen legt das Management gemeinsam mit den Mitarbeitern die kurz- und mittelfristigen Ziele fest.',
      },
    ],
  },
  benefits: [
    {
      title: 'Arbeitsplatz',
      description: 'Moderne Büroausstattung. Gute Verkehrsanbindung im öffentlichen Nahverkehr.',
    },
    {
      title: 'Vertrauensarbeitszeit',
      description:
        'Unsere Beschäftigten können Ihre Arbeitszeit anhand Ihrer abgesprochenen Ziele frei einteilen.',
    },
    {
      title: 'Flache Hierarchie',
      description: 'Entscheidungswege sind bei uns deutlich kürzer.',
    },
    {
      title: 'Entwicklungs- und Aufstiegschancen',
      description:
        'Wir unterstützen Weiterbildungen und investieren in die Entwicklung unserer Mitarbeitenden.',
    },
    {
      title: 'Ungezwungene Arbeitsatmosphäre',
      description:
        'Unser junges und aufgeschlossenes Team pflegt einen harmonischen und familiären Umgang.',
    },
  ],
  expectations: {
    title: 'Was erwarten\nwir von unseren\nMitarbeitern',
    description:
      'Leidenschaft und Zuverlässigkeit sind zwei Grundpfeiler unserer Unternehmensphilosophie.',
  },
  jobOpenings: [
    {
      title: 'Freelancer Verwaltungsmanagement (m/w/d)',
      description:
        'Du bist fasziniert davon, wie die Digitalisierung die Arbeitswelt verändert, kennst aber auch sehr gut die Rahmenbedingungen einer öffentlichen Verwaltung.',
      callToAction: 'Werde Freelancer in unserem Team!',
      pdfUrl:
        'https://egovc.de/wp-content/uploads/2022/11/20221125_Stellenausschreibung_Freelancer_neuCI.pdf',
    },
  ],
  seo: {
    metaTitle: 'Karriere | EGovC',
    metaDescription:
      'Karriere bei EGovC: Offene Stellen in der digitalen Transformation für Verwaltung, Gesundheit und Kirche.',
  },
}

// ============================================
// TEAM PAGE DATA
// ============================================
const teamPageData = {
  intro: {
    title: 'Willkommen bei EGovC – Lernen Sie unser Team kennen',
    paragraphs: [
      {
        text: 'Wir bei EGovC freuen uns auf die Zusammenarbeit mit Ihnen. Als Beratungshaus unterstützen wir öffentliche Verwaltungen und Organisationen dabei, den digitalen Wandel erfolgreich zu gestalten.',
      },
      {
        text: 'Neben unserer umfassenden Beratung haben wir mit OMNIA eine leistungsstarke Software entwickelt, die Verwaltungsprozesse vollständig digitalisiert.',
      },
      {
        text: 'Auf dieser Seite stellen wir Ihnen die Menschen vor, die hinter unseren Projekten, Ideen und Lösungen stehen.',
      },
    ],
  },
  members: [
    { name: 'Adrian Sommer', role: 'CEO | Gründer, Vordenker, Möglichmacher' },
    { name: 'Roland Lutz', role: 'CTO | Technikstratege, Architekt, Möglichmacher' },
    {
      name: 'Benjamin Bauer',
      role: 'Bereichsleiter Education & Event | Kommunikator, Netzwerker, Weiterdenker',
    },
  ],
  departments: [
    {
      title: 'Vertrieb & Kundenbetreuung',
      description:
        'Eine langfristige Kundenbeziehung aufzubauen und zu pflegen hat bei uns oberste Priorität.',
      email: 'vertrieb@egovc.de',
    },
    {
      title: 'Beratung',
      description:
        'Unser Team an qualifizierten Beratern nimmt sich Zeit für allumfassende und nachhaltige Lösungen.',
      email: 'beratung@egovc.de',
    },
    {
      title: 'Rechnungswesen & Rechtsabteilung',
      description:
        'Bei Fragen zu Ihrer Rechnung oder Ihrem Vertrag wenden Sie sich gerne an uns.',
      email: 'rechnungundrecht@egovc.de',
    },
    {
      title: 'Unternehmens-kommunikation',
      description: 'Bei Anfragen bezüglich Interviews, Veröffentlichungen und Vorträgen.',
      email: 'uko@egovc.de',
    },
    {
      title: 'Personalabteilung',
      description: 'Sie sind interessiert daran ein Teil unseres Teams zu werden?',
      email: 'personal@egovc.de',
    },
  ],
  values: {
    intro: {
      title: 'Unsere Werte',
      subtitle: 'Sieben Werte sind der Wind in unseren Segeln,\ndie uns gemeinsam ans Ziel bringen.',
    },
    items: [
      {
        title: 'Ehrlichkeit',
        subtitle: 'Wir sprechen Klartext – auch wenn es unbequem ist.',
        description: 'Echte Zusammenarbeit beginnt mit Ehrlichkeit.',
      },
      {
        title: 'Mut',
        subtitle: 'Wir probieren aus, was andere nur planen.',
        description: 'Mut bedeutet für uns, neue Wege zu gehen.',
      },
      {
        title: 'Vertrauen',
        subtitle: 'Vertrauen ist unser Betriebssystem.',
        description: 'Wir verlassen uns aufeinander – in Projekten, im Team, mit Kund:innen.',
      },
      {
        title: 'Gleichheit',
        subtitle: 'Jede Stimme zählt.',
        description: 'Wir leben Gleichwertigkeit und respektieren unterschiedliche Perspektiven.',
      },
      {
        title: 'Spaß',
        subtitle: 'Wir feiern Fortschritt.',
        description: 'Arbeit darf und soll Spaß machen.',
      },
      {
        title: 'Bescheidenheit',
        subtitle: 'Wir stellen Wirkung vor Eitelkeit.',
        description:
          'Wir sind stolz auf das, was wir können – und wissen, dass wir nicht alles wissen.',
      },
      {
        title: 'Teamgeist',
        subtitle: 'Alleine schnell, gemeinsam weit.',
        description: 'Wir sind ein Team, das sich gegenseitig stärkt.',
      },
    ],
  },
  seo: {
    metaTitle: 'Team | EGovC',
    metaDescription: 'Lernen Sie das EGovC-Team kennen. Experten für digitale Transformation.',
  },
}

// ============================================
// NETWORK PAGE DATA
// ============================================
const networkPageData = {
  hero: {
    title: 'Europäisches eGovernment Netzwerk',
    subtitle: 'Für den öffentlichen Sektor',
    description:
      'Verwaltungsmodernisierung, Digitalisierung, strukturelle Veränderungen des Arbeitsmarkts – der öffentliche Sektor ist im Umbruch.',
  },
  about: {
    label: 'ÜBER UNS',
    title: 'Wer Wir Sind',
    description:
      'Das EGovC Network bietet als Partnernetzwerk ein breites Spektrum an Leistungen auf höchstem Niveau.',
  },
  visionMission: {
    title: 'Vision & Mission',
    description:
      'Die Partner des EGovC Network teilen die Vision nachhaltiger Vernetzung und langfristiger Transformation des öffentlichen Sektors.',
  },
  solutions: {
    label: 'LEISTUNGSSPEKTRUM',
    title: 'Individuelle Lösungen',
    description:
      'Die Kompetenzvielfalt des Partnernetzwerks umspannt sämtliche Bereiche einer modernen Verwaltung.',
  },
  topics: {
    title: 'Themenfelder',
    fields: [
      { id: 'strategieberatung', title: 'Strategieberatung' },
      { id: 'prozesmanagement', title: 'Prozessmanagement' },
      { id: 'projektmanagement', title: 'Projektmanagement' },
      { id: 'projekt-coaching', title: 'Projekt- und Themencoaching' },
      { id: 'personalberatung', title: 'Personalberatung' },
      { id: 'ozg-umsetzung', title: 'OZG Umsetzung' },
      { id: 'terminmanagement', title: 'Online-Terminmanagement' },
      { id: 'management-beratung', title: 'Management-Beratung' },
      { id: 'kulturentwicklung', title: 'Kulturentwicklung' },
      { id: 'it-betrieb', title: 'IT-Betrieb und -dienstleistungen' },
      { id: 'it-beratung', title: 'IT-Beratung' },
      { id: 'identitaetsmanagement', title: 'Identitätsmanagement' },
      { id: 'formularmanagement', title: 'Formularmanagement' },
      { id: 'foerdermittel', title: 'Fördermittelmanagement' },
      { id: 'e-payment', title: 'E-Payment' },
      { id: 'dokumentenmanagement', title: 'Dokumentenmanagement' },
      { id: 'datensicherheit', title: 'Datensicherheit' },
      { id: 'datenschutz', title: 'Datenschutz' },
    ],
  },
  seo: {
    metaTitle: 'Network | EGovC',
    metaDescription:
      'Das EGovC Network verbindet Experten für erfolgreiche digitale Transformation.',
  },
}

// ============================================
// WHITEPAPER PAGE DATA
// ============================================
const whitepaperPageData = {
  hero: {
    title: 'Whitepaper',
    intro:
      'In unseren Whitepapern erhalten Sie exklusive, praktische Tipps, Hintergründe und Best Practice-Beispiele aus dem Verwaltungsalltag.',
  },
  form: {
    title: 'Whitepaper & Success Stories anfordern',
    note: 'Füllen Sie einfach das beistehende Formular aus und Sie erhalten binnen kürzester Zeit das Whitepaper in PDF-Form.',
  },
  seo: {
    metaTitle: 'Whitepaper | EGovC',
    metaDescription: 'Kostenlose Whitepaper und Podcasts zu E-Government und Digitalisierung.',
  },
}

// ============================================
// WHITEPAPERS DATA
// ============================================
const whitepapersData = [
  {
    title: 'Podcast: Low Code / No Code - Praktische Einsatzfelder',
    description:
      'Low-Code/No-Code ist keine Modeerscheinung, sondern eine Antwort auf strukturelle Engpässe.',
    type: 'podcast',
  },
  {
    title: 'Umsetzung Ihrer Digitalstrategie mit Low-Code/No-Code als Umsetzungsturbo',
    description:
      'Die öffentliche Verwaltung steht unter Druck: Sie muss digitale Services bereitstellen.',
    type: 'whitepaper',
  },
  {
    title: 'Podcast: Projektmanagement - so gelingt erfolgreiche Umsetzung',
    description:
      'Im Podcast sprechen wir darüber, wie Projektmanagement in der Praxis funktioniert.',
    type: 'podcast',
  },
  {
    title: 'Projektmanagement in der Praxis erfolgreich umsetzen',
    description: 'Das Whitepaper zeigt, wie Projekte erfolgreich umgesetzt werden können.',
    type: 'whitepaper',
  },
  {
    title: 'OMNIA Leistung: Digitale Ideenplattform',
    description:
      'Die digitale Ideenplattform ermöglicht Bürger:innen und Mitarbeitenden, Vorschläge einzureichen.',
    type: 'omnia',
    category: 'OMNIA',
  },
  {
    title: 'OMNIA Leistung: Digitale Zielvereinbarung',
    description:
      'Die digitale Zielvereinbarung ermöglicht es, Ziele strukturiert zu definieren.',
    type: 'omnia',
    category: 'OMNIA',
  },
  {
    title: 'Umsetzung des Onlinezugangsgesetzes (OZG) in der Praxis',
    description: 'Verwaltungsdigitalisierung als echter Modernisierungsmotor.',
    type: 'whitepaper',
  },
  {
    title: 'Ganzheitlicher Leitfaden für die digitale Transformation in Behörden',
    description:
      'Dieser Leitfaden zeigt, wie Behörden die digitale Transformation aktiv gestalten können.',
    type: 'whitepaper',
  },
]

// ============================================
// MAIN MIGRATION FUNCTION
// ============================================
async function migrateContent() {
  console.log('🚀 Starting Content Migration to Vercel Neon...\n')

  // Check environment variables
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL not set in .env.local')
    console.error('   Run: export $(grep -v "^#" .env.local | xargs) && npx tsx scripts/migrate-content-to-vercel.ts')
    process.exit(1)
  }

  console.log('✅ DATABASE_URL found')
  console.log(`   → Connecting to: ${process.env.DATABASE_URL.substring(0, 50)}...\n`)

  try {
    const payload = await getPayload({ config })
    console.log('📦 Payload initialized successfully\n')

    // 1. Seed Site Settings
    console.log('📝 Migrating Site Settings...')
    await payload.updateGlobal({
      slug: 'site-settings',
      data: siteSettingsData,
    })
    console.log('✅ Site Settings migrated\n')

    // 2. Seed Homepage
    console.log('📝 Migrating Homepage...')
    await payload.updateGlobal({
      slug: 'homepage',
      data: homepageData,
    })
    console.log('✅ Homepage migrated\n')

    // 3. Seed Blog Page (NEW)
    console.log('📝 Migrating Blog Page...')
    await payload.updateGlobal({
      slug: 'blog-page',
      data: blogPageData,
    })
    console.log('✅ Blog Page migrated\n')

    // 4. Seed Sector Pages
    console.log('📝 Migrating Sector Pages...')
    for (const sectorPage of sectorPagesData) {
      const existing = await payload.find({
        collection: 'sector-pages',
        where: { slug: { equals: sectorPage.slug } },
      })

      if (existing.docs.length > 0) {
        await payload.update({
          collection: 'sector-pages',
          id: existing.docs[0].id,
          data: sectorPage,
        })
        console.log(`  ✅ Updated: ${sectorPage.title}`)
      } else {
        await payload.create({
          collection: 'sector-pages',
          data: sectorPage,
        })
        console.log(`  ✅ Created: ${sectorPage.title}`)
      }
    }
    console.log('✅ Sector Pages migrated\n')

    // 5. Seed Career Page
    console.log('📝 Migrating Career Page...')
    await payload.updateGlobal({
      slug: 'career-page',
      data: careerPageData,
    })
    console.log('✅ Career Page migrated\n')

    // 6. Seed Team Page
    console.log('📝 Migrating Team Page...')
    await payload.updateGlobal({
      slug: 'team-page',
      data: teamPageData,
    })
    console.log('✅ Team Page migrated\n')

    // 7. Seed Network Page
    console.log('📝 Migrating Network Page...')
    await payload.updateGlobal({
      slug: 'network-page',
      data: networkPageData,
    })
    console.log('✅ Network Page migrated\n')

    // 8. Seed Whitepaper Page
    console.log('📝 Migrating Whitepaper Page...')
    await payload.updateGlobal({
      slug: 'whitepaper-page',
      data: whitepaperPageData,
    })
    console.log('✅ Whitepaper Page migrated\n')

    // 9. Seed Whitepapers Collection
    console.log('📝 Migrating Whitepapers...')
    let wpCreated = 0
    let wpSkipped = 0
    for (const wp of whitepapersData) {
      const existing = await payload.find({
        collection: 'whitepapers',
        where: { title: { equals: wp.title } },
      })

      if (existing.docs.length === 0) {
        await payload.create({
          collection: 'whitepapers',
          data: wp as any,
        })
        wpCreated++
      } else {
        wpSkipped++
      }
    }
    console.log(`✅ Whitepapers migrated (${wpCreated} created, ${wpSkipped} skipped)\n`)

    // Summary
    console.log('='.repeat(50))
    console.log('📊 Migration Summary:')
    console.log('='.repeat(50))
    console.log('  ✅ Site Settings')
    console.log('  ✅ Homepage')
    console.log('  ✅ Blog Page (NEW)')
    console.log('  ✅ Sector Pages (3)')
    console.log('  ✅ Career Page')
    console.log('  ✅ Team Page')
    console.log('  ✅ Network Page')
    console.log('  ✅ Whitepaper Page')
    console.log(`  ✅ Whitepapers (${whitepapersData.length})`)
    console.log('='.repeat(50))
    console.log('\n🎉 Content migration completed successfully!')
    console.log('\n📌 Next steps:')
    console.log('   1. Verify content at: https://egovc-react.vercel.app/admin')
    console.log('   2. Check frontend at: https://egovc-react.vercel.app')
    console.log('   3. Test DE/EN language switch')

    process.exit(0)
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

// Run migration
migrateContent()
