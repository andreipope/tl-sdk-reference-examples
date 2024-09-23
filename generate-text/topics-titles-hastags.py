from twelvelabs import TwelveLabs
import os

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

result = client.generate.gist(
    video_id="66ebe4bfd4f452b062c63e3a",
    types=["title", "topic", "hashtag"]
)

print("Result ID:", result.id)

if result.title is not None:
    print("Title:", result.title)

if result.topics is not None:
    print("Topics:")
    for topic in result.topics:
        print(f"  - {topic}")

if result.hashtags is not None:
    print("Hashtags:")
    for hashtag in result.hashtags:
        print(f"  - {hashtag}")
