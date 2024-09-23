import { TwelveLabs } from 'twelvelabs-js';

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY}); 

  const listParams = {
    id: '66e9358a808d95368f6f7a7c',
    name: 'sdk-ref-index-create-07',
    engineOptions: ['conversation', 'visual'],
    engineFamily: 'marengo',
    page: 1,
    pageLimit: 5,
    sortBy: 'updated_at',
    sortOption: 'asc'
  };
  
  const indexes = await client.index.list(listParams);
  indexes.forEach(index => {
    console.log(`ID: ${index.id}`);
    console.log(`  Name: ${index.name}`);
    console.log("  Engines:");
    index.engines.forEach((engine, index) => {
      console.log(`    Engine ${index + 1}:`);
      console.log(`      Name: ${engine.name}`);
      console.log(`      Options: ${JSON.stringify(engine.options)}`);
    });
    console.log(`  Video count: ${index.videoCount}`);
    console.log(`  Total duration: ${index.totalDuration} seconds`);
    console.log(`  Created at: ${index.createdAt}`);
    if (index.updatedAt) {
      console.log(`  Updated at: ${index.updatedAt}`);
    }
  });
})();
