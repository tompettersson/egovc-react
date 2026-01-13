import { Value } from '@/lib/data/team';

interface TeamValuesSectionProps {
  values: Value[];
}

export default function TeamValuesSection({ values }: TeamValuesSectionProps) {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-3 text-[var(--egovc-dark)]">{value.title}</h3>
              <p className="text-lg font-semibold text-[var(--egovc-pink)] mb-3">{value.subtitle}</p>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

