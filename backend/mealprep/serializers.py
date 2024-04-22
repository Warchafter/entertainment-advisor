from rest_framework import serializers
from .models import Ingredient, Meal, MealIngredient, PlannedMeal

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'

class MealIngredientSerializer(serializers.ModelSerializer):
    ingredient_name = serializers.ReadOnlyField(source='ingredient.name')

    class Meta:
        model = MealIngredient
        fields = ['id', 'ingredient', 'ingredient_name', 'quantity']

class MealSerializer(serializers.ModelSerializer):
    ingredients = MealIngredientSerializer(many=True, read_only=True)

    class Meta:
        model = Meal
        fields = '__all__'

class PlannedMealSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlannedMeal
        fields = '__all__'
