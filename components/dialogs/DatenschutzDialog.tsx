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
      <p>
        Die Nutzung unserer Seite ist ohne eine Angabe von personenbezogenen Daten möglich.
        Für die Nutzung einzelner Funktionen unserer Seite können sich hierfür abweichende Regelungen ergeben,
        die in diesem Fall nachstehend gesondert erläutert werden.
      </p>
      <p>
        Ihre personenbezogenen Daten (z.B. Name, Anschrift, E-Mail, Telefonnummer, u.ä.) werden von uns
        nur gemäß den Bestimmungen des deutschen Datenschutzrechts verarbeitet.
      </p>
      <p className="font-semibold mt-6">Kontaktformular</p>
      <p>
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
        inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert.
      </p>
      <p className="font-semibold mt-6">Newsletter</p>
      <p>
        Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine
        E-Mail-Adresse sowie Informationen zur Überprüfung.
      </p>
      <p className="font-semibold mt-6">Verantwortliche Stelle</p>
      <p>
        EGovC GmbH<br />
        Pfarrgasse 17<br />
        64319 Pfungstadt<br />
        E-Mail: info@egovc.de
      </p>
    </div>
  );
}

export default function DatenschutzDialog({ children }: { children: React.ReactNode }) {
  const { legalPages } = useSiteSettings();
  const datenschutz = legalPages?.datenschutz;
  const hasContent = datenschutz?.content && typeof datenschutz.content === 'object';

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {datenschutz?.title || 'Datenschutzerklärung'}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 text-gray-700">
          {hasContent ? (
            <div className="prose prose-sm max-w-none">
              <RichText data={datenschutz.content as any} />
            </div>
          ) : (
            <FallbackContent />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
