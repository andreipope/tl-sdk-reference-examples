import { TwelveLabs } from 'twelvelabs-js';

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY}); 

  const retrievedIndex = await client.index.retrieve('');
  console.log(`ID: ${retrievedIndex.id}`);
  console.log(`Name: ${retrievedIndex.name}`);
  console.log("Engines:");
  retrievedIndex.engines.forEach((engine, index) => {
    console.log(`  Engine ${index + 1}:`);
    console.log(`    Name: ${engine.name}`);
    console.log(`    Options: ${JSON.stringify(engine.options)}`);
  });
  console.log(`Video count: ${retrievedIndex.videoCount}`);
  console.log(`Total turation: ${retrievedIndex.totalDuration} seconds`);
  console.log(`Created at: ${retrievedIndex.createdAt}`);
  if (retrievedIndex.updatedAt) {
    console.log(`Updated at: ${retrievedIndex.updatedAt}`);
  }
})();
