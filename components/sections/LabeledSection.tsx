interface LabeledSectionProps {
  label?: string;
  title: string;
  description: string;
  backgroundColor?: 'white' | 'dark';
  className?: string;
}

export default function LabeledSection({
  label,
  title,
  description,
  backgroundColor = 'white',
  className = '',
}: LabeledSectionProps) {
  const bgClass = backgroundColor === 'dark' ? 'bg-[var(--egovc-dark)] text-white' : 'bg-white';
  const textColor = backgroundColor === 'dark' ? 'text-white' : 'text-[var(--egovc-dark)]';
  const descColor = backgroundColor === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <section className={`${bgClass} py-20 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        {label && (
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--egovc-pink)] mb-4">
            {label}
          </p>
        )}
        <h2 className={`text-4xl font-bold mb-4 ${textColor}`}>{title}</h2>
        <div className="w-24 h-1 bg-[var(--egovc-pink)] mb-6"></div>
        <div className="prose prose-lg max-w-none">
          {description.split('\n\n').map((paragraph, index) => (
            <p key={index} className={`${descColor} mb-4 leading-relaxed`}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}


