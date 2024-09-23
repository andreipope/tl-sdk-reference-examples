import { TwelveLabs } from 'twelvelabs-js';

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY});

  const response = await client.index.video.textInVideo(
    '66e9358a808d95368f6f7a7c',
    '66ebe4bfd4f452b062c63e3a',
    { start:100, end:300}  
)

  response.forEach((text, index) => {
    console.log(`\nSegment ${index + 1}:`);
    console.log(`  Start time: ${text.start} seconds`);
    console.log(`  End time: ${text.end} seconds`);
    console.log(`  Transcription: ${text.value}`);
  });
})();


