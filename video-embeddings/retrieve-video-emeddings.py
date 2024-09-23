import os
from twelvelabs import TwelveLabs

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

response = client.embed.task.retrieve(id="66ed9d64808d95368f6f8bd3")

print(f"Task ID: {response.id}")
print(f"Engine Name: {response.engine_name}")
print(f"Status: {response.status}")

if response.video_embeddings:
    for i, embedding in enumerate(response.video_embeddings):
        print(f"\nEmbedding {i + 1}:")
        print(f"  Start Offset: {embedding.start_offset_sec} seconds")
        print(f"  End Offset: {embedding.end_offset_sec} seconds")
        print(f"  Embedding Scope: {embedding.embedding_scope}")
        print(f"  Embedding Values: {embedding.embedding.float[:5]} (truncated)")
else:
    print("No video embeddings available")

