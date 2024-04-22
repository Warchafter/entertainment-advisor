from django.urls import path, include
from rest_framework.routers import DefaultRouter

from mealprep import views

router = DefaultRouter()
router.register(r'ingredients', views.IngredientViewSet)
router.register(r'meals', views.MealViewSet)
router.register(r'planned-meals', views.PlannedMealViewSet)

app_name = 'mealprep'

urlpatterns = [
    path('', include(router.urls))
]
