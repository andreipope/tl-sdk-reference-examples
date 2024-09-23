import { TwelveLabs } from "twelvelabs-js";

const CLASSES = [
  {
    name: 'Pets',
    prompts: ['Cats', 'Dogs', 'Guinea Pigs'],
  },
  {
    name: 'CookTok',
    prompts: ['Cooking tutorial', 'Cooking ustensils review'],
  },
];

function printClassifyPageResult(result, pageNumber) {
  console.log(`Page ${pageNumber}`);
  console.log("Classification results:");
  const data = result.data || result;
  data.forEach(videoData => printClassifyVideoData(videoData));
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



async function performClassification() {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY });

  let classifyResults = await client.classify.index({
    indexId: "",
    options: ["visual"],
    classes: CLASSES,
    pageLimit: 2,
    showDetailedScore: true,
  });

  // Print classification pool information (if available)
  if (classifyResults.pool) {
    console.log("Classification pool:");
    console.log(`  Total count: ${classifyResults.pool.totalCount}`);
    console.log(`  Index ID: ${classifyResults.pool.indexId}`);
  }

  let pageNumber = 1;
  printClassifyPageResult(classifyResults, pageNumber);

  while (true) {
    const nextPage = await classifyResults.next();
    if (nextPage === null) break;
    pageNumber++;
    printClassifyPageResult(nextPage, pageNumber);
  }

  console.log("No more results.");
}

performClassification().catch(error => console.error("An error occurred during classification:", error));

