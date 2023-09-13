def get_stores(search_word):
    from .models import Supermarket
    stores = Supermarket.objects.filter(name__icontains=search_word)
    # transform search result to json
    store_list = [
        {
            'Supermarket_ID': store.supermarket_id,
            'Supermarket_Name': store.name
        }
        for store in stores
    ]

    return store_list
