'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { useSiteSettings } from '@/lib/context/SiteSettingsContext';

// Fallback content for when CMS content is not available
function FallbackContent() {
  return (
    <div className="space-y-2">
      <p>EGovC GmbH</p>
      <p>Pfarrgasse 17</p>
      <p>64319 Pfungstadt</p>
      <p>Deutschland</p>
      <p></p>
      <p>Tel.: 06157 9130351</p>
      <p>E-Mail: info@egovc.de</p>
      <p></p>
      <p>Registergericht: Amtsgericht Darmstadt</p>
      <p>Registernummer: HRB 102414</p>
      <p>Steuernummer: 007 232 04832</p>
      <p></p>
      <p>Geschäftsführer: Adrian Sommer</p>
      <p></p>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE346376428</p>
      <p></p>
      <p>
        Plattform der EU-Kommission zur Online-Streitbeilegung:{' '}
        <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="text-[var(--egovc-pink)] hover:underline">
          https://ec.europa.eu/odr
        </a>
      </p>
      <p></p>
      <p>Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.</p>
    </div>
  );
}

export default function ImpressumDialog({ children }: { children: React.ReactNode }) {
  const { legalPages } = useSiteSettings();
  const impressum = legalPages?.impressum;
  const hasContent = impressum?.content && typeof impressum.content === 'object';

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {impressum?.title || 'Impressum'}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 text-gray-700">
          {hasContent ? (
            <div className="prose prose-sm max-w-none">
              <RichText data={impressum.content as any} />
            </div>
          ) : (
            <FallbackContent />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
