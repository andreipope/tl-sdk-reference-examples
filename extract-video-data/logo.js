import { TwelveLabs } from 'twelvelabs-js';

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY});

  const response = await client.index.video.logo(
    '66e9358a808d95368f6f7a7c',
    '66ebe4bfd4f452b062c63e3a',
    { start:100, end:300}  
)

  response.forEach((logo, index) => {
    console.log(`\nLogo ${index + 1}:`);
    console.log(`  Start time: ${logo.start} seconds`);
    console.log(`  End time: ${logo.end} seconds`);
    console.log(`  Logo: ${logo.value}`);
  });
})();



