from rest_framework import serializers
from .models import Food, Supermarket

class FoodSerializer(serializers.ModelSerializer):
    original_price = serializers.SerializerMethodField()

    class Meta:
        model = Food
        fields = '__all__'

    def get_original_price(self, Food):
        return Food.price_after_discount / (1 - Food.discount_rate / 100)

class SupermarketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supermarket
        fields = '__all__'