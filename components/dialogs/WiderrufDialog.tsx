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
    <div className="text-sm space-y-4">
      <p className="font-semibold">Widerrufsrecht</p>
      <p>
        Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
      </p>
      <p>
        Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter,
        der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat.
      </p>
      <p className="font-semibold mt-6">Folgen des Widerrufs</p>
      <p>
        Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben,
        unverzüglich und spätestens binnen vierzehn Tagen zurückzuzahlen.
      </p>
    </div>
  );
}

export default function WiderrufDialog({ children }: { children: React.ReactNode }) {
  const { legalPages } = useSiteSettings();
  const widerruf = legalPages?.widerruf;
  const hasContent = widerruf?.content && typeof widerruf.content === 'object';

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {widerruf?.title || 'Widerrufsbelehrung'}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 text-gray-700">
          {hasContent ? (
            <div className="prose prose-sm max-w-none">
              <RichText data={widerruf.content as any} />
            </div>
          ) : (
            <FallbackContent />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
