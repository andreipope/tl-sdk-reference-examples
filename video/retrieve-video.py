from twelvelabs import TwelveLabs
import os

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

video = client.index.video.retrieve(index_id="", id="")

print(f"ID: {video.id}")
print(f"Created at: {video.created_at}")
print(f"Updated at: {video.updated_at}")
print(f"Indexed at: {video.indexed_at}")
print("Metadata:")
print(f"  Filename: {video.metadata.filename}")
print(f"  Duration: {video.metadata.duration}")
print(f"  FPS: {video.metadata.fps}")
print(f"  Width: {video.metadata.width}")
print(f"  Height: {video.metadata.height}")
print(f"  Size: {video.metadata.size}")
if video.hls:
    print("HLS:")
    print(f"  Video URL: {video.hls.video_url}")
    print("  Thumbnail URLs:")
    for url in video.hls.thumbnail_urls or []:
        print(f"    {url}")
    print(f"  Status: {video.hls.status}")
    print(f"  Updated At: {video.hls.updated_at}")
if video.source:
    print("Source:")
    print(f"  Type: {video.source.type}")
    print(f"  Name: {video.source.name}")
    print(f"  URL: {video.source.url}")
