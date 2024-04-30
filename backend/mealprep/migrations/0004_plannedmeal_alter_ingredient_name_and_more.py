# Generated by Django 4.2.6 on 2024-04-22 18:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("mealprep", "0003_rename_mealtype_meal_meal_type"),
    ]

    operations = [
        migrations.CreateModel(
            name="PlannedMeal",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                (
                    "meal_type",
                    models.CharField(
                        choices=[
                            ("breakfast", "Breakfast"),
                            ("lunch", "Lunch"),
                            ("dinner", "Dinner"),
                            ("snack", "Snack"),
                            ("drink", "Drink"),
                        ],
                        max_length=20,
                    ),
                ),
                ("protein", models.FloatField(default=0)),
                ("fat", models.FloatField(default=0)),
                ("carbohydrate", models.FloatField(default=0)),
            ],
        ),
        migrations.AlterField(
            model_name="ingredient",
            name="name",
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name="meal",
            name="meal_type",
            field=models.CharField(
                choices=[
                    ("breakfast", "Breakfast"),
                    ("lunch", "Lunch"),
                    ("dinner", "Dinner"),
                    ("snack", "Snack"),
                    ("drink", "Drink"),
                ],
                default=1,
                max_length=20,
            ),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="meal", name="name", field=models.CharField(max_length=100),
        ),
        migrations.DeleteModel(name="MealType",),
    ]