import { TwelveLabs } from 'twelvelabs-js';

function printIndexPage(indexPage) {
  indexPage.forEach(index => {
    console.log(`ID: ${index.id}`);
    console.log(`  Name: ${index.name}`);
    console.log("  Engines:");
    index.engines.forEach((engine, index) => {
      console.log(`    Engine ${index + 1}:`);
      console.log(`      Name: ${engine.name}`);
      console.log(`      Options: ${JSON.stringify(engine.options)}`);
    });
    console.log(`  Video count: ${index.videoCount}`);
    console.log(`  Total duration: ${index.totalDuration} seconds`);
    console.log(`  Created at: ${index.createdAt}`);
    if (index.updatedAt) {
      console.log(`  Updated at: ${index.updatedAt}`);
    }
  });
}


(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY}); 

  const listParams = {
    id: '',
    name: '',
    engineOptions: ['conversation', 'visual'],
    engineFamily: 'marengo',
    page: 1,
    pageLimit: 5,
    sortBy: 'updated_at',
    sortOption: 'asc'
  };

  // Fetch the initial page of results
  const indexPaginator = await client.index.listPagination(listParams);

  // Print the first page of results
  printIndexPage(indexPaginator.data);

  // Iterate through subsequent pages
  while (true) {
    const nextIndexPage = await indexPaginator.next();
    if (!nextIndexPage) {
      console.log('No more pages of index results available');
      break;
    }
    printIndexPage(nextIndexPage);
  }
})();
