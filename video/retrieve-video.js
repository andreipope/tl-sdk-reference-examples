import { TwelveLabs } from "twelvelabs-js";

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY}); 

  const video = await client.index.video.retrieve(
    "",
    ""
  );
  console.log(`ID: ${video.id}`);
  console.log(`Created At: ${video.createdAt}`);
  console.log(`Updated At: ${video.updatedAt || "N/A"}`);
  console.log(`Indexed At: ${video.indexedAt || "N/A"}`);
  console.log("Metadata:");
  console.log(`  Filename: ${video.metadata.filename}`);
  console.log(`  Duration: ${video.metadata.duration}`);
  console.log(`  FPS: ${video.metadata.fps}`);
  console.log(`  Width: ${video.metadata.width}`);
  console.log(`  Height: ${video.metadata.height}`);
  console.log(`  Size: ${video.metadata.size}`);
  const additionalMetadata = Object.keys(video.metadata).filter(
    (key) =>
      !["filename", "duration", "fps", "width", "height", "size"].includes(key)
  );
  if (additionalMetadata.length > 0) {
    additionalMetadata.forEach((key) => {
      console.log(`  ${key}: ${video.metadata[key]}`);
    });
  }
  if (video.hls) {
    console.log("HLS:");
    console.log(`  Video URL: ${video.hls.videoUrl || "N/A"}`);
    console.log("  Thumbnail URLs:");
    (video.hls.thumbnailUrls || []).forEach((url) => {
      console.log(`    ${url}`);
    });
    console.log(`  Status: ${video.hls.status || "N/A"}`);
    console.log(`  Updated At: ${video.hls.updatedAt}`);
  }
  if (video.source) {
    console.log("Source:");
    console.log(`  Type: ${video.source.type}`);
    console.log(`  Name: ${video.source.name}`);
    console.log(`  URL: ${video.source.url || "N/A"}`);
  }
})();
