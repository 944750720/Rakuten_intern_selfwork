from rest_framework import status
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .search_stores import get_stores
from .models import Supermarket, Food
from rest_framework import generics
from rest_framework.decorators import action
from .serializers import FoodSerializer, SupermarketSerializer

class Search(APIView):
    def get(self, request):
        return Response("OK", status=status.HTTP_200_OK)
        # return Response(search_paper.main(search["Search"]))

    def post(self, request, *args, **kwargs):
        search_word = request.data
        # return Response(search_paper.main(search_word["Search"]))

        search_result_list = get_stores(search_word['Search'])
        
        return Response(search_result_list)

class ListAllStore(APIView):
    def get(self, request):
        try:
            stores = Supermarket.objects.all()
            res_list = [
                {
                    'id': s.id,
                    'name': s.name,
                }
                for s in stores
            ]
            return Response(res_list)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class Detail_Shop(APIView):
    def get(self, request, pk):
        try:
            try:
                stores = Supermarket.objects.get(id=pk)
            except:
                error_msg = "そんなidのスーパーマーケットはないよ！"
                return Response(error_msg, status=status.HTTP_404_NOT_FOUND)
            
            
            res_list = []
            for s in stores.food_set.all():
                original_price = s.price_after_discount / (100 - s.discount_rate) * 100
                res_list.append(
                    {
                    'id': s.id,
                    'food_name': s.food_name,
                    'price_after_discount': s.price_after_discount,
                    'discount_rate': s.discount_rate,
                    'price_before_discount': original_price,
                    'register_date': s.last_updated
                    }
                )
            return Response(res_list)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

class FoodViewSet(viewsets.ModelViewSet):
    serializer_class = FoodSerializer

    def get_queryset(self):
        # URLからSupermarketのidを取得
        supermarket_id = self.kwargs['supermarket_id']
        # 特定のSupermarketに関連付けられたFoodのクエリセットを返す
        return Food.objects.filter(supermarket_id=supermarket_id)
    
    @action(detail=False, methods=['DELETE'])
    def delete_all(self, request, supermarket_id=None):
        # 特定のSupermarketに関連付けられた全てのFoodを削除
        Food.objects.filter(supermarket__id=supermarket_id).delete()
        return Response({'message': '全てのFoodが削除されました。'}, status=204)

class SupermarketViewSet(viewsets.ModelViewSet):
    queryset = Supermarket.objects.all()
    serializer_class = SupermarketSerializer