import { Department } from '@/lib/data/team';
import { FaEnvelope } from 'react-icons/fa';

interface DepartmentsSectionProps {
  departments: Department[];
}

export default function DepartmentsSection({ departments }: DepartmentsSectionProps) {
  return (
    <section className="bg-[var(--egovc-dark)] text-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div key={index}>
              <div className="mb-4">
                <FaEnvelope className="text-[var(--egovc-teal)] text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-4">{dept.title}</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{dept.description}</p>
              <a
                href={`mailto:${dept.email}`}
                className="text-[var(--egovc-pink)] hover:underline font-semibold"
              >
                {dept.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

