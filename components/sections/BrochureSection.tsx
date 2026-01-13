'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { SanityImage } from '@/lib/types';

interface BrochureSectionProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonUrl?: string;
  image?: SanityImage | null;
}

export default function BrochureSection({
  title = 'EGovC Broschüre herunterladen',
  description = 'Werfen Sie einen Blick in unsere Broschüre „Über uns" und lernen Sie uns sowie unsere Philosophie kennen.',
  buttonLabel = 'Jetzt herunterladen',
  buttonUrl = 'https://egovc.de/wp-content/uploads/2022/10/egovc_about_digital.pdf',
  image,
}: BrochureSectionProps) {
  // Get image URL - supports Payload images or fallback
  const getImageUrl = () => {
    if (!image) return '/images/brochure/katalog-front.jpg';
    // If image is a Payload Media object with url
    if (typeof image === 'object' && image !== null && 'url' in image) {
      return (image as { url: string }).url;
    }
    if (image.asset?.url) return image.asset.url;
    return '/images/brochure/katalog-front.jpg';
  };

  return (
    <section className="bg-[var(--egovc-dark)] text-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-4">{title}</h3>
            <p className="text-lg text-gray-300 mb-8">{description}</p>
            <Link
              href={buttonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--egovc-pink)] text-white px-8 py-4 rounded hover:opacity-90 transition-opacity font-semibold"
            >
              {buttonLabel}
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src={getImageUrl()}
                alt={title}
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


