from django.urls import path, include
from rest_framework.routers import DefaultRouter

from product import views

router = DefaultRouter()

router.register('products', views.ProductViewSet)
router.register('product-status', views.ProductStatusViewSet)
router.register('product-categories', views.ProductCategoryViewSet)
router.register('manufacturers', views.ManufacturerViewSet)

app_name = 'product'

urlpatterns = [
    path('', include(router.urls)),
]
