import requests


OLLAMA_URL = "http://localhost:11434/api/generate"


def generate_rsponse(prompt):

    payload = {
        "model": "deepseek-r1:1.5b",
        "prompt": prompt,
        "stream": False
    }

    response = requests.post(
        OLLAMA_URL,
        json=payload
    ),

    return response.json()["response"]
   