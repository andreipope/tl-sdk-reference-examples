import { TwelveLabs, Task } from 'twelvelabs-js';

(async () => {
  const client = new TwelveLabs({ apiKey: process.env.API_KEY}); 
  const task = await client.task.create({
    indexId: '',
    file: '',
    // transcriptionFile: '<YOUR_TRANSCRIPTION_FILE>'),
  });
  console.log(`Task ID:${task.id}`);
  await task.waitForDone(500, (task: Task) => {
    console.log(`  Status=${task.status}`);
  });
  
  if (task.status !== 'ready') {
    throw new Error(`Indexing failed with status ${task.status}`);
  }
  console.log(`Video ID: ${task.videoId}`);


})();
