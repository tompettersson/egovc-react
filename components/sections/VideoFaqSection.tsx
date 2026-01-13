'use client';

import { FaPlay } from 'react-icons/fa';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { FAQItem } from '@/lib/types';

// Default FAQ items als Fallback
const defaultFaqItems: FAQItem[] = [
  {
    question: 'Was macht EGovC?',
    answer:
      'Wir unterstützen öffentliche Verwaltungen und Unternehmen, das Gesundheitswesen, die Kirche bei ihrer ganzheitlichen digitalen Transformation, bei einzelnen Digitalisierungsprojekten und bei der operativen und technischen Umsetzung der Leistungsdigitalisierung.',
  },
  {
    question: 'Wann ist der richtige Zeitpunkt, um uns ins Boot zu holen?',
    answer:
      'Jederzeit! Unabhängig davon, ob Sie sich noch nicht eingehend mit der Digitalisierung beschäftigt haben, mitten in der Transformation befinden oder bereits erste Rückschläge zu verzeichnen haben. Wir unterstützen Sie gerne und sind zu jedem Zeitpunkt der richtige organisatorische und technische Partner.',
  },
  {
    question: 'Was ist unsere No-Code-Plattform?',
    answer:
      'Eine Plattform, die es ermöglicht, ohne IT-Erfahrung, analoge Prozesse Ende-zu-Ende zu digitalisieren. Ganz einfach per Drag-and-Drop vom Antragsdialog über den entsprechenden Prozess sowohl auf Kunden- als auch auf Organisationsseite. Unsere Lösung besteht dabei aus Serviceportal, Workspace und Editor.',
  },
  {
    question: 'Wie ist unsere Software OMNIA entstanden?',
    answer:
      'Da wir in der öffentlichen Wirtschaft gearbeitet haben, diese beraten und einen engen Kontakt pflegen, konnten wir genauestens durch einen Bottom-Up-Prozess die Anforderungen an eine notwendige Softwarelösung definieren. OMNIA wurde dann eigenständig, unabhängig und nach dem aktuellen Stand der Technik entwickelt, um es Organisationen zu ermöglichen, sich selbst im internen und externen Verhältnis zu transformieren (No-Code-Plattform).',
  },
  {
    question: 'Was ist das europäische eGovernment-Network?',
    answer:
      'Eine Dienstleisterallianz, die es sich zur Aufgabe gemacht hat, alle Organisationen in Breite und Thementiefe in allen Belangen der Transformation zu unterstützen. Hierbei gilt es, bestehende Lösungen zu integrieren, stetig weiterzuentwickeln und neue europäische Ansätze zu identifizieren.',
  },
];

interface VideoFaqSectionProps {
  faqTitle?: string;
  faqItems?: FAQItem[];
  playVideoLabel?: string;
}

export default function VideoFaqSection({
  faqTitle = 'FAQ',
  faqItems = defaultFaqItems,
  playVideoLabel = 'Video abspielen',
}: VideoFaqSectionProps) {
  return (
    <section className="bg-[var(--egovc-dark)] text-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Video Section */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-[url('/images/computer-user.jpg')] bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="w-20 h-20 bg-[var(--egovc-pink)] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  aria-label={playVideoLabel}
                >
                  <FaPlay className="text-white text-2xl ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-4xl font-bold mb-4">{faqTitle}</h2>
            <div className="w-24 h-1 bg-[var(--egovc-pink)] mb-8"></div>
            <Accordion type="single" collapsible className="w-full">
              {faqItems?.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                  <AccordionTrigger className="text-left text-white hover:text-[var(--egovc-pink)] transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}


