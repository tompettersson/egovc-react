'use client';

import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaXing } from 'react-icons/fa';
import ImpressumDialog from './dialogs/ImpressumDialog';
import DatenschutzDialog from './dialogs/DatenschutzDialog';
import WiderrufDialog from './dialogs/WiderrufDialog';
import { useSiteSettings } from '@/lib/context/SiteSettingsContext';
import { useDictionary } from '@/lib/context/DictionaryContext';

const socialIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  facebook: FaFacebook,
  instagram: FaInstagram,
  youtube: FaYoutube,
  xing: FaXing,
};

export default function Footer() {
  const { settings } = useSiteSettings();
  const { dictionary: dict, locale } = useDictionary();

  // Adresse aus Settings oder Fallback
  const address = settings?.address || {
    street: 'Pfarrgasse 17',
    zip: '64319',
    city: 'Pfungstadt',
    country: 'Deutschland',
  };

  const phone = settings?.phone || '+49 6157 9130351';
  const email = settings?.email || 'info@egovc.de';
  const agbPdfUrl = settings?.agbPdfUrl || 'https://egovc.de/wp-content/uploads/2024/07/AGB_EGOVC_GmbH.pdf';

  // Newsletter-Texte aus Dictionary (Settings sind nicht lokalisiert)
  const newsletterTitle = dict.footer.newsletter.title;
  const newsletterPlaceholder = dict.footer.newsletter.placeholder;
  const newsletterButtonLabel = dict.footer.newsletter.button;

  // Social Links aus Settings (nur die mit URL)
  const socialLinks = settings?.socialLinks?.filter((link) => link.url) || [];

  return (
    <footer className="bg-[var(--egovc-dark)] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Legal Links */}
          <nav aria-label={locale === 'de' ? 'Rechtliche Informationen' : 'Legal information'}>
            <h3 className="font-semibold mb-4">{dict.footer.legal}</h3>
            <ul className="space-y-2" role="list">
              <li>
                <ImpressumDialog>
                  <button className="text-gray-300 hover:text-[var(--egovc-pink)] transition-colors text-left focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)] focus:ring-offset-2 focus:ring-offset-[var(--egovc-dark)] rounded">
                    {dict.footer.imprint}
                  </button>
                </ImpressumDialog>
              </li>
              <li>
                <DatenschutzDialog>
                  <button className="text-gray-300 hover:text-[var(--egovc-pink)] transition-colors text-left focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)] focus:ring-offset-2 focus:ring-offset-[var(--egovc-dark)] rounded">
                    {dict.footer.privacy}
                  </button>
                </DatenschutzDialog>
              </li>
              <li>
                <Link
                  href={agbPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${dict.footer.terms} (${locale === 'de' ? 'PDF, öffnet in neuem Tab' : 'PDF, opens in new tab'})`}
                  className="text-gray-300 hover:text-[var(--egovc-pink)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)] focus:ring-offset-2 focus:ring-offset-[var(--egovc-dark)] rounded"
                >
                  {dict.footer.terms}
                </Link>
              </li>
              <li>
                <WiderrufDialog>
                  <button className="text-gray-300 hover:text-[var(--egovc-pink)] transition-colors text-left focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)] focus:ring-offset-2 focus:ring-offset-[var(--egovc-dark)] rounded">
                    {dict.footer.revocation}
                  </button>
                </WiderrufDialog>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{dict.footer.contact}</h3>
            <address className="text-gray-300 not-italic space-y-2">
              <p>{address.street}</p>
              <p>{address.zip} {address.city}</p>
              <p>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-[var(--egovc-pink)] transition-colors">
                  {phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${email}`} className="hover:text-[var(--egovc-pink)] transition-colors">
                  {email}
                </a>
              </p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4" id="newsletter-heading">{newsletterTitle}</h3>
            <form className="space-y-3" aria-labelledby="newsletter-heading">
              <div>
                <label htmlFor="newsletter-email" className="sr-only">{newsletterPlaceholder}</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder={newsletterPlaceholder}
                  autoComplete="email"
                  aria-required="true"
                  className="w-full px-4 py-2 bg-white text-[var(--egovc-dark)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--egovc-pink)] text-white px-4 py-2 rounded hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)] focus:ring-offset-2 focus:ring-offset-[var(--egovc-dark)]"
              >
                {newsletterButtonLabel}
              </button>
            </form>
            {socialLinks.length > 0 && (
              <nav className="flex gap-4 mt-6" aria-label={locale === 'de' ? 'Social Media Links' : 'Social media links'}>
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.platform];
                  if (!Icon) return null;
                  const platformName = social.platform.charAt(0).toUpperCase() + social.platform.slice(1);
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${platformName} (${locale === 'de' ? 'öffnet in neuem Tab' : 'opens in new tab'})`}
                      className="text-gray-300 hover:text-[var(--egovc-pink)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--egovc-pink)] focus:ring-offset-2 focus:ring-offset-[var(--egovc-dark)] rounded"
                    >
                      <Icon size={20} aria-hidden="true" />
                    </a>
                  );
                })}
              </nav>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
