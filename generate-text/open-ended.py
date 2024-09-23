from twelvelabs import TwelveLabs
import os

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

result = client.generate.text(
    video_id="66ebe4bfd4f452b062c63e3a", prompt="Be concise", temperature=0.7
)

print("Result ID:", result.id)
print(f"Generated Text: {result.data}")
