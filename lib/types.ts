// Shared TypeScript interfaces for the EGovC website

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQBlock {
  title?: string;
  items?: FAQItem[];
}

export interface ThreePillarsItem {
  title: string;
  description?: string;
  icon?: unknown;
  link?: string;
}

export interface PillarItem {
  title: string;
  description?: string;
  href: string;
  image?: unknown;
}

export interface ThreePillarsBlock {
  buttonLabel?: string;
  items?: ThreePillarsItem[];
}

export interface VisionMissionItem {
  title: string;
  tagline?: string;
  description?: string;
  icon?: unknown;
  image?: unknown;
}

export interface VisionMissionBlock {
  items?: VisionMissionItem[];
}

export interface ValuesItem {
  title: string;
  tagline?: string;
  description?: string;
  icon?: unknown;
}

export interface ValuesBlock {
  intro?: {
    title?: string;
    subtitle?: string;
  };
  items?: ValuesItem[];
}

export interface BrochureBlock {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonUrl?: string;
  image?: unknown;
}

export interface CTABlock {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
}

export interface SEOBlock {
  metaTitle?: string;
  metaDescription?: string;
  noIndex?: boolean;
  ogImage?: {
    asset?: {
      url?: string;
    };
  };
}

export interface HomepageData {
  title?: string;
  subtitle?: string;
  threePillars?: ThreePillarsBlock;
  visionMission?: VisionMissionBlock;
  values?: ValuesBlock;
  brochure?: BrochureBlock;
  cta?: CTABlock;
  faq?: FAQBlock;
  seo?: SEOBlock;
}

// Site Settings Types
export interface SiteSettings {
  companyName?: string;
  address?: {
    street?: string;
    zip?: string;
    city?: string;
    country?: string;
  };
  phone?: string;
  email?: string;
  registry?: {
    court?: string;
    number?: string;
    taxNumber?: string;
    vatId?: string;
  };
  ceo?: string;
  odrLink?: string;
  disputeResolutionText?: string;
  contactPerson?: {
    name?: string;
    phone?: string;
    email?: string;
  };
  bookingUrl?: string;
  agbPdfUrl?: string;
  newsletterTitle?: string;
  newsletterPlaceholder?: string;
  newsletterButtonLabel?: string;
  socialLinks?: Array<{
    platform: string;
    url?: string;
  }>;
}

export interface LegalPage {
  _id?: string;
  title?: string;
  slug?: string;
  content?: unknown; // Lexical RichText
}

export interface LegalPagesData {
  impressum?: LegalPage;
  datenschutz?: LegalPage;
  widerruf?: LegalPage;
}

// Value Item for ValuesSection
export interface ValueItem {
  title: string;
  subtitle?: string;
  description?: string;
  image?: unknown;
}

// Team Member for TeamMembersSection
export interface TeamMember {
  _key?: string;
  name: string;
  role?: string;
  image?: unknown;
}

// Generic Image reference (works with both Sanity and Payload)
export interface SanityImage {
  asset?: {
    _ref?: string;
    url?: string;
  };
  alt?: string;
}
