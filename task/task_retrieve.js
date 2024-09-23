import { TwelveLabs } from 'twelvelabs-js';

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY}); 
  const retrievedTask = await client.task.retrieve("")
  console.log(`Task ID=${retrievedTask.id}`);
  console.log(`Index ID: ${retrievedTask.indexId}`);
  console.log(`Video ID: ${retrievedTask.videoId}`);
  console.log(`Estimated time: ${retrievedTask.estimatedTime}`);
  console.log(`Status: ${retrievedTask.status}`);
  
  console.log("Metadata:");
  for (const [key, value] of Object.entries(retrievedTask.metadata)) {
    console.log(`  ${key}: ${value}`);
  }

  if (retrievedTask.hls) {
    console.log("HLS:");
    console.log(`  Video URL: ${retrievedTask.hls.videoUrl}`);
    console.log("  Thumbnail URLs:");
    for (const url of retrievedTask.hls.thumbnailUrls || []) {
      console.log(`    ${url}`);
    }
    console.log(`  Status: ${retrievedTask.hls.status}`);
    console.log(`  Updated at: ${retrievedTask.hls.updatedAt}`);
  }

  if (retrievedTask.process) {
    console.log("Process:");
    console.log(`  Percentage: ${retrievedTask.process.percentage}%`);
    console.log(`  Remaining Seconds: ${retrievedTask.process.remainSeconds}`);
  }

  console.log(`Created at: ${retrievedTask.createdAt}`);
  console.log(`Updated at: ${retrievedTask.updatedAt}`);
})();
