interface IntroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
}

export default function IntroSection({ title, subtitle, description }: IntroSectionProps) {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-[var(--egovc-dark)]">{title}</h2>
        <div className="w-24 h-1 bg-[var(--egovc-pink)] mb-6"></div>
        {subtitle && (
          <p className="text-lg font-semibold text-[var(--egovc-pink)] mb-4">{subtitle}</p>
        )}
        <div className="prose prose-lg max-w-none">
          {description.split('\n\n').map((paragraph, index) => {
            // Simple markdown support: **bold** and [text](url)
            const parts = paragraph.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
            return (
              <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                {parts.map((part, i) => {
                  // Bold text: **text**
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return (
                      <strong key={i} className="font-semibold">
                        {part.slice(2, -2)}
                      </strong>
                    );
                  }
                  // Link: [text](url)
                  const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
                  if (linkMatch) {
                    return (
                      <a
                        key={i}
                        href={linkMatch[2]}
                        className="font-semibold text-[var(--egovc-pink)] hover:underline"
                      >
                        {linkMatch[1]}
                      </a>
                    );
                  }
                  return <span key={i}>{part}</span>;
                })}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}

