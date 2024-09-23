from twelvelabs import TwelveLabs
import os

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

engines = [
        {
          "name": "marengo2.6",
          "options": ["visual", "conversation", "text_in_video", "logo"]
        },
        {
            "name": "pegasus1.1",
            "options": ["visual", "conversation"]
        }
    ]
created_index = client.index.create(
    name="",
    engines=engines,
    addons=["thumbnail"]
)
print(f"ID: {created_index.id}")
print(f"Name: {created_index.name}")
print("Engines:")
for i, engine in enumerate(created_index.engines, 1):
    print(f"  Engine {i}:")
    print(f"    Name: {engine.name}")
    print(f"    Options: {engine.options}")
print(f"Video count: {created_index.video_count}")
print(f"Total duration: {created_index.total_duration} seconds")
print(f"created At: {created_index.created_at}")
if created_index.updated_at:
    print(f"Updated at: {created_index.updated_at}")
