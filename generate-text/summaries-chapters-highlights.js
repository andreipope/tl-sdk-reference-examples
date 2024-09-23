import { TwelveLabs } from "twelvelabs-js";

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY });

  const result = await client.generate.summarize(
    "66ebe4bfd4f452b062c63e3a",
    "highlight",
    "Be concise",
    0.7,
  );

  console.log(`Result ID: ${result.id}`);

  if (result.summary !== undefined) {
    console.log(`Summary: ${result.summary}`);
  }

  if (result.chapters !== undefined && result.chapters.length > 0) {
    console.log("Chapters:");
    result.chapters.forEach((chapter) => {
      console.log(`  Chapter ${chapter.chapterNumber}:`);
      console.log(`    Start: ${chapter.start}`);
      console.log(`    End: ${chapter.end}`);
      console.log(`    Title: ${chapter.chapterTitle}`);
      console.log(`    Summary: ${chapter.chapterSummary}`);
    });
  }

  if (result.highlights !== undefined && result.highlights.length > 0) {
    console.log("Highlights:");
    result.highlights.forEach((highlight) => {
      console.log(`  Start: ${highlight.start}`);
      console.log(`  End: ${highlight.end}`);
      console.log(`  Highlight: ${highlight.highlight}`);
    });
  }
})();
