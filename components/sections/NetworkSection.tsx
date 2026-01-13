import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface NetworkSectionProps {
  title: string;
  description: string;
  linkUrl: string;
  linkLabel: string;
}

export default function NetworkSection({ title, description, linkUrl, linkLabel }: NetworkSectionProps) {
  return (
    <section className="bg-[var(--egovc-dark)] text-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <div className="w-24 h-1 bg-[var(--egovc-pink)] mb-6"></div>
        <div className="max-w-3xl">
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">{description}</p>
          <Link
            href={linkUrl}
            className="inline-flex items-center gap-2 bg-[var(--egovc-pink)] text-white px-6 py-3 rounded hover:opacity-90 transition-opacity"
          >
            <span>{linkLabel}</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}





