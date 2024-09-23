import { TwelveLabs } from 'twelvelabs-js';

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY});

  const params = {
    // file: './01.mp4',
    url: 'https://download.samplelib.com/mp4/sample-30s.mp4',
    startOffsetSec: 5,
    endOffsetSec: 15,
    clipLength: 5,
    scopes: ['clip', 'video'],
  };
  const task = await client.embed.task.create('Marengo-retrieval-2.6', params);
  
  console.log(`Task ID: ${task.id}`);
  console.log(`Engine Name: ${task.engineName}`);
  console.log(`Status: ${task.status}`);
})();

