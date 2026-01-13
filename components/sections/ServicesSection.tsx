'use client';

import { ServiceItem } from '@/lib/data/pages';
import ContactDialog from '@/components/dialogs/ContactDialog';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

interface ServicesSectionProps {
  title: string;
  items: ServiceItem[];
}

export default function ServicesSection({ title, items }: ServicesSectionProps) {
  return (
    <section className="bg-[var(--egovc-dark)] text-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <div className="w-24 h-1 bg-[var(--egovc-pink)] mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow leading-relaxed">{item.description}</p>
              <div>
                {item.actionType === 'contact' ? (
                  <ContactDialog>
                    <button className="w-full bg-[var(--egovc-pink)] text-white px-6 py-3 rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                      <span>{item.actionLabel}</span>
                      <FaArrowRight />
                    </button>
                  </ContactDialog>
                ) : item.actionType === 'brochure' ? (
                  <a
                    href={item.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[var(--egovc-pink)] text-white px-6 py-3 rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <FaDownload />
                    <span>{item.actionLabel}</span>
                  </a>
                ) : (
                  <Link
                    href={item.actionUrl || '#'}
                    className="w-full bg-[var(--egovc-pink)] text-white px-6 py-3 rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <span>{item.actionLabel}</span>
                    <FaArrowRight />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





