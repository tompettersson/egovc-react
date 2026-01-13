import { Metadata } from 'next';
import DepartmentsSection from '@/components/sections/DepartmentsSection';
import TeamValuesSection from '@/components/sections/TeamValuesSection';
import CTASection from '@/components/sections/CTASection';
import ContactDialog from '@/components/dialogs/ContactDialog';
import { teamData } from '@/lib/data/team';
import { getCachedGlobal } from '@/lib/payload/cached-queries';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { type Locale } from '@/lib/i18n/config';

type Props = {
  params: Promise<{ locale: string }>;
};

// SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  const data = await getCachedGlobal('team-page');

  return {
    title: data?.seo?.metaTitle || 'Team | EGovC - Unsere Experten',
    description: data?.seo?.metaDescription || 'Lernen Sie das EGovC-Team kennen. Experten für digitale Transformation in Verwaltung, Gesundheitswesen und Kirche.',
    openGraph: {
      title: data?.seo?.metaTitle || 'Das EGovC Team',
      description: data?.seo?.metaDescription || 'Unsere Experten für Ihre digitale Transformation.',
      type: 'website',
      locale: 'de_DE',
    },
    robots: data?.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function TeamPage(props: Props) {
  const { locale } = await props.params;
  const dict = getDictionary(locale as Locale);

  const payloadData = await getCachedGlobal('team-page');
  const fallbackData = teamData;

  // Use dictionary for localized content
  const data = {
    intro: {
      title: dict.team.intro.title,
      paragraphs: dict.team.intro.paragraphs,
    },
    // Members: use dictionary roles, Payload images if available
    members: dict.team.members.map((m, index) => ({
      name: m.name,
      role: m.role,
      image: (payloadData?.members as any[])?.[index]?.image?.url || fallbackData.members[index]?.image || '/images/placeholder-team.svg',
    })),
    // Departments: use dictionary
    departments: dict.team.departments.map((d, index) => ({
      title: d.title,
      description: d.description,
      email: fallbackData.departments[index]?.email || '',
    })),
    values: {
      intro: {
        title: dict.team.values.title,
        subtitle: dict.team.values.subtitle,
      },
      items: dict.team.values.items,
    },
  };

  return (
    <>
      <section className="bg-[var(--egovc-dark)] text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Team</h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {data.intro.title}
              </h2>
              <div className="w-24 h-1 bg-[var(--egovc-pink)] mb-6"></div>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                {data.intro.paragraphs.map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8">
                <ContactDialog>
                  <button className="inline-block bg-[var(--egovc-pink)] text-white px-8 py-4 rounded hover:opacity-90 transition-opacity font-semibold text-lg">
                    {dict.nav.contact}
                  </button>
                </ContactDialog>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.members.map((member: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-full aspect-square rounded-lg overflow-hidden bg-gray-700">
                      <img
                        src={member.image || '/images/placeholder-team.svg'}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-300">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <DepartmentsSection departments={data.departments} />
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[var(--egovc-dark)]">
            {data.values.intro.title}
          </h2>
          <div className="w-24 h-1 bg-[var(--egovc-pink)] mb-6 mx-auto"></div>
          <p className="text-lg text-gray-600 mb-12">
            {data.values.intro.subtitle.split('\n').map((line: string, i: number) => (
              <span key={i}>
                {line}
                {i < data.values.intro.subtitle.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </section>
      <TeamValuesSection values={data.values.items} />
      <CTASection
        title={dict.cta.title}
        subtitle={dict.cta.subtitle}
        buttonLabel={dict.cta.button}
      />
    </>
  );
}
