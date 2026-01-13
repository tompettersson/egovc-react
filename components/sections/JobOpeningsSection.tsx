'use client';

import { JobOpening } from '@/lib/data/karriere';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FaFilePdf } from 'react-icons/fa';

interface JobOpeningsSectionProps {
  jobOpenings: JobOpening[];
  title?: string;
  tasksLabel?: string;
  profileLabel?: string;
  benefitsLabel?: string;
  downloadLabel?: string;
}

export default function JobOpeningsSection({
  jobOpenings,
  title = 'Stellenangebote',
  tasksLabel = 'Deine Aufgaben:',
  profileLabel = 'Dein Profil:',
  benefitsLabel = 'Was wir dir bieten können:',
  downloadLabel = 'Stellenausschreibung',
}: JobOpeningsSectionProps) {
  return (
    <section className="bg-[var(--egovc-dark)] text-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <div className="w-24 h-1 bg-[var(--egovc-pink)] mb-12"></div>
        <Accordion type="single" collapsible className="w-full">
          {jobOpenings.map((job, index) => (
            <AccordionItem key={index} value={`job-${index}`}>
              <AccordionTrigger className="text-xl text-left hover:no-underline font-semibold">
                {job.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 space-y-4">
                <p className="leading-relaxed">{job.description}</p>
                {job.callToAction && (
                  <p className="font-semibold text-[var(--egovc-pink)]">{job.callToAction}</p>
                )}
                {job.additionalText && <p className="leading-relaxed">{job.additionalText}</p>}
                {job.tasks && (
                  <div>
                    <p className="font-semibold mb-2">{tasksLabel}</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      {job.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {job.profile && (
                  <div>
                    <p className="font-semibold mb-2">{profileLabel}</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      {job.profile.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {job.benefits && (
                  <div>
                    <p className="font-semibold mb-2">{benefitsLabel}</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      {job.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {job.pdfUrl && (
                  <a
                    href={job.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[var(--egovc-pink)] text-white px-6 py-3 rounded hover:opacity-90 transition-opacity mt-4"
                  >
                    <FaFilePdf />
                    <span>{downloadLabel}</span>
                  </a>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

