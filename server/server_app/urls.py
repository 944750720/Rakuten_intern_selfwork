from django.urls import path
from .views import Search, ListAllStore, Detail_Shop

urlpatterns = [
    # 入力したキーワードによる検索結果を表示
    # input(json): {"search"}
    # Output(json): {"Store_ID", "Store_Name", "Discount_flag", "Maximum_Discount_Rate"}
    path('', ListAllStore.as_view(), name='search'),
    path('search/', Search.as_view(), name='search'),

    # 詳細ボタンを押したときに
    # input(json): {}
    # Output(json): {}
    path('<int:pk>', Detail_Shop.as_view(), name='store_detail'),
]