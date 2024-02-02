from django.db import models
from django.utils.translation import gettext_lazy as _
from django.conf import settings

class JikanFavoriteAnime(models.Model):
    mal_id = models.IntegerField(unique=True)
    fav_added = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    REQUIRED_FIELDS = ['mal_id', ]

    def __str__(self):
        return f"{self.user.username}'s Favorite Anime: {self.mal_id}"

class JikanUserInfo(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='jikan_info')
    favorite_anime_count = models.PositiveIntegerField(default=0)
    # Add other fields related to Jikan app user info

    class Meta:
        verbose_name = 'Jikan User Info'
        verbose_name_plural = 'Jikan User Infos'


class ToDo(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    todo_desc = models.TextField(null=False, blank=False)

    class Meta:
        verbose_name = 'To Do'
        verbose_name_plural = 'To Do`s'
