from django.db import models

class Ingredient(models.Model):
    name = models.CharField(max_length=100)
    protein = models.FloatField(default=0)
    fat = models.FloatField(default=0)
    carbohydrate = models.FloatField(default=0)

    def __str__(self):
        return self.name

    def calculate_calories(self):
        return (self.protein * 4) + (self.fat * 9) + (self.carbohydrate * 4)

class Meal(models.Model):
    MEAL_TYPES = [
        ('breakfast', 'Breakfast'),
        ('lunch', 'Lunch'),
        ('dinner', 'Dinner'),
        ('snack', 'Snack'),
        ('drink', 'Drink')
    ]

    name = models.CharField(max_length=100)
    meal_type = models.CharField(max_length=20, choices=MEAL_TYPES)
    ingredients = models.ManyToManyField(Ingredient, through='MealIngredient')

    def __str__(self):
        return f'{self.name} ({self.get_meal_type_display()})'

class MealIngredient(models.Model):
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f'{self.quantity} x {self.ingredient.name}'

class PlannedMeal(models.Model):
    MEAL_TYPES = [
        ('breakfast', 'Breakfast'),
        ('lunch', 'Lunch'),
        ('dinner', 'Dinner'),
        ('snack', 'Snack'),
        ('drink', 'Drink')
    ]

    name = models.CharField(max_length=100)
    description = models.TextField()
    meal_type = models.CharField(max_length=20, choices=MEAL_TYPES)
    protein = models.FloatField(default=0)
    fat = models.FloatField(default=0)
    carbohydrate = models.FloatField(default=0)

    def __str__(self):
        return f'{self.name} ({self.get_meal_type_display()})'