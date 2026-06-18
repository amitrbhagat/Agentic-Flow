from rest_framework import generics

from .serializer import KnowledgeDocumentSerializer
from .models import KnowledgeDocument

from .services.vector_store import add_document

from rest_framework.views import APIView
from rest_framework.response import Response

from .services.vector_store import search_documents



class KnowledgeDocuentListCreateView(generics.ListCreateAPIView):
    queryset = KnowledgeDocument.objects.all()
    serializer_class = KnowledgeDocumentSerializer

    def perform_create(self, serializer):
        document = serializer.save()
        add_document(document)



class KnowledgeDocumentDetailView(generics.RetrieveDestroyAPIView):
    queryset = KnowledgeDocument.objects.all()
    serializer_class = KnowledgeDocumentSerializer



class KnowledgeSearchView(APIView):

    def post(self, request):

        query = request.data.get("query")

        results = search_documents(query)

        return Response(results)