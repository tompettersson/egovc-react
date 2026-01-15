'use client';

import { Value } from '@/lib/data/team';
import {
  Eye,
  Compass,
  Shield,
  Scale,
  Smile,
  Sparkles,
  Users,
  LucideIcon,
} from 'lucide-react';

// Icon mapping for each value
const valueIconMap: Record<string, LucideIcon> = {
  'Ehrlichkeit': Eye,
  'Honesty': Eye,
  'Mut': Compass,
  'Courage': Compass,
  'Vertrauen': Shield,
  'Trust': Shield,
  'Gleichheit': Scale,
  'Equality': Scale,
  'Spaß': Smile,
  'Fun': Smile,
  'Bescheidenheit': Sparkles,
  'Humility': Sparkles,
  'Teamgeist': Users,
  'Team Spirit': Users,
};

function getIconForValue(title: string): LucideIcon {
  return valueIconMap[title] || Sparkles;
}

interface TeamValuesSectionProps {
  values: Value[];
}

export default function TeamValuesSection({ values }: TeamValuesSectionProps) {
  return (
    <section className="bg-white py-12 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {values.map((value, index) => {
            const Icon = getIconForValue(value.title);
            return (
              <div key={index} className="group">
                {/* Icon */}
                <div className="mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--egovc-teal)] to-[var(--egovc-teal)]/70 flex items-center justify-center shadow-lg shadow-[var(--egovc-teal)]/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-[var(--egovc-dark)] group-hover:text-[var(--egovc-teal)] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-base font-semibold text-[var(--egovc-pink)] mb-3">
                  {value.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

