from twelvelabs import TwelveLabs
import os

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

# index: 66e9358a808d95368f6f7a7c
# video: 66ebe4bfd4f452b062c63e3a

response = client.index.video.logo(
    index_id="66e9358a808d95368f6f7a7c",
    id="66ebe4bfd4f452b062c63e3a",
    # start=100,
    # end=300
)

for i, logo in enumerate(response, start=1):
    print(f"\nLogo {i}:")
    print(f"  Start time: {logo.start} seconds")
    print(f"  End time: {logo.end} seconds")
    print(f"  Logo: {logo.value}")

