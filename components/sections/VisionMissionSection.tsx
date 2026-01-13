'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Eye, Target, Heart, type LucideIcon } from 'lucide-react';
import type { VisionMissionItem } from '@/lib/types';

interface VisionMissionSectionProps {
  items?: VisionMissionItem[];
}

// Echte Daten von egovc.de
const fallbackItems: VisionMissionItem[] = [
  {
    title: 'Vision',
    description: 'Wertschöpfung kann nicht allein durch Technologie erzielt werden. Durch die EGovC-Brille ist der Mensch immer der Ausgangspunkt. Gemeinsam erarbeiten unsere Experten mit Ihnen den Kern jeder individuellen Herausforderung und darauf aufbauend die beste Lösung. Wir sind überzeugt, dass diese Herangehensweise – den Menschen in den Mittelpunkt der Technologie zu stellen – das ist, was die digitale Transformation verbürgerlicht.',
  },
  {
    title: 'Mission',
    description: 'EGovC ermöglicht es Ihnen, Ihre Organisation weiterzuentwickeln und gleichzeitig zuverlässiges Verwaltungshandeln zu gewährleisten. Wir unterstützen Sie die richtigen Technologien zu nutzen und gewährleisten dadurch Agilität, Interoperabilität und Wettbewerbsfähigkeit. GEMEINSAM ist dabei unser zentraler Anspruch. Unsere Experten vereinen ihre Kräfte mit den Kräften Ihrer Mitarbeiter*innen als Team. Perform Together – Dieses Motto ist in der Zusammenarbeit, für unsere Kunden, ein Teil der Erwartungen geworden.',
  },
  {
    title: 'Ethik',
    description: 'Erfolg im Dienstleistungsgewerbe wird maßgeblich durch geteilte Werte bestimmt, die durch die Fähigkeiten des Miteinanders getragen werden. Die Unternehmensziele und Standards der EGC existieren nicht nur zum Wohl unserer Shareholder und Mittarbeiter, sondern schließen alle am Wertschöpfungsprozess Beteiligten ein. Wir sind der festen Überzeugung, dass gemeinsam alles zu meistern ist.',
  },
];

// Icon mapping for fallback
const iconMap: Record<string, LucideIcon> = {
  'Vision': Eye,
  'Mission': Target,
  'Ethik': Heart,
};

function VisionIcon({ title, imageUrl }: { title: string; imageUrl?: string }) {
  const [imageError, setImageError] = useState(false);
  const FallbackIcon = iconMap[title] || Eye;

  if (imageUrl && !imageError) {
    return (
      <Image
        src={imageUrl}
        alt={title}
        width={128}
        height={128}
        className="w-full h-full object-contain p-4"
        onError={() => setImageError(true)}
      />
    );
  }

  return <FallbackIcon className="w-16 h-16 text-[var(--egovc-teal)]" strokeWidth={1.5} />;
}

export default function VisionMissionSection({
  items,
}: VisionMissionSectionProps) {
  // Use fallback data if no items provided
  const displayItems = items && items.length > 0 ? items : fallbackItems;

  // Helper to get image URL - supports Payload images
  const getImageUrl = (image: VisionMissionItem['image']): string | undefined => {
    if (!image) return undefined;
    if (typeof image === 'object' && image !== null && 'url' in image) {
      return (image as { url: string }).url;
    }
    return undefined;
  };

  // Default fallback images path (downloaded from egovc.de)
  const fallbackImages: Record<string, string> = {
    'Vision': '/images/vision.png',
    'Mission': '/images/mission.png',
    'Ethik': '/images/werte.png',
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {displayItems.map((item) => (
            <div key={item.title} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full border-4 border-[var(--egovc-teal)] flex items-center justify-center overflow-hidden bg-white">
                  <VisionIcon
                    title={item.title}
                    imageUrl={getImageUrl(item.image) || fallbackImages[item.title]}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--egovc-dark)]">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
