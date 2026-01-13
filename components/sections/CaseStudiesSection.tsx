import Image from 'next/image';

// Static images (not localized)
const caseStudyImages = [
  '/images/main-kinzig.jpg',
  '/images/bad-duerkheim.jpg',
  '/images/bargteheide.jpg',
];

// Fallback German content
const fallbackCaseStudies = [
  {
    title: 'Main-Kinzig-Kreis',
    hashtags: '#Transformation #Digitalisierung #IT #Organisationsabteilung #Masterplan',
    description: 'Im Zuge der digitalen Transformation des MKKs ist es, wie in all unseren Transformationsprojekten, wichtig den Roten Faden aufzuzeigen und dabei zu unterstützen, diesen nicht aus den Augen zu verlieren. Nach einer ganzheitlichen Untersuchung der Organisation, ergaben sich notwendige Maßnahmen zur Neugestaltung der IT, interner Prozesse und zur Schaffung einer Organisationseinheit, die die digitale Transformation treibt und realisiert. Aktuell begleiten wir außerdem die aktive Leistungsdigitalisierung der örtlichen Top 100 Leistungen sowie die Einführung der Basiskomponenten.',
  },
  {
    title: 'Stadt Bad Dürkheim',
    hashtags: '#Transformation #Digitalisierung #DMS #Baubetriebshof #Basiskomponenten',
    description: 'Aus der digitalen Transformation der Stadt Bad Dürkheim ergaben sich strukturelle Veränderungen. Da wir immer auf die individuellen Bedürfnisse unserer Kunden eingehen, wurde im ersten Schritt ein Teilprojekt, welches sich besonders auf die Digitalisierung des Baubetriebshofs und dessen Arbeitsabläufe konzentriert, realisiert. Weitere Ziele sind aktuell die Auswahl und Einführung eines DMS, sowie eine digitale Finanzbuchung. Parallel hierzu, werden die Themen der Leistungsdigitalisierung adressiert und realisiert.',
  },
  {
    title: 'Stadt Bargteheide',
    hashtags: '#Transformation #Struktur #Projektmanagement #Prozessmanagement #Onlineterminvereinbarung',
    description: 'Strukturen zu schaffen und Leitplanken zu setzen, spielt bei der digitalen Transformation der Stadt Bargteheide eine besonders wichtige Rolle. Nach unseren Schulungen in den Themenfeldern Projektmanagement und Prozessmanagement, ist der nächste Meilenstein die Einführung und Nutzung der Basiskomponenten für eine nachhaltige und dauerhafte Umsetzung des OZG.',
  },
];

interface CaseStudy {
  title: string;
  hashtags: string;
  description: string;
}

interface CaseStudiesSectionProps {
  items?: CaseStudy[];
}

export default function CaseStudiesSection({ items }: CaseStudiesSectionProps) {
  const caseStudies = items && items.length > 0 ? items : fallbackCaseStudies;
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={study.title}>
              <div className="mb-4 aspect-video rounded-lg overflow-hidden">
                <Image
                  src={caseStudyImages[index]}
                  alt={study.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[var(--egovc-dark)]">{study.title}</h2>
              <div className="w-24 h-1 bg-[var(--egovc-pink)] mb-4"></div>
              <p className="text-sm font-semibold text-[var(--egovc-pink)] mb-4">{study.hashtags}</p>
              <p className="text-gray-600 leading-relaxed">{study.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


