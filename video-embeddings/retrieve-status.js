import { TwelveLabs } from 'twelvelabs-js';

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY});

  const task = await client.embed.task.status('66ed21d25bfc453560996948')
  
  console.log(`Task ID: ${task.id}`);
  console.log(`Engine Name: ${task.engineName}`);
  console.log(`Status: ${task.status}`);
})();


