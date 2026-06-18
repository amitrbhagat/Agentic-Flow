import chromadb

from .embedding_service import EmbeddingService


client = chromadb.PersistentClient(
    path = "./chroma_db"
)

collection = client.get_or_create_collection(
    name = "knowledge_documents"
)


def add_document(document):

    embedding = EmbeddingService.generate_embedding(
        document.content
    )

    collection.add(
        ids=[str(document.id)],
        documents=document.content,
        embeddings=[embedding],
        metadatas=[
            {
                "title":document.title
            }
        ]
    )



def search_documents(query, top_k=3):

    embedding = EmbeddingService.generate_embedding(
        query
    )

    results = collection.query(
        query_embeddings=[embedding],
        n_results = top_k
    )

    return results