from django.db import models
from workflows.models import Workflow

class ExecutionRun(models.Model):

    STATUS_CHOICES = (
        ("PENDING", "Pending"),
        ("RUNNING", "Running"),
        ("SUCCESS", "Success"),
        ("FAILED", "Failed"),
    )

    workflow = models.ForeignKey(
        Workflow,
        on_delete=models.CASCADE,
        related_name='runs'
    )

    status  = models.CharField(max_length = 20, choices= STATUS_CHOICES, default='PENDING')

    started_at = models.DateTimeField(auto_now_add=True)
    completed_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Run {self.id} - {self.workflow.name}"



class ExecutionLog(models.Model):
    run = models.ForeignKey(
        ExecutionRun,
        on_delete=models.CASCADE,
        related_name='logs'
    )

    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Log {self.id}"