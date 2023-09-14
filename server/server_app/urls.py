from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import Search, ListAllStore, Detail_Shop, FoodViewSet, SupermarketViewSet

router = DefaultRouter()
router.register(r'supermarkets', SupermarketViewSet)
router.register(r'supermarkets/(?P<supermarket_id>\d+)/foods', FoodViewSet, basename='food')

urlpatterns = [
    path('', include(router.urls)),
    #一覧情報を表示
    path('', ListAllStore.as_view(), name='search'),
    # 入力したキーワードによる検索結果を表示
    # input(json): {"search"}
    # Output(json): {"Store_ID", "Store_Name", "Discount_flag", "Maximum_Discount_Rate"}
    path('search/', Search.as_view(), name='search'),

    # 詳細ボタンを押したとき
    path('<int:pk>', Detail_Shop.as_view(), name='store_detail'),
]