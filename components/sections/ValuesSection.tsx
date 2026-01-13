'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { ValueItem } from '@/lib/types';
import {
  Heart,
  Shield,
  Users,
  Lightbulb,
  HandHeart,
  Award,
  Leaf,
  Smile,
  Scale,
  Eye,
  Compass,
  Star,
  type LucideIcon,
} from 'lucide-react';

interface ValuesSectionProps {
  title?: string;
  subtitle?: string;
  items?: ValueItem[];
}

// Echte Werte-Daten von egovc.de
const fallbackValues: ValueItem[] = [
  {
    title: 'Ehrlichkeit',
    description: 'Dies umfasst die Ablehnung unlauterer Geschäftspraktiken, sowie die klare Kommunikation intern und gegenüber Partner und Kunden. In Einklang mit diesem Prinzip hat sich EGC klare Leitbilder für Provisionen, Geschenke und die Zusammenarbeit jeder Art geschaffen.',
  },
  {
    title: 'Mut',
    description: 'Unternehmertum bedeutet Mut. Ausgedrückt in Wunsch, Risiko, Bedacht und Weitsicht. Eigenschaften die Verwaltungen und öffentliche Unternehmen vor waghalsigen Entscheidungen behüten.',
  },
  {
    title: 'Vertrauen',
    description: 'Eigenständiges Handeln ist nur durch Vertrauen möglich. Mitarbeiter und Teams entwickeln innovative und allumfassende Lösungen durch Vertrauen. Unvoreingenommenheit führt zu echter Transparenz im Informationsfluss. Gemeinsam handeln durch Vertrauen, ist das Kernelement der Perform Together © Strategie.',
  },
  {
    title: 'Gleichheit',
    description: 'Individuelle Kompetenzen und Bedürfnisse ermöglichen Diversity. Kreativität, Innovation, Aufgeschlossenheit sowie der Respekt vor anderen Kulturen und Gewohnheiten, bilden die Grundlage einer erfolgreichen Unternehmung, zur optimalen Arbeitsatmosphäre und Kundenbeziehung.',
  },
  {
    title: 'Spaß',
    description: 'Die Grundlage erfolgreichen Handelns, ist Spaß an der Arbeit. Motivation und Spaß bei der Arbeit fördern die Lebensqualität.',
  },
  {
    title: 'Bescheidenheit',
    description: 'Bescheidenheit ist eine Tugend.',
  },
  {
    title: 'Teamgeist',
    description: 'Im Einklang mit Mitarbeitern, Kunden und Partnern ist Teamgeist eine der Fähigkeiten, die Großes entstehen lässt. Gemeinsam feiert man Erfolge und steht schwere Zeiten durch.',
  },
];

// Map German value names to Lucide icons
const valueIconMap: Record<string, LucideIcon> = {
  ehrlichkeit: Eye,
  mut: Compass,
  vertrauen: Shield,
  gleichheit: Scale,
  spass: Smile,
  'spaß': Smile,
  bescheidenheit: Star,
  teamgeist: Users,
};

// Map to actual image filenames in /public/images/
const valueImageMap: Record<string, string> = {
  'Ehrlichkeit': '/images/ehrlichkeit.png',
  'Mut': '/images/mut.png',
  'Vertrauen': '/images/vertrauen.png',
  'Gleichheit': '/images/gleichheit.png',
  'Spaß': '/images/spass.png',
  'Bescheidenheit': '/images/bescheidenheit.png',
  'Teamgeist': '/images/teamgeist.png',
};

function ValueIcon({ title, imageUrl }: { title: string; imageUrl?: string }) {
  const [imageError, setImageError] = useState(false);
  const normalizedTitle = title.toLowerCase().replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ß/g, 'ss');
  const FallbackIcon = valueIconMap[normalizedTitle] || valueIconMap[title.toLowerCase()] || Star;

  // Try to load image first
  const imageSrc = imageUrl || valueImageMap[title];

  if (imageSrc && !imageError) {
    return (
      <Image
        src={imageSrc}
        alt={title}
        width={80}
        height={80}
        className="w-full h-full object-contain p-2"
        onError={() => setImageError(true)}
      />
    );
  }

  // Use Lucide icon as fallback
  return <FallbackIcon className="w-10 h-10 text-[var(--egovc-teal)]" strokeWidth={1.5} />;
}

export default function ValuesSection({
  title = 'Unsere Werte',
  subtitle = 'Sieben Werte sind der Wind in unseren Segeln,\ndie uns gemeinsam ans Ziel bringen.',
  items,
}: ValuesSectionProps) {
  // Use fallback data if no items provided
  const displayItems = items && items.length > 0 ? items : fallbackValues;

  // Helper to get image URL - supports Payload images
  const getImageUrl = (image: ValueItem['image']): string | undefined => {
    if (!image) return undefined;
    // If image is a Payload Media object with url
    if (typeof image === 'object' && image !== null && 'url' in image) {
      return (image as { url: string }).url;
    }
    return undefined;
  };

  // Split subtitle by newline for line breaks
  const subtitleLines = subtitle.split('\n');

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-[var(--egovc-dark)]">{title}</h2>
        <div className="w-24 h-1 bg-[var(--egovc-pink)] mb-6"></div>
        <p className="text-lg text-gray-600 mb-12">
          {subtitleLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < subtitleLines.length - 1 && <br />}
            </span>
          ))}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayItems.map((item) => (
            <div key={item.title} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full border-4 border-[var(--egovc-teal)] flex items-center justify-center overflow-hidden bg-white">
                  <ValueIcon title={item.title} imageUrl={getImageUrl(item.image)} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--egovc-dark)]">{item.title}</h3>
              {item.subtitle && (
                <p className="text-sm text-gray-500 italic mb-2">{item.subtitle}</p>
              )}
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
