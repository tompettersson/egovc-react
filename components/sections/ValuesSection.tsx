'use client';

import { useState } from 'react';
import type { ValueItem } from '@/lib/types';
import {
  Eye,
  Compass,
  Shield,
  Scale,
  Smile,
  Sparkles,
  Users,
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
    description: 'Eigenständiges Handeln ist nur durch Vertrauen möglich. Mitarbeiter und Teams entwickeln innovative und allumfassende Lösungen durch Vertrauen. Unvoreingenommenheit führt zu echter Transparenz im Informationsfluss.',
  },
  {
    title: 'Gleichheit',
    description: 'Individuelle Kompetenzen und Bedürfnisse ermöglichen Diversity. Kreativität, Innovation, Aufgeschlossenheit sowie der Respekt vor anderen Kulturen und Gewohnheiten bilden die Grundlage einer erfolgreichen Unternehmung.',
  },
  {
    title: 'Spaß',
    description: 'Die Grundlage erfolgreichen Handelns ist Spaß an der Arbeit. Motivation und Spaß bei der Arbeit fördern die Lebensqualität.',
  },
  {
    title: 'Bescheidenheit',
    description: 'Bescheidenheit ist eine Tugend. Wir stellen Wirkung vor Eitelkeit und wissen, dass wir nicht alles wissen.',
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
  bescheidenheit: Sparkles,
  teamgeist: Users,
};

function getIcon(title: string): LucideIcon {
  const normalized = title.toLowerCase().replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ß/g, 'ss');
  return valueIconMap[normalized] || valueIconMap[title.toLowerCase()] || Sparkles;
}

export default function ValuesSection({
  title = 'Unsere Werte',
  subtitle = 'Sieben Werte sind der Wind in unseren Segeln, die uns gemeinsam ans Ziel bringen.',
  items,
}: ValuesSectionProps) {
  const displayItems = items && items.length > 0 ? items : fallbackValues;

  return (
    <section className="bg-[#fafafa] py-24 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header - Left aligned, editorial style */}
        <div className="max-w-3xl mb-16">
          <p className="text-[var(--egovc-dark)] font-semibold tracking-widest uppercase text-sm mb-4">
            Unsere Prinzipien
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--egovc-dark)] mb-6 leading-tight">
            {title}
          </h2>
          <div className="w-20 h-1 bg-[var(--egovc-pink)] mb-6" />
          <p className="text-xl text-gray-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Values Grid - 2 columns on desktop, clean horizontal cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
          {displayItems.map((item, index) => {
            const Icon = getIcon(item.title);
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.title}
                className="group relative py-8 border-b border-gray-200 last:border-b-0 lg:[&:nth-last-child(2)]:border-b-0"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Value number - subtle background element */}
                <span className="absolute -left-2 top-6 text-8xl font-bold text-gray-100 select-none pointer-events-none opacity-60 transition-opacity group-hover:opacity-100">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative flex items-start gap-6">
                  {/* Icon container */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[var(--egovc-teal)]/10 flex items-center justify-center group-hover:bg-[var(--egovc-teal)] transition-colors duration-300">
                    <Icon
                      className="w-7 h-7 text-[var(--egovc-teal)] group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-[var(--egovc-dark)] mb-2 group-hover:text-[var(--egovc-teal)] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
