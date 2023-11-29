from rest_framework import viewsets, mixins, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import filters

from core.models import Product, ProductCategory, ProductStatus, Manufacturer
from product import serializers


class BaseProductAttrViewSet(viewsets.GenericViewSet,
                            mixins.ListModelMixin,
                            mixins.CreateModelMixin):
    """ """
    authentication_classes = (JWTAuthentication,)

    def get_queryset(self):
        queryset = self.queryset

        return queryset.order_by('-id').distinct()

    def perform_create(self, serializer):
        """Create a new object"""
        serializer.save()

class StandardResultsSetPagination(PageNumberPagination):
    """Custom standard pagination class"""
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 1000

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'results': data
        })


class ProductCategoryViewSet(BaseProductAttrViewSet):
    """Manage product categories in the database"""
    queryset = ProductCategory.objects.all()
    serializer_class = serializers.ProductCategorySerializer


class ProductStatusViewSet(BaseProductAttrViewSet):
    """Manage product status in the database"""
    queryset = ProductStatus.objects.all()
    serializer_class = serializers.ProductStatusSerializer


class ManufacturerViewSet(BaseProductAttrViewSet):
    """Manage product status in the database"""
    queryset = Manufacturer.objects.all()
    serializer_class = serializers.ManufacturerSerializer


class ProductViewSet(viewsets.ModelViewSet):
    """Manage products in the database"""
    serializer_class = serializers.ProductSerializer
    search_fields = ['name',]
    filter_backends = (filters.SearchFilter,)
    queryset = Product.objects.all()
    authentication_classes = (JWTAuthentication,)
    pagination_class = StandardResultsSetPagination
    permission_classes = (permissions.IsAuthenticated,)

    def _params_to_ints(self, qs):
        """Convert a list of string IDs to a list of integers

        Args:
            qs (list): Query String
        """
        return [int(str_id) for str_id in qs.split(',')]

    def get_queryset(self):
        """Retrieve the products for all users"""
        category = self.request.query_params.get('category')
        status = self.request.query_params.get('status')
        manufacturer = self.request.query_params.get('manufacturer')
        order_by = self.request.query_params.get('order_by')
        queryset = self.queryset

        if status:
            queryset = queryset.filter(
                status__iexact=status
            ).order_by('id')
        if category:
            category_ids = self._params_to_ints(category)
            queryset = queryset.filter(
                category__is__in=category_ids
            ).order_by('id')
        if manufacturer:
            manufacturer_ids = self._params_to_ints(manufacturer)
            queryset = queryset.filter(
                manufacturer__is__in=manufacturer_ids
            ).order_by('id')

        if order_by:
            return queryset.order_by('id')
        else:
            return queryset.order_by('name')

    def get_serializer_class(self):
        """Return appropriate serializer class"""
        if self.action == 'retrieve':
            return serializers.ProductDetailSerializer

        return self.serializer_class

    def perform_create(self, serializer):
        """Create a new product"""
        product = self.get_object()
        serializer.save(product=self.request.product)

    @action(detail=True, methods=['patch'], url_path='update_product')
    def update_product(self, request, pk=None):
        product = self.get_object()
        serializer = self.get_serializer(
            product,
            data=request.data
        )

        if serializer.is_valid():
            product.save()
            return Response({'status': 'product updated'}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)
