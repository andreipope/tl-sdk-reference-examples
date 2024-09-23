from twelvelabs import TwelveLabs
import os

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

# index: 66e9358a808d95368f6f7a7c
# video: 66ebe4bfd4f452b062c63e3a

response = client.index.video.thumbnail(
    index_id="66e9358a808d95368f6f7a7c",
    id="66ebe4bfd4f452b062c63e3a",
    time=10
)

print(f"Thumbnai URL: {response}")
