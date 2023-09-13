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
