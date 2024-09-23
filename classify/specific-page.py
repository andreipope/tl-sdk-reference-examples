from twelvelabs import TwelveLabs
import os

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

def print_classify_page_result(result):
    print("Classification results:")
    for video_data in result.data:
        print_classify_video_data(video_data)

    print("\nPage information:")
    print_token_page_info(result.page_info)

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

def print_token_page_info(page_info):
    print(f"Limit per page: {page_info.limit_per_page}")
    print(f"Total results: {page_info.total_results}")
    print(f"Page expired at: {page_info.page_expired_at}")
    print(f"Next page token: {page_info.next_page_token or 'N/A'}")
    print(f"Previous page token: {page_info.prev_page_token or 'N/A'}")

result = client.classify.by_page_token("")
print_classify_page_result(result)


