import os
from twelvelabs import TwelveLabs

client = TwelveLabs(api_key=os.environ.get("API_KEY"))

task = client.embed.task.status(task_id="66ed9d64808d95368f6f8bd3")

print(f"Task ID: {task.id}")
print(f"Engine Name: {task.engine_name}")
print(f"Status: {task.status}")
