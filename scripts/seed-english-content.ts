/**
 * Seed English translations into Payload CMS
 * Run with: npx tsx scripts/seed-english-content.ts
 */

import { getPayload } from 'payload'
import config from '../src/payload.config'
import fs from 'fs'
import path from 'path'

// Load scraped English content
const consolidatedContent = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), '_input/consolidated-content.json'), 'utf-8')
)

const enContent = consolidatedContent.homepage?.en || {}

async function seedEnglishContent() {
  console.log('🚀 Starting English content seeding...\n')

  const payload = await getPayload({ config })

  // 1. Update Homepage with English content
  console.log('📄 Updating Homepage with English translations...')
  try {
    await payload.updateGlobal({
      slug: 'homepage',
      data: {
        hero: {
          title: 'Start Your Digital Transformation with Us',
          subtitle: 'We support you in holistic digital transformation and the operational and technical implementation of service digitalization.',
        },
        visionMission: {
          vision: {
            title: 'Vision',
            description: enContent.visionMission?.vision || 'Value creation cannot be achieved through technology alone. Through the EGovC lens, people are always the starting point. Together, our experts work with you to identify the core of each individual challenge and develop the best solution based on that. We are convinced that this approach – putting people at the center of technology – is what makes digital transformation citizen-friendly.',
          },
          mission: {
            title: 'Mission',
            description: enContent.visionMission?.mission || 'EGovC enables you to develop your organization while ensuring reliable administrative action. We help you use the right technologies, thereby ensuring agility, interoperability, and competitiveness. TOGETHER is our central claim. Our experts combine their strengths with those of your employees as a team. Perform Together – This motto has become part of the expectations in our collaboration with customers.',
          },
          ethics: {
            title: 'Ethics',
            description: enContent.visionMission?.ethics || 'Success in the service industry is largely determined by shared values, which are supported by the ability to work together. The corporate goals and standards of EGC exist not only for the benefit of our shareholders and employees, but include all those involved in the value creation process. We firmly believe that together everything can be mastered.',
          },
        },
        values: {
          title: 'Our Values',
          subtitle: 'Seven values are the wind in our sails, guiding us together to our destination.',
          items: [
            {
              title: 'Honesty',
              tagline: 'We speak plainly – even when it is uncomfortable.',
              description: 'True collaboration begins with honesty. We share our opinions openly, give constructive feedback, and stand by our decisions. This creates trust and shared responsibility.',
            },
            {
              title: 'Courage',
              tagline: 'We have the courage to take risks.',
              description: 'Courage means taking new paths, even when they are uncertain. We bet on innovation, take responsibility, and stand by our ideas – even when they do not match the status quo.',
            },
            {
              title: 'Trust',
              tagline: 'We rely on each other.',
              description: 'We rely on each other – in projects, in the team, with customers. Trust means giving and taking responsibility. This creates self-organized processes, stable relationships, and true commitment.',
            },
            {
              title: 'Equality',
              tagline: 'We live equality and respect different perspectives.',
              description: 'We live equality and respect different perspectives. Diversity makes us better – in finding solutions, in working together, in impact. We make decisions together, not hierarchically.',
            },
            {
              title: 'Fun',
              tagline: 'Work is allowed (and should!) to be fun.',
              description: 'Work is allowed (and should!) to be fun. We laugh together, celebrate small and big successes, and create space for humanity. Because joy motivates – and motivated teams achieve more.',
            },
            {
              title: 'Humility',
              tagline: 'We are proud of what we can do – and know we do not know everything.',
              description: 'We are proud of what we can do – and know we do not know everything. We listen, learn daily, and let actions speak louder than words. Our goal is not applause, but real change.',
            },
            {
              title: 'Team Spirit',
              tagline: 'We are a team that strengthens each other.',
              description: 'We are a team that strengthens each other. We share knowledge, jump in when things get hot, and celebrate successes together. Because real impact comes from collaboration – not from lone wolves.',
            },
          ],
        },
        faq: {
          items: [
            {
              question: 'What does EGovC do?',
              answer: 'EGovC is the point of contact for all questions and matters related to digitalization in the public sector. We respond individually and service-oriented to the different concerns of our customers with our products and services.',
            },
            {
              question: 'When is the right time to bring us on board?',
              answer: 'The best time to bring us on board is at the beginning of your digital transformation journey. However, we can also join ongoing projects to provide expert guidance and support.',
            },
            {
              question: 'What is our No-Code platform?',
              answer: 'OMNIA is our No-Code platform that enables organizations to digitize their processes end-to-end without IT experience. It simplifies workflow automation and process optimization.',
            },
            {
              question: 'How did our software OMNIA come about?',
              answer: 'OMNIA was developed from our practical experience in public administration digitalization. We recognized the need for a flexible, user-friendly platform that could be adapted to specific requirements.',
            },
            {
              question: 'What is the European eGovernment Network?',
              answer: 'The European eGovernment Network is an initiative of EGovC GmbH. Together with leading providers, we offer a comprehensive service provider network for all digital transformation needs.',
            },
          ],
        },
        cta: {
          title: 'Are you ready for your digital future?',
          description: 'Contact us now for a non-binding initial consultation!',
          buttonText: 'Contact',
        },
        brochure: {
          title: 'Download EGovC Brochure',
          description: 'Take a look at our "About Us" brochure and learn about us and our philosophy.',
          buttonText: 'Download Now',
          pdfUrl: 'https://egovc.de/wp-content/uploads/2022/10/egovc_about_digital.pdf',
        },
      },
    })
    console.log('  ✅ Homepage English content updated')
  } catch (error) {
    console.error('  ❌ Error updating Homepage:', error)
  }

  // 2. Update Career Page with English content
  console.log('\n📄 Updating Career Page with English translations...')
  try {
    await payload.updateGlobal({
      slug: 'career-page',
      data: {
        intro: {
          title: 'What sets us apart',
          paragraphs: [
            'EGovC is the contact for all questions and matters related to digitalization in the public sector. We respond individually and service-oriented to the different concerns of our customers with our products and services.',
            'We support our customers from all areas of the public sector with advice and assistance on any topics in the context of digitalization.',
            'In regular meetings, management works together with employees to define short and medium-term goals.',
          ],
        },
        benefits: {
          items: [
            { title: 'Workplace', description: 'Modern office equipment. Good public transport connections.' },
            { title: 'Trust-based working hours', description: 'Our employees can organize their working hours freely according to their agreed goals.' },
            { title: 'Flat hierarchy', description: 'Decision-making paths are much shorter for us.' },
            { title: 'Development and advancement opportunities', description: 'We support further training and invest in the development of our employees.' },
            { title: 'Relaxed working atmosphere', description: 'Our young and open-minded team maintains a harmonious and familiar atmosphere.' },
          ],
        },
        expectations: {
          title: 'What we expect from our employees',
          description: 'Passion and reliability are two cornerstones of our corporate philosophy. We do not judge who fits our team based on highly selective exclusion criteria.',
        },
        jobOpenings: {
          title: 'Job Openings',
          items: [
            {
              title: 'Freelancer Administrative Management (m/f/d)',
              description: 'We are looking for experienced consultants in the field of public administration.',
              requirements: ['Experience in public sector', 'Project management skills', 'Flexible availability'],
              location: 'Remote / Pfungstadt',
              type: 'Freelance',
            },
            {
              title: 'Marketing Person (m/f/d)',
              description: 'Support our marketing team with creative ideas and campaigns.',
              requirements: ['Marketing experience', 'Social media skills', 'Creative thinking'],
              location: 'Pfungstadt',
              type: 'Full-time / Part-time',
            },
            {
              title: 'Software/System Developer (m/f/d)',
              description: 'Develop and maintain our OMNIA platform and other software solutions.',
              requirements: ['Programming experience', 'Web technologies', 'Team player'],
              location: 'Pfungstadt / Remote',
              type: 'Full-time',
            },
          ],
        },
      },
    })
    console.log('  ✅ Career Page English content updated')
  } catch (error) {
    console.error('  ❌ Error updating Career Page:', error)
  }

  // 3. Update Team Page with English content
  console.log('\n📄 Updating Team Page with English translations...')
  try {
    await payload.updateGlobal({
      slug: 'team-page',
      data: {
        intro: {
          title: 'Our Team',
          subtitle: 'Get to know the people behind EGovC.',
        },
        departments: {
          title: 'Our Departments',
          items: [
            { title: 'Management', description: 'Strategic leadership and company development' },
            { title: 'Consulting', description: 'Customer advisory and project management' },
            { title: 'Development', description: 'Software development and technical innovation' },
            { title: 'Education & Event', description: 'Training and event organization' },
            { title: 'Marketing', description: 'Brand communication and customer acquisition' },
          ],
        },
      },
    })
    console.log('  ✅ Team Page English content updated')
  } catch (error) {
    console.error('  ❌ Error updating Team Page:', error)
  }

  // 4. Update Network Page with English content
  console.log('\n📄 Updating Network Page with English translations...')
  try {
    await payload.updateGlobal({
      slug: 'network-page',
      data: {
        hero: {
          title: 'EGovC Network',
          subtitle: 'The European eGovernment Network for comprehensive digital transformation.',
        },
        about: {
          title: 'About the Network',
          description: 'The European eGovernment Network is an initiative of EGovC GmbH. Together with leading providers, we offer a comprehensive service provider network that covers all aspects of digital transformation in the public sector.',
        },
        visionMission: {
          vision: {
            title: 'Vision',
            description: 'A fully networked public sector where digital services are available seamlessly and citizen-friendly.',
          },
          mission: {
            title: 'Mission',
            description: 'To connect leading providers and expertise to deliver comprehensive digital transformation solutions for the public sector.',
          },
        },
      },
    })
    console.log('  ✅ Network Page English content updated')
  } catch (error) {
    console.error('  ❌ Error updating Network Page:', error)
  }

  // 5. Update Whitepaper Page with English content
  console.log('\n📄 Updating Whitepaper Page with English translations...')
  try {
    await payload.updateGlobal({
      slug: 'whitepaper-page',
      data: {
        hero: {
          title: 'Whitepaper & Resources',
          subtitle: 'Insights and knowledge for your digital transformation.',
        },
        intro: {
          title: 'Our Knowledge Hub',
          description: 'Discover our collection of whitepapers, podcasts, and resources to support your digital transformation journey.',
        },
      },
    })
    console.log('  ✅ Whitepaper Page English content updated')
  } catch (error) {
    console.error('  ❌ Error updating Whitepaper Page:', error)
  }

  // 6. Update Blog Page with English content
  console.log('\n📄 Updating Blog Page with English translations...')
  try {
    await payload.updateGlobal({
      slug: 'blog-page',
      data: {
        hero: {
          title: 'Blog',
          subtitle: 'News and insights about digital transformation',
        },
        intro: {
          title: 'Latest Articles',
          description: 'Stay up to date with the latest trends and best practices in public sector digitalization.',
        },
      },
    })
    console.log('  ✅ Blog Page English content updated')
  } catch (error) {
    console.error('  ❌ Error updating Blog Page:', error)
  }

  console.log('\n' + '='.repeat(50))
  console.log('🎉 English content seeding complete!')
  console.log('='.repeat(50))

  process.exit(0)
}

seedEnglishContent().catch((error) => {
  console.error('❌ Seeding failed:', error)
  process.exit(1)
})
