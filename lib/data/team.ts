export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Department {
  title: string;
  description: string;
  email: string;
  icon?: string;
}

export interface Value {
  title: string;
  subtitle: string;
  description: string;
}

export const teamData = {
  intro: {
    title: 'Willkommen bei EGovC – Lernen Sie unser Team kennen',
    paragraphs: [
      'Wir bei EGovC freuen uns auf die Zusammenarbeit mit Ihnen. Als Beratungshaus unterstützen wir öffentliche Verwaltungen und Organisationen dabei, den digitalen Wandel erfolgreich zu gestalten – strategisch, praxisnah und nachhaltig.',
      'Neben unserer umfassenden Beratung haben wir mit OMNIA eine leistungsstarke Software entwickelt, die Verwaltungsprozesse vollständig digitalisiert und medienbruchfrei macht.',
      'Auf dieser Seite stellen wir Ihnen die Menschen vor, die hinter unseren Projekten, Ideen und Lösungen stehen – engagierte Expert:innen, die gemeinsam mit Ihnen die Zukunft der Verwaltung gestalten wollen.',
    ],
  },
  members: [
    {
      name: 'Adrian Sommer',
      role: 'CEO | Gründer, Vordenker, Möglichmacher',
      image: '/images/adrian-sommer.jpg',
    },
    {
      name: 'Roland Lutz',
      role: 'CTO | Technikstratege, Architekt, Möglichmacher',
      image: '/images/roland-lutz-team.jpg',
    },
    {
      name: 'Benjamin Bauer',
      role: 'Bereichsleiter Education & Event | Kommunikator, Netzwerker, Weiterdenker',
      image: '/images/benjamin-bauer.jpg',
    },
  ],
  departments: [
    {
      title: 'Vertrieb & Kundenbetreuung',
      description:
        'Eine langfristige Kundenbeziehung aufzubauen und zu pflegen hat bei uns oberste Priorität. Das perfekte Angebot für unsere Kunden zu finden ist unser Ziel. Aus diesem Grund ist unser Geschäftsführer persönlich Head of Sales & CR.',
      email: 'vertrieb@egovc.de',
    },
    {
      title: 'Beratung',
      description:
        'Unser Team an qualifizierten Beratern nimmt sich Zeit, allumfassende und nachhaltige Lösungen, unter Berücksichtigung Ihrer individuellen Bedürfnisse, für Sie und mit Ihnen zu entwickeln. Wir freuen uns auf jede Herausforderung und mit Ihnen neue Wege zu gehen.',
      email: 'beratung@egovc.de',
    },
    {
      title: 'Rechnungswesen & Rechtsabteilung',
      description:
        'Bei Fragen zu Ihrer Rechnung oder Ihrem Vertrag, wenden Sie sich gerne an unser Rechnungswesen oder unsere Rechtsabteilung.',
      email: 'rechnungundrecht@egovc.de',
    },
    {
      title: 'Unternehmens- kommunikation',
      description:
        'Bei Anfragen bezüglich Interviews, Veröffentlichungen und Vorträgen auf Kongressen oder Fachmessen, wenden Sie sich gerne an unsere Abteilung für Unternehmenskommunikation.',
      email: 'uko@egovc.de',
    },
    {
      title: 'Personalabteilung',
      description:
        'Sie sind interessiert daran ein Teil unseres Teams zu werden? Schauen Sie gerne ob auf unserer Karriereseite eine passende Stelle für Sie ausgeschrieben ist oder bewerben Sie sich initiativ.',
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
        description:
          'Echte Zusammenarbeit beginnt mit Ehrlichkeit. Wir teilen unsere Meinungen offen, geben konstruktives Feedback und stehen zu unseren Entscheidungen. So entstehen Vertrauen und gemeinsame Verantwortung.',
      },
      {
        title: 'Mut',
        subtitle: 'Wir probieren aus, was andere nur planen.',
        description:
          'Mut bedeutet für uns, neue Wege zu gehen, auch wenn sie ungewiss sind. Wir setzen auf Innovation, übernehmen Verantwortung und stehen zu unseren Ideen – auch dann, wenn sie nicht dem Status quo entsprechen.',
      },
      {
        title: 'Vertrauen',
        subtitle: 'Vertrauen ist unser Betriebssystem.',
        description:
          'Wir verlassen uns aufeinander – in Projekten, im Team, mit Kund:innen. Vertrauen heißt für uns, Verantwortung zu geben und zu nehmen. So entstehen selbstorganisierte Prozesse, stabile Beziehungen und echtes Commitment.',
      },
      {
        title: 'Gleichheit',
        subtitle: 'Jede Stimme zählt – unabhängig von Titel oder Hintergrund.',
        description:
          'Wir leben Gleichwertigkeit und respektieren unterschiedliche Perspektiven. Vielfalt macht uns besser – in der Lösungsfindung, im Miteinander, in der Wirkung. Entscheidungen treffen wir gemeinsam, nicht hierarchisch.',
      },
      {
        title: 'Spaß',
        subtitle: 'Wir feiern Fortschritt – und manchmal auch einfach nur uns.',
        description:
          'Arbeit darf (und soll!) Spaß machen. Wir lachen miteinander, feiern kleine wie große Erfolge und schaffen Raum für Menschlichkeit. Denn Freude motiviert – und motivierte Teams bewegen mehr.',
      },
      {
        title: 'Bescheidenheit',
        subtitle: 'Wir stellen Wirkung vor Eitelkeit.',
        description:
          'Wir sind stolz auf das, was wir können – und wissen, dass wir nicht alles wissen. Wir hören zu, lernen täglich dazu und lassen Taten statt Worte sprechen. Unser Ziel ist nicht der Applaus, sondern echte Veränderung.',
      },
      {
        title: 'Teamgeist',
        subtitle: 'Alleine schnell, gemeinsam weit.',
        description:
          "Wir sind ein Team, das sich gegenseitig stärkt. Wir teilen Wissen, springen ein, wenn's brennt, und feiern gemeinsam Erfolge. Denn echte Wirkung entsteht durch Zusammenarbeit – nicht durch Einzelkämpfer.",
      },
    ],
  },
};

