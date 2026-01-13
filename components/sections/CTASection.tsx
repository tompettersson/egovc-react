'use client';

import ContactDialog from '@/components/dialogs/ContactDialog';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
}

export default function CTASection({
  title = 'Sind Sie bereit für Ihre digitale Zukunft?',
  subtitle = 'Dann kontaktieren Sie uns jetzt für ein unverbindliches Erstgespräch!',
  buttonLabel = 'Kontakt',
}: CTASectionProps) {
  return (
    <section className="bg-[var(--egovc-teal)] text-white py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-xl mb-8 text-white/90">
          {subtitle}
        </p>
        <ContactDialog>
          <button className="inline-block bg-[var(--egovc-pink)] text-white px-8 py-4 rounded hover:opacity-90 transition-opacity font-semibold text-lg">
            {buttonLabel}
          </button>
        </ContactDialog>
      </div>
    </section>
  );
}
