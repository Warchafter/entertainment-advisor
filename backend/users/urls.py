from django.urls import path, include
from rest_framework.routers import DefaultRouter

from users import views

router = DefaultRouter()
router.register(r'users', views.UserViewSet, basename='user')

app_name = 'users'

urlpatterns = [
    # path('register', views.RegisterView.as_view()),
    path('me', views.RetrieveUserView.as_view()),
    path('hello', views.HelloView.as_view(), name='hello'),
    path('', include(router.urls))
    # path('ui/change-theme', views.ChangeUserThemeView.as_view()),
]
