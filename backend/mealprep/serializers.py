from rest_framework import serializers
from .models import Ingredient, Meal, MealIngredient, PlannedMeal


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['id', 'name', 'protein', 'fat', 'carbohydrate']

class MealIngredientSerializer(serializers.ModelSerializer):
    ingredient = serializers.PrimaryKeyRelatedField(queryset=Ingredient.objects.all(), source='ingredient_id')

    class Meta:
        model = MealIngredient
        fields = ['ingredient', 'quantity']


class MealSerializer(serializers.ModelSerializer):
    ingredients = MealIngredientSerializer(many=True)

    class Meta:
        model = Meal
        fields = ['id', 'name', 'meal_type', 'ingredients']

    def create(self, validated_data):
        ingredients_data = validated_data.pop('ingredients')
        meal = Meal.objects.create(**validated_data)
        for ingredient_data in ingredients_data:
            ingredient_id = ingredient_data.pop('ingredient_id')
            quantity = ingredient_data.pop('quantity')
            MealIngredient.objects.create(meal=meal, ingredient=ingredient_id, quantity=quantity)
        return meal

    def update(self, instance, validated_data):
        ingredients_data = validated_data.pop('ingredients')
        instance.name = validated_data.get('name', instance.name)
        instance.meal_type = validated_data.get('meal_type', instance.meal_type)
        instance.save()

        instance.ingredients.all().delete()
        for ingredient_data in ingredients_data:
            ingredient = ingredient_data.pop('ingredient')
            quantity = ingredient_data.pop('quantity')
            MealIngredient.objects.create(meal=instance, ingredient=ingredient, quantity=quantity)
        return instance

class PlannedMealSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlannedMeal
        fields = '__all__'
