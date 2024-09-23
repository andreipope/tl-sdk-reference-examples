import { TwelveLabs } from 'twelvelabs-js';

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY});

  const response = await client.embed.task.retrieve('66ed9d64808d95368f6f8bd3')

  console.log(`Task ID: ${response.id}`);
  console.log(`Engine Name: ${response.engineName}`);
  console.log(`Status: ${response.status}`);

  if (response.videoEmbeddings && response.videoEmbeddings.length > 0) {
      response.videoEmbeddings.forEach((embedding, i) => {
          console.log(`\nEmbedding ${i + 1}:`);
          console.log(`  Start Offset: ${embedding.startOffsetSec} seconds`);
          console.log(`  End Offset: ${embedding.endOffsetSec} seconds`);
          console.log(`  Embedding Scope: ${embedding.embeddingScope}`);
          console.log(`  Embedding Values: ${embedding.embedding.float.slice(0, 5)} (truncated)`);
      });
  } else {
      console.log("No video embeddings available");
  }
})();



