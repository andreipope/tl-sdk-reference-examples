from twelvelabs import TwelveLabs
from twelvelabs.models.search import SearchData, GroupByVideoSearchData
import os

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

def print_search_data(data: SearchData):
    print(f"  Score: {data.score}")
    print(f"  Start: {data.start}")
    print(f"  End: {data.end}")
    print(f"  Video ID: {data.video_id}")
    print(f"  Confidence: {data.confidence}")
    print(f"  Thumbnail URL: {data.thumbnail_url}")
    if data.metadata:
        print("  Metadata:")
        for meta in data.metadata:
            for key, value in meta.items():
                print(f"    {key}: {value}")
    if data.module_confidence:
        print("  Module confidence:")
        for module, confidence in data.module_confidence.items():
            print(f"    {module}: {confidence}")
    if data.modules:
        print("  Modules:")
        for module in data.modules:
            print(f"    {module}")

result = client.search.query(
    index_id="",
    options=["visual", "conversation", "text_in_video", "logo"],
    query_text="",
    group_by="clip",
    # threshold="medium",
    operator="or",
    conversation_option="semantic",
    # filter={"category": "nature"},
    page_limit=5,
    sort_option="score",
    # adjust_confidence_level=0.5
)

# Print the search pool information
print("Search pool:")
print(f"  Total count: {result.pool.total_count}")
print(f"  Total duration: {result.pool.total_duration}")
print(f"  Index ID: {result.pool.index_id}")

# Print the search results
print("Search Results:")
for item in result.data:
    if isinstance(item, GroupByVideoSearchData):
        print(f"Video ID: {item.id}")
        if item.clips:
            for clip in item.clips:
                print_search_data(clip)
    else:
        print_search_data(item)

# Print the page information
print("Page information:")
print(f"  Limit per page: {result.page_info.limit_per_page}")
print(f"  Total results: {result.page_info.total_results}")
print(f"  Page expired at: {result.page_info.page_expired_at}")
print(f"  Next page token: {result.page_info.next_page_token}")
print(f"  Previous page token: {result.page_info.prev_page_token}")

