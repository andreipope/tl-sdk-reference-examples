from twelvelabs import TwelveLabs
import os

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

def print_page(page):
    for index in page:
      print(f"ID: {index.id}")
      print(f"  Name: {index.name}")
      print("  Engines:")
      for i, engine in enumerate(index.engines, 1):
          print(f"    Engine {i}:")
          print(f"      Name: {engine.name}")
          print(f"      Options: {engine.options}")
      print(f"  Video count: {index.video_count}")
      print(f"  Total duration: {index.total_duration} seconds")
      print(f"  Created at: {index.created_at}")
      if index.updated_at:
          print(f"  Updated at: {index.updated_at}")

# Fetch the initial page of results
index_paginator = client.index.list_pagination(
    id="<YOUR_INDEX_ID>",
    name="<YOUR_INDEX_NAME>",
    page=1,
    page_limit=5,
    engine_options=["visual", "conversation"],
    engine_family="marengo",
    sort_by = "updated_at",
    sort_option="asc",
    created_at="2024-09-17T07:53:46.365Z",
    updated_at="2024-09-17T07:53:46.365Z"
)

# Print the first page of results
print_page(index_paginator.data)

# Iterate through subsequent pages
while True:
    try:
        next_index_page = next(index_paginator)
        print_page(next_index_page)
    except StopIteration:
        break
    
