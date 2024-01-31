# Generated by Django 4.2.6 on 2024-01-31 17:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("core", "0007_alter_jikanuserinfo_user"),
    ]

    operations = [
        migrations.CreateModel(
            name="ToDo",
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
                ("todo_desc", models.TextField()),
                (
                    "user",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="todo",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={"verbose_name": "To Do", "verbose_name_plural": "To Do`s",},
        ),
    ]
