import { TopicField } from '@/lib/data/network';

interface TopicFieldsSectionProps {
  title: string;
  fields: TopicField[];
}

export default function TopicFieldsSection({ title, fields }: TopicFieldsSectionProps) {
  return (
    <section className="bg-[var(--egovc-dark)] text-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <div className="w-24 h-1 bg-[var(--egovc-pink)] mb-12"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {fields.map((field) => (
            <div
              key={field.id}
              className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-lg font-semibold">{field.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


