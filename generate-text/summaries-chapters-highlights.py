from twelvelabs import TwelveLabs
import os

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

result = client.generate.summarize(
    video_id="66ebe4bfd4f452b062c63e3a",
    prompt="Be concise",
    temperature=0.7,
    type="summary"
)

print(f"Result ID: {result.id}")

if result.summary is not None:
    print(f"Summary: {result.summary}")

if result.chapters is not None:
    print("Chapters:")
    for chapter in result.chapters:
        print(f"  Chapter {chapter.chapter_number}:")
        print(f"    Start: {chapter.start}")
        print(f"    End: {chapter.end}")
        print(f"    Title: {chapter.chapter_title}")
        print(f"    Summary: {chapter.chapter_summary}")

if result.highlights is not None:
    print("Highlights:")
    for highlight in result.highlights:
        print(f"  Start: {highlight.start}")
        print(f"  End: {highlight.end}")
        print(f"  Highlight: {highlight.highlight}")
