# Generated by Django 4.2.6 on 2024-04-22 13:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("mealprep", "0002_mealingredient_meal_ingredients"),
    ]

    operations = [
        migrations.RenameField(
            model_name="meal", old_name="mealType", new_name="meal_type",
        ),
    ]