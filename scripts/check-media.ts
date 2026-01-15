import { getPayload } from 'payload';
import config from '../src/payload.config';

async function checkMedia() {
  const payload = await getPayload({ config });
  
  const media = await payload.find({
    collection: 'media',
    limit: 20,
  });
  
  console.log(`\n=== Media Collection: ${media.totalDocs} Dateien ===\n`);
  
  media.docs.forEach((doc: any) => {
    console.log(`ID: ${doc.id}`);
    console.log(`  Filename: ${doc.filename}`);
    console.log(`  URL: ${doc.url}`);
    console.log('');
  });
  
  process.exit(0);
}

checkMedia();
