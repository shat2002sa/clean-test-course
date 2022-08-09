from rest_framework import serializers
from .models import Food, Category, Order


class CategorySerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=225)
    description = serializers.CharField(max_length=225)

    class Meta:
        model = Category
        fields = ('__all__')

class FoodSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=225)
    price = serializers.FloatField()
    description = serializers.CharField(max_length=225)
    category = serializers.StringRelatedField()

    class Meta:
        model = Food
        fields = ('__all__')

class OrderSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=225)
    item = serializers.StringRelatedField()
    quantity = serializers.IntegerField()

    class Meta:
        model = Order
        fields = ('__all__')