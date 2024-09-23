from twelvelabs import TwelveLabs
import os

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

CLASSES = [
    {
        "name": "Pets",
        "prompts": [
            "Cat",
            "Dog",
            "Guinea Pig"
        ]
    }
]

def print_classify_page_result(result):
    print("Classification results:")
    data = getattr(result, 'data', result)
    if isinstance(data, list):
        for video_data in data:
            print_classify_video_data(video_data)
    else:
        print_classify_video_data(data)

def print_classify_video_data(video_data):
    print(f"Video ID: {video_data.video_id}")
    for class_data in video_data.classes:
        print_classify_class(class_data)
    print()  # Add a blank line between videos

def print_classify_class(class_data):
    print(f"  Class name: {class_data.name}")
    print(f"  Score: {class_data.score}")
    print(f"  Duration ratio: {class_data.duration_ratio}")
    if class_data.clips:
        print("  Clips:")
        for clip in class_data.clips:
            print_classify_clip(clip)

def print_classify_clip(clip):
    print(f"    Start: {clip.start}")
    print(f"    End: {clip.end}")
    print(f"    Score: {clip.score}")
    print(f"    Option: {clip.option}")
    print(f"    Prompt: {clip.prompt}")
    print(f"    Thumbnail URL: {clip.thumbnail_url or 'N/A'}")
    if clip.detailed_scores:
        print_classify_detailed_score(clip.detailed_scores)

def print_classify_detailed_score(detailed_score):
    print(f"      Max score: {detailed_score.max_score}")
    print(f"      Avg score: {detailed_score.avg_score}")
    print(f"      Normalized score: {detailed_score.normalized_score}")


result = client.classify.index(
    index_id="",
    options=["visual", "conversation"],
    classes=CLASSES,
    include_clips=True,
    show_detailed_score=True,
    page_limit=1
)

print_classify_page_result(result)

page_number = 2
while True:
    try:
        print(f"Page {page_number}")
        print_classify_page_result(next(result))
        page_number += 1
    except StopIteration:
        break

print("No more results.")
