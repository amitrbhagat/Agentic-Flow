from django.urls import path


from .views import(
    KnowledgeDocuentListCreateView,
    KnowledgeDocumentDetailView
)

from .views import KnowledgeSearchView



urlpatterns = [
    
    path(
        "",
        KnowledgeDocuentListCreateView.as_view(),
        name="knowledge-list-create"
    ),

    path(
        "<int:pk>/",
        KnowledgeDocumentDetailView.as_view(),
        name="knowledge-detail"
    ),

    path(
        "search/",
        KnowledgeSearchView.as_view(),
        name = "knowledge-search"
    ),

]
