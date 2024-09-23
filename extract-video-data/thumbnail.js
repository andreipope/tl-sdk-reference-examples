import { TwelveLabs } from 'twelvelabs-js';

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY});

  const response = await client.index.video.thumbnail(
    '66e9358a808d95368f6f7a7c',
    '66ebe4bfd4f452b062c63e3a',
)

  console.log(`\nThumbnail URL: ${response}`);

})();




