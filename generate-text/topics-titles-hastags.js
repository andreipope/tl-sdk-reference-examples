import { TwelveLabs } from "twelvelabs-js";

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY });

  const result = await client.generate.gist("66ebe4bfd4f452b062c63e3a", [
    "title",
    "topic",
    "hashtag",
  ]);

  console.log("Result ID:", result.id);

  if (result.title !== undefined) {
    console.log("Title:", result.title);
  }

  if (result.topics !== undefined) {
    console.log("Topics:");
    result.topics.forEach((topic) => {
      console.log(`  - ${topic}`);
    });
  }

  if (result.hashtags !== undefined) {
    console.log("Hashtags:");
    result.hashtags.forEach((hashtag) => {
      console.log(`  - ${hashtag}`);
    });
  }
})();
