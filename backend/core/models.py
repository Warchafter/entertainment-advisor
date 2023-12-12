from django.db import models
from django.db.models import F
from django.utils.translation import gettext_lazy as _
from django.conf import settings

class JikanFavoriteAnime(models.Model):
    mal_id = models.IntegerField()
    fav_added = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    REQUIRED_FIELDS = ['mal_id', ]

    def __str__(self):
        return f"{self.user.username}'s Favorite Anime: {self.mal_id}"