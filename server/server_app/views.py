from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .search_stores import get_stores
from .models import Supermarket

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
            res_list = [
                {
                'id': s.id,
                'food_name': s.food_name,
                'price_after_price': s.price_after_discount,
                'discount_rate': s.discount_rate,
                }
                for s in stores.food_set.all()
            ]
            return Response(res_list)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)