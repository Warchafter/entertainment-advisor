# Generated by Django 4.2.6 on 2024-01-08 18:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("core", "0003_alter_jikanfavoriteanime_mal_id"),
    ]

    operations = [
        migrations.AlterField(
            model_name="jikanfavoriteanime",
            name="user",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL
            ),
        ),
    ]
