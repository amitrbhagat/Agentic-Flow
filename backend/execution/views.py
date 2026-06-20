from rest_framework import generics

from .models import Execution
from .serializers import ExecutionSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from workflows.models import Workflow

from .serializers import ExecutionSerializer
from .services.workflow_runner import run_workflow


class ExecutionListView(generics.ListAPIView):
    queryset = Execution.objects.all().order_by("-started_at")
    serializer_class = ExecutionSerializer


class ExecutionDetailView(generics.RetrieveAPIView):
    queryset = Execution.objects.all()
    serializer_class = ExecutionSerializer


class StartExecutionView(APIView):

    def post(self, request):

        workflow_id = request.data.get("workflow_id")

        query = request.data.get("query")

        workflow = Workflow.objects.get(
            id=workflow_id
        )

        execution = run_workflow(
            workflow,
            query
        )

        serializer = ExecutionSerializer(
            execution
        )

        return Response(
            serializer.data,
            status=status.HTTP_200_OK
        )