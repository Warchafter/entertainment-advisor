from rest_framework import serializers

from core.models import Product, ProductCategory, ProductStatus, Manufacturer


class ManufacturerSerializer(serializers.ModelSerializer):
    """Serailizer for manufacturer objects"""
    class Meta:
        model = Manufacturer
        fields = ('id', 'name')

class ProductCategorySerializer(serializers.ModelSerializer):
    """Serializer for product categories objects"""

    class Meta:
        model = ProductCategory
        fields = ('id', 'name')
        read_only_fields = ('id',)

class ProductStatusSerializer(serializers.ModelSerializer):
    """Serializer for product status objects"""

    class Meta:
        model = ProductStatus
        fields = ('id', 'name')
        read_only_fields = ('id',)

class ProductSerializer(serializers.ModelSerializer):
    """Serializer for products"""

    category = ProductCategorySerializer
    status = ProductStatusSerializer
    manufacturer = ManufacturerSerializer

    class Meta:
        model = Product
        fields = (
            'id', 'name', 'description', 'category', 'status', 'manufacturer'
        )
        read_only_fields = ('id',)
        ordering = ('id',)

class ProductDetailSerializer(ProductSerializer):
    """Serializer a product detail for the object"""
    category = ProductCategorySerializer(many=True, read_only=True)
    status = ProductStatusSerializer(many=True, read_only=True)
    manufacturer = ManufacturerSerializer(many=False, read_only=True)