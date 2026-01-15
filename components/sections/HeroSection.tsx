interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

export default function HeroSection({ 
  title = 'Starten Sie mit\nuns Ihre digitale\nTransformation',
  subtitle = 'Wir unterstützen Sie bei der ganzheitlichen digitalen Transformation und bei der operativen und technischen Umsetzung der Leistungsdigitalisierung.'
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[600px] bg-[var(--egovc-dark)] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--egovc-dark)] via-gray-900 to-[var(--egovc-dark)] opacity-90">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
      </div>

      {/* Vertically centered content container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 min-h-[600px] flex items-center">
        <div className="max-w-4xl py-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split('\n').length - 1 && <br />}
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
