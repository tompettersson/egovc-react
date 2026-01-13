/**
 * Seed script for Payload Homepage content
 * Run with: npx tsx scripts/seed-homepage.ts
 */

import { getPayload } from 'payload';
import config from '../src/payload.config';

// Homepage content data
const homepageData = {
  hero: {
    title: 'Starten Sie mit uns Ihre digitale Transformation',
    subtitle: 'Wir unterstützen Sie bei der ganzheitlichen digitalen Transformation und bei der operativen und technischen Umsetzung der Leistungsdigitalisierung.',
  },
  threePillars: {
    title: 'Unsere Expertise',
    items: [
      {
        title: 'Verwaltung',
        description: 'Digitale Transformation für öffentliche Verwaltungen',
        link: '/verwaltung',
      },
      {
        title: 'Gesundheitswesen',
        description: 'Digitalisierung im Gesundheitssektor',
        link: '/gesundheitswesen',
      },
      {
        title: 'Kirche',
        description: 'Moderne Lösungen für kirchliche Organisationen',
        link: '/kirche',
      },
    ],
  },
  values: {
    title: 'Unsere Werte',
    subtitle: 'Was uns antreibt und wie wir arbeiten',
    items: [
      {
        title: 'Ehrlichkeit',
        tagline: 'Wir sind ehrlich.',
        description: 'Transparenz und Offenheit bilden das Fundament unserer Zusammenarbeit.',
      },
      {
        title: 'Mut',
        tagline: 'Wir sind mutig.',
        description: 'Wir scheuen keine Herausforderungen und gehen neue Wege.',
      },
      {
        title: 'Vertrauen',
        tagline: 'Wir vertrauen.',
        description: 'Gegenseitiges Vertrauen ist die Basis erfolgreicher Partnerschaften.',
      },
      {
        title: 'Kreativität',
        tagline: 'Wir sind kreativ.',
        description: 'Innovation und kreative Lösungsansätze treiben uns an.',
      },
      {
        title: 'Respekt',
        tagline: 'Wir sind respektvoll.',
        description: 'Wertschätzender Umgang mit allen Beteiligten.',
      },
      {
        title: 'Qualität',
        tagline: 'Wir liefern Qualität.',
        description: 'Höchste Standards in allem, was wir tun.',
      },
      {
        title: 'Nachhaltigkeit',
        tagline: 'Wir denken nachhaltig.',
        description: 'Langfristige Lösungen für eine bessere Zukunft.',
      },
    ],
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        question: 'Was macht EGovC?',
        answer: 'Wir unterstützen öffentliche Verwaltungen und Unternehmen, das Gesundheitswesen, die Kirche bei ihrer ganzheitlichen digitalen Transformation, bei einzelnen Digitalisierungsprojekten und bei der operativen und technischen Umsetzung der Leistungsdigitalisierung.',
      },
      {
        question: 'Wann ist der richtige Zeitpunkt, um uns ins Boot zu holen?',
        answer: 'Jederzeit! Unabhängig davon, ob Sie sich noch nicht eingehend mit der Digitalisierung beschäftigt haben, mitten in der Transformation befinden oder bereits erste Rückschläge zu verzeichnen haben. Wir unterstützen Sie gerne und sind zu jedem Zeitpunkt der richtige organisatorische und technische Partner.',
      },
      {
        question: 'Was ist unsere No-Code-Plattform?',
        answer: 'Eine Plattform, die es ermöglicht, ohne IT-Erfahrung, analoge Prozesse Ende-zu-Ende zu digitalisieren. Ganz einfach per Drag-and-Drop vom Antragsdialog über den entsprechenden Prozess sowohl auf Kunden- als auch auf Organisationsseite. Unsere Lösung besteht dabei aus Serviceportal, Workspace und Editor.',
      },
      {
        question: 'Wie ist unsere Software OMNIA entstanden?',
        answer: 'Da wir in der öffentlichen Wirtschaft gearbeitet haben, diese beraten und einen engen Kontakt pflegen, konnten wir genauestens durch einen Bottom-Up-Prozess die Anforderungen an eine notwendige Softwarelösung definieren. OMNIA wurde dann eigenständig, unabhängig und nach dem aktuellen Stand der Technik entwickelt, um es Organisationen zu ermöglichen, sich selbst im internen und externen Verhältnis zu transformieren (No-Code-Plattform).',
      },
      {
        question: 'Was ist das europäische eGovernment-Network?',
        answer: 'Eine Dienstleisterallianz, die es sich zur Aufgabe gemacht hat, alle Organisationen in Breite und Thementiefe in allen Belangen der Transformation zu unterstützen. Hierbei gilt es, bestehende Lösungen zu integrieren, stetig weiterzuentwickeln und neue europäische Ansätze zu identifizieren.',
      },
    ],
  },
  cta: {
    title: 'Sind Sie bereit für Ihre digitale Zukunft?',
    subtitle: 'Lassen Sie uns gemeinsam Ihre digitale Transformation gestalten.',
    buttonText: 'Kontakt aufnehmen',
  },
  seo: {
    metaTitle: 'EGovC - Digitale Transformation',
    metaDescription: 'Wir unterstützen Sie bei der digitalen Transformation.',
  },
};

async function seedHomepage() {
  console.log('🌱 Seeding Homepage content...\n');

  try {
    const payload = await getPayload({ config });

    const result = await payload.updateGlobal({
      slug: 'homepage',
      data: homepageData,
    });

    console.log('✅ Homepage content seeded successfully!');
    console.log('\nSeeded sections:');
    console.log('  - Hero: Title + Subtitle');
    console.log('  - Three Pillars: 3 items');
    console.log('  - Values: 7 items');
    console.log('  - FAQ: 5 items');
    console.log('  - CTA: Title + Subtitle + Button');
    console.log('  - SEO: Meta Title + Description');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding homepage:', error);
    process.exit(1);
  }
}

seedHomepage();
