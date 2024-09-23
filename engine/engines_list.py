from twelvelabs import TwelveLabs
import os

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

engines = client.engine.list()
for i, engine in enumerate(engines, 1):
    print(f"Engine ID: {engine.id}")
    print(f"  Author: {engine.author}")
    print(f"  Allowed Engine Options: {engine.allowed_engine_options}")
    print(f"  Ready: {engine.ready}")
    print(f"  Finetune: {engine.finetune}")
