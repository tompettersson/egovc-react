// Whitepaper data structure - CMS-ready for Sanity integration

export interface Whitepaper {
  id: string;
  title: string;
  description: string;
  type: "whitepaper" | "podcast" | "omnia";
  pdfUrl?: string;
  podcastUrl?: string;
  category?: string;
  featured?: boolean;
}

export interface WhitepaperPageData {
  hero: {
    title: string;
    intro: string;
    contactLink: string;
  };
  whitepapers: Whitepaper[];
  form: {
    title: string;
    note: string;
  };
}

export const whitepaperData: WhitepaperPageData = {
  hero: {
    title: "Whitepaper",
    intro:
      "In unseren Whitepapern erhalten Sie exklusive, praktische Tipps, Hintergründe und Best Practice-Beispiele aus dem Verwaltungsalltag, welche Ihnen bei Ihrem Vorhaben wichtige Anhaltspunkte bieten. Sie haben konkrete Fragen oder Anmerkungen? Dann nutzen Sie gerne unser Kontaktformular.",
    contactLink: "#form-whitepaper",
  },
  whitepapers: [
    {
      id: "podcast-low-code-no-code",
      title:
        "Podcast: Low Code / No Code - Praktische Einsatzfelder, Sicherheitsanforderungen & Governance",
      description:
        "Low-Code/No-Code ist keine Modeerscheinung, sondern eine Antwort auf strukturelle Engpässe. Statt jede Anwendung von Grund auf zu programmieren, nutzen diese Plattformen vorgefertigte Bausteine – Formulare, Datenmodelle, Prozessschritte, Schnittstellen, Benutzeroberflächen. Fachanwenderinnen und -anwender gestalten daraus Lösungen, die direkt in den Betrieb übergehen können.",
      type: "podcast",
    },
    {
      id: "low-code-umsetzungsturbo",
      title:
        "Umsetzung Ihrer Digitalstrategie mit Low-Code/No-Code als Umsetzungsturbo",
      description:
        "Die öffentliche Verwaltung steht unter Druck: Sie muss digitale Services bereitstellen – und das mit knappen Ressourcen, komplexen Strukturen und hohen Erwartungen. Klassische IT-Projekte mit langen Laufzeiten stoßen hier an Grenzen. Gefragt sind Lösungen, die schnell, flexibel und nachhaltig wirken. Genau hier setzen Low-Code- und No-Code-Plattformen an. Low-Code/No-Code (LC/NC) ermöglicht die Entwicklung digitaler Anwendungen mit wenig oder ganz ohne Programmierung.",
      type: "whitepaper",
    },
    {
      id: "podcast-projektmanagement",
      title: "Podcast: Projektmanagement - so gelingt erfolgreiche Umsetzung",
      description:
        "Im Podcast sprechen wir darüber, wie Projektmanagement in der Praxis wirklich funktioniert – jenseits von Methodendogmatik und Checklisten. Dabei geht es vor allem um die Frage, wie Führung, Klarheit und Kommunikation Projekte zum Erfolg führen – gerade in der öffentlichen Verwaltung.",
      type: "podcast",
    },
    {
      id: "projektmanagement-praxis",
      title: "Projektmanagement in der Praxis erfolgreich umsetzen",
      description:
        "Das Whitepaper zeigt, wie Projekte in Verwaltung und Organisationen erfolgreich umgesetzt werden können – mit klarem Auftrag, realistischen Entscheidungen und echter Einbindung aller Beteiligten statt nur mit Methodenwissen auf dem Papier. Es liefert praxisnahe Leitplanken, wie Struktur, Kommunikation und Lernfähigkeit zu messbarem Fortschritt und echter Wirkung führen.",
      type: "whitepaper",
    },
    {
      id: "podcast-digitale-transformation",
      title:
        "Podcast: Ganzheitlicher Leitfaden für die digitale Transformation in Behörden",
      description:
        "Die digitale Transformation ist für Behörden längst kein Zukunftsthema mehr, sondern gelebte Realität – mit Chancen, aber auch vielen Herausforderungen. Wie gelingt es, Verwaltungsprozesse bürgerfreundlich, effizient und rechtssicher zu gestalten? Welche strategischen Bausteine dürfen im Transformationsprozess nicht fehlen? In dieser Podcast-Folge geben wir praxisnahe Einblicke in erfolgreiche Ansätze, zeigen Stolperfallen auf und diskutieren, wie Verwaltungen den Wandel ganzheitlich meistern können.",
      type: "podcast",
    },
    {
      id: "podcast-change-management",
      title:
        "Podcast: Change-Management als Schlüssel zur erfolgreichen Verwaltungs-digitalisierung",
      description:
        "Technische Lösungen allein reichen nicht – nur wenn Mitarbeitende den Wandel verstehen, mittragen und aktiv gestalten, entfaltet Digitalisierung ihr volles Potenzial. Behörden stehen dabei vor besonderen Herausforderungen: gewachsene Strukturen, Regelgebundenheit und Unsicherheit im Umgang mit Veränderungen.",
      type: "podcast",
    },
    {
      id: "change-management",
      title:
        "Change-Management als Schlüssel zur erfolgreichen Verwaltungs-digitalisierung",
      description:
        "Das Whitepaper gibt konkrete Impulse, wie Change Management in der Praxis funktioniert – mit frühzeitiger Kommunikation, gezielter Schulung, aktiver Einbindung der Beschäftigten und einer klaren Führungsrolle. Es beleuchtet, wie neue digitale Kompetenzen gefördert, Ängste abgebaut und Veränderungsbereitschaft gestärkt werden können.",
      type: "whitepaper",
    },
    {
      id: "omnia-ideenplattform",
      title: "OMNIA Leistung: Digitale Ideenplattform",
      description:
        "Die digitale Ideenplattform ermöglicht Bürger:innen und Mitarbeitenden, Vorschläge einfach online einzureichen, zu diskutieren und zu bewerten. Ob für Bürgerbeteiligung oder internes Ideenmanagement – alle Ideen werden transparent im Status angezeigt und automatisch den zuständigen Stellen zugeordnet.",
      type: "omnia",
      category: "OMNIA",
    },
    {
      id: "omnia-zielvereinbarung",
      title: "OMNIA Leistung: Digitale Zielvereinbarung",
      description:
        "Die digitale Zielvereinbarung ermöglicht es Führungskräften und Mitarbeitenden, Ziele strukturiert zu definieren, Fortschritte nachzuverfolgen und Ergebnisse revisionssicher zu dokumentieren – vollständig online und ohne Medienbrüche. Der Prozess schafft klare Erwartungen, fördert die Feedbackkultur und unterstützt eine kontinuierliche Mitarbeiterentwicklung.",
      type: "omnia",
      category: "OMNIA",
    },
    {
      id: "omnia-buergerbeteiligung",
      title: "OMNIA Leistung: Digitale Bürgerbeteiligung",
      description:
        "Die digitale Bürgerbeteiligung ermöglicht es Bürger:innen, sich aktiv an kommunalen Entscheidungsprozessen zu beteiligen. Vorschläge können einfach online eingereicht, diskutiert und bewertet werden. Alle Ideen werden transparent im Status angezeigt und automatisch den zuständigen Stellen zugeordnet.",
      type: "omnia",
      category: "OMNIA",
    },
    {
      id: "omnia-mitarbeitendengespraeche",
      title: "OMNIA Leistung: Digitale Mitarbeitendengespräche",
      description:
        "Die digitalen Mitarbeitendengespräche ermöglichen es, Feedback, Beurteilungen und Zielvereinbarungen strukturiert und medienbruchfrei umzusetzen. Alle Inhalte werden zentral erfasst, Fortschritte transparent verfolgt und revisionssicher archiviert. Mit der OMNIA NoCode-Plattform lässt sich der gesamte Ablauf – von Vorbereitung über Protokollierung bis zur Freigabe – flexibel anpassen und eigenständig steuern.",
      type: "omnia",
      category: "OMNIA",
    },
    {
      id: "omnia-360-feedback",
      title: "OMNIA Leistung: Digitales 360°-Feedback",
      description:
        "Das digitale 360°-Feedback ermöglicht es, Feedback aus allen relevanten Perspektiven – von Vorgesetzten, Kolleg:innen, Mitarbeitenden und externen Partner:innen – strukturiert, anonym und in Echtzeit einzuholen. Dadurch entsteht ein umfassendes Bild zu Stärken, Entwicklungspotenzialen und Führungsqualitäten.",
      type: "omnia",
      category: "OMNIA",
    },
    {
      id: "omnia-onboarding",
      title: "OMNIA Leistung: Digitales Onboarding",
      description:
        "Das digitale Onboarding unterstützt Verwaltungen dabei, neue Mitarbeitende effizient, transparent und standardisiert in ihre Strukturen und Prozesse einzuführen. Alle wichtigen Informationen, Dokumente und Schulungen stehen zentral, digital und jederzeit abrufbar zur Verfügung – vom ersten Arbeitstag bis zum Abschluss der Einarbeitung.",
      type: "omnia",
      category: "OMNIA",
    },
    {
      id: "omnia-fortbildungsplanung",
      title: "OMNIA Leistung: Digitale Fortbildungsplanung",
      description:
        "Die digitale Fortbildungsplanung ermöglicht es Verwaltungen, Fortbildungsbedarfe strukturiert zu erfassen und sofort mit passenden Weiterbildungsangeboten zu verbinden. Ob interne Schulung, externer Kurs oder E-Learning – die Lösung bietet einen zentralen Überblick über Bedarfe, Angebote und gebuchte Maßnahmen.",
      type: "omnia",
      category: "OMNIA",
    },
    {
      id: "podcast-kranke-mitarbeitende",
      title:
        "Podcast: Rechtlich richtiger Umgang mit kranken Mitarbeitenden in öffentlichen Verwaltungen",
      description:
        "Was tun, wenn Mitarbeitende krank sind – und wie bleibt man dabei rechtlich auf der sicheren Seite? Dieser Podcast bietet Personalverantwortlichen in Verwaltungen kompakte Orientierung zu Meldepflichten, Datenschutz, rechtlichen Fallstricken und Handlungsspielräumen bei Kurz- und Langzeiterkrankungen. Wer zwischen Empathie und Arbeitsrecht souverän agieren will, bekommt hier praxisnahes Wissen, das sich direkt umsetzen lässt.",
      type: "podcast",
    },
    {
      id: "kranke-mitarbeitende",
      title:
        "Rechtlich richtiger Umgang mit kranken Mitarbeitenden in öffentlichen Verwaltungen",
      description:
        "Was tun, wenn Mitarbeitende krank werden – und worauf müssen Verwaltungen dabei rechtlich achten? Dieses Whitepaper liefert kompakt und praxisnah alles, was Personalverantwortliche wissen müssen: von Meldepflichten und Datenschutz über Fallunterscheidungen bis hin zu rechtssicheren Entscheidungen bei Langzeiterkrankungen oder Versetzungen. Wer nicht nur korrekt, sondern auch fair handeln will, findet hier klare Orientierung für einen sensiblen Bereich des Arbeitsalltags.",
      type: "whitepaper",
    },
    {
      id: "omnia-krankmeldung",
      title: "OMNIA Leistung: Digitale Krankmeldung",
      description:
        "Krank – und trotzdem voll digital: Diese Lösung ermöglicht Mitarbeitenden eine medienbruchfreie Krankmeldung vom Smartphone bis zur E-Akte, ganz ohne Papier, E-Mail-Wirrwarr oder IT-Frust. Mit wenigen Klicks eingerichtet, rechtssicher dokumentiert und auf Wunsch sogar mit Rückkehrgesprächs-Workflow. Wer moderne Verwaltung wirklich entlasten will, startet hier.",
      type: "omnia",
      category: "OMNIA",
    },
    {
      id: "omnia-dienstreiseantrag",
      title: "OMNIA Leistung: Dienstreiseantrag",
      description:
        "Dienstreisen beantragen war noch nie so einfach – mit dieser vollständig digitalen Lösung von OMNIA geht alles von der Antragstellung bis zur Genehmigung ganz ohne Medienbruch. Vorkonfigurierte Genehmigungspfade, Outlook-Integration und E-Akte-Anbindung machen den Prozess effizient, transparent und skalierbar. Wer will, dass Reisen nicht beim Papierchaos startet, ist hier genau richtig.",
      type: "omnia",
      category: "OMNIA",
    },
    {
      id: "omnia-urlaubsantrag",
      title: "OMNIA Leistung: Urlaubsantrag",
      description:
        "Urlaub beantragen so einfach wie eine Nachricht schreiben: Der OMNIA-Urlaubsantrag digitalisiert den gesamten Prozess von Antrag bis Genehmigung – intuitiv, barrierefrei und vollständig konfigurierbar. Ob Jahresurlaub, Sonderurlaub oder Elternzeit: alles läuft medienbruchfrei, mobil und sicher. Wer moderne Arbeitskultur ernst meint, startet hier mit der digitalen Freiheit im Kopf.",
      type: "omnia",
      category: "OMNIA",
    },
    {
      id: "omnia-reisekostenabrechnung",
      title: "OMNIA Leistung: Reisekostenabrechnung",
      description:
        "Reisekosten erfassen, einreichen und genehmigen – ganz ohne Papier, Tabellen oder Stress: Diese Lösung macht die Reisekostenabrechnung zum Kinderspiel. Mit Vorbefüllung, digitaler Prüfung, Schnittstellen zur E-Akte und konfigurierbaren Workflows ist sie effizient, rechtssicher und sofort einsetzbar. Wer Reisekostenprozesse endlich ohne Stolpersteine will, ist hier goldrichtig.",
      type: "omnia",
      category: "OMNIA",
    },
    {
      id: "ozg-praxis",
      title: "Umsetzung des Onlinezugangsgesetzes (OZG) in der Praxis",
      description:
        "Verwaltungsdigitalisierung klingt trocken? Dieses Whitepaper zeigt, wie das Onlinezugangsgesetz (OZG) zum echten Modernisierungsmotor werden kann – mit mutigen Modellkommunen, praxisnahen Lösungen und konkreten Erfolgsrezepten. Wer wissen will, wie Deutschland vom Formular-Dschungel zum digitalen Bürgeramt kommt, findet hier inspirierende Antworten, greifbare Handlungsempfehlungen und technische Einblicke, die Lust auf Umsetzung machen.",
      type: "whitepaper",
    },
    {
      id: "digitale-transformation-behoerden",
      title:
        "Ganzheitlicher Leitfaden für die digitale Transformation in Behörden",
      description:
        "Dieser Leitfaden zeigt, wie Behörden die digitale Transformation nicht nur überstehen, sondern aktiv gestalten können – mit klarer Strategie, modernen Technologien und einer Kultur, die Mitarbeitende mitnimmt statt überrollt. Wer Verwaltungsdigitalisierung ganzheitlich denkt, schafft nicht nur effizientere Abläufe, sondern auch begeisterte Bürger und motivierte Teams. Eine inspirierende Roadmap für alle, die Verwaltung neu denken wollen.",
      type: "whitepaper",
    },
    {
      id: "end-to-end-digitalisierung",
      title:
        "End-to-End-Leistungsdigitalisierung - Medienbruchfreie Prozesse vom Antrag bis zur Akte",
      description:
        "Dieses Papier zeigt, wie digitale Verwaltungsprozesse wirklich wirksam werden – nicht nur hübsch online anfangen, sondern vom Antrag bis zum Bescheid und zur Akte vollständig durchdigitalisiert sein. Es räumt mit halben Lösungen auf, erklärt, warum medienbruchfreie Abläufe der Schlüssel zu Effizienz, Servicequalität und Zukunftsfähigkeit sind, und gibt praxisnahe Impulse für sofortige Umsetzung. Wer echte Digitalisierung will, findet hier das Rezept für den digitalen Durchbruch.",
      type: "whitepaper",
    },
    {
      id: "it-sicherheit-datenschutz",
      title: "IT-Sicherheit und Datenschutz in der digitalen Verwaltung",
      description:
        "Digitale Verwaltung braucht mehr als schnelle Portale – sie braucht Vertrauen, das nur mit konsequenter IT-Sicherheit und Datenschutz entstehen kann. Dieses Whitepaper zeigt, wie Verwaltungen mit durchdachter Strategie, Technik und Schulung zur sicheren digitalen Festung werden – und warum das kein Bremsklotz, sondern der eigentliche Enabler für echte Digitalisierung ist. Wer wissen will, wie man Digitalisierung verantwortungsvoll, resilient und bürgernah gestaltet, sollte hier unbedingt weiterlesen.",
      type: "whitepaper",
    },
    {
      id: "interoperabilitaet-standards",
      title:
        "Interoperabilität und offene Standards - Zukunftssichere IT-Architekturen für den Public Sector",
      description:
        "Dieses Whitepaper zeigt, warum offene Standards und Interoperabilität die stille Superkraft der Verwaltungsdigitalisierung sind – unsichtbar für den Bürger, aber unverzichtbar für medienbruchfreie Prozesse, Kosteneffizienz und Zukunftssicherheit. Wer endlich raus will aus dem IT-Silo-Dschungel und stattdessen modular, flexibel und souverän verwalten will, findet hier die Architektur-Baupläne für eine digitale Verwaltung, die nicht nur funktioniert, sondern wächst. Pflichtlektüre für alle, die beim digitalen Umbau nicht nur an Portale, sondern an das Fundament denken.",
      type: "whitepaper",
    },
    {
      id: "ki-automatisierung",
      title: "Künstliche Intelligenz und Automatisierung in der Verwaltung",
      description:
        "Künstliche Intelligenz in der Verwaltung – das klingt futuristisch, ist aber längst Realität und eine Antwort auf Fachkräftemangel, langsame Prozesse und wachsende Erwartungen. Dieses Whitepaper zeigt eindrucksvoll, wie Chatbots, smarte Automatisierung und Entscheidungsassistenten nicht nur Arbeitslast reduzieren, sondern auch die Verwaltung menschlicher, schneller und besser machen können. Wer erleben will, wie KI den Behördenalltag revolutioniert, ohne den Menschen aus dem Zentrum zu rücken, sollte hier unbedingt weiterlesen.",
      type: "whitepaper",
    },
    {
      id: "ozg-2-0",
      title:
        "OZG 2.0 - Was sich ändert - und wie sich Behörden jetzt aufstellen müssen",
      description:
        "OZG 2.0 ist mehr als ein Update – es ist der Neustart für eine echte, verbindliche und durchgängige Verwaltungsdigitalisierung. Dieses Whitepaper zeigt, wie Behörden den Medienbruch endgültig hinter sich lassen, Standards nutzen statt Insellösungen pflegen und mit strategischem Fokus von Pflicht zur Kür gelangen. Wer verstehen will, wie Deutschland jetzt wirklich digital wird und was Kommunen tun müssen, um vorne mitzuspielen, sollte hier weiterlesen.",
      type: "whitepaper",
    },
    {
      id: "kommunale-netzwerke",
      title:
        "Die Rolle von kommunalen Netzwerken und EfA-Projekten in der Verwaltungsmodernisierung",
      description:
        "Dieses Whitepaper zeigt, warum Kommunen die digitale Verwaltungsmodernisierung nicht allein stemmen müssen – und auch nicht sollten. Es macht Lust auf Zusammenarbeit, indem es die Kraft interkommunaler Netzwerke und das Potenzial von EfA-Projekten als echte Gamechanger für Effizienz, Standardisierung und Nutzerfreundlichkeit beleuchtet. Wer Digitalisierung endlich gemeinsam statt einsam denken will, findet hier inspirierende Beispiele, pragmatische Lösungen und starke Argumente für den Schulterschluss.",
      type: "whitepaper",
    },
    {
      id: "cloud-strategien",
      title:
        "Cloud-Strategien für die öffentliche Verwaltung - Zwischen Souveränität und Skalierbarkeit",
      description:
        "Cloud ist kein Buzzword, sondern das Rückgrat einer modernen, resilienten und bürgernahen Verwaltung – wenn Souveränität und Skalierbarkeit klug austariert werden. Dieses Whitepaper liefert den strategischen Kompass durch das Dickicht aus Datenschutz, Technik, Standards und Praxisbeispielen und zeigt, wie Behörden Cloud-Lösungen nutzen können, ohne Kontrolle oder Vertrauen zu verlieren. Wer wissen will, wie digitale Verwaltung auf Wolke 7 kommt, ohne ins Risiko zu stürzen, sollte unbedingt weiterlesen.",
      type: "whitepaper",
    },
  ],
  form: {
    title: "Whitepaper & Success Stories anfordern",
    note: "Füllen Sie einfach das beistehende Formular aus und Sie erhalten binnen kürzester Zeit das Whitepaper in PDF-Form. Bitte geben Sie Ihre dienstliche E-Mail-Adresse an, da wir dieses Angebot exklusiv für Organisationen der öffentlichen Verwaltung bereitstellen.",
  },
};

