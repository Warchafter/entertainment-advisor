from rest_framework import serializers

from core.models import JikanFavoriteAnime


class JikanFavoriteAnimeSerializer(serializers.ModelSerializer):

    class Meta:
        model = JikanFavoriteAnime
        fields = ('id', 'mal_id', 'fav_added', 'user')


class TestFavoriteAnimeSerializer(serializers.ModelSerializer):

    class Meta:
        model = JikanFavoriteAnime
        fields = ('id', 'mal_id', 'fav_added', 'user')