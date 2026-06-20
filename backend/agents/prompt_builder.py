
def build_prompt(query, documents):
    context = "\n".join(documents)

    return f"""
You are a helpful assistant.

Use only the provided context.

Context:
{context}

Question:
{query}

Give a short and direct answer.
"""

