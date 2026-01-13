'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

// Type für Referenz (aus Payload)
export interface Reference {
  id?: string | number;
  name: string;
  title: string;
  company?: string;
  quote: string;
  image?: {
    url?: string;
    alt?: string;
  } | null;
}

// Fallback-Daten falls keine aus Payload kommen
const fallbackTestimonials: Reference[] = [
  {
    name: 'Thorsten Stolz',
    title: 'Landrat Main-Kinzig-Kreis',
    quote:
      'EGovC ist unser starker Partner in der digitalen Transformation. Ganzheitliche Strategien und Ansätze helfen uns, den Main-Kinzig-Kreis in das digitale Zeitalter zu heben. Gemeinsam mit uns, gestaltet EGovC unsere digitale Transformation auf Organisatorischer - und Leistungsebene. Weiter so!',
  },
  {
    name: 'Birte Kruse-Gobrecht',
    title: 'Bürgermeisterin Bargteheide a.D.',
    quote:
      'Gemeinsam gestalten – So würden wir die Zusammenarbeit mit EGovC beschreiben. Bedürfnisorientiert gestalten wir als Stadt Bargteheide, durch die Unterstützung von EGovC, unsere digitale Transformation.',
  },
  {
    name: 'Roland Lutz',
    title: 'Geschäftsführer medlytics GmbH',
    quote:
      'Vielen Dank, für eine fundierte und intensive Ausbildung zum „Digitalisierungsbeauftragten im Krankenhaus (KaDig)". Ihr habt uns praxisorientierte Inhalte, zeitgemäß und nachhaltig vermittelt. Wir konnten sofort von dem neuerlernten Wissen profitieren.',
  },
];

interface ReferencesSectionProps {
  references?: Reference[];
  title?: string;
  prevLabel?: string;
  nextLabel?: string;
  goToSlideLabel?: string;
}

export default function ReferencesSection({
  references,
  title = 'Referenzen',
  prevLabel = 'Vorheriger Slide',
  nextLabel = 'Nächster Slide',
  goToSlideLabel = 'Gehe zu Slide',
}: ReferencesSectionProps) {
  const testimonials = references && references.length > 0 ? references : fallbackTestimonials;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Formatiere Titel (mit Firma falls vorhanden)
  const formatTitle = (ref: Reference) => {
    if (ref.company) {
      return `${ref.title}, ${ref.company}`;
    }
    return ref.title;
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-[var(--egovc-dark)]">{title}</h2>
        <div className="w-24 h-1 bg-[var(--egovc-pink)] mb-12"></div>

        <div className="relative" ref={emblaRef}>
          <div className="flex gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id || index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                <div className="bg-gray-50 p-8 rounded-lg h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <FaQuoteLeft className="text-[var(--egovc-teal)] text-3xl flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed flex-1">{testimonial.quote}</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex items-center gap-4">
                    {testimonial.image?.url && (
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.image.url}
                          alt={testimonial.image.alt || testimonial.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-[var(--egovc-dark)]">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{formatTitle(testimonial)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-[var(--egovc-teal)] text-white hover:opacity-90 transition-opacity shadow-lg"
            aria-label={prevLabel}
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-[var(--egovc-teal)] text-white hover:opacity-90 transition-opacity shadow-lg"
            aria-label={nextLabel}
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex ? 'bg-[var(--egovc-pink)] w-8' : 'bg-gray-300'
              }`}
              aria-label={`${goToSlideLabel} ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
