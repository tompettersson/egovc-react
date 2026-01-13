import { Metadata } from 'next';
import PageHeroSection from '@/components/sections/PageHeroSection';
import WhitepaperClientContent from './WhitepaperClientContent';
import CTASection from '@/components/sections/CTASection';
import { whitepaperData } from '@/lib/data/whitepaper';
import { getCachedGlobal, getCachedWhitepapers } from '@/lib/payload/cached-queries';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { type Locale } from '@/lib/i18n/config';

type Props = {
  params: Promise<{ locale: string }>;
};

// SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getCachedGlobal('whitepaper-page');

  return {
    title: pageData?.seo?.metaTitle || 'Whitepaper | EGovC - Wissen zur Digitalisierung',
    description: pageData?.seo?.metaDescription || 'Kostenlose Whitepaper und Podcasts zu E-Government, Digitalisierung und digitaler Transformation.',
    openGraph: {
      title: pageData?.seo?.metaTitle || 'Whitepaper | EGovC',
      description: pageData?.seo?.metaDescription || 'Fachwissen zur digitalen Transformation.',
      type: 'website',
      locale: 'de_DE',
      ...(pageData?.seo?.ogImage?.asset?.url && {
        images: [{ url: pageData.seo.ogImage.asset.url, width: 1200, height: 630 }],
      }),
    },
    robots: pageData?.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function WhitepaperPage(props: Props) {
  const { locale } = await props.params;
  const dict = getDictionary(locale as Locale);

  const [pageData, whitepapersResult] = await Promise.all([
    getCachedGlobal('whitepaper-page'),
    getCachedWhitepapers(),
  ]);
  const fallbackData = whitepaperData;

  // Whitepapers come from Payload or fallback (not localized - content is in German)
  const whitepapers = whitepapersResult?.docs?.length > 0
    ? whitepapersResult.docs.map((wp: any) => ({
        id: wp.whitepaperType === 'podcast' ? `podcast-${wp.id}` : wp.id,
        title: wp.title,
        description: wp.description,
        type: wp.whitepaperType,
        pdfUrl: wp.pdfUrl,
        podcastUrl: wp.podcastUrl,
        category: wp.category,
        featured: wp.featured,
      }))
    : fallbackData.whitepapers;

  // Form labels from dictionary
  const formLabels = {
    hint: dict.whitepaper.form.hint,
    selectionTitle: dict.whitepaper.form.selectionTitle,
    noSelection: dict.whitepaper.form.noSelection,
    salutation: dict.whitepaper.form.salutation,
    salutationOptions: dict.whitepaper.form.salutationOptions,
    firstName: dict.whitepaper.form.firstName,
    lastName: dict.whitepaper.form.lastName,
    email: dict.whitepaper.form.email,
    phone: dict.whitepaper.form.phone,
    organization: dict.whitepaper.form.organization,
    message: dict.whitepaper.form.message,
    isCustomer: dict.whitepaper.form.isCustomer,
    isCustomerYes: dict.whitepaper.form.isCustomerYes,
    isCustomerNo: dict.whitepaper.form.isCustomerNo,
    source: dict.whitepaper.form.source,
    privacy: dict.whitepaper.form.privacy,
    submit: dict.whitepaper.form.submit,
  };

  return (
    <>
      <PageHeroSection
        title={dict.whitepaper.hero.title}
        subtitle=""
      />
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            {dict.whitepaper.hero.intro}{' '}
            <a
              href="#form-whitepaper"
              className="font-semibold text-[var(--egovc-pink)] hover:underline"
            >
              {dict.whitepaper.hero.contactLinkText}
            </a>
            .
          </p>
        </div>
      </section>
      <WhitepaperClientContent
        whitepapers={whitepapers}
        formTitle={dict.whitepaper.form.title}
        formNote={dict.whitepaper.form.note}
        formLabels={formLabels}
      />
      <CTASection
        title={dict.cta.title}
        subtitle={dict.cta.subtitle}
        buttonLabel={dict.cta.button}
      />
    </>
  );
}
