import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import ThreePillarsSection from '@/components/sections/ThreePillarsSection';
import VideoFaqSection from '@/components/sections/VideoFaqSection';
import VisionMissionSection from '@/components/sections/VisionMissionSection';
import ValuesSection from '@/components/sections/ValuesSection';
import BrochureSection from '@/components/sections/BrochureSection';
import ReferencesSection from '@/components/sections/ReferencesSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import CTASection from '@/components/sections/CTASection';
import { getCachedGlobal, getCachedReferences } from '@/lib/payload/cached-queries';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { type Locale } from '@/lib/i18n/config';

type Props = {
  params: Promise<{ locale: string }>;
};

// SEO Metadata
export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const data = await getCachedGlobal('homepage');
  const dict = getDictionary(locale as Locale);

  return {
    title: data?.seo?.metaTitle || 'EGovC - Digitale Transformation für Verwaltung, Gesundheit & Kirche',
    description: data?.seo?.metaDescription || dict.hero.subtitle,
    openGraph: {
      title: data?.seo?.metaTitle || 'EGovC - Digitale Transformation',
      description: data?.seo?.metaDescription || dict.hero.subtitle,
      type: 'website',
      locale: locale === 'de' ? 'de_DE' : 'en_US',
    },
  };
}

export default async function Home(props: Props) {
  const { locale } = await props.params;
  const dict = getDictionary(locale as Locale);

  const [homepageData, references] = await Promise.all([
    getCachedGlobal('homepage'),
    getCachedReferences(),
  ]);

  // Use dictionary as primary source for text (CMS is not localized)
  // Payload only provides images and structural data
  const heroTitle = dict.hero.title;
  const heroSubtitle = dict.hero.subtitle;

  // Use dictionary titles for Three Pillars (translated)
  const threePillarsItems = [
    {
      title: dict.pillars.verwaltung.title,
      href: '/verwaltung',
      image: homepageData?.threePillars?.items?.[0]?.icon,
    },
    {
      title: dict.pillars.gesundheitswesen.title,
      href: '/gesundheitswesen',
      image: homepageData?.threePillars?.items?.[1]?.icon,
    },
    {
      title: dict.pillars.kirche.title,
      href: '/kirche',
      image: homepageData?.threePillars?.items?.[2]?.icon,
    },
  ];

  // Use dictionary values as primary source (CMS is not localized)
  const valuesItems = dict.values.items.map((item, index) => ({
    title: item.title,
    description: item.description,
    // Use icons from Payload if available
    icon: homepageData?.values?.items?.[index]?.icon,
  }));

  // Use dictionary FAQ items
  const faqItems = dict.faq.items;

  // Vision/Mission/Ethics - use dictionary
  const visionMissionItems = [
    { title: dict.visionMission.vision.title, description: dict.visionMission.vision.description },
    { title: dict.visionMission.mission.title, description: dict.visionMission.mission.description },
    { title: dict.visionMission.ethik.title, description: dict.visionMission.ethik.description },
  ];

  return (
    <>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
      />
      <ThreePillarsSection
        buttonLabel={dict.pillars.verwaltung.button}
        items={threePillarsItems}
        locale={locale}
      />
      <VideoFaqSection
        faqTitle={dict.faq.title}
        faqItems={faqItems}
        playVideoLabel={dict.ui.playVideo}
      />
      <VisionMissionSection items={visionMissionItems} />
      <ValuesSection
        title={dict.values.title}
        subtitle={dict.values.subtitle}
        items={valuesItems}
      />
      <BrochureSection
        title={dict.brochure.title}
        description={dict.brochure.description}
        buttonLabel={dict.brochure.button}
      />
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
