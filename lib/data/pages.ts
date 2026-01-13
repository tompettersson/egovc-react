export interface ServiceItem {
  title: string;
  description: string;
  actionType: 'brochure' | 'contact' | 'link';
  actionLabel: string;
  actionUrl?: string;
}

export interface Section {
  title: string;
  items: ServiceItem[];
}

export interface PageData {
  slug: string;
  hero: {
    title: string;
    subtitle: string;
    backgroundImage?: string;
  };
  intro: {
    title: string;
    subtitle?: string;
    description: string;
  };
  sections: Section[];
  network?: {
    title: string;
    description: string;
    linkUrl: string;
    linkLabel: string;
  };
}

export const pagesData: Record<string, PageData> = {
  verwaltung: {
    slug: 'verwaltung',
    hero: {
      title: 'Daseinsvorsorge.\nDigital.\nGestalten.',
      subtitle: 'Ganzheitliche Digitale Transformation der öffentlichen Verwaltung – gemeinsam gestalten.',
      backgroundImage: '/images/verwaltung-hero.jpg',
    },
    intro: {
      title: 'Verwaltung Digital',
      subtitle: 'Inhalte, Herausforderungen, Lösungswege',
      description:
        'Die dauerhaft neuen Anforderungen an die öffentliche Verwaltung durch Gesetzeslagen und die Erwartungshaltungen der Kunden, stellen alle vor große Herausforderungen. Um die Puzzleteile zu einem Bild werden zu lassen, ist es wichtig, mit Strategie, Organisationstalent und einem effektiven Changemanagement anzusetzen.\n\nÜber unsere kooperative Beratung, unsere Produktpalette an IT-Dienstleistungen und dem europäischen eGovernment-Netzwerk als umfassende Dienstleister-Allianz, sind wir für alle denkbaren Anforderungen im digitalen Kontext der richtige Ansprechpartner.',
    },
    sections: [
      {
        title: 'Beratung',
        items: [
          {
            title: 'Kickstart Digital',
            description:
              'In wenigen Workshops zu nachhaltigen Ergebnissen: Gemeinsames Kennenlernen der Ambitionen, der Ausgangslage und des aktuellen digitalen Standes. Abschließend folgen die kooperative Erarbeitung und iterative Umsetzung eines ersten Wegplanes zur digitalen Transformation.',
            actionType: 'brochure',
            actionLabel: 'Broschüre herunterladen',
            actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Kennenlernprodukt.pdf',
          },
          {
            title: 'Organisations-beratung',
            description:
              'Transformation beginnt bei der Organisation. Gemeinsam analysieren wir Ihren organisatorischen Aufbau im Hinblick auf mögliche Optimierungsbedarfe und Transformationsmöglichkeiten im digitalen Kontext und setzen diese um.',
            actionType: 'contact',
            actionLabel: 'Jetzt kontaktieren',
          },
          {
            title: 'Digitale Transformation',
            description:
              'Die Digitalisierung als Katalysator der organisatorischen Transformation: Mit Hilfe langjähriger Erfahrung bieten wir von der Bestandsanalyse und Zielsetzung, über die Einführung von Basiskomponenten, der Planung und Implementierung von neuen Querschnittsaufgaben bis hin zur finalen Umsetzung Ihrer Digitalen Transformation.',
            actionType: 'brochure',
            actionLabel: 'Broschüre herunterladen',
            actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Digitale_Transformation.pdf',
          },
          {
            title: 'Projekt- und Themencoaching',
            description:
              'Der öffentliche Sektor wird regelmäßig mit neuen Themen, Rechtslagen, gesellschaftlichen Ansprüchen und Veränderungen konfrontiert. Um auch bei Themen wie dem demografischen Wandel, der Digitalisierung und Co nicht den roten Faden zu verlieren, bieten wir hier unser Coaching zu Ihren Transformations-Themen an.',
            actionType: 'brochure',
            actionLabel: 'Broschüre herunterladen',
            actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Projekt_und_Themencoaching.pdf',
          },
          {
            title: 'PMO – Projektmanagement Office',
            description:
              'Veränderung benötigt komplexe Projektprogramme. Komplexe Projektprogramme benötigen Steuerung. Wir bieten Full-Service von Aufbau und Implementierung eines PMO bis hin zur Leitung und Umsetzung des PMO. Im modularen Produkt können wir genau auf Ihre Anforderungen eingehen.',
            actionType: 'brochure',
            actionLabel: 'Broschüre Herunterladen',
            actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_PMO.pdf',
          },
        ],
      },
      {
        title: 'Software',
        items: [
          {
            title: 'OMNIA',
            description:
              'Um ohne IT-Erfahrung und ohne externen Betreuungsaufwand Ihre Prozesse in der digitalen Transformation End-to-End digitalisieren zu können, haben wir, von der EGovC GmbH, eine No-Code-Plattform entwickelt. Starten Sie endlich in die praktische und operative digitale Transformation!',
            actionType: 'link',
            actionLabel: 'Zur Omnia Website',
            actionUrl: 'https://omnia.egovc.de/',
          },
          {
            title: 'Website-Service',
            description:
              'Eine schnell verfügbare Internetpräsenz, die nutzerfreundlich, modern und dabei modular aufgebaut ist, um auf Ihre speziellen Bedürfnisse eingehen zu können. Wir begleiten Sie von Konzeption, Organisationskonzept, organisatorische und technische Umsetzung bis hin zu Service und Betrieb.',
            actionType: 'contact',
            actionLabel: 'Jetzt kontaktieren',
          },
          {
            title: 'Personaleinsatzplanung / Schichtdienst',
            description:
              'Das verfügbare Personal optimal einzusetzen und Kompetenzen zu entwickeln ist eine der größten Herausforderungen einer modernen Organisation. Wir helfen Ihnen, zukunftsfähig zu werden und den aktuellen Workload bestmöglich zu bewältigen.',
            actionType: 'contact',
            actionLabel: 'Jetzt kontaktieren',
          },
        ],
      },
    ],
    network: {
      title: 'Network',
      description:
        'Das european eGovernment-Network ist eine Initiative der EGovC GmbH. Zusammen mit führenden Anbietern aus der öffentlichen Wirtschaft bieten wir ein Dienstleisternetzwerk an, welches alle Belange der digitalen Transformation der Kirche abdeckt. Vertiefende Informationen zu Inhalten und Funktionsweisen des Netzwerks finden Sie hier.',
      linkUrl: '/network/',
      linkLabel: 'Zur Network Seite',
    },
  },
  gesundheitswesen: {
    slug: 'gesundheitswesen',
    hero: {
      title: 'Effizient.\nDigital.\nGesund.',
      subtitle: 'Die analogen Aspekte des Gesundheitswesens digital nutzbar machen. Einfach – sicher – verfügbar.',
      backgroundImage: '/images/gesundheitswesen-hero.jpg',
    },
    intro: {
      title: 'Gesundheitswesen Digital',
      subtitle: 'Inhalte, Herausforderungen, Lösungswege',
      description:
        'Die Transformation eines Krankenhauses, einer Pflegeeinrichtung oder eines Gesundheitsdienstleisters beginnt bei der Untersuchung der Organisation. Die Digitalisierung bietet hierbei in vielfacher Weise Möglichkeiten zur Verschlankung von Prozessen sowohl in der Darstellung von Daten als auch in der internen Organisation.\n\nUm diese Potenziale auszuschöpfen und für Ihr Haus passend und nachhaltig zu integrieren, stehen wir als EGovC, Ihnen mit unserer Produktpalette gerne zur Verfügung.',
    },
    sections: [
      {
        title: 'Beratung',
        items: [
          {
            title: 'Kickstart Digital',
            description:
              'In wenigen Workshops zu nachhaltigen Ergebnissen: Gemeinsames Kennenlernen der Ambitionen, der Ausgangslage und des aktuellen digitalen Standes. Abschließend folgen die kooperative Erarbeitung und iterative Umsetzung eines ersten Wegplanes zur digitalen Transformation.',
            actionType: 'brochure',
            actionLabel: 'Broschüre herunterladen',
            actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Kennenlernprodukt.pdf',
          },
          {
            title: 'Digitale Transformation',
            description:
              'Die Digitalisierung als Katalysator der organisatorischen Transformation: Mit Hilfe langjähriger Erfahrung bieten wir von der Bestandsanalyse und Zielsetzung, über die Einführung von Basiskomponenten, der Planung und Implementierung von neuen Querschnittsaufgaben bis hin zur finalen Umsetzung Ihrer Digitalen Transformation.',
            actionType: 'brochure',
            actionLabel: 'Broschüre herunterladen',
            actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Digitale_Transformation.pdf',
          },
          {
            title: 'Projekt- und Themencoaching',
            description:
              'Der öffentliche Sektor wird regelmäßig mit neuen Themen, Rechtslagen, gesellschaftlichen Ansprüchen und Veränderungen konfrontiert. Um auch bei Themen wie dem demografischen Wandel, der Digitalisierung und Co nicht den roten Faden zu verlieren, bieten wir hier unser Coaching zu Ihren Transformations-Themen an.',
            actionType: 'brochure',
            actionLabel: 'Broschüre herunterladen',
            actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Projekt_und_Themencoaching.pdf',
          },
          {
            title: 'PMO – Projektmanagement Office',
            description:
              'Veränderung benötigt komplexe Projektprogramme. Komplexe Projektprogramme benötigen Steuerung. Wir bieten Full-Service von Aufbau und Implementierung eines PMO bis hin zur Leitung und Umsetzung des PMO. Im modularen Produkt können wir genau auf Ihre Anforderungen eingehen.',
            actionType: 'brochure',
            actionLabel: 'Broschüre Herunterladen',
            actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_PMO.pdf',
          },
          {
            title: 'IT-Servicemanagement nach ITIL',
            description:
              'ITIL gilt seit geraumer Zeit als quasi-Standard für das IT-Servicemanagement. Um Ihre Prozesse bestmöglich zu bündeln, serviceorientiert zu organisieren und zu standardisieren, stehen wir Ihnen und Ihrer Organisation gerne als Ansprechpartner zur Verfügung.',
            actionType: 'contact',
            actionLabel: 'Jetzt kontaktieren',
          },
        ],
      },
      {
        title: 'Software',
        items: [
          {
            title: 'OMNIA',
            description:
              'OMNIA ist das Patientenportal welches sowohl ein digitales Aufnahme-, Behandlungs-, Entlass- sowie Überleitungsmanagementsystem vereint. Es handelt sich dabei um eine No-Code-Plattform, welche sich ohne IT-Erfahrung und großen externen Betreuungsaufwand an Ihre Prozesse anpassen lässt. So individuell wie es Ihre Bedürfnisse erfordern und das auch noch nach KHZG förderfähig. (Fördertatbestand 2)',
            actionType: 'link',
            actionLabel: 'Zur Omnia Website',
            actionUrl: 'https://omnia.egovc.de/',
          },
          {
            title: 'Website-Service',
            description:
              'Eine schnell verfügbare Internetpräsenz, die nutzerfreundlich, modern und dabei modular aufgebaut ist, um auf Ihre speziellen Bedürfnisse eingehen zu können. Wir begleiten Sie von Konzeption, Organisationskonzept, organisatorische und technische Umsetzung bis hin zu Service und Betrieb.',
            actionType: 'contact',
            actionLabel: 'Jetzt kontaktieren',
          },
          {
            title: 'Pflegeplan',
            description:
              'Digitale Dienstplanerstellung maßgeschneidert auf die Bedürfnisse einer Gesundheits- und Pflegeeinrichtung. Intuitive und teilautomatisierte Dienstplanerstellung mit Einbindung von Mitarbeiterwünschen und vielen weiteren Features.',
            actionType: 'contact',
            actionLabel: 'Jetzt kontaktieren',
          },
          {
            title: 'Kodiermonitoring',
            description:
              'Das fallbegleitende Abrechnungsmonitoring agiert wie ein Qualitätsmanagement in ihrem Medizincontrolling und nimmt in Echtzeit verschiedenste Verplausibilisierungsverfahren in der DRG-Kodierung vor. So lassen sich weiße Flecken und Abrechnungslücken schnell und sicher identifizieren – nicht nur rückwirkend, sondern bereits vor dem Rechnungsversand.',
            actionType: 'contact',
            actionLabel: 'Jetzt kontaktieren',
          },
          {
            title: 'Digitales Frühwarnsystem',
            description:
              'Als klinisches Entscheidungs- und Unterstützungssystem erkennt das Medizinprodukt herannahende Komplikationen bis zu 72h im Voraus. Krankheitsbilder wie z.B. das Delir oder akute Nierenversagen, lassen sich heute bereist im Voraus treffsicher detektieren. Das System ermöglicht neben einer Kostenreduktion zeitgleich auch eine Erlössteigerung – überzeugen Sie sich mittel eines unverbindlichen Potentialchecks.',
            actionType: 'contact',
            actionLabel: 'Jetzt kontaktieren',
          },
        ],
      },
    ],
    network: {
      title: 'Network',
      description:
        'Das european eGovernment-Network ist eine Initiative der EGovC GmbH, zusammen mit führenden Anbietern aus dem Umfeld der öffentlichen Wirtschaft ein Dienstleisternetzwerk darzustellen, welches alle Belange die Themenbreite der Anwendungslandschaft im Gesundheitswesen abdecken kann. Vertiefende Informationen zu Inhalten und Funktionsweisen des Netzwerks finden Sie hier.',
      linkUrl: '/network/',
      linkLabel: 'Zur Network Seite',
    },
  },
  kirche: {
    slug: 'kirche',
    hero: {
      title: 'Zukunft.\nNachhaltig.\nDigital.',
      subtitle: 'Sinkende Mitgliederzahlen – gleichbleibende Kosten. Digitalisierung als größtmögliche Effizienzsteigerung.',
      backgroundImage: '/images/kirche-hero.jpg',
    },
    intro: {
      title: 'Kirche Digital',
      subtitle: 'Inhalte, Herausforderungen, Lösungswege',
      description:
        'Transformation der Kirche und kirchlicher Organisationen ist wichtiger als je zuvor. Durch die digitale Transformation lassen sich Prozesse vereinfachen und Vorgänge beschleunigen.\n\nWir helfen Ihnen dabei, den gleichbleibenden Verwaltungsaufwand auch in Zeiten schwindender Mitgliederzahlen effizienter und dadurch effektiver zu gestalten. Gleichermaßen wird hierdurch ein Mehrwert für Ihre Mitglieder geschaffen.',
    },
    sections: [
      {
        title: 'Beratung',
        items: [
          {
            title: 'Kickstart Digital',
            description:
              'In wenigen Workshops zu nachhaltigen Ergebnissen: Gemeinsames Kennenlernen der Ambitionen, der Ausgangslage und des aktuellen digitalen Standes. Abschließend folgen die kooperative Erarbeitung und iterative Umsetzung eines ersten Wegplanes zur digitalen Transformation.',
            actionType: 'brochure',
            actionLabel: 'Broschüre herunterladen',
            actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Kennenlernprodukt.pdf',
          },
          {
            title: 'Organisations-beratung',
            description:
              'Transformation beginnt bei der Organisation. Gemeinsam analysieren wir Ihren organisatorischen Aufbau im Hinblick auf mögliche Optimierungsbedarfe und Transformationsmöglichkeiten im digitalen Kontext und setzen diese um.',
            actionType: 'contact',
            actionLabel: 'Jetzt kontaktieren',
          },
          {
            title: 'Digitale Transformation',
            description:
              'Die Digitalisierung als Katalysator der organisatorischen Transformation: Mit Hilfe langjähriger Erfahrung bieten wir von der Bestandsanalyse und Zielsetzung, über die Einführung von Basiskomponenten, der Planung und Implementierung von neuen Querschnittsaufgaben bis hin zur finalen Umsetzung Ihrer Digitalen Transformation.',
            actionType: 'brochure',
            actionLabel: 'Broschüre herunterladen',
            actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Digitale_Transformation.pdf',
          },
          {
            title: 'Projekt- und Themencoaching',
            description:
              'Der öffentliche Sektor wird regelmäßig mit neuen Themen, Rechtslagen, gesellschaftlichen Ansprüchen und Veränderungen konfrontiert. Um auch bei Themen wie dem demografischen Wandel, der Digitalisierung und Co nicht den roten Faden zu verlieren, bieten wir hier unser Coaching zu Ihren Transformations-Themen an.',
            actionType: 'brochure',
            actionLabel: 'Broschüre herunterladen',
            actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_Projekt_und_Themencoaching.pdf',
          },
          {
            title: 'PMO – Projektmanagement Office',
            description:
              'Veränderung benötigt komplexe Projektprogramme. Komplexe Projektprogramme benötigen Steuerung. Wir bieten Full-Service von Aufbau und Implementierung eines PMO bis hin zur Leitung und Umsetzung des PMO. Im modularen Produkt können wir genau auf Ihre Anforderungen eingehen.',
            actionType: 'brochure',
            actionLabel: 'Broschüre Herunterladen',
            actionUrl: 'https://egovc.de/wp-content/uploads/2023/03/DigitaleProduktmappe_PMO.pdf',
          },
        ],
      },
      {
        title: 'Software',
        items: [
          {
            title: 'OMNIA',
            description:
              'Um ohne IT-Erfahrung und ohne externen Betreuungsaufwand Ihre Prozesse in der digitalen Transformation End-to-End digitalisieren zu können, haben wir, von der EGovC GmbH, eine No-Code-Plattform entwickelt. Starten Sie endlich in die praktische und operative digitale Transformation!',
            actionType: 'link',
            actionLabel: 'Zur Omnia Website',
            actionUrl: 'https://omnia.egovc.de/',
          },
          {
            title: 'Website-Service',
            description:
              'Eine schnell verfügbare Internetpräsenz, die nutzerfreundlich, modern und dabei modular aufgebaut ist, um auf Ihre speziellen Bedürfnisse eingehen zu können. Wir begleiten Sie von Konzeption, Organisationskonzept, organisatorische und technische Umsetzung bis hin zu Service und Betrieb.',
            actionType: 'contact',
            actionLabel: 'Jetzt kontaktieren',
          },
          {
            title: 'Personaleinsatzplanung / Schichtdienst',
            description:
              'Das verfügbare Personal optimal einzusetzen und Kompetenzen zu entwickeln ist eine der größten Herausforderungen einer modernen Organisation. Wir helfen Ihnen, zukunftsfähig zu werden und den aktuellen Workload bestmöglich zu bewältigen.',
            actionType: 'contact',
            actionLabel: 'Jetzt kontaktieren',
          },
        ],
      },
    ],
    network: {
      title: 'Network',
      description:
        'Das european eGovernment-Network ist eine Initiative der EGovC GmbH. Zusammen mit führenden Anbietern aus der öffentlichen Wirtschaft bieten wir ein Dienstleisternetzwerk an, welches alle Belange der digitalen Transformation der Kirche abdeckt. Vertiefende Informationen zu Inhalten und Funktionsweisen des Netzwerks finden Sie hier.',
      linkUrl: '/network/',
      linkLabel: 'Zur Network Seite',
    },
  },
};

