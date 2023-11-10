from .serializers import UserCreateSerializer, UserSerializer, UserAccountSerializer
from users import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import permissions, status, viewsets
from rest_framework import filters
from users.models import UserAccount
from django.shortcuts import get_object_or_404
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.exceptions import InvalidToken



class IsAdminOrReadOnly(permissions.BasePermission):
    """Object-level permission to only allow admin users to edit an object"""

    def has_permission(self, request, view):
        # Read permissions are allowed to any request, therefore GET, HEAD and
        # OPTIONS requests are always allowed.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Instance must belong to an admin user
        return request.user.is_staff


class JWTAuthenticationSafe(JWTAuthentication):
    def authenticate(self, request):
        try:
            return super().authenticate(request=request)
        except InvalidToken:
            return None


class HelloView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)



class RetrieveUserView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        user = UserSerializer(user)

        return Response(user.data, status=status.HTTP_200_OK)



class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = serializers.UserSerializer
    search_fields = ['email', ]
    filter_backends = (filters.SearchFilter, )
    queryset = UserAccount.objects.all()
    authentication_classes = (JWTAuthentication,)

    """
    A viewset that provides the standard actions
    """
    queryset = UserAccount.objects.all()
    serializer_class = UserSerializer

    def _params_to_ints(self, qs):
        """Convert a list of string IDs to a list of integers

        Args:
            qs (list): Query String
        """
        return [int(str_id) for str_id in qs.split(',')]

    def get_queryset(self):
        email = self.request.query_params.get('email')
        first_name = self.request.query_params.get('first_name')
        last_name = self.request.query_params.get('last_name')
        queryset = self.queryset
        is_staff = self.request.user.is_staff

        if email:
            queryset = queryset.filter(email__iexact=email)
        if first_name:
            queryset = queryset.filter(first_name__iexact=first_name)
        if last_name:
            queryset = queryset.filter(last_name__iexact=last_name)
        if is_staff:
            return queryset.all().order_by('email')
        else:
            return queryset.all().order_by('last_name')

    def get_serializer_class(self):
        """Return appropiate serializer class"""
        if self.action == 'retrieve':
            return serializers.CurrentUserSerializer
        elif self.action == 'set_password':
            return serializers.PasswordSerializer
        elif self.action == 'set_theme':
            return serializers.ThemePatchSerializer


    @action(detail=True, methods=['patch'], permission_classes=[permissions.IsAuthenticated], url_path='set_password')
    def set_password(self, request, pk=None):
        user = self.get_object()
        serializer = self.get_serializer(
            user,
            data=request.data
        )

        if serializer.is_valid():
            user.set_password(serializer.validated_data['password'])
            user.save()
            return Response({'status': 'password set'}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['patch'], permission_classes=[permissions.IsAuthenticated], url_path='set_theme')
    def set_theme(self, request, pk=None):
        user = self.get_object()
        serializer = self.get_serializer(
            user,
            data=request.data
        )

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)


    @action(detail=False)
    def recent_users(self, request):
        recent_users = UserAccount.objects.all().order_by('-last_login')

        page = self.paginate_queryset(recent_users)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(recent_users, many=True)
        return Response(serializer.data)


# class RegisterView(APIView):
#     def post(self, request):
#         data = request.data

#         serializer = UserCreateSerializer(data=data)
#         if not serializer.is_valid():
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#         user = serializer.create(serializer.validated_data)
#         user = UserSerializer(user)

#         return Response(user.data, status=status.HTTP_201_CREATED)

