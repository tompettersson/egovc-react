'use client';

import { Whitepaper } from '@/lib/data/whitepaper';
import { FaFilePdf, FaPodcast, FaMicrophone } from 'react-icons/fa';

interface WhitepaperListSectionProps {
  whitepapers: Whitepaper[];
  selectedIds: Set<string>;
  onSelect: (id: string) => void;
}

export default function WhitepaperListSection({
  whitepapers,
  selectedIds,
  onSelect,
}: WhitepaperListSectionProps) {
  const handleClick = (id: string) => {
    onSelect(id);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'podcast':
        return <FaPodcast className="text-[var(--egovc-pink)] text-xl" />;
      case 'omnia':
        return <FaMicrophone className="text-[var(--egovc-teal)] text-xl" />;
      default:
        return <FaFilePdf className="text-[var(--egovc-pink)] text-xl" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'podcast':
        return 'Podcast';
      case 'omnia':
        return 'OMNIA';
      default:
        return 'Whitepaper';
    }
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <ul className="space-y-4">
          {whitepapers.map((whitepaper) => (
            <li key={whitepaper.id}>
              <button
                onClick={() => handleClick(whitepaper.id)}
                className={`w-full text-left p-6 rounded-lg border-2 transition-all hover:shadow-lg ${
                  selectedIds.has(whitepaper.id)
                    ? 'border-[var(--egovc-pink)] bg-white shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{getIcon(whitepaper.type)}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                        {getTypeLabel(whitepaper.type)}
                      </span>
                      {whitepaper.category && (
                        <span className="text-xs font-semibold text-[var(--egovc-teal)]">
                          {whitepaper.category}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[var(--egovc-dark)]">
                      {whitepaper.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{whitepaper.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <div
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                        selectedIds.has(whitepaper.id)
                          ? 'border-[var(--egovc-pink)] bg-[var(--egovc-pink)]'
                          : 'border-gray-300'
                      }`}
                    >
                      {selectedIds.has(whitepaper.id) && (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

