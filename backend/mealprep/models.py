from django.db import models

class MealType(models.Model):
    name = models.CharField(max_length=15)

    def __str__(self):
        return self.name

class Ingredient(models.Model):
    name = models.CharField(max_length=20)
    protein = models.FloatField(default=0)
    fat = models.FloatField(default=0)
    carbohydrate = models.FloatField(default=0)

    def __str__(self):
        return self.name

class Meal(models.Model):
    name = models.CharField(max_length=60)
    meal_type = models.ForeignKey(MealType, on_delete=models.SET_NULL, null=True)
    ingredients = models.ManyToManyField(Ingredient, through='MealIngredient')

    def __str__(self):
        return self.name

class MealIngredient(models.Model):
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f'{self.quantity} x {self.ingredient.name}'
