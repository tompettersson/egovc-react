import { Metadata } from 'next';
import PageHeroSection from '@/components/sections/PageHeroSection';
import LabeledSection from '@/components/sections/LabeledSection';
import TopicFieldsSection from '@/components/sections/TopicFieldsSection';
import CTASection from '@/components/sections/CTASection';
import { getCachedGlobal } from '@/lib/payload/cached-queries';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { type Locale } from '@/lib/i18n/config';

type Props = {
  params: Promise<{ locale: string }>;
};

// SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  const data = await getCachedGlobal('network-page');

  return {
    title: data?.seo?.metaTitle || 'EGovC Network | Digitale Transformation gemeinsam gestalten',
    description: data?.seo?.metaDescription || 'Das EGovC Network verbindet Experten aus Verwaltung, Gesundheit und Kirche für erfolgreiche digitale Transformation.',
    openGraph: {
      title: data?.seo?.metaTitle || 'EGovC Network',
      description: data?.seo?.metaDescription || 'Gemeinsam die digitale Zukunft gestalten.',
      type: 'website',
      locale: 'de_DE',
      ...(data?.seo?.ogImage?.asset?.url && {
        images: [{ url: data.seo.ogImage.asset.url, width: 1200, height: 630 }],
      }),
    },
    robots: data?.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function NetworkPage(props: Props) {
  const { locale } = await props.params;
  const dict = getDictionary(locale as Locale);

  // Use dictionary for all localized content
  const data = {
    hero: {
      title: dict.network.hero.title,
      subtitle: dict.network.hero.subtitle,
      description: dict.network.hero.description,
    },
    about: {
      label: dict.network.about.label,
      title: dict.network.about.title,
      description: dict.network.about.description,
    },
    visionMission: {
      title: dict.network.visionMission.title,
      description: dict.network.visionMission.description,
    },
    solutions: {
      label: dict.network.solutions.label,
      title: dict.network.solutions.title,
      description: dict.network.solutions.description,
    },
    topics: {
      title: dict.network.topics.title,
      fields: dict.network.topics.fields,
    },
  };

  return (
    <>
      <PageHeroSection
        title={data.hero.title}
        subtitle={data.hero.subtitle}
      />
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            {data.hero.description}
          </p>
        </div>
      </section>
      <LabeledSection
        label={data.about.label}
        title={data.about.title}
        description={data.about.description}
      />
      <section className="bg-[var(--egovc-dark)] text-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">{data.visionMission.title}</h2>
              <div className="w-24 h-1 bg-[var(--egovc-pink)] mb-6"></div>
            </div>
            <div>
              {data.visionMission.description.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <LabeledSection
        label={data.solutions.label}
        title={data.solutions.title}
        description={data.solutions.description}
      />
      <TopicFieldsSection title={data.topics.title} fields={data.topics.fields} />
      <CTASection
        title={dict.cta.title}
        subtitle={dict.cta.subtitle}
        buttonLabel={dict.cta.button}
      />
    </>
  );
}


