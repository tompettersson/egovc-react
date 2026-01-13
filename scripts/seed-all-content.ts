/**
 * Comprehensive Seed Script for all Payload CMS content
 * Run with: npx tsx scripts/seed-all-content.ts
 */

import { getPayload } from 'payload';
import config from '../src/payload.config';

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
    number: 'HRB 96950',
    vatId: 'DE319550575',
  },
  ceo: 'Adrian Sommer',
  agbPdfUrl: 'https://egovc.de/wp-content/uploads/2024/07/AGB_EGOVC_GmbH.pdf',
  odrLink: 'https://ec.europa.eu/consumers/odr/',
  disputeResolutionText: 'Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung bereit. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
  bookingUrl: 'https://calendly.com/egovc',
  newsletterTitle: 'Newsletter abonnieren',
  newsletterPlaceholder: 'Deine E-Mail Adresse',
  newsletterButtonLabel: 'senden',
  socialLinks: [
    { platform: 'linkedin' as const, url: 'https://www.linkedin.com/company/egovc/' },
    { platform: 'xing' as const, url: 'https://www.xing.com/companies/egovcgmbh' },
  ],
};

// ============================================
// HOMEPAGE DATA (Complete scraped content from egovc.de)
// Note: English translations available in _input/consolidated-content.json
// ============================================
const homepageData = {
  hero: {
    title: 'Starten Sie mit uns Ihre digitale Transformation',
    subtitle: 'Wir unterstützen Sie bei der ganzheitlichen digitalen Transformation und der operativen und technischen Umsetzung der Leistungsdigitalisierung.',
  },
  threePillars: {
    title: 'Unsere Expertise',
    items: [
      { title: 'Verwaltung', description: 'Digitale Transformation für öffentliche Verwaltungen', link: '/verwaltung' },
      { title: 'Gesundheitswesen', description: 'Digitalisierung im Gesundheitssektor', link: '/gesundheitswesen' },
      { title: 'Kirche', description: 'Moderne Lösungen für kirchliche Organisationen', link: '/kirche' },
    ],
  },
  values: {
    title: 'Unsere Werte',
    subtitle: 'Sieben Werte sind der Wind in unseren Segeln, die uns gemeinsam ans Ziel bringen.',
    items: [
      { title: 'Ehrlichkeit', tagline: 'Wir sprechen Klartext – auch wenn es unbequem ist.', description: 'Echte Zusammenarbeit beginnt mit Ehrlichkeit. Wir teilen unsere Meinungen offen, geben konstruktives Feedback und stehen zu unseren Entscheidungen. So entstehen Vertrauen und gemeinsame Verantwortung.' },
      { title: 'Mut', tagline: 'Wir probieren aus, was andere nur planen.', description: 'Mut bedeutet für uns, neue Wege zu gehen, auch wenn sie ungewiss sind. Wir setzen auf Innovation, übernehmen Verantwortung und stehen zu unseren Ideen – auch dann, wenn sie nicht dem Status quo entsprechen.' },
      { title: 'Vertrauen', tagline: 'Vertrauen ist unser Betriebssystem.', description: 'Wir verlassen uns aufeinander – in Projekten, im Team, mit Kund:innen. Vertrauen heißt für uns, Verantwortung zu geben und zu nehmen. So entstehen selbstorganisierte Prozesse, stabile Beziehungen und echtes Commitment.' },
      { title: 'Gleichheit', tagline: 'Jede Stimme zählt – unabhängig von Titel oder Hintergrund.', description: 'Wir leben Gleichwertigkeit und respektieren unterschiedliche Perspektiven. Vielfalt macht uns besser – in der Lösungsfindung, im Miteinander, in der Wirkung. Entscheidungen treffen wir gemeinsam, nicht hierarchisch.' },
      { title: 'Spaß', tagline: 'Wir feiern Fortschritt – und manchmal auch einfach nur uns.', description: 'Arbeit darf (und soll!) Spaß machen. Wir lachen miteinander, feiern kleine wie große Erfolge und schaffen Raum für Menschlichkeit. Denn Freude motiviert – und motivierte Teams bewegen mehr.' },
      { title: 'Bescheidenheit', tagline: 'Wir stellen Wirkung vor Eitelkeit.', description: 'Wir sind stolz auf das, was wir können – und wissen, dass wir nicht alles wissen. Wir hören zu, lernen täglich dazu und lassen Taten statt Worte sprechen. Unser Ziel ist nicht der Applaus, sondern echte Veränderung.' },
      { title: 'Teamgeist', tagline: 'Alleine schnell, gemeinsam weit.', description: 'Wir sind ein Team, das sich gegenseitig stärkt. Wir teilen Wissen, springen ein, wenn es brennt, und feiern gemeinsam Erfolge. Denn echte Wirkung entsteht durch Zusammenarbeit – nicht durch Einzelkämpfer.' },
    ],
  },
  faq: {
    title: 'FAQ',
    items: [
      { question: 'Was macht EGovC?', answer: 'Wir unterstützen öffentliche Verwaltungen und Unternehmen, das Gesundheitswesen, die Kirche bei ihrer ganzheitlichen digitalen Transformation, bei einzelnen Digitalisierungsprojekten und bei der operativen und technischen Umsetzung der Leistungsdigitalisierung.' },
      { question: 'Wann ist der richtige Zeitpunkt uns an Bord zu holen?', answer: 'Jederzeit! Egal ob Sie sich noch nicht tiefgehend mit der Digitalisierung beschäftigt haben, mitten in der Transformation stecken, oder bereits erste Rückschläge erfahren haben. Wir unterstützen Sie gerne und sind zu jedem Zeitpunkt der richtige Organisatorische und Technische Partner.' },
      { question: 'Was ist unsere No-Code-Plattform?', answer: 'Eine Plattform, die es Ihnen ermöglicht analoge Prozesse End-to-End zu digitalisieren ohne dafür Programmierkenntnisse zu benötigen. Einfach per Drag-and-Drop von dem Antragsdialog, über den entsprechenden Prozess auf der Seite des Kunden sowie der Organisation, alles mit zu produzieren. Unsere Lösung besteht aus Service-Portal, Workspace und Editor.' },
      { question: 'Wie kam unsere Software OMNIA zustande?', answer: 'Durch die Arbeit im öffentlichen Sektor, dessen Beratung und engen Kontakt, konnten wir im Bottom-up Verfahren präzise definieren, was eine notwendige Softwarelösung zu leisten hat. OMNIA wurde dann eigenständig, unabhängig und nach aktuellem Stand der Technik entwickelt, um Organisationen zu befähigen, sich intern wie extern zu transformieren (No-Code-Plattform).' },
      { question: 'Was ist das Europäische eGovernment Netzwerk?', answer: 'Eine Dienstleisterallianz, die es sich zur Aufgabe gemacht hat alle Organisationen, in der Breite sowie in der Tiefe, bei sämtlichen Belangen der Transformation zu unterstützen. Ziel ist es vorhandene Lösungen zu integrieren, stetig weiter zu entwickeln und neue europäische Ansätze zu identifizieren.' },
    ],
  },
  cta: {
    title: 'Sind Sie bereit für Ihre digitale Zukunft?',
    subtitle: 'Dann kontaktieren Sie uns jetzt für ein unverbindliches Erstgespräch!',
    buttonText: 'Kontakt',
  },
  seo: {
    metaTitle: 'EGovC - Digitale Transformation für den öffentlichen Sektor',
    metaDescription: 'Wir unterstützen Sie bei der ganzheitlichen digitalen Transformation und der operativen und technischen Umsetzung der Leistungsdigitalisierung.',
  },
};

