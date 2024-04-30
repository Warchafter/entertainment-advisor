from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Ingredient, Meal, PlannedMeal
from .serializers import IngredientSerializer, MealSerializer, PlannedMealSerializer, MealIngredientSerializer

class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset


class MealViewSet(viewsets.ModelViewSet):
    queryset = Meal.objects.all()
    serializer_class = MealSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        # You can customize queryset based on your requirements
        return queryset

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        meal = serializer.save()
        # You can perform additional actions after saving the meal
        return Response(MealSerializer(meal).data)


class PlannedMealViewSet(viewsets.ModelViewSet):
    queryset = PlannedMeal.objects.all()
    serializer_class = PlannedMealSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        planned_meal = serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)