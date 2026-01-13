import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHeroSection from '@/components/sections/PageHeroSection';
import { getCachedGlobal, getCachedBlogPosts } from '@/lib/payload/cached-queries';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { type Locale } from '@/lib/i18n/config';

// Force dynamic rendering to always fetch fresh blog posts from the database
export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const dict = getDictionary(locale as Locale);
  const pageData = await getCachedGlobal('blog-page');

  return {
    title: pageData?.seo?.metaTitle || `${dict.blog.title} | EGovC`,
    description: pageData?.seo?.metaDescription || dict.blog.intro,
  };
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  featuredImage?: {
    url?: string;
    alt?: string;
  };
  author?: string;
  categories?: string[];
  publishedAt?: string;
  featured?: boolean;
}

function formatDate(dateString: string, locale: string = 'de'): string {
  const localeMap: Record<string, string> = {
    de: 'de-DE',
    en: 'en-US',
  };
  return new Date(dateString).toLocaleDateString(localeMap[locale] || 'de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getCategoryLabel(category: string, categories: Record<string, string>): string {
  return categories[category as keyof typeof categories] || category;
}

export default async function BlogPage(props: Props) {
  const { locale } = await props.params;
  const dict = getDictionary(locale as Locale);

  const [pageData, postsResult] = await Promise.all([
    getCachedGlobal('blog-page'),
    getCachedBlogPosts(100),
  ]);
  const posts = postsResult?.docs || [];

  // Use dictionary for localized UI text (hero, intro)
  // Payload data is only for SEO metadata (not localized)
  const data = {
    hero: {
      title: dict.blog.title,
      subtitle: dict.blog.subtitle,
    },
    intro: dict.blog.intro,
  };

  // Map Payload posts to component format
  const blogPosts: BlogPost[] = posts?.map((post: any) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    featuredImage: post.featuredImage
      ? {
          url: typeof post.featuredImage === 'object' ? post.featuredImage.url : undefined,
          alt: typeof post.featuredImage === 'object' ? post.featuredImage.alt : undefined,
        }
      : undefined,
    author: post.author,
    categories: post.categories,
    publishedAt: post.publishedAt,
    featured: post.featured,
  })) || [];

  return (
    <>
      <PageHeroSection
        title={data.hero.title}
        subtitle={data.hero.subtitle}
      />

      {/* Intro Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            {data.intro}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                    post.featured ? 'ring-2 ring-[var(--egovc-pink)]' : ''
                  }`}
                >
                  <Link href={`/${locale}/blog/${post.slug}`}>
                    <div className="relative h-48 bg-gray-200">
                      {post.featuredImage?.url ? (
                        <Image
                          src={post.featuredImage.url}
                          alt={post.featuredImage.alt || post.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--egovc-dark)] to-gray-800">
                          <span className="text-4xl text-white/30">EGovC</span>
                        </div>
                      )}
                      {post.featured && (
                        <span className="absolute top-3 right-3 bg-[var(--egovc-pink)] text-white text-xs font-semibold px-2 py-1 rounded">
                          {dict.blog.featured}
                        </span>
                      )}
                    </div>
                  </Link>

                  <div className="p-6">
                    {/* Categories */}
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.slice(0, 2).map((cat) => (
                          <span
                            key={cat}
                            className="text-xs font-medium text-[var(--egovc-teal)] bg-[var(--egovc-teal)]/10 px-2 py-1 rounded"
                          >
                            {getCategoryLabel(cat, dict.blog.categories)}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link href={`/${locale}/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-[var(--egovc-pink)] transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>

                    {post.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.author || 'EGovC Team'}</span>
                      {post.publishedAt && (
                        <time dateTime={post.publishedAt}>
                          {formatDate(post.publishedAt, locale)}
                        </time>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {dict.blog.noArticles.title}
              </h2>
              <p className="text-gray-600">
                {dict.blog.noArticles.description}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
