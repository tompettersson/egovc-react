import { Metadata } from 'next';
import PageHeroSection from '@/components/sections/PageHeroSection';
import IntroSection from '@/components/sections/IntroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import NetworkSection from '@/components/sections/NetworkSection';
import ReferencesSection from '@/components/sections/ReferencesSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import CTASection from '@/components/sections/CTASection';
import { pagesData } from '@/lib/data/pages';
import { getCachedSectorPage, getCachedReferences } from '@/lib/payload/cached-queries';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { type Locale } from '@/lib/i18n/config';

type Props = {
  params: Promise<{ locale: string }>;
};

// SEO Metadata
export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const data = await getCachedSectorPage('kirche');

  const title = locale === 'en' ? 'Church' : 'Kirche';
  const ogLocale = locale === 'en' ? 'en_US' : 'de_DE';

  return {
    title: data?.seo?.metaTitle || `${title} | EGovC`,
    description: data?.seo?.metaDescription || (locale === 'en'
      ? 'Digitization for church organizations. Modern solutions for parishes and institutions.'
      : 'Digitalisierung für kirchliche Organisationen. Moderne Lösungen für Gemeinden und Institutionen.'),
    openGraph: {
      title: data?.seo?.metaTitle || `${title} | EGovC`,
      description: data?.seo?.metaDescription || (locale === 'en'
        ? 'Digital transformation for church organizations.'
        : 'Digitale Transformation für kirchliche Organisationen.'),
      type: 'website',
      locale: ogLocale,
    },
    robots: data?.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function KirchePage(props: Props) {
  const { locale } = await props.params;
  const dict = getDictionary(locale as Locale);

  const [payloadData, references] = await Promise.all([
    getCachedSectorPage('kirche'),
    getCachedReferences(),
  ]);
  const fallbackData = pagesData.kirche;

  const data = payloadData ? {
    hero: {
      title: payloadData.hero?.title || fallbackData.hero.title,
      subtitle: payloadData.hero?.subtitle || fallbackData.hero.subtitle,
      backgroundImage: fallbackData.hero.backgroundImage,
    },
    intro: {
      title: payloadData.intro?.title || fallbackData.intro.title,
      subtitle: payloadData.intro?.subtitle || fallbackData.intro.subtitle,
      description: payloadData.intro?.description || fallbackData.intro.description,
    },
    sections: (payloadData.sections as any[])?.length > 0
      ? (payloadData.sections as any[]).map((section: any) => ({
          title: section.title,
          items: section.items?.map((item: any) => ({
            title: item.title,
            description: item.description,
            actionType: item.actionType,
            actionLabel: item.actionLabel,
            actionUrl: item.actionUrl,
          })) || [],
        }))
      : fallbackData.sections,
    network: payloadData.network ? {
      title: payloadData.network.title,
      description: payloadData.network.description,
      linkUrl: payloadData.network.linkUrl,
      linkLabel: payloadData.network.linkLabel,
    } : fallbackData.network,
  } : fallbackData;

  return (
    <>
      <PageHeroSection
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        backgroundImage={data.hero.backgroundImage}
      />
      <IntroSection
        title={data.intro.title}
        subtitle={data.intro.subtitle}
        description={data.intro.description}
      />
      {data.sections.map((section, index) => (
        <ServicesSection key={index} title={section.title} items={section.items} />
      ))}
      {data.network && (
        <NetworkSection
          title={data.network.title}
          description={data.network.description}
          linkUrl={data.network.linkUrl}
          linkLabel={data.network.linkLabel}
        />
      )}
      <ReferencesSection
        references={references}
        title={dict.references.title}
        prevLabel={dict.ui.previousSlide}
        nextLabel={dict.ui.nextSlide}
        goToSlideLabel={dict.ui.goToSlide}
      />
      <CaseStudiesSection items={dict.caseStudies.items} />
      <CTASection
        title={dict.cta.title}
        subtitle={dict.cta.subtitle}
        buttonLabel={dict.cta.button}
      />
    </>
  );
}
