import { TwelveLabs } from 'twelvelabs-js';

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY}); 

  const retrievedEngine = await client.engine.retrieve('pegasus1.1')
  console.log(`Author: ${retrievedEngine.author}`);
  console.log(`Allowed engine options: ${retrievedEngine.allowedEngineOptions}`);
  console.log(`Ready: ${retrievedEngine.ready}`);
  console.log(`Finetune: ${retrievedEngine.finetune}`);
})();
