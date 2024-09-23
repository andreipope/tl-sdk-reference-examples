import { TwelveLabs } from 'twelvelabs-js';

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY}); 

  const textStream = await client.generate.textStream({ videoId: "66ebe4bfd4f452b062c63e3a", prompt: 'What happened?' });

  for await (const text of textStream) {
    console.log(text);
  }

  console.log(`Aggregated text: ${textStream.aggregatedText}`);
})();

