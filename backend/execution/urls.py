from django.urls import path

from .views import StartExecutionView

from .views import(
    ExecutionListView,
    ExecutionDetailView
)



urlpatterns = [
    path(
        "",
        ExecutionListView.as_view(),
        name="execution-list"
    ),

    path(
        "<int:pk>/",
        ExecutionDetailView.as_view(),
        name="execution-detail"
    ),

    path(
        "start/",
        StartExecutionView.as_view(),
        name="start-execution"
    ),

]
