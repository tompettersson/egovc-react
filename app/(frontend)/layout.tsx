import type { Metadata, Viewport } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getCachedGlobal, getCachedLegalPages } from "@/lib/payload/cached-queries";
import { SiteSettingsProvider } from "@/lib/context/SiteSettingsContext";
import type { SiteSettings, LegalPagesData } from "@/lib/types";
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema } from "@/lib/seo/schema";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://egovc.de';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#e91e63',
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'EGovC – We Create Future | Digitale Transformation',
    template: '%s | EGovC',
  },
  description: 'EGovC ist Ihr Partner für ganzheitliche digitale Transformation im öffentlichen Sektor. Wir unterstützen Verwaltung, Gesundheitswesen und Kirche bei der Digitalisierung.',
  keywords: [
    'Digitale Transformation',
    'E-Government',
    'Öffentliche Verwaltung',
    'Digitalisierung',
    'Gesundheitswesen',
    'Kirche',
    'OZG',
    'Public Sector',
    'Beratung',
    'OMNIA',
    'EGovC',
  ],
  authors: [{ name: 'EGovC GmbH', url: BASE_URL }],
  creator: 'EGovC GmbH',
  publisher: 'EGovC GmbH',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: 'en_US',
    url: BASE_URL,
    siteName: 'EGovC',
    title: 'EGovC – We Create Future | Digitale Transformation',
    description: 'Ihr Partner für digitale Transformation im öffentlichen Sektor. Beratung, Software und Netzwerk für Verwaltung, Gesundheitswesen und Kirche.',
    images: [
      {
        url: `${BASE_URL}/images/heroes/Start-Hero.jpg`,
        width: 1200,
        height: 630,
        alt: 'EGovC - Digitale Transformation für den öffentlichen Sektor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EGovC – We Create Future',
    description: 'Digitale Transformation für den öffentlichen Sektor',
    images: [`${BASE_URL}/images/heroes/Start-Hero.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'de-DE': `${BASE_URL}/de`,
      'en-US': `${BASE_URL}/en`,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
};

async function getSiteData(): Promise<{ settings: SiteSettings | null; legalPages: LegalPagesData | null }> {
  try {
    const [siteSettings, legalPagesData] = await Promise.all([
      getCachedGlobal('site-settings'),
      getCachedLegalPages(),
    ]);

    // Map Payload data to existing SiteSettings format
    const settings: SiteSettings = {
      companyName: siteSettings?.companyName || undefined,
      address: siteSettings?.address ? {
        street: siteSettings.address.street || undefined,
        zip: siteSettings.address.zip || undefined,
        city: siteSettings.address.city || undefined,
        country: siteSettings.address.country || undefined,
      } : undefined,
      phone: siteSettings?.phone || undefined,
      email: siteSettings?.email || undefined,
      registry: siteSettings?.registry ? {
        court: siteSettings.registry.court || undefined,
        number: siteSettings.registry.number || undefined,
        taxNumber: siteSettings.registry.taxNumber || undefined,
        vatId: siteSettings.registry.vatId || undefined,
      } : undefined,
      ceo: siteSettings?.ceo || undefined,
      odrLink: siteSettings?.odrLink || undefined,
      disputeResolutionText: siteSettings?.disputeResolutionText || undefined,
      contactPerson: siteSettings?.contactPerson ? {
        name: siteSettings.contactPerson.name || undefined,
        phone: siteSettings.contactPerson.phone || undefined,
        email: siteSettings.contactPerson.email || undefined,
      } : undefined,
      bookingUrl: siteSettings?.bookingUrl || undefined,
      agbPdfUrl: siteSettings?.agbPdfUrl || undefined,
      newsletterTitle: siteSettings?.newsletterTitle || undefined,
      newsletterPlaceholder: siteSettings?.newsletterPlaceholder || undefined,
      newsletterButtonLabel: siteSettings?.newsletterButtonLabel || undefined,
      socialLinks: (siteSettings?.socialLinks as any[])?.map((link) => ({
        platform: link.platform,
        url: link.url || undefined,
      })),
    };

    // Map legal pages
    const legalPages: LegalPagesData = {
      impressum: legalPagesData?.impressum ? {
        title: legalPagesData.impressum.title,
        content: legalPagesData.impressum.content,
      } : undefined,
      datenschutz: legalPagesData?.datenschutz ? {
        title: legalPagesData.datenschutz.title,
        content: legalPagesData.datenschutz.content,
      } : undefined,
      widerruf: legalPagesData?.widerruf ? {
        title: legalPagesData.widerruf.title,
        content: legalPagesData.widerruf.content,
      } : undefined,
    };

    return { settings, legalPages };
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return { settings: null, legalPages: null };
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params?: Promise<{ locale?: string }>;
}>) {
  const { settings, legalPages } = await getSiteData();
  const resolvedParams = params ? await params : {};
  const locale = resolvedParams.locale || 'de';

  return (
    <html lang={locale}>
      <head>
        <OrganizationSchema />
        <WebsiteSchema locale={locale} />
        <LocalBusinessSchema />
      </head>
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <SiteSettingsProvider settings={settings} legalPages={legalPages}>
          {children}
        </SiteSettingsProvider>
      </body>
    </html>
  );
}
