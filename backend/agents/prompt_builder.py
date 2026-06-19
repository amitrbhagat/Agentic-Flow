
def build_prompt(query, documents):
    
    context = "\n".join(documents)

    prompt = f"""
You are an AI assistant.

Answer the user's question ONLY using the provided context.

Context:
{context}

Question:
{query}

Answer:
"""

    return prompt
