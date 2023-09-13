from django.urls import path
from .views import Search, ListAllStore

urlpatterns = [
    # 入力したキーワードによる検索結果を表示
    # input(json): {"search"}
    # Output(json): {"Store_ID", "Store_Name", "Discount_flag", "Maximum_Discount_Rate"}
    path('', ListAllStore.as_view(), name='search'),
    path('search/', Search.as_view(), name='search'),

    # 詳細ボタンを押したときに
    # input(json): {"Store_ID", "Store_Name", "C", "Categories", "authors", "Pdf_url","published", "Title_Ja"}
    # Output(json): {"ID", "Title_En", "Content_En", "Categories", "authors", "Pdf_url","published", "Title_Ja", "Content_Ja", "Content_plain"}
    # path('detail/', Store_detail.as_view(), name='store_detail'),
]