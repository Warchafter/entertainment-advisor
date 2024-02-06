from django.urls import path, include
from rest_framework.routers import DefaultRouter
from todo.views import ToDoViewSet

router = DefaultRouter()
router.register('todo1', ToDoViewSet)

app_name = 'todo'

urlpatterns = [
    path('', include(router.urls)),
]