// ============================================
// SECTOR PAGES DATA
// ============================================
const sectorPagesData = [
  {
    title: 'Verwaltung',
    slug: 'verwaltung',
    hero: {
      title: 'Daseinsvorsorge.\nDigital.\nGestalten.',
      subtitle: 'Ganzheitliche Digitale Transformation der öffentlichen Verwaltung – gemeinsam gestalten.',
    },
    intro: {
      title: 'Verwaltung Digital',
      subtitle: 'Inhalte, Herausforderungen, Lösungswege',
      description: 'Die dauerhaft neuen Anforderungen an die öffentliche Verwaltung durch Gesetzeslagen und die Erwartungshaltungen der Kunden, stellen alle vor große Herausforderungen. Um die Puzzleteile zu einem Bild werden zu lassen, ist es wichtig, mit Strategie, Organisationstalent und einem effektiven Changemanagement anzusetzen.\n\nÜber unsere kooperative Beratung, unsere Produktpalette an IT-Dienstleistungen und dem europäischen eGovernment-Netzwerk als umfassende Dienstleister-Allianz, sind wir für alle denkbaren Anforderungen im digitalen Kontext der richtige Ansprechpartner.',
    },
    sections: [
      {
        title: 'Beratung',
        items: [
          { title: 'Kickstart Digital', description: 'In wenigen Workshops zu nachhaltigen Ergebnissen: Gemeinsames Kennenlernen der Ambitionen, der Ausgangslage und des aktuellen digitalen Standes.', actionType: 'brochure', actionLabel: 'Broschüre herunterladen', actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Kennenlernprodukt.pdf' },
          { title: 'Organisations-beratung', description: 'Transformation beginnt bei der Organisation. Gemeinsam analysieren wir Ihren organisatorischen Aufbau im Hinblick auf mögliche Optimierungsbedarfe.', actionType: 'contact', actionLabel: 'Jetzt kontaktieren' },
          { title: 'Digitale Transformation', description: 'Die Digitalisierung als Katalysator der organisatorischen Transformation.', actionType: 'brochure', actionLabel: 'Broschüre herunterladen', actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Digitale_Transformation.pdf' },
          { title: 'Projekt- und Themencoaching', description: 'Der öffentliche Sektor wird regelmäßig mit neuen Themen konfrontiert.', actionType: 'brochure', actionLabel: 'Broschüre herunterladen', actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Projekt_und_Themencoaching.pdf' },
          { title: 'PMO – Projektmanagement Office', description: 'Veränderung benötigt komplexe Projektprogramme.', actionType: 'brochure', actionLabel: 'Broschüre Herunterladen', actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_PMO.pdf' },
        ],
      },
      {
        title: 'Software',
        items: [
          { title: 'OMNIA', description: 'Um ohne IT-Erfahrung Ihre Prozesse End-to-End digitalisieren zu können.', actionType: 'link', actionLabel: 'Zur Omnia Website', actionUrl: 'https://omnia.egovc.de/' },
          { title: 'Website-Service', description: 'Eine schnell verfügbare Internetpräsenz, die nutzerfreundlich und modern ist.', actionType: 'contact', actionLabel: 'Jetzt kontaktieren' },
          { title: 'Personaleinsatzplanung / Schichtdienst', description: 'Das verfügbare Personal optimal einsetzen.', actionType: 'contact', actionLabel: 'Jetzt kontaktieren' },
        ],
      },
    ],
    network: {
      title: 'Network',
      description: 'Das european eGovernment-Network ist eine Initiative der EGovC GmbH. Zusammen mit führenden Anbietern bieten wir ein umfassendes Dienstleisternetzwerk an.',
      linkUrl: '/network/',
      linkLabel: 'Zur Network Seite',
    },
    seo: {
      metaTitle: 'Verwaltung | EGovC',
      metaDescription: 'Digitalisierung der öffentlichen Verwaltung. E-Government Lösungen für Kommunen, Städte und Behörden.',
    },
  },
  {
    title: 'Gesundheitswesen',
    slug: 'gesundheitswesen',
    hero: {
      title: 'Effizient.\nDigital.\nGesund.',
      subtitle: 'Die analogen Aspekte des Gesundheitswesens digital nutzbar machen. Einfach – sicher – verfügbar.',
    },
    intro: {
      title: 'Gesundheitswesen Digital',
      subtitle: 'Inhalte, Herausforderungen, Lösungswege',
      description: 'Die Transformation eines Krankenhauses, einer Pflegeeinrichtung oder eines Gesundheitsdienstleisters beginnt bei der Untersuchung der Organisation. Die Digitalisierung bietet hierbei in vielfacher Weise Möglichkeiten zur Verschlankung von Prozessen.\n\nUm diese Potenziale auszuschöpfen und für Ihr Haus passend und nachhaltig zu integrieren, stehen wir als EGovC, Ihnen mit unserer Produktpalette gerne zur Verfügung.',
    },
    sections: [
      {
        title: 'Beratung',
        items: [
          { title: 'Kickstart Digital', description: 'In wenigen Workshops zu nachhaltigen Ergebnissen.', actionType: 'brochure', actionLabel: 'Broschüre herunterladen', actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Kennenlernprodukt.pdf' },
          { title: 'Digitale Transformation', description: 'Die Digitalisierung als Katalysator der organisatorischen Transformation.', actionType: 'brochure', actionLabel: 'Broschüre herunterladen', actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Digitale_Transformation.pdf' },
          { title: 'IT-Servicemanagement nach ITIL', description: 'ITIL gilt als quasi-Standard für das IT-Servicemanagement.', actionType: 'contact', actionLabel: 'Jetzt kontaktieren' },
        ],
      },
      {
        title: 'Software',
        items: [
          { title: 'OMNIA', description: 'OMNIA ist das Patientenportal welches digitales Aufnahme-, Behandlungs- und Entlassmanagement vereint.', actionType: 'link', actionLabel: 'Zur Omnia Website', actionUrl: 'https://omnia.egovc.de/' },
          { title: 'Pflegeplan', description: 'Digitale Dienstplanerstellung maßgeschneidert auf die Bedürfnisse einer Gesundheits- und Pflegeeinrichtung.', actionType: 'contact', actionLabel: 'Jetzt kontaktieren' },
          { title: 'Kodiermonitoring', description: 'Das fallbegleitende Abrechnungsmonitoring in Echtzeit.', actionType: 'contact', actionLabel: 'Jetzt kontaktieren' },
        ],
      },
    ],
    network: {
      title: 'Network',
      description: 'Das european eGovernment-Network deckt die komplette Themenbreite der Anwendungslandschaft im Gesundheitswesen ab.',
      linkUrl: '/network/',
      linkLabel: 'Zur Network Seite',
    },
    seo: {
      metaTitle: 'Gesundheitswesen | EGovC',
      metaDescription: 'Digitalisierung im Gesundheitssektor. Patientenportale, Pflegeplanung und digitale Transformation für Krankenhäuser.',
    },
  },
  {
    title: 'Kirche',
    slug: 'kirche',
    hero: {
      title: 'Zukunft.\nNachhaltig.\nDigital.',
      subtitle: 'Sinkende Mitgliederzahlen – gleichbleibende Kosten. Digitalisierung als größtmögliche Effizienzsteigerung.',
    },
    intro: {
      title: 'Kirche Digital',
      subtitle: 'Inhalte, Herausforderungen, Lösungswege',
      description: 'Transformation der Kirche und kirchlicher Organisationen ist wichtiger als je zuvor. Durch die digitale Transformation lassen sich Prozesse vereinfachen und Vorgänge beschleunigen.\n\nWir helfen Ihnen dabei, den gleichbleibenden Verwaltungsaufwand auch in Zeiten schwindender Mitgliederzahlen effizienter und dadurch effektiver zu gestalten.',
    },
    sections: [
      {
        title: 'Beratung',
        items: [
          { title: 'Kickstart Digital', description: 'In wenigen Workshops zu nachhaltigen Ergebnissen.', actionType: 'brochure', actionLabel: 'Broschüre herunterladen', actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Kennenlernprodukt.pdf' },
          { title: 'Organisations-beratung', description: 'Transformation beginnt bei der Organisation.', actionType: 'contact', actionLabel: 'Jetzt kontaktieren' },
          { title: 'Digitale Transformation', description: 'Die Digitalisierung als Katalysator der organisatorischen Transformation.', actionType: 'brochure', actionLabel: 'Broschüre herunterladen', actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Digitale_Transformation.pdf' },
        ],
      },
      {
        title: 'Software',
        items: [
          { title: 'OMNIA', description: 'End-to-End Prozessdigitalisierung ohne IT-Erfahrung.', actionType: 'link', actionLabel: 'Zur Omnia Website', actionUrl: 'https://omnia.egovc.de/' },
          { title: 'Website-Service', description: 'Eine nutzerfreundliche und moderne Internetpräsenz.', actionType: 'contact', actionLabel: 'Jetzt kontaktieren' },
        ],
      },
    ],
    network: {
      title: 'Network',
      description: 'Das european eGovernment-Network deckt alle Belange der digitalen Transformation der Kirche ab.',
      linkUrl: '/network/',
      linkLabel: 'Zur Network Seite',
    },
    seo: {
      metaTitle: 'Kirche | EGovC',
      metaDescription: 'Digitalisierung für kirchliche Organisationen. Prozessoptimierung und digitale Transformation für Kirchen und Gemeinden.',
    },
  },
];

// ============================================
// CAREER PAGE DATA
// ============================================
const careerPageData = {
  intro: {
    title: 'Was zeichnet uns aus',
    paragraphs: [
      { text: 'EGovC ist der Ansprechpartner für alle Fragen und Angelegenheiten rund um das Thema Digitalisierung im öffentlichen Sektor. Auf die unterschiedlichen Anliegen unserer Kunden gehen wir mit unseren Produkten und Dienstleistungen individuell und serviceorientiert ein.' },
      { text: 'Unseren Kunden, aus allen Bereichen des öffentlichen Sektors, stehen wir bei jeglichen Themen im Kontext der Digitalisierung, beratend und unterstützend zur Seite.' },
      { text: 'In regelmäßigen Abstimmungen legt das Management gemeinsam mit den Mitarbeitern die kurz- und mittelfristigen Ziele fest.' },
    ],
  },
  benefits: [
    { title: 'Arbeitsplatz', description: 'Moderne Büroausstattung. Gute Verkehrsanbindung im öffentlichen Nahverkehr.' },
    { title: 'Vertrauensarbeitszeit', description: 'Unsere Beschäftigten können Ihre Arbeitszeit anhand Ihrer abgesprochenen Ziele frei einteilen.' },
    { title: 'Flache Hierarchie', description: 'Entscheidungswege sind bei uns deutlich kürzer.' },
    { title: 'Entwicklungs- und Aufstiegschancen', description: 'Wir unterstützen Weiterbildungen und investieren in die Entwicklung unserer Mitarbeitenden.' },
    { title: 'Ungezwungene Arbeitsatmosphäre', description: 'Unser junges und aufgeschlossenes Team pflegt einen harmonischen und familiären Umgang.' },
  ],
  expectations: {
    title: 'Was erwarten\nwir von unseren\nMitarbeitern',
    description: 'Leidenschaft und Zuverlässigkeit sind zwei Grundpfeiler unserer Unternehmensphilosophie. Wer zu unserem Team passt beurteilen wir nicht anhand hochselektiver Ausschlusskriterien.',
  },
  jobOpenings: [
    {
      title: 'Freelancer Verwaltungsmanagement (m/w/d)',
      description: 'Du bist fasziniert davon, wie die Digitalisierung die Arbeitswelt verändert, kennst aber auch sehr gut die Rahmenbedingungen einer öffentlichen Verwaltung.',
      callToAction: 'Werde Freelancer in unserem Team!',
      pdfUrl: 'https://egovc.de/wp-content/uploads/2022/11/20221125_Stellenausschreibung_Freelancer_neuCI.pdf',
    },
    {
      title: 'Marketingmensch (m/w/d)',
      description: 'Du bist fasziniert davon, wie die Digitalisierung die Welt verändert? Du willst mit uns Veränderung im öffentlichen Sektor aktiv mitgestalten?',
      callToAction: 'Dann werde Teil unseres Teams!',
    },
    {
      title: 'Software-/Systementwickler (m/w/d)',
      description: 'Du entwickelst gerne Software und Systeme? Du hast Spaß daran, komplexe Probleme zu lösen?',
    },
  ],
  seo: {
    metaTitle: 'Karriere | EGovC',
    metaDescription: 'Karriere bei EGovC: Offene Stellen in der digitalen Transformation für Verwaltung, Gesundheit und Kirche.',
  },
};

// ============================================
// TEAM PAGE DATA
// ============================================
const teamPageData = {
  intro: {
    title: 'Willkommen bei EGovC – Lernen Sie unser Team kennen',
    paragraphs: [
      { text: 'Wir bei EGovC freuen uns auf die Zusammenarbeit mit Ihnen. Als Beratungshaus unterstützen wir öffentliche Verwaltungen und Organisationen dabei, den digitalen Wandel erfolgreich zu gestalten.' },
      { text: 'Neben unserer umfassenden Beratung haben wir mit OMNIA eine leistungsstarke Software entwickelt, die Verwaltungsprozesse vollständig digitalisiert.' },
      { text: 'Auf dieser Seite stellen wir Ihnen die Menschen vor, die hinter unseren Projekten, Ideen und Lösungen stehen.' },
    ],
  },
  members: [
    { name: 'Adrian Sommer', role: 'CEO | Gründer, Vordenker, Möglichmacher' },
    { name: 'Roland Lutz', role: 'CTO | Technikstratege, Architekt, Möglichmacher' },
    { name: 'Benjamin Bauer', role: 'Bereichsleiter Education & Event | Kommunikator, Netzwerker, Weiterdenker' },
  ],
  departments: [
    { title: 'Vertrieb & Kundenbetreuung', description: 'Eine langfristige Kundenbeziehung aufzubauen und zu pflegen hat bei uns oberste Priorität.', email: 'vertrieb@egovc.de' },
    { title: 'Beratung', description: 'Unser Team an qualifizierten Beratern nimmt sich Zeit für allumfassende und nachhaltige Lösungen.', email: 'beratung@egovc.de' },
    { title: 'Rechnungswesen & Rechtsabteilung', description: 'Bei Fragen zu Ihrer Rechnung oder Ihrem Vertrag wenden Sie sich gerne an uns.', email: 'rechnungundrecht@egovc.de' },
    { title: 'Unternehmens-kommunikation', description: 'Bei Anfragen bezüglich Interviews, Veröffentlichungen und Vorträgen.', email: 'uko@egovc.de' },
    { title: 'Personalabteilung', description: 'Sie sind interessiert daran ein Teil unseres Teams zu werden?', email: 'personal@egovc.de' },
  ],
  values: {
    intro: {
      title: 'Unsere Werte',
      subtitle: 'Sieben Werte sind der Wind in unseren Segeln,\ndie uns gemeinsam ans Ziel bringen.',
    },
    items: [
      { title: 'Ehrlichkeit', subtitle: 'Wir sprechen Klartext – auch wenn es unbequem ist.', description: 'Echte Zusammenarbeit beginnt mit Ehrlichkeit.' },
      { title: 'Mut', subtitle: 'Wir probieren aus, was andere nur planen.', description: 'Mut bedeutet für uns, neue Wege zu gehen.' },
      { title: 'Vertrauen', subtitle: 'Vertrauen ist unser Betriebssystem.', description: 'Wir verlassen uns aufeinander – in Projekten, im Team, mit Kund:innen.' },
      { title: 'Gleichheit', subtitle: 'Jede Stimme zählt.', description: 'Wir leben Gleichwertigkeit und respektieren unterschiedliche Perspektiven.' },
      { title: 'Spaß', subtitle: 'Wir feiern Fortschritt.', description: 'Arbeit darf und soll Spaß machen.' },
      { title: 'Bescheidenheit', subtitle: 'Wir stellen Wirkung vor Eitelkeit.', description: 'Wir sind stolz auf das, was wir können – und wissen, dass wir nicht alles wissen.' },
      { title: 'Teamgeist', subtitle: 'Alleine schnell, gemeinsam weit.', description: 'Wir sind ein Team, das sich gegenseitig stärkt.' },
    ],
  },
  seo: {
    metaTitle: 'Team | EGovC',
    metaDescription: 'Lernen Sie das EGovC-Team kennen. Experten für digitale Transformation.',
  },
};

// ============================================
// NETWORK PAGE DATA
// ============================================
const networkPageData = {
  hero: {
    title: 'Europäisches eGovernment Netzwerk',
    subtitle: 'Für den öffentlichen Sektor',
    description: 'Verwaltungsmodernisierung, Digitalisierung, strukturelle Veränderungen des Arbeitsmarkts – der öffentliche Sektor ist im Umbruch. Profitieren Sie von unserem umfangreichen Partnernetzwerk.',
  },
  about: {
    label: 'ÜBER UNS',
    title: 'Wer Wir Sind',
    description: 'Das EGovC Network bietet als Partnernetzwerk ein breites Spektrum an Leistungen auf höchstem Niveau.',
  },
  visionMission: {
    title: 'Vision & Mission',
    description: 'Die Partner des EGovC Network teilen die Vision nachhaltiger Vernetzung und langfristiger Transformation des öffentlichen Sektors.',
  },
  solutions: {
    label: 'LEISTUNGSSPEKTRUM',
    title: 'Individuelle Lösungen',
    description: 'Die Kompetenzvielfalt des Partnernetzwerks umspannt sämtliche Bereiche einer modernen Verwaltung.',
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
    metaDescription: 'Das EGovC Network verbindet Experten für erfolgreiche digitale Transformation.',
  },
};

// ============================================
// WHITEPAPER PAGE DATA
// ============================================
const whitepaperPageData = {
  hero: {
    title: 'Whitepaper',
    intro: 'In unseren Whitepapern erhalten Sie exklusive, praktische Tipps, Hintergründe und Best Practice-Beispiele aus dem Verwaltungsalltag. Sie haben konkrete Fragen oder Anmerkungen? Dann nutzen Sie gerne unser Kontaktformular.',
  },
  form: {
    title: 'Whitepaper & Success Stories anfordern',
    note: 'Füllen Sie einfach das beistehende Formular aus und Sie erhalten binnen kürzester Zeit das Whitepaper in PDF-Form.',
  },
  seo: {
    metaTitle: 'Whitepaper | EGovC',
    metaDescription: 'Kostenlose Whitepaper und Podcasts zu E-Government und Digitalisierung.',
  },
};

// ============================================
// WHITEPAPERS DATA (Sample - truncated for brevity)
// ============================================
const whitepapersData = [
  { title: 'Podcast: Low Code / No Code - Praktische Einsatzfelder', description: 'Low-Code/No-Code ist keine Modeerscheinung, sondern eine Antwort auf strukturelle Engpässe.', type: 'podcast' },
  { title: 'Umsetzung Ihrer Digitalstrategie mit Low-Code/No-Code als Umsetzungsturbo', description: 'Die öffentliche Verwaltung steht unter Druck: Sie muss digitale Services bereitstellen.', type: 'whitepaper' },
  { title: 'Podcast: Projektmanagement - so gelingt erfolgreiche Umsetzung', description: 'Im Podcast sprechen wir darüber, wie Projektmanagement in der Praxis funktioniert.', type: 'podcast' },
  { title: 'Projektmanagement in der Praxis erfolgreich umsetzen', description: 'Das Whitepaper zeigt, wie Projekte erfolgreich umgesetzt werden können.', type: 'whitepaper' },
  { title: 'OMNIA Leistung: Digitale Ideenplattform', description: 'Die digitale Ideenplattform ermöglicht Bürger:innen und Mitarbeitenden, Vorschläge einzureichen.', type: 'omnia', category: 'OMNIA' },
  { title: 'OMNIA Leistung: Digitale Zielvereinbarung', description: 'Die digitale Zielvereinbarung ermöglicht es, Ziele strukturiert zu definieren.', type: 'omnia', category: 'OMNIA' },
  { title: 'Umsetzung des Onlinezugangsgesetzes (OZG) in der Praxis', description: 'Verwaltungsdigitalisierung als echter Modernisierungsmotor.', type: 'whitepaper' },
  { title: 'Ganzheitlicher Leitfaden für die digitale Transformation in Behörden', description: 'Dieser Leitfaden zeigt, wie Behörden die digitale Transformation aktiv gestalten können.', type: 'whitepaper' },
];

// ============================================
// MAIN SEED FUNCTION
// ============================================
async function seedAllContent() {
  console.log('🌱 Starting comprehensive content seed...\n');

  try {
    const payload = await getPayload({ config });

    // 1. Seed Site Settings
    console.log('📝 Seeding Site Settings...');
    await payload.updateGlobal({
      slug: 'site-settings',
      data: siteSettingsData,
    });
    console.log('✅ Site Settings seeded\n');

    // 2. Seed Homepage (update existing)
    console.log('📝 Seeding Homepage...');
    await payload.updateGlobal({
      slug: 'homepage',
      data: homepageData,
    });
    console.log('✅ Homepage seeded\n');

    // 3. Seed Sector Pages
    console.log('📝 Seeding Sector Pages...');
    for (const sectorPage of sectorPagesData) {
      // Check if page exists
      const existing = await payload.find({
        collection: 'sector-pages',
        where: { slug: { equals: sectorPage.slug } },
      });

      if (existing.docs.length > 0) {
        await payload.update({
          collection: 'sector-pages',
          id: existing.docs[0].id,
          data: sectorPage,
        });
        console.log(`  ✅ Updated: ${sectorPage.title}`);
      } else {
        await payload.create({
          collection: 'sector-pages',
          data: sectorPage,
        });
        console.log(`  ✅ Created: ${sectorPage.title}`);
      }
    }
    console.log('✅ Sector Pages seeded\n');

    // 4. Seed Career Page
    console.log('📝 Seeding Career Page...');
    await payload.updateGlobal({
      slug: 'career-page',
      data: careerPageData,
    });
    console.log('✅ Career Page seeded\n');

    // 5. Seed Team Page
    console.log('📝 Seeding Team Page...');
    await payload.updateGlobal({
      slug: 'team-page',
      data: teamPageData,
    });
    console.log('✅ Team Page seeded\n');

    // 6. Seed Network Page
    console.log('📝 Seeding Network Page...');
    await payload.updateGlobal({
      slug: 'network-page',
      data: networkPageData,
    });
    console.log('✅ Network Page seeded\n');

    // 7. Seed Whitepaper Page
    console.log('📝 Seeding Whitepaper Page...');
    await payload.updateGlobal({
      slug: 'whitepaper-page',
      data: whitepaperPageData,
    });
    console.log('✅ Whitepaper Page seeded\n');

    // 8. Seed Whitepapers Collection
    console.log('📝 Seeding Whitepapers...');
    for (const wp of whitepapersData) {
      const existing = await payload.find({
        collection: 'whitepapers',
        where: { title: { equals: wp.title } },
      });

      if (existing.docs.length === 0) {
        await payload.create({
          collection: 'whitepapers',
          data: wp as any,
        });
        console.log(`  ✅ Created: ${wp.title.substring(0, 50)}...`);
      }
    }
    console.log('✅ Whitepapers seeded\n');

    console.log('🎉 All content seeded successfully!');
    console.log('\nSummary:');
    console.log('  - Site Settings: ✅');
    console.log('  - Homepage: ✅');
    console.log('  - Sector Pages: 3 pages');
    console.log('  - Career Page: ✅');
    console.log('  - Team Page: ✅');
    console.log('  - Network Page: ✅');
    console.log('  - Whitepaper Page: ✅');
    console.log(`  - Whitepapers: ${whitepapersData.length} items`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding content:', error);
    process.exit(1);
  }
}

seedAllContent();
