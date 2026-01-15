'use client';

import Image from 'next/image';

interface CareerHeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

// Unsplash CDN URL for hero image (Photo by Vitaly Gariev - team collaboration)
const UNSPLASH_HERO_URL = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80&fit=crop';

export default function CareerHeroSection({
  title,
  subtitle,
  backgroundImage = UNSPLASH_HERO_URL,
}: CareerHeroSectionProps) {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Team collaboration"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Sophisticated gradient overlay - dark left side for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--egovc-dark)] via-[var(--egovc-dark)]/70 to-transparent" />
        {/* Bottom gradient for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--egovc-dark)]/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full">
        <div className="flex items-center min-h-[60vh] lg:min-h-[70vh]">
          <div className="max-w-2xl py-16 lg:py-24">
            {/* Decorative element */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-[var(--egovc-pink)]" />
              <span className="text-[var(--egovc-pink)] font-medium tracking-wider uppercase text-sm">
                Karriere bei EGovC
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
                {subtitle}
              </p>
            )}

            {/* Scroll indicator */}
            <div className="mt-12 flex items-center gap-2 text-gray-400">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
              </div>
              <span className="text-sm">Scroll</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
