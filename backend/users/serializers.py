from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.core import exceptions
User = get_user_model()

class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True, 'min_length': 8}
        }

    def validate(self, data):
        user = User(**data)
        password = data.get('password')

        try:
            validate_password(password, user)
        except exceptions.ValidationError as e:
            serializer_errors = serializers.as_serializer_error(e)
            raise exceptions.ValidationError(
                {'password': serializer_errors['non_field_errors']}
            )

        return data

    def create(self, validated_data):
        user = User.objects.create_user(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
            password=validated_data['password'],
        )

        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'theme_picked']


class CurrentUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id', 'email', 'first_name', 'last_name', 'theme_picked', 'is_staff'
        )
        read_only_fields = ('id', 'email', 'is_staff')


class UserCurrentThemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'theme_picked']

class ThemePatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['theme_picked',]


class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['__all__',]


class PasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['password',]