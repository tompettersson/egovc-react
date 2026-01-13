// Network page data structure - CMS-ready for Sanity integration

export interface TopicField {
  id: string;
  title: string;
  icon?: string;
}

export interface NetworkPageData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  about: {
    label: string;
    title: string;
    description: string;
  };
  visionMission: {
    title: string;
    description: string;
  };
  solutions: {
    label: string;
    title: string;
    description: string;
  };
  topics: {
    title: string;
    fields: TopicField[];
  };
}

export const networkData: NetworkPageData = {
  hero: {
    title: 'Europäisches eGovernment Netzwerk',
    subtitle: 'Für den öffentlichen Sektor',
    description:
      'Vewaltungsmodernisierung, Digitalisierung, strukturelle Veränderungen des Arbeitsmarkts – der öffentliche Sektor ist im Umbruch. Profitieren Sie von unserem umfangreichen Partnernetzwerk und realisieren Sie Ihre Transformationsprojekte.',
  },
  about: {
    label: 'ÜBER UNS',
    title: 'Wer Wir Sind',
    description:
      'Das EGovC Network bietet als Partnernetzwerk ein breites Spektrum an Leistungen auf höchstem Niveau. Wir setzen gemeinsam mit Ihnen entwickelte Strategien und Projekte im Bereich des E-Governments um. Unser Anspruch als Expertennetzwerk ist es, die Leistungsfähigkeit der von uns beratenen Verwaltungen und öffentlichen Unternehmen nachhaltig und langfristig zu verbessern.',
  },
  visionMission: {
    title: 'Vision & Mission',
    description:
      'Die Partner des EGovC Network teilen die Vision nachhaltiger Vernetzung und langfristiger Transformation des öffentlichen Sektors. Wir unterstützen daher unsere Kunden bei der Bewältigung strategischer, organisatorischer und operativer Herausforderungen durch sich ändernde Rahmenbedingungen und Ansprüche im End2End-Verhältnis. Durch die Verbindung von innovativem Denken, flächendeckender Expertise und robusten Methodenkompetenzen ist das EGovC Network in der Lage maßgeschneiderte Unterstützungsangebote von höchster Qualität anzubieten.',
  },
  solutions: {
    label: 'LEISTUNGSSPEKTRUM',
    title: 'Individuelle Lösungen',
    description:
      'Die Kompetenzvielfalt des Partnernetzwerks umspannt sämtliche Bereiche einer modernen Verwaltung. Die Pfade einer Verwaltung auf dem Weg der digitalen Transformation haben wir in 18 Themenfelder eingeteilt, in welchem spezialisierten Partner des Netzwerks ein vollumfängliches Dienstleistungsangebot anbieten können. Gemeinsam mit unseren Kunden erarbeiten wir individuelle Konzepte und Lösungen, die zur nachhaltigen und langfristigen Steigerung der Leistungsfähigkeit beitragen.',
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
      { id: 'foerdermittel', title: 'Fördermittel-management' },
      { id: 'e-payment', title: 'E-Payment' },
      { id: 'dokumentenmanagement', title: 'Dokumenten-management' },
      { id: 'datensicherheit', title: 'Datensicherheit' },
      { id: 'datenschutz', title: 'Datenschutz' },
    ],
  },
};


