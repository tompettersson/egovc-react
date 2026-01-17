import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { type Locale } from '@/lib/i18n/config';
import { getCachedBlogPost, getCachedBlogPosts } from '@/lib/payload/cached-queries';

// Allow dynamic rendering for blog posts not pre-generated at build time
export const dynamicParams = true;

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  try {
    const result = await getCachedBlogPosts(1000);
    return result.docs.map((post: any) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const dict = getDictionary(locale as Locale);
  const post = await getCachedBlogPost(slug, locale);

  if (!post) {
    return { title: `${dict.blog.notFound} | EGovC` };
  }

  const ogImageUrl = post.seo?.ogImage && typeof post.seo.ogImage === 'object'
    ? post.seo.ogImage.url
    : post.featuredImage && typeof post.featuredImage === 'object'
      ? post.featuredImage.url
      : null;

  return {
    title: post.seo?.metaTitle || `${post.title} | EGovC Blog`,
    description: post.seo?.metaDescription || post.excerpt || '',
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt || '',
      type: 'article',
      publishedTime: post.publishedAt || undefined,
      authors: [post.author || 'EGovC Team'],
      ...(ogImageUrl && { images: [{ url: ogImageUrl, width: 1200, height: 630 }] }),
    },
  };
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

export default async function BlogPostPage({ params }: Props) {
  const { slug, locale } = await params;
  const post = await getCachedBlogPost(slug, locale);
  const dict = getDictionary(locale as Locale);

  if (!post) {
    notFound();
  }

  const featuredImageUrl = post.featuredImage && typeof post.featuredImage === 'object'
    ? post.featuredImage.url
    : null;
  const featuredImageAlt = post.featuredImage && typeof post.featuredImage === 'object'
    ? post.featuredImage.alt
    : post.title;

  return (
    <>
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] bg-[var(--egovc-dark)]">
        {featuredImageUrl ? (
          <>
            <Image
              src={featuredImageUrl}
              alt={featuredImageAlt || post.title}
              fill
              sizes="100vw"
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--egovc-dark)] to-gray-800" />
        )}

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 lg:px-8 pb-12">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((cat: string) => (
                  <span
                    key={cat}
                    className="text-sm font-medium text-white bg-white/20 backdrop-blur px-3 py-1 rounded-full"
                  >
                    {getCategoryLabel(cat, dict.blog.categories)}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mt-6 text-white/80">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author || 'EGovC Team'}</span>
              </div>
              {post.publishedAt && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt, locale)}
                  </time>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[var(--egovc-pink)] mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {dict.blog.backToBlog}
            </Link>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
                {post.excerpt}
              </p>
            )}

            {/* Rich Text Content */}
            {post.content && (
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[var(--egovc-pink)] prose-strong:text-gray-900 prose-blockquote:border-l-[var(--egovc-pink)] prose-blockquote:text-gray-600 prose-blockquote:italic">
                <RichText data={post.content} />
              </div>
            )}

            {/* Share Section */}
            <div className="border-t border-gray-200 mt-12 pt-8">
              <p className="text-gray-600 mb-4">{dict.blog.shareArticle}</p>
              <div className="flex gap-4">
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://egovc.de/${locale}/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={locale === 'de' ? 'Auf LinkedIn teilen (öffnet in neuem Tab)' : 'Share on LinkedIn (opens in new tab)'}
                  className="bg-[#0077B5] text-white px-4 py-2 rounded hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#0077B5] focus:ring-offset-2"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://egovc.de/${locale}/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={locale === 'de' ? 'Auf X/Twitter teilen (öffnet in neuem Tab)' : 'Share on X/Twitter (opens in new tab)'}
                  className="bg-black text-white px-4 py-2 rounded hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  X/Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
