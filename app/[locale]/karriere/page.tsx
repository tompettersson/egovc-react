import { Metadata } from 'next';
import IntroSection from '@/components/sections/IntroSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import JobOpeningsSection from '@/components/sections/JobOpeningsSection';
import CTASection from '@/components/sections/CTASection';
import { karriereData } from '@/lib/data/karriere';
import { getCachedGlobal } from '@/lib/payload/cached-queries';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { type Locale } from '@/lib/i18n/config';

type Props = {
  params: Promise<{ locale: string }>;
};

// SEO Metadata
export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const dict = getDictionary(locale as Locale);
  const data = await getCachedGlobal('career-page');

  const title = locale === 'en' ? 'Career' : 'Karriere';
  const ogLocale = locale === 'en' ? 'en_US' : 'de_DE';

  return {
    title: data?.seo?.metaTitle || `${title} | EGovC`,
    description: data?.seo?.metaDescription || dict.career.intro.paragraphs[0],
    openGraph: {
      title: data?.seo?.metaTitle || `${title} | EGovC`,
      description: data?.seo?.metaDescription || dict.career.intro.paragraphs[0],
      type: 'website',
      locale: ogLocale,
    },
    robots: data?.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function KarrierePage(props: Props) {
  const { locale } = await props.params;
  const dict = getDictionary(locale as Locale);

  const payloadData = await getCachedGlobal('career-page');
  const fallbackData = karriereData;

  // Use dictionary for localized content, Payload only for non-localized data (job openings)
  const data = {
    intro: {
      title: dict.career.intro.title,
      description: dict.career.intro.paragraphs.join('\n\n'),
    },
    benefits: dict.career.benefits,
    expectations: {
      title: dict.career.expectations.title,
      description: dict.career.expectations.description,
    },
    jobOpeningsTitle: dict.career.jobOpeningsTitle,
    // Job openings come from Payload or fallback (not localized)
    jobOpenings: payloadData?.jobOpenings
      ? (payloadData.jobOpenings as any[]).map((job: any) => ({
          title: job.title,
          description: job.description,
          callToAction: job.callToAction,
          additionalText: job.additionalText,
          tasks: job.tasks?.map((t: any) => t.task),
          profile: job.profile?.map((p: any) => p.requirement),
          benefits: job.jobBenefits?.map((b: any) => b.benefit),
          pdfUrl: job.pdfUrl,
        }))
      : fallbackData.jobOpenings,
  };

  return (
    <>
      <IntroSection
        title={data.intro.title}
        description={data.intro.description}
      />
      <BenefitsSection benefits={data.benefits} />
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-[var(--egovc-dark)]">
                {data.expectations.title.split('\n').map((line: string, i: number) => (
                  <span key={i}>
                    {line}
                    {i < data.expectations.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <div className="w-24 h-1 bg-[var(--egovc-pink)] mb-6"></div>
            </div>
            <div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {data.expectations.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <JobOpeningsSection
        jobOpenings={data.jobOpenings}
        title={data.jobOpeningsTitle}
        tasksLabel={dict.career.jobLabels.tasks}
        profileLabel={dict.career.jobLabels.profile}
        benefitsLabel={dict.career.jobLabels.benefits}
        downloadLabel={dict.career.jobLabels.download}
      />
      <CTASection
        title={dict.cta.title}
        subtitle={dict.cta.subtitle}
        buttonLabel={dict.cta.button}
      />
    </>
  );
}
