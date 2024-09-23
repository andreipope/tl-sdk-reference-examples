import os
from twelvelabs import TwelveLabs

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

embedding = client.embed.create(
  engine_name="Marengo-retrieval-2.6",
  text="Man weearing a hat",
  text_truncate="start",
)

print(f" Engine: {embedding.engine_name}")
print(f" Embedding: {embedding.text_embedding.float}")
