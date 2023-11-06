from django.urls import path
from rest_framework.routers import DefaultRouter

from users import views

router = DefaultRouter()
router.register('users', views.UserViewSet)

app_name = 'users'

urlpatterns = [
    path('register', views.RegisterView.as_view()),
    path('me', views.RetrieveUserView.as_view()),
    # path('ui/change-theme', views.ChangeUserThemeView.as_view()),
]
