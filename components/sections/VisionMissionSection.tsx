'use client';

import { Eye, Target, Heart, type LucideIcon } from 'lucide-react';
import type { VisionMissionItem } from '@/lib/types';

interface VisionMissionSectionProps {
  items?: VisionMissionItem[];
}

// Echte Daten von egovc.de
const fallbackItems: VisionMissionItem[] = [
  {
    title: 'Vision',
    description: 'Wertschöpfung kann nicht allein durch Technologie erzielt werden. Durch die EGovC-Brille ist der Mensch immer der Ausgangspunkt. Gemeinsam erarbeiten unsere Experten mit Ihnen den Kern jeder individuellen Herausforderung und darauf aufbauend die beste Lösung.',
  },
  {
    title: 'Mission',
    description: 'EGovC ermöglicht es Ihnen, Ihre Organisation weiterzuentwickeln und gleichzeitig zuverlässiges Verwaltungshandeln zu gewährleisten. GEMEINSAM ist dabei unser zentraler Anspruch. Perform Together – Dieses Motto ist ein Teil der Erwartungen in der Zusammenarbeit.',
  },
  {
    title: 'Ethik',
    description: 'Erfolg im Dienstleistungsgewerbe wird maßgeblich durch geteilte Werte bestimmt. Die Unternehmensziele der EGC schließen alle am Wertschöpfungsprozess Beteiligten ein. Wir sind der festen Überzeugung, dass gemeinsam alles zu meistern ist.',
  },
];

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  'Vision': Eye,
  'Mission': Target,
  'Ethik': Heart,
};

export default function VisionMissionSection({
  items,
}: VisionMissionSectionProps) {
  const displayItems = items && items.length > 0 ? items : fallbackItems;

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Three column layout with left-aligned content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {displayItems.map((item, index) => {
            const Icon = iconMap[item.title] || Eye;

            return (
              <div key={item.title} className="group">
                {/* Icon with number indicator */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[var(--egovc-teal)]/10 flex items-center justify-center group-hover:bg-[var(--egovc-teal)] transition-colors duration-300">
                    <Icon
                      className="w-7 h-7 text-[var(--egovc-teal)] group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-5xl font-bold text-gray-100 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[var(--egovc-dark)] mb-3 group-hover:text-[var(--egovc-teal)] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Pink accent line */}
                <div className="w-12 h-1 bg-[var(--egovc-pink)] mb-4" />

                {/* Description - left aligned */}
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
