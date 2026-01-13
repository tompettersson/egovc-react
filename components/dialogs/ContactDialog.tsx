'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useSiteSettings } from '@/lib/context/SiteSettingsContext';

export default function ContactDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const { settings } = useSiteSettings();

  // Daten aus Settings oder Fallbacks
  const companyName = settings?.companyName || 'EGovC GmbH';
  const address = {
    street: settings?.address?.street || 'Pfarrgasse 17',
    zip: settings?.address?.zip || '64319',
    city: settings?.address?.city || 'Pfungstadt',
  };
  const contactPerson = {
    name: settings?.contactPerson?.name || 'Adrian Sommer',
    phone: settings?.contactPerson?.phone || '+49 173 8182888',
    email: settings?.contactPerson?.email || 'adrian.sommer@egovc.de',
  };
  const bookingUrl = settings?.bookingUrl ||
    'https://outlook.office365.com/owa/calendar/termin@egovc.de/bookings/s/DNXV1B_gFUu19ec_kP1jvQ2';

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-6xl w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">Kontakt</DialogTitle>
          <DialogDescription>Wir freuen uns auf Ihre Nachricht</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {/* Termin buchen */}
          <div>
            <h3 className="text-xl font-bold mb-2">Termin buchen</h3>
            <p className="text-gray-600 mb-4">Lernen Sie uns in einem persönlichen Gespräch kennen!</p>
            <Button asChild className="w-full bg-[var(--egovc-pink)] hover:opacity-90">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Jetzt Termin buchen
              </a>
            </Button>
          </div>

          {/* Nachricht */}
          <div>
            <h3 className="text-xl font-bold mb-2" id="contact-form-heading">Nachricht</h3>
            <p className="text-gray-600 mb-4" id="contact-form-description">Sie möchten uns etwas mitteilen oder fragen? Sehr gerne.</p>
            <form className="space-y-4" aria-labelledby="contact-form-heading" aria-describedby="contact-form-description">
              <div>
                <label htmlFor="contact-name" className="sr-only">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Name"
                  aria-required="true"
                  autoComplete="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)]"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">E-Mail</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="E-Mail"
                  aria-required="true"
                  autoComplete="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)]"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">Nachricht</label>
                <textarea
                  id="contact-message"
                  placeholder="Nachricht"
                  rows={4}
                  aria-required="true"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)]"
                />
              </div>
              <Button type="submit" className="w-full bg-[var(--egovc-pink)] hover:opacity-90">
                Senden
              </Button>
            </form>
          </div>

          {/* Kontaktdaten */}
          <div>
            <h3 className="text-xl font-bold mb-2">Kontaktdaten</h3>
            <div className="space-y-2 text-gray-600">
              <p>{companyName}</p>
              <p>{address.street}</p>
              <p>{address.zip} {address.city}</p>
              <p className="mt-4">
                <strong>{contactPerson.name}</strong>
              </p>
              <p>
                <a href={`tel:${contactPerson.phone.replace(/\s/g, '')}`} className="hover:text-[var(--egovc-pink)]">
                  {contactPerson.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${contactPerson.email}`} className="hover:text-[var(--egovc-pink)]">
                  {contactPerson.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
