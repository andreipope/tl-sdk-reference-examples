import { TwelveLabs } from "twelvelabs-js";

function printClassifyPageResult(result) {
  console.log("Classification results:");
  result.data.forEach(videoData => printClassifyVideoData(videoData));
  
  console.log("\nPage information:");
  printTokenPageInfo(result.pageInfo);
}

function printClassifyVideoData(videoData) {
  console.log(`Video ID: ${videoData.videoId}`);
  videoData.classes.forEach(classData => printClassifyClass(classData));
  console.log(); // Add a blank line between videos
}

function printClassifyClass(classData) {
  console.log(`  Class name: ${classData.name}`);
  console.log(`  Score: ${classData.score}`);
  console.log(`  Duration ratio: ${classData.durationRatio}`);
  if (classData.clips && classData.clips.length > 0) {
    console.log("  Clips:");
    classData.clips.forEach(clip => printClassifyClip(clip));
  }
  if (classData.detailedScores) {
    printClassifyDetailedScore(classData.detailedScores);
  }
}

function printClassifyClip(clip) {
  console.log(`    Start: ${clip.start}`);
  console.log(`    End: ${clip.end}`);
  console.log(`    Score: ${clip.score}`);
  console.log(`    Option: ${clip.option}`);
  console.log(`    Prompt: ${clip.prompt}`);
  console.log(`    Thumbnail URL: ${clip.thumbnailUrl || 'N/A'}`);
}

function printClassifyDetailedScore(detailedScore) {
  console.log("  Detailed scores:");
  console.log(`    Max score: ${detailedScore.maxScore}`);
  console.log(`    Avg score: ${detailedScore.avgScore}`);
  console.log(`    Normalized score: ${detailedScore.normalizedScore}`);
}

function printTokenPageInfo(pageInfo) {
  console.log(`Limit per page: ${pageInfo.limitPerPage}`);
  console.log(`Total results: ${pageInfo.totalResults}`);
  console.log(`Page expired at: ${pageInfo.pageExpiredAt}`);
  console.log(`Next page token: ${pageInfo.nextPageToken || 'N/A'}`);
  console.log(`Previous page token: ${pageInfo.prevPageToken || 'N/A'}`);
}

(async () => {
    const client = new TwelveLabs({ apiKey: process.env.API_KEY});
    const result = await client.classify.byPageToken("");
    printClassifyPageResult(result); 


})();


