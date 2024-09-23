import { TwelveLabs } from 'twelvelabs-js';

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY}); 

  const createdIndex = await client.index.create({
    name: '',
    engines: [
      {
        name: 'marengo2.6',
        options: ['visual', 'conversation', 'text_in_video']
      },
      {
        name: 'pegasus1.1',
        options: ['visual', 'conversation']
      }
    ],
    addons: ['thumbnail'],
  });
  console.log(`ID: ${createdIndex.id}`);
  console.log(`Name: ${createdIndex.name}`);
  console.log("Engines:");
  createdIndex.engines.forEach((engine, index) => {
    console.log(`  Engine ${index + 1}:`);
    console.log(`    Name: ${engine.name}`);
    console.log(`    Options: ${JSON.stringify(engine.options)}`);
  });
  console.log(`Video count: ${createdIndex.videoCount}`);
  console.log(`Total turation: ${createdIndex.totalDuration} seconds`);
  console.log(`Created at: ${createdIndex.createdAt}`);
  if (createdIndex.updatedAt) {
    console.log(`Updated at: ${createdIndex.updatedAt}`);
  }
})();
