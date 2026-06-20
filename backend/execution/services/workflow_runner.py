from execution.models import Execution

from agents.rag_service import ask_agent

from django.utils import timezone


def run_workflow(workflow, query):

    execution = Execution.objects.create(
        workflow=workflow,
        input_data=query,
        status="RUNNING"
    )

    try:

        result = ask_agent(query)

        execution.output_data = result["answer"]

        execution.status = "COMPLETED"

        execution.completed_at = timezone.now()

        execution.save()

        return execution

    except Exception as e:

        execution.output_data = str(e)

        execution.status = "FAILED"

        execution.save()

        execution.completed_at = timezone.now()

        return execution