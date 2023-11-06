from .serializers import UserCreateSerializer, UserSerializer
from users import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import permissions, status, viewsets
from rest_framework import filters
from users.models import UserAccount



# class IsAuthenticatedOrReadOnly(permissions.BasePermission):
#     """Object-level permission to allow al authenticated users to edit an object"""

#     def has_permission(self, request, view):
#         if request.method in permissions.SAFE_METHODS:
#             return True
#         elif request.user.roles == 'user':
#             return True

#         return request.user.is_staff


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserSerializer
    search_fields = ['email', ]
    filter_backends = (filters.SearchFilter, )
    queryset = UserAccount.objects.all()
    # authentication_classes = (IsAuthenticatedOrReadOnly,)

    def _params_to_ints(self, qs):
        return [int(str_id) for str_id in qs.split(',')]
    
    def get_queryset(self):
        email = self.request.query_params.get(
            'email'
        )
        first_name = self.request.query_params.get(
            'first_name'
        )
        last_name = self.request.query_params.get(
            'last_name'
        )
        theme_picked = self.request.query_params.get(
            'theme_picked'
        )
        queryset = self.queryset
        is_staff = self.request.user.is_staff

        if email:
            queryset = queryset.filter(
                email__iexact=email
            )
        if first_name:
            queryset = queryset.filter(
                first_name__iexact=first_name
            )
        if last_name:
            queryset = queryset.filter(
                last_name__iexact=last_name
            )
        if theme_picked:
            queryset = queryset.filter(
                theme_picked__iexact=theme_picked
            )
        if is_staff:
            return queryset.all().order_by('email')\

        def get_serializer_class(self):
            if self.action == 'update_theme':
                return serializers.UserCurrentThemeSerializer


        @action(methods=['PATCH'], detail=False, url_path='update_theme')
        def update_theme(self, request):
            user = self.get_object()
            serializer = self.get_serializer(
                user,
                data=request.data
            )

            if serializer.is_valid():
                serializer.save()
                return Response(
                    serializer.data,
                    status=status.HTTP_200_OK
                )

            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )



class RegisterView(APIView):
    def post(self, request):
        data = request.data

        serializer = UserCreateSerializer(data=data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        user = serializer.create(serializer.validated_data)
        user = UserSerializer(user)

        return Response(user.data, status=status.HTTP_201_CREATED)


class RetrieveUserView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        user = UserSerializer(user)

        return Response(user.data, status=status.HTTP_200_OK)

