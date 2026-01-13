'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { PillarItem } from '@/lib/types';

interface ThreePillarsSectionProps {
  buttonLabel?: string;
  items?: PillarItem[];
  locale?: string;
}

export default function ThreePillarsSection({
  buttonLabel = 'Zu den Produkten',
  items = [],
  locale = 'de',
}: ThreePillarsSectionProps) {
  // Helper to get image URL - supports Payload images or fallback
  const getImageUrl = (image: PillarItem['image'], fallback: string) => {
    if (!image) return fallback;
    // If image is a Payload Media object with url
    if (typeof image === 'object' && image !== null && 'url' in image) {
      return (image as { url: string }).url;
    }
    return fallback;
  };

  // Default fallback images by href slug (language-independent)
  const fallbackImagesBySlug: Record<string, string> = {
    '/verwaltung': '/images/sectors/verwaltung.png',
    '/gesundheitswesen': '/images/sectors/gesundheitswesen.png',
    '/kirche': '/images/sectors/kirche.png',
  };

  // Helper to get fallback image by href
  const getFallbackImage = (href: string) => {
    return fallbackImagesBySlug[href] || '/images/sectors/verwaltung.png';
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-64 h-64 rounded-lg overflow-hidden">
                  <Image
                    src={getImageUrl(pillar.image, getFallbackImage(pillar.href))}
                    alt={pillar.title}
                    width={256}
                    height={256}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[var(--egovc-dark)]">{pillar.title}</h2>
              <Link
                href={`/${locale}${pillar.href.startsWith('/') ? pillar.href : `/${pillar.href}`}`}
                className="inline-block bg-[var(--egovc-pink)] text-white px-6 py-3 rounded hover:opacity-90 transition-opacity"
              >
                {buttonLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
