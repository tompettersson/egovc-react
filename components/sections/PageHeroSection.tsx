interface PageHeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export default function PageHeroSection({
  title,
  subtitle,
  backgroundImage,
}: PageHeroSectionProps) {
  return (
    <section className="relative min-h-[600px] bg-[var(--egovc-dark)] text-white overflow-hidden flex items-center">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          {/* Leichte Abdunkelung nur wenn nötig */}
          <div className="absolute inset-0 bg-[var(--egovc-dark)] opacity-40"></div>
        </div>
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--egovc-dark)] via-gray-900 to-[var(--egovc-dark)] opacity-90"></div>
      )}

      {/* Vertically centered content container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>
          <div className="w-24 h-1 bg-[var(--egovc-pink)] mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
