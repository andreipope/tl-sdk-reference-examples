from twelvelabs import TwelveLabs
import os

client = TwelveLabs(api_key=os.environ.get("API_KEY"))


retrieved_index = client.index.retrieve("")
print(f"ID: {retrieved_index.id}")
print(f"Name: {retrieved_index.name}")
print("Engines:")
for i, engine in enumerate(retrieved_index.engines, 1):
    print(f"  Engine {i}:")
    print(f"    Name: {engine.name}")
    print(f"    Options: {engine.options}")
print(f"Video count: {retrieved_index.video_count}")
print(f"Total duration: {retrieved_index.total_duration} seconds")
print(f"created at: {retrieved_index.created_at}")
if retrieved_index.updated_at:
    print(f"Updated at: {retrieved_index.updated_at}")
