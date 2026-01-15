'use client';

import { Benefit } from '@/lib/data/karriere';
import { Building2, Clock, Users, TrendingUp, Heart, LucideIcon } from 'lucide-react';

// Icon mapping based on benefit title keywords
const iconMap: Record<string, LucideIcon> = {
  'Arbeitsplatz': Building2,
  'Workplace': Building2,
  'Vertrauensarbeitszeit': Clock,
  'Flexible': Clock,
  'Hierarchie': Users,
  'Hierarchy': Users,
  'Entwicklung': TrendingUp,
  'Development': TrendingUp,
  'Aufstieg': TrendingUp,
  'Atmosphäre': Heart,
  'Atmosphere': Heart,
};

function getIconForBenefit(title: string): LucideIcon {
  for (const [keyword, icon] of Object.entries(iconMap)) {
    if (title.toLowerCase().includes(keyword.toLowerCase())) {
      return icon;
    }
  }
  return Heart; // Default fallback
}

interface BenefitsSectionProps {
  benefits: Benefit[];
  sectionTitle?: string;
}

export default function BenefitsSection({ benefits, sectionTitle }: BenefitsSectionProps) {
  return (
    <section className="relative bg-[var(--egovc-dark)] text-white py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--egovc-pink)]/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--egovc-teal)]/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        {sectionTitle && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{sectionTitle}</h2>
            <div className="w-24 h-1 bg-[var(--egovc-pink)] mx-auto" />
          </div>
        )}

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {benefits.map((benefit, index) => {
            const Icon = getIconForBenefit(benefit.title);
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[var(--egovc-pink)]/50 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--egovc-pink)] to-[var(--egovc-pink)]/70 flex items-center justify-center shadow-lg shadow-[var(--egovc-pink)]/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--egovc-teal)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[var(--egovc-pink)] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {benefit.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[var(--egovc-pink)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

