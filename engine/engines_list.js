import { TwelveLabs } from 'twelvelabs-js';

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY});

  const engines = await client.engine.list();
  engines.forEach((engine, index) => {
    console.log(`Engine ID ${engine.id}:`);
    console.log(`  Author: ${engine.author}`);
    console.log(`  Allowed engine options: ${engine.allowedEngineOptions}`);
    console.log(`  Ready: ${engine.ready}`);
    console.log(`  Finetune: ${engine.finetune}`);
  });
})();
