import { TwelveLabs } from 'twelvelabs-js';

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY}); 

  const result = await client.generate.text(
    "66ebe4bfd4f452b062c63e3a",
    "Be concise",
    0.7
  );
  console.log(`Result ID: ${result.id}`);
  console.log(`Generated text: ${result.data}`);
})();
