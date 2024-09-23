import { TwelveLabs } from 'twelvelabs-js';

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY}); 
  const engineName = 'Marengo-retrieval-2.6';
  const embedding = await client.embed.create({
    engineName: engineName,
    text: 'Man wearing a hat',
    textTruncate: 'start',
  });
  console.log(`  Engine: ${embedding.engineName}`);
  console.log(`  Embedding: ${embedding.textEmbedding.float}`) 
})();
