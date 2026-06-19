from rest_framework.views import APIView
from rest_framework.response import Response

from .rag_service import ask_agent


class AgentChatView(APIView):

    def post(self, request):
        query = request.data.get("query")
        response = ask_agent(query)
        return Response(response)