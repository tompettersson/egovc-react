import { getPayload } from 'payload'
import config from '../src/payload.config'

const blogPosts = [
  {
    title: 'Digitale Transformation in Behörden: Ein ganzheitlicher Ansatz',
    slug: 'digitale-transformation-behoerden-ganzheitlicher-ansatz',
    excerpt: 'Die digitale Transformation ist für Behörden keine Option mehr, sondern eine Notwendigkeit. Erfahren Sie, wie ein ganzheitlicher Ansatz zum Erfolg führt.',
    author: 'EGovC Team',
    categories: ['digitalisierung', 'verwaltung'],
    featured: true,
    publishedAt: new Date('2026-01-05').toISOString(),
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            tag: 'h2',
            children: [{ type: 'text', text: 'Warum ganzheitliche Digitalisierung?' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Die digitale Transformation in Behörden ist mehr als nur die Einführung neuer Software. Es geht um einen grundlegenden Wandel in der Art und Weise, wie Verwaltungen arbeiten, kommunizieren und Dienstleistungen erbringen. Ein ganzheitlicher Ansatz berücksichtigt dabei nicht nur die technischen Aspekte, sondern auch die Menschen, Prozesse und die Organisationskultur.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h2',
            children: [{ type: 'text', text: 'Die vier Säulen der digitalen Transformation' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Erfolgreiche Digitalisierung basiert auf vier Säulen: Strategie, Technologie, Menschen und Prozesse. Ohne eine klare Strategie fehlt die Richtung. Ohne die richtige Technologie fehlen die Werkzeuge. Ohne die Einbindung der Menschen fehlt die Akzeptanz. Und ohne optimierte Prozesse verpufft das Potenzial.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h3',
            children: [{ type: 'text', text: '1. Strategie entwickeln' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Bevor Sie in Technologie investieren, definieren Sie Ihre Ziele. Welche Services sollen digitalisiert werden? Welche Prozesse bieten das größte Optimierungspotenzial? Eine klare Roadmap mit Meilensteinen hilft dabei, den Überblick zu behalten und Erfolge messbar zu machen.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h3',
            children: [{ type: 'text', text: '2. Die richtige Technologie wählen' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Low-Code- und No-Code-Plattformen wie OMNIA ermöglichen es, digitale Lösungen schnell und ohne tiefgreifende Programmierkenntnisse zu entwickeln. Das beschleunigt die Umsetzung und reduziert die Abhängigkeit von externen IT-Dienstleistern.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h3',
            children: [{ type: 'text', text: '3. Menschen mitnehmen' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Change Management ist entscheidend. Schulungen, offene Kommunikation und die frühe Einbindung der Mitarbeitenden schaffen Akzeptanz und reduzieren Widerstände. Digitalisierung funktioniert nur, wenn die Menschen sie mittragen.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h3',
            children: [{ type: 'text', text: '4. Prozesse optimieren' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Digitalisierung ist die Chance, bestehende Prozesse zu hinterfragen und zu verbessern. Einfach nur analoge Prozesse digital abzubilden, verschenkt Potenzial. Nutzen Sie die Transformation, um Abläufe zu verschlanken und bürgerfreundlicher zu gestalten.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h2',
            children: [{ type: 'text', text: 'Fazit' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Die ganzheitliche digitale Transformation ist ein Marathon, kein Sprint. Mit der richtigen Strategie, passenden Technologien, engagierten Menschen und optimierten Prozessen können Behörden die Digitalisierung erfolgreich meistern und ihren Bürgern moderne, effiziente Services bieten.',
              },
            ],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    seo: {
      metaTitle: 'Digitale Transformation in Behörden - Ganzheitlicher Ansatz | EGovC',
      metaDescription: 'Erfahren Sie, wie Behörden die digitale Transformation ganzheitlich angehen können. Strategie, Technologie, Menschen und Prozesse im Fokus.',
    },
  },
  {
    title: 'Künstliche Intelligenz in der Verwaltung: Chancen und Anwendungen',
    slug: 'kuenstliche-intelligenz-verwaltung-chancen-anwendungen',
    excerpt: 'KI ist in der Verwaltung angekommen. Entdecken Sie praktische Anwendungsfälle von Chatbots bis zur automatisierten Dokumentenverarbeitung.',
    author: 'EGovC Team',
    categories: ['ki-technologie', 'digitalisierung', 'verwaltung'],
    featured: false,
    publishedAt: new Date('2026-01-03').toISOString(),
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            tag: 'h2',
            children: [{ type: 'text', text: 'KI als Antwort auf aktuelle Herausforderungen' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Fachkräftemangel, steigende Bürgererwartungen und komplexer werdende Aufgaben – die öffentliche Verwaltung steht vor enormen Herausforderungen. Künstliche Intelligenz (KI) bietet hier konkrete Lösungsansätze, die bereits heute praxiserprobt sind.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h2',
            children: [{ type: 'text', text: 'Praktische Anwendungsfälle' }],
          },
          {
            type: 'heading',
            tag: 'h3',
            children: [{ type: 'text', text: 'Chatbots für Bürgeranfragen' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Intelligente Chatbots können Standardanfragen rund um die Uhr beantworten. Sie entlasten das Personal bei wiederkehrenden Fragen zu Öffnungszeiten, Zuständigkeiten oder Antragsverfahren und verbessern gleichzeitig die Erreichbarkeit für Bürger.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h3',
            children: [{ type: 'text', text: 'Automatisierte Dokumentenverarbeitung' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'KI-gestützte Texterkennung (OCR) und Dokumentenklassifizierung können eingehende Anträge automatisch erfassen, kategorisieren und an die zuständigen Stellen weiterleiten. Das reduziert manuelle Eingaben und beschleunigt die Bearbeitung erheblich.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h3',
            children: [{ type: 'text', text: 'Entscheidungsunterstützung' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'KI-Systeme können Sachbearbeiter bei komplexen Entscheidungen unterstützen, indem sie relevante Informationen zusammentragen, auf ähnliche Fälle hinweisen oder Regelkonformität prüfen. Die finale Entscheidung bleibt dabei immer beim Menschen.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h2',
            children: [{ type: 'text', text: 'Datenschutz und Ethik im Blick' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Beim Einsatz von KI in der Verwaltung sind Datenschutz und ethische Aspekte besonders wichtig. Transparenz über den KI-Einsatz, Nachvollziehbarkeit von Entscheidungen und der Schutz personenbezogener Daten müssen gewährleistet sein. Deutsche und europäische Lösungen bieten hier oft Vorteile.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h2',
            children: [{ type: 'text', text: 'Fazit' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'KI in der Verwaltung ist keine Zukunftsmusik, sondern gelebte Realität. Mit dem richtigen Augenmaß eingesetzt, kann sie Mitarbeitende entlasten, Services verbessern und die Verwaltung fit für die Zukunft machen – ohne den Menschen aus dem Zentrum zu rücken.',
              },
            ],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    seo: {
      metaTitle: 'KI in der Verwaltung - Chancen und Anwendungen | EGovC',
      metaDescription: 'Praktische KI-Anwendungen für Behörden: Chatbots, Dokumentenverarbeitung und Entscheidungsunterstützung. Erfahren Sie mehr über die Möglichkeiten.',
    },
  },
  {
    title: 'Low-Code/No-Code: Der Turbo für die Verwaltungsdigitalisierung',
    slug: 'low-code-no-code-turbo-verwaltungsdigitalisierung',
    excerpt: 'Mit Low-Code- und No-Code-Plattformen können Verwaltungen digitale Lösungen schneller umsetzen. Erfahren Sie, wie das in der Praxis funktioniert.',
    author: 'EGovC Team',
    categories: ['digitalisierung', 'verwaltung', 'ki-technologie'],
    featured: false,
    publishedAt: new Date('2026-01-01').toISOString(),
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            tag: 'h2',
            children: [{ type: 'text', text: 'Was ist Low-Code/No-Code?' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Low-Code- und No-Code-Plattformen ermöglichen die Entwicklung digitaler Anwendungen mit wenig oder ganz ohne Programmierung. Statt Code zu schreiben, nutzen Anwender visuelle Bausteine – Formulare, Workflows, Datenmodelle und Schnittstellen – um Lösungen zu erstellen.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h2',
            children: [{ type: 'text', text: 'Warum ist das für Verwaltungen relevant?' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Die öffentliche Verwaltung steht unter Druck: Das OZG fordert digitale Services, IT-Fachkräfte sind knapp, und klassische Softwareprojekte dauern oft Jahre. Low-Code/No-Code bietet einen Ausweg aus diesem Dilemma.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h3',
            children: [{ type: 'text', text: 'Schnellere Umsetzung' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Was früher Monate dauerte, kann mit Low-Code-Plattformen in Wochen oder sogar Tagen umgesetzt werden. Prototypen entstehen schnell, Feedback kann direkt einfließen, und Anpassungen sind unkompliziert möglich.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h3',
            children: [{ type: 'text', text: 'Fachabteilungen einbinden' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Mit No-Code können auch Nicht-IT-Experten digitale Lösungen erstellen oder anpassen. Das entlastet die IT-Abteilung und bringt Fachexpertise direkt in die Lösungsentwicklung ein. Die Menschen, die die Prozesse kennen, gestalten sie digital.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h3',
            children: [{ type: 'text', text: 'Kosten sparen' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Weniger Entwicklungsaufwand bedeutet weniger Kosten. Zudem reduziert sich die Abhängigkeit von externen Dienstleistern, da viele Anpassungen intern vorgenommen werden können.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h2',
            children: [{ type: 'text', text: 'Praxisbeispiele' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Mit Plattformen wie OMNIA setzen Verwaltungen bereits heute vielfältige Lösungen um: digitale Urlaubsanträge, Krankmeldungen, Bürgerbeteiligungsportale, Zielvereinbarungen und vieles mehr. Die Bausteine sind da – sie müssen nur zusammengesetzt werden.',
              },
            ],
          },
          {
            type: 'heading',
            tag: 'h2',
            children: [{ type: 'text', text: 'Fazit' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Low-Code/No-Code ist keine Spielerei, sondern eine strategische Antwort auf die Herausforderungen der Verwaltungsdigitalisierung. Wer schnell, flexibel und kostenbewusst digitalisieren will, sollte diese Werkzeuge in Betracht ziehen.',
              },
            ],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    seo: {
      metaTitle: 'Low-Code/No-Code für Verwaltungen | EGovC',
      metaDescription: 'Wie Low-Code- und No-Code-Plattformen die Verwaltungsdigitalisierung beschleunigen. Schneller, günstiger, flexibler.',
    },
  },
]

async function seedBlogPosts() {
  console.log('🚀 Starting blog post seeding...')

  const payload = await getPayload({ config })

  for (const post of blogPosts) {
    try {
      // Check if post with this slug already exists
      const existing = await (payload as any).find({
        collection: 'blog-posts',
        where: { slug: { equals: post.slug } },
        limit: 1,
      })

      if (existing.docs.length > 0) {
        console.log(`⏭️  Skipping "${post.title}" - already exists`)
        continue
      }

      await (payload as any).create({
        collection: 'blog-posts',
        data: post,
      })

      console.log(`✅ Created: "${post.title}"`)
    } catch (error) {
      console.error(`❌ Error creating "${post.title}":`, error)
    }
  }

  console.log('✨ Blog post seeding completed!')
  process.exit(0)
}

seedBlogPosts()
