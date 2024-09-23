from twelvelabs import TwelveLabs
import os

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

result = client.generate.text_stream(
    video_id="66ebe4bfd4f452b062c63e3a",
    prompt="Be concise",
    temperature=0.7
)

print(f"Result ID: {result.id}")

print("Streaming texts:")
for i, text in enumerate(result.texts, start=1):
    print(f"  Chunk {i}: {text}")
    
    # Print the current state of all fields
    print(f"\nCurrent state after chunk {i}:")
    print(f"  ID: {result.id}")
    print(f"  Texts received so far: {result.texts}")
    print(f"  Current aggregated text: {result.aggregated_text}")
    print("\n" + "-"*50 + "\n")

print("Final results:")
print(f"Stream ID: {result.id}")
print(f"All received texts: {result.texts}")
print(f"Final aggregated text: {result.aggregated_text}")

