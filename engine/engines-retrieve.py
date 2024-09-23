from twelvelabs import TwelveLabs
import os

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

retrieved_engine = client.engine.retrieve(id="pegasus1.1")
print(f"Author: {retrieved_engine.author}")
print(f"Allowed engine options: {retrieved_engine.allowed_engine_options}")
print(f"Ready: {retrieved_engine.ready}")
print(f"Finetune: {retrieved_engine.finetune}")
