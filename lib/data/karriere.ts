export interface Benefit {
  title: string;
  description: string;
}

export interface JobOpening {
  title: string;
  description: string;
  callToAction?: string;
  additionalText?: string;
  tasks?: string[];
  profile?: string[];
  benefits?: string[];
  pdfUrl?: string;
}

export const karriereData = {
  intro: {
    title: 'Was zeichnet uns aus',
    paragraphs: [
      'EGovC ist **der** Ansprechpartner für alle Fragen und Angelegenheiten rund um das Thema Digitalisierung im öffentlichen Sektor. Auf die unterschiedlichen Anliegen unserer Kunden gehen wir mit unseren Produkten und Dienstleistungen individuell und serviceorientiert ein. Im Zentrum unserer Arbeitsphilosophie stehen Teamgeist, Kundenfreundlichkeit, Zuverlässigkeit und Integrität.',
      'Unseren Kunden, aus allen Bereichen des öffentlichen Sektors, stehen wir bei jeglichen Themen im Kontext der Digitalisierung, beratend und unterstützend zur Seite. Aufgrund unserer hohen Serviceorientierung und der engen Kundenbindung, steht bei unserer Arbeit nicht das Prinzip „9 to 5" sondern der Kunde im Fokus. Ob Kunde, Beschäftigte oder Arbeitgeber – Jeder sieht gerne Fortschritte und erhält Anerkennung für erzielte Erfolge. Deshalb ist es uns bei EGovC ein Anliegen, jedem unserer Mitarbeiter diese Chance zu bieten. Durch freie Einteilung der Arbeitszeit in Form von Vertrauensarbeitszeit ermöglichen wir es unseren Mitarbeitenden die Zeit zu nutzen, in der sie persönlich am produktivsten sind.',
      'In regelmäßigen Abstimmungen legt das Management gemeinsam mit den Mitarbeitern die kurz- und mittelfristigen Ziele und Aufgaben fest, um die Erfolgsorientierung, Selbständigkeit und Individualität jedes Mitarbeitenden zu fördern. Die flache Hierarchie sorgt für eine ungezwungene, harmonische Arbeitsatmosphäre und bietet dennoch gute Aufstiegs- und Entwicklungschancen.',
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
        'Unsere Beschäftigten können Ihre Arbeitszeit anhand Ihrer abgesprochenen Ziele frei einteilen. Wir haben keine generellen Kernarbeitszeiten.',
    },
    {
      title: 'Flache Hierarchie',
      description:
        'Entscheidungswege sind bei uns deutlich kürzer. Stattdessen setzen wir verstärkt auf Eigeninitiative und -verantwortung.',
    },
    {
      title: 'Entwicklungs- und Aufstiegschancen',
      description:
        'Wir unterstützen Weiterbildungen und investieren in die langjährige Zusammenarbeit, sowie Entwicklung unserer Mitarbeitenden.',
    },
    {
      title: 'Ungezwungene Arbeitsatmosphäre',
      description:
        'Unser junges und aufgeschlossenes Team pflegt einen harmonischen und familiären Umgang miteinander. Offene Feedbackkultur, Mitarbeitergespräche & Firmenevents.',
    },
  ],
  expectations: {
    title: 'Was erwarten\nwir von unseren\nMitarbeitern',
    description:
      'Leidenschaft und Zuverlässigkeit sind zwei Grundpfeiler unserer Unternehmensphilosophie. Wer zu unserem Team passt beurteilen wir nicht anhand hochselektiver Ausschlusskriterien, während eines klassischen Bewerbungsverfahrens. Bisherige Arbeitserfahrung, Qualifikationen oder Fachrichtungen, stehen für uns, bei der Wahl unserer Mitarbeiter nicht an erster Stelle. Leidenschaft und Zuverlässigkeit werden durch den Charakter bestimmt. Wir suchen Mitarbeitende, deren Ziel es ist durch Motivation, Ehrgeiz und Teamgeist, gemeinsam mit uns Veränderung zu schaffen und Zukunft zu bewegen. Den vertrauensvollen und verantwortungsbewussten Umgang mit den, durch Vertrauensarbeitszeit und Heimarbeit, gewährten Freiheiten setzen wir dabei voraus.',
  },
  jobOpenings: [
    {
      title: 'Freelancer Verwaltungsmanagement (m/w/d)',
      description:
        'Du bist fasziniert davon, wie die Digitalisierung die Arbeitswelt verändert, kennst aber auch sehr gut die Rahmenbedingungen einer öffentlichen Verwaltung oder eines öffentlichen Betriebs. Du bist Organisationsprofi und Projekt- / Prozessmanagement gehören zu Deiner Passion. Du hast Erfahrung wie die richtige Strategie und Taktik zum Erfolg führt. Du kannst Menschen mitnehmen und begeistern. Du stehst vielleicht schon vor dem Übergang in den Lebensabschnitt des Unruhestandes, oder möchtest Deine Haupttätigkeit reduzieren. Du brennst dafür als Berater Deine Erfahrungen an die „jungen Wilden" weiter zu geben, oder an der Front selbst beratend tätig sein. Das Spielfeld ist groß, finde Deinen Platz. Hier wirst Du und Deine Kompetenz gebraucht, egal ob Du 40, 50 oder 60 Jahre alt bist.',
      callToAction: 'Werde Freelancer in unserem Team!',
      additionalText:
        'Im Zentrum unserer Arbeitsphilosophie stehen Teamgeist, Kundenfreundlichkeit, Zuverlässigkeit und Integrität. Deine Aufgaben identifizieren wir an dem, was Dir Spaß macht und was Du kannst. Lass uns das in einem Gespräch herausfinden und uns dabei kennen lernen. Haben wir Dein Interesse geweckt? Dann nichts wie los, wir warten und freuen uns auf Dich.',
      pdfUrl: 'https://egovc.de/wp-content/uploads/2022/11/20221125_Stellenausschreibung_Freelancer_neuCI.pdf',
    },
    {
      title: 'Marketingmensch (m/w/d)',
      description:
        'Du bist fasziniert davon, wie die Digitalisierung die Welt verändert? Du willst mit uns Veränderung im öffentlichen Sektor aktiv mitgestalten und bringst eine große Portion Ausdauer mit?',
      callToAction: 'Dann werde Teil unseres Teams!',
      tasks: [
        'Kreative Gestaltung von Marketingmaterialien unter Berücksichtigung unseres Corporate Designs',
        'Pflege unserer Website',
        'Fortschreibung und Umsetzung der Social Media Strategie',
        'Betreuung der Social-Media-Kanäle',
        'Mitwirkung an der Entwicklung der Unternehmenskommunikation',
        'Selbstständiges Projektmanagement für Marketingkampagnen, Messen, Events und Publikationen',
        'Erstellung und Abwicklung regelmäßiger Analysen und Reports mit spannenden Tools',
      ],
      profile: [
        'Entweder bist du bereits ein erfahrener Marketingexperte und auf der Suche nach einem Nebenjob.',
        'Alternativ bist du ein eingeschriebener Bachelor-/Masterstudent (Studiengang mit Marketingbezug)',
        'oder aber du bist ein Quereinsteiger und hast große Lust, dich in ein neues Thema einzuarbeiten und überzeugst uns, dass du genau die richtige Person für uns bist.',
        'Du verfügst über Erfahrungen im Umgang mit entsprechenden Tools aus der Adobe Creative Cloud und',
        'hast eine hohe Affinität für digitale Trends.',
        'Du besitzt gute Kenntnisse im Bereich der Sozialen Medien, CMS und der MS Office Produkte.',
        'Du hast Spaß daran, dich schnell und selbstständig in neue, komplexe Themen einzuarbeiten.',
      ],
      benefits: [
        'Eine interessante und abwechslungsreiche Tätigkeit in einem jungen, dynamischen Unternehmen',
        'Flexible Arbeitszeiten und die Möglichkeit zum Homeoffice',
        'Ein kollegiales Arbeitsumfeld mit flachen Hierarchien',
        'Die Möglichkeit, eigene Ideen einzubringen und umzusetzen',
        'Regelmäßige Weiterbildungsmöglichkeiten',
      ],
    },
    {
      title: 'Software-/Systementwickler (m/w/d)',
      description:
        'Du entwickelst gerne Software und Systeme? Du hast Spaß daran, komplexe Probleme zu lösen und innovative Lösungen zu entwickeln? Dann werde Teil unseres Teams!',
    },
  ],
};

