from rest_framework import generics

from .models import Workflow
from .serializers import WorkflowSerializer


class WorkflowListCreateView(generics.ListCreateAPIView):
    queryset = Workflow.objects.all()
    serializer_class = WorkflowSerializer


class WorkflowDetailView(generics.RetrieveDestroyAPIView):
    queryset = Workflow.objects.all()
    serializer_class = WorkflowSerializer