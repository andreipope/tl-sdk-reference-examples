import { TwelveLabs } from "twelvelabs-js";

function printSearchData(data) {
  console.log(`  Score: ${data.score}`);
  console.log(`  Start: ${data.start}`);
  console.log(`  End: ${data.end}`);
  console.log(`  Video ID: ${data.videoId}`);
  console.log(`  Confidence: ${data.confidence}`);
  console.log(`  Thumbnail URL: ${data.thumbnailUrl}`);
  if (data.metadata) {
    console.log("  Metadata:");
    data.metadata.forEach(meta => {
      Object.entries(meta).forEach(([key, value]) => {
        console.log(`    ${key}: ${value}`);
      });
    });
  }
  if (data.moduleConfidence) {
    console.log("  Module confidence:");
    Object.entries(data.moduleConfidence).forEach(([module, confidence]) => {
      console.log(`    ${module}: ${confidence}`);
    });
  }
  if (data.modules) {
    console.log("  Modules:");
    data.modules.forEach(module => {
      console.log(`    Type: ${module.type}, Confidence: ${module.confidence}`);
    });
  }
}


(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY}); 
  const result = await client.search.by_page_token("");
  // Print the search pool information
  console.log("Search pool:");
  console.log(`  Total count: ${result.pool.totalCount}`);
  console.log(`  Total duration: ${result.pool.totalDuration}`);
  console.log(`  Index ID: ${result.pool.indexId}`);

  // Print the search results
  console.log("Search Results:");
  result.data.forEach(item => {
    if ('clips' in item) {  // This is equivalent to isinstance(item, GroupByVideoSearchData)
      console.log(`Video ID: ${item.id}`);
      if (item.clips) {
        item.clips.forEach(clip => {
          printSearchData(clip);
        });
      }
    } else {
      printSearchData(item);
    }
  });

  // Print the page information
  console.log("Page information:");
  console.log(`  Limit per page: ${result.pageInfo.limitPerPage}`);
  console.log(`  Total results: ${result.pageInfo.totalResults}`);
  console.log(`  Page expired at: ${result.pageInfo.pageExpiredAt}`);
  console.log(`  Next page token: ${result.pageInfo.nextPageToken}`);
  console.log(`  Previous page token: ${result.pageInfo.prevPageToken}`);

})();

