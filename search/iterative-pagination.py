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

def print_page(result):
    # Print the search results
    print("Search Results:")
    for item in getattr(result, 'data', result):
        if isinstance(item, GroupByVideoSearchData):
            print(f"Video ID: {item.id}")
            if item.clips:
                for clip in item.clips:
                    print_search_data(clip)
        else:
            print_search_data(item)


# Initial query
search_results = client.search.query(
    index_id="",
    options=["visual", "conversation", "text_in_video", "logo"],
    query_text="man laughing",
    group_by="clip",
    # threshold="medium",
    operator="or",
    conversation_option="semantic",
    # filter={"category": "nature"},
    page_limit=2,
    sort_option="score",
    # adjust_confidence_level=0.5
)

# Print the search pool information
print("Search pool:")
print(f"  Total count: {search_results.pool.total_count}")
print(f"  Total duration: {search_results.pool.total_duration}")
print(f"  Index ID: {search_results.pool.index_id}")

# Print the first page
print_page(search_results)

# Print subsequent pages using the iterator protocol
page_number = 2
while True:
    try:
        print(f"Page {page_number}")
        print_page(next(search_results))
        page_number += 1
    except StopIteration:
        break

print("No more results.")

