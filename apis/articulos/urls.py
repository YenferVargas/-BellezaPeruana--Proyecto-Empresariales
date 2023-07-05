from django.urls import path

from apis.articulos.api import (
    ArticuloCreate, ArticuloUpdate, ArticuloList, ArticuloDetail, ArticuloDelete
)

app_name = 'apis_articulos'
urlpatterns = [
    path('', ArticuloList.as_view(), name='articulo_list'),
    path('<int:art_id>/', ArticuloDetail.as_view(), name='articulo_detail'),
    path('<int:art_id>/update/', ArticuloUpdate.as_view(), name='articulo_update'),
    path('create/', ArticuloCreate.as_view(), name='articulo_create'),
    path('<int:art_id>/delete/', ArticuloDelete.as_view(), name='articulo_delete'),
]