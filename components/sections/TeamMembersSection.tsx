'use client';

import Image from 'next/image';
import { TeamMember } from '@/lib/types';

interface TeamMembersSectionProps {
  members: TeamMember[];
}

export default function TeamMembersSection({ members }: TeamMembersSectionProps) {
  // Helper to get image URL - supports Payload images or fallback
  const getImageUrl = (image: TeamMember['image'], fallback: string) => {
    if (!image) return fallback;
    // If image is a Payload Media object with url
    if (typeof image === 'object' && image !== null && 'url' in image) {
      return (image as { url: string }).url;
    }
    return fallback;
  };

  // Default fallback images
  const fallbackImages: Record<string, string> = {
    'Adrian Sommer': '/images/team/adrian-sommer.jpg',
    'Roland Lutz': '/images/team/roland-lutz.jpg',
    'Benjamin Bauer': '/images/team/benjamin-bauer.jpg',
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div key={member._key || index} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-64 h-64 rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src={getImageUrl(member.image, fallbackImages[member.name] || '/images/placeholder.png')}
                    alt={member.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[var(--egovc-dark)]">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





