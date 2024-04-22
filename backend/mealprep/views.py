from rest_framework import viewsets
from .models import Ingredient, Meal, PlannedMeal
from .serializers import IngredientSerializer, MealSerializer, PlannedMealSerializer

class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

class MealViewSet(viewsets.ModelViewSet):
    queryset = Meal.objects.all()
    serializer_class = MealSerializer

class PlannedMealViewSet(viewsets.ModelViewSet):
    queryset = PlannedMeal.objects.all()
    serializer_class = PlannedMealSerializer
