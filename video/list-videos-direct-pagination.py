from twelvelabs import TwelveLabs
import os

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

videos = client.index.video.list(
    index_id="",
    id="",
    filename="01.mp4",
    size=1024,
    width=920,
    height=1080,
    duration=100,
    fps=30,
    metadata={"category": "nature"},
    created_at="2024-09-17T07:53:46.365Z",
    updated_at="2024-09-17T07:53:46.365Z",
    indexed_at="2024-09-17T07:55:22.125Z",
    page=1,
    page_limit=5,
    sort_by="created_at",
    sort_option="desc"
)
for video in videos:
    print(f"ID: {video.id}")
    print(f"  Created at: {video.created_at}")
    print(f"  Updated at: {video.updated_at}")
    print(f"  Indexed at: {video.indexed_at}")
    print("  Metadata:")
    print(f"    Filename: {video.metadata.filename}")
    print(f"    Duration: {video.metadata.duration}")
    print(f"    FPS: {video.metadata.fps}")
    print(f"    Width: {video.metadata.width}")
    print(f"    Height: {video.metadata.height}")
    print(f"    Size: {video.metadata.size}")
    if video.hls:
        print("  HLS:")
        print(f"    Video URL: {video.hls.video_url}")
        print("    Thumbnail URLs:")
        for url in video.hls.thumbnail_urls or []:
            print(f"      {url}")
        print(f"    Status: {video.hls.status}")
        print(f"    Updated At: {video.hls.updated_at}")
    if video.source:
        print("  Source:")
        print(f"    Type: {video.source.type}")
        print(f"    Name: {video.source.name}")
        print(f"    URL: {video.source.url}")

