import { TwelveLabs } from 'twelvelabs-js';

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY}); 
  const listParams = {
    id: "",
    filename: "",
    size: 1024,
    width: 1280,
    height: 720,  // Example: 720p to 1080p
    duration: 20,  // Example: 1 minute to 5 minutes
    fps: 24,
    metadata: {
      category: "nature"
    },
    createdAt: "2024-09-17T07:53:46.365Z",
    updatedAt: "2024-09-17T07:53:46.365Z",
    indexedAt: "2024-09-17T07:55:22.125Z",
    page: 1,
    pageLimit: 5,
    sortBy: "created_at",
    sortOption: "desc"
  };
  
  const videos = await client.index.video.list("", listParams)
  videos.forEach(video => {
    console.log(`ID: ${video.id}`);
    console.log(`  Created at: ${video.createdAt}`);
    console.log(`  Updated at: ${video.updatedAt || "N/A"}`);
    console.log(`  Indexed at: ${video.indexedAt || "N/A"}`);
    console.log("  Metadata:");
    console.log(`    Filename: ${video.metadata.filename}`);
    console.log(`    Duration: ${video.metadata.duration}`);
    console.log(`    FPS: ${video.metadata.fps}`);
    console.log(`    Width: ${video.metadata.width}`);
    console.log(`    Height: ${video.metadata.height}`);
    console.log(`    Size: ${video.metadata.size}`);
    if (video.hls) {
      console.log("  HLS:");
      console.log(`    Video URL: ${video.hls.videoUrl || "N/A"}`);
      console.log("    Thumbnail URLs:");
      (video.hls.thumbnailUrls || []).forEach((url) => {
        console.log(`      ${url}`);
      });
      console.log(`    Status: ${video.hls.status || "N/A"}`);
      console.log(`    Updated At: ${video.hls.updatedAt}`);
    }
    if (video.source) {
      console.log("  Source:");
      console.log(`    Type: ${video.source.type}`);
      console.log(`    Name: ${video.source.name}`);
      console.log(`    URL: ${video.source.url || "N/A"}`);
    }
  });
})();
