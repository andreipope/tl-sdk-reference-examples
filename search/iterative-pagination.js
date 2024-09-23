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

function printPage(result, pageNumber) {
  console.log(`Page ${pageNumber}`);
  
  // Print the search results
  console.log("Search Results:");
  const data = result.data || result;
  data.forEach(item => {
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
}

async function performSearch() {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY}); 
  let searchResults = await client.search.query({
    indexId: "",
    queryText: "",
    options: ["visual", "conversation", "text_in_video", "logo"],
    groupBy: "clip",
    // threshold: "medium",
    operator: "or",
    conversationOption: "semantic",
    // filter: {
    //   "metadata.language": "en",
    //},
    sortOption: "score",
    // adjustConfidenceLevel: 0.5,
    pageLimit: 5
  });

  // Print the search pool information
  console.log("Search pool:");
  console.log(`  Total count: ${searchResults.pool.totalCount}`);
  console.log(`  Total duration: ${searchResults.pool.totalDuration}`);
  console.log(`  Index ID: ${searchResults.pool.indexId}`);

  let pageNumber = 1;
  printPage(searchResults, pageNumber);

  while (true) {
    const nextPage = await searchResults.next();
    if (nextPage === null) break;
    pageNumber++;
    printPage(nextPage, pageNumber);
  }

  console.log("No more results.");
}

performSearch().catch(error => console.error("An error occurred:", error));

