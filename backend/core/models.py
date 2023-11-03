# import uuid
# import os
# from django.db import models
# from django.db.models import F
# from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
# from django.utils import timezone
# from django.utils.translation import gettext_lazy as _
# from django.conf import settings


# class SuppliesCategories(models.Model):
#     """ """
#     name = models.CharField(max_length=255)

#     class Meta:
#         ordering = ('-name',)

#     def __str__(self):
#         return self.name


# class Supplies(models.Model):
#     """ """
#     name = models.CharField(max_length=255)
#     categories = models.ManyToManyField(SuppliesCategories)

#     class Meta:
#         ordering = ('-name',)

#     def __str__(self):
#         return self.name


