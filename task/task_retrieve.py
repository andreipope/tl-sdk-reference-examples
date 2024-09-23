from twelvelabs import TwelveLabs
import os

client = TwelveLabs(api_key=os.environ.get("API_KEY"))


retrieved_task = client.task.retrieve("")

print(f"Task ID: {retrieved_task.id}")
print(f"Index ID: {retrieved_task.index_id}")
print(f"Video ID: {retrieved_task.video_id}")
print(f"Estimated time: {retrieved_task.estimated_time}")
print(f"Status: {retrieved_task.status}")
print("Metadata:")
for key, value in retrieved_task.metadata.items():
    print(f"  {key}: {value}")

if retrieved_task.hls:
    print("HLS:")
    print(f"  Video URL: {retrieved_task.hls.video_url}")
    print("  Thumbnail URLs:")
    for url in retrieved_task.hls.thumbnail_urls or []:
        print(f"    {url}")
    print(f"  Status: {retrieved_task.hls.status}")
    print(f"  Updated at: {retrieved_task.hls.updated_at}")

if retrieved_task.process:
    print("Process:")
    print(f"  Percentage: {retrieved_task.process.percentage}%")
    print(f"  Remaining Seconds: {retrieved_task.process.remain_seconds}")

print(f"Created at: {retrieved_task.created_at}")
print(f"Updated at: {retrieved_task.updated_at}")
