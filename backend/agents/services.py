import requests


OLLAMA_URL = "http://localhost:11434/api/generate"


def generate_response(prompt):

    payload = {
        "model": "llama3.2:1b",
        "prompt": prompt,
        "stream": False
    }

    response = requests.post(
        OLLAMA_URL,
        json=payload
    )

    data = response.json()

    print(data)

    return data["response"]