from knowledge.services.vector_store import search_documents

from agents.prompt_builder import build_prompt

from agents.services import generate_response


def ask_agent(query):

    results = search_documents(query)

    documents = results["documents"][0]

    prompt = build_prompt(
        query=query,
        documents=documents
    )

    answer = generate_response(prompt)

    return {
        "query": query,
        "documents": documents,
        "answer": answer
    }

    