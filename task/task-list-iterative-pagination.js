import { TwelveLabs } from 'twelvelabs-js';

function printPage(page) {
  page.forEach(task => {
    console.log(`Task ID=${task.id}`);
    console.log(`Index ID: ${task.indexId}`);
    console.log(`Video ID: ${task.videoId}`);
    console.log(`Estimated time: ${task.estimatedTime}`);
    console.log(`Status: ${task.status}`);
    
    console.log("Metadata:");
    for (const [key, value] of Object.entries(task.metadata)) {
      console.log(`  ${key}: ${value}`);
    }
  
    if (task.hls) {
      console.log("HLS:");
      console.log(`  Video URL: ${task.hls.videoUrl}`);
      console.log("  Thumbnail URLs:");
      for (const url of task.hls.thumbnailUrls || []) {
        console.log(`    ${url}`);
      }
      console.log(`  Status: ${task.hls.status}`);
      console.log(`  Updated at: ${task.hls.updatedAt}`);
    }
  
    if (task.process) {
      console.log("Process:");
      console.log(`  Percentage: ${task.process.percentage}%`);
      console.log(`  Remaining Seconds: ${task.process.remainSeconds}`);
    }
  
    console.log(`Created at: ${task.createdAt}`);
    console.log(`Updated at: ${task.updatedAt}`);
  });
}


(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY}); 

  const listParams = {
    id: '<YOUR_TASK_ID>',
    index_id: '<YOUR_INDEX_ID>',
    filename: '<YOUR_FILENAME>',
    duration: 20,
    width:1920,
    height: 1080,
    sortBy: 'updated_at',
    sortOption: 'asc',
    // createdAt: '2024-09-17T07:53:46.365Z',
    // updatedAt: '2024-09-17T07:53:46.365Z',
    estimatedTime: '2024-09-17T07:55:22.125Z',
    page: 2,
    pageLimit: 5,
  };

  // Fetch the initial page of results
  const taskPaginator = await client.task.listPagination(listParams);

  // Print the first page of results
  printPage(taskPaginator.data);

  // Iterate through subsequent pages
  while (true) {
    const nextTaskPage = await taskPaginator.next();
    if (!nextTaskPage) {
      console.log('No more pages of index results available');
      break;
    }
    printPage(nextTaskPage);
  }
})();
