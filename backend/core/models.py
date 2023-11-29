
from django.db import models
from django.db.models import F
from django.utils.translation import gettext_lazy as _
from django.conf import settings


# class InventoryCategory(models.Model):
#     """ """
#     name = models.CharField(max_length=30)

#     class Meta:
#         ordering = ('-name',)

#     def __str__(self):
#         return self.name


# class InventoryStatus(models.Model):
#     """ """
#     name = models.CharField(max_length=30)

#     class Meta:
#         ordering = ('-name',)

#     def __str__(self):
#         return self.name


# class Inventory(models.Model):
#     """ """
#     name = models.CharField(max_length=255)
#     description = models.TextField(max_length=3600)
#     category = models.ManyToManyField(InventoryCategory)
#     status = models.ManyToOneRel(InventoryStatus)
#     amount = models.SmallIntegerField(max_length=4)

#     class Meta:
#         ordering = ('-name',)

#     def __str__(self):
#         return self.name


class ProductCategory(models.Model):
    """ """
    name = models.CharField(max_length=30)

    class Meta:
        ordering = ('-name',)

    def __str__(self):
        return self.name


class ProductStatus(models.Model):
    """ """
    name = models.CharField(max_length=30)

    class Meta:
        ordering = ('-name',)

    def __str__(self):
        return self.name


class Manufacturer(models.Model):
    """ """
    name = models.CharField(max_length=30)

    class Meta:
        ordering = ('-name',)

    def __str__(self):
        return self.name


class Product(models.Model):
    """ """
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=3000)
    category = models.ManyToManyField(ProductCategory)
    status = models.ManyToManyField(ProductStatus)
    manufacturer = models.OneToOneField(Manufacturer, on_delete=models.CASCADE)

    class Meta:
        ordering = ('-name',)

    def __str__(self):
        return self.name


# class Order(models.Model):
#     """ """
#     name = models.CharField(max_length=255)
#     date_order_placed = models.DateField()
