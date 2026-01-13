import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkipToContent from '@/components/accessibility/SkipToContent';
import { locales, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { DictionaryProvider } from '@/lib/context/DictionaryContext';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const dict = getDictionary(locale as Locale);

  return {
    title: 'EGovC – We Create Future',
    description: dict.hero.subtitle,
  };
}

export default async function LocaleLayout(props: Props) {
  const { locale } = await props.params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);

  return (
    <DictionaryProvider dictionary={dictionary} locale={locale as Locale}>
      <SkipToContent />
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {props.children}
      </main>
      <Footer />
    </DictionaryProvider>
  );
}
