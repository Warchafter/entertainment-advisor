from rest_framework import viewsets, status
from rest_framework import filters
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication

from core.models import ToDo
from todo import serializers


class ToDoViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ToDoSerializer
    search_fields = ['id',]
    filter_backends = (filters.SearchFilter,)
    queryset = ToDo.objects.all()
    authentication_classes = (JWTAuthentication,)
    permission_classes = [IsAuthenticated]

    def _params_to_ints(self, qs):
        """Convert a list of string IDs to a list of integers

        Args:
            qs (list): Query String
        """
        return [int(str_id) for str_id in qs.split(',')]

    def get_queryset(self):
        """Retrieve the favorite anime list based on user and optional filters"""
        order_by = self.request.query_params.get('order_by')
        queryset = self.queryset

        # status = self.request.query_params.get('status')
        # add this one to the model to filter by pending, completed or whatever

        # if status:
        #     queryset = queryset.filter(status=)
        # dix this to have the exact__id or whatever

        # Apply order_by if provided
        if order_by:
            queryset = queryset.order_by(order_by)

        return queryset

    def perform_create(self, serializer):
        """Add a new todo entry"""
        serializer.save(user=self.request.user)

    def destroy(self, request, pk=None):
        try:
            instance = self.get_object()
            self.perform_destroy(instance)
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
