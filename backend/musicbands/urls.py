from django.urls import path, include
from rest_framework.routers import DefaultRouter

from musicbands import views

router = DefaultRouter()
router.register(r'person', views.PersonViewSet)
router.register(r'group', views.GroupViewSet)
router.register(r'membershi', views.MembershipViewSet)

app_name = 'musicbands'

urlpatterns = [
    path('', include(router.urls))
]
