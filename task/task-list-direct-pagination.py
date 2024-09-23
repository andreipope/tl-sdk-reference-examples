from twelvelabs import TwelveLabs
import os

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

tasks = client.task.list(
  id="<YOUR_TASK_ID>",
  index_id="<YOUR_INDEX_ID>",
  filename="<YOUR_FILENAME>",
  duration=20,
  width=1920,
  height=1080,
  sort_by = "updated_at",
  sort_option="asc",
  created_at="2024-09-17T07:53:46.365Z",
  updated_at="2024-09-17T07:53:46.365Z",
  estimated_time="2024-09-17T07:55:22.125Z",
  page=2,
  page_limit=5,
)
for task in tasks:
  print(f"Task ID: {task.id}")
  print(f"Index ID: {task.index_id}")
  print(f"Video ID: {task.video_id}")
  print(f"Estimated time: {task.estimated_time}")
  print(f"Status: {task.status}")
  print("Metadata:")
  for key, value in task.metadata.items():
      print(f"  {key}: {value}")

  if task.hls:
      print("HLS:")
      print(f"  Video URL: {task.hls.video_url}")
      print("  Thumbnail URLs:")
      for url in task.hls.thumbnail_urls or []:
          print(f"    {url}")
      print(f"  Status: {task.hls.status}")
      print(f"  Updated at: {task.hls.updated_at}")

  if task.process:
      print("Process:")
      print(f"  Percentage: {task.process.percentage}%")
      print(f"  Remaining Seconds: {task.process.remain_seconds}")

  print(f"Created at: {task.created_at}")
  print(f"Updated at: {task.updated_at}")
