import os
from twelvelabs import TwelveLabs

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

task = client.embed.task.create(
    engine_name="Marengo-retrieval-2.6",
    video_file="./01.mp4",
    video_url="https://download.samplelib.com/mp4/sample-30s.mp4",
    video_start_offset_sec=0,
    video_end_offset_sec=10,
    video_clip_length=5,
    video_embedding_scopes=["clip", "video"]
)

print(f"Task ID: {task.id}")
print(f"Engine Name: {task.engine_name}")
print(f"Status: {task.status}")
