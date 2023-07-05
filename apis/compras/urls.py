from django.urls import path

from apis.compras.api import (
    SaveCompra, GetComprasPasadas
)

app_name = 'apis_compras'
urlpatterns = [
    path('save_compra/', SaveCompra.as_view(), name=f"{app_name}_save_compra"),
    path('get_compras_pasadas/', GetComprasPasadas.as_view(), name=f"{app_name}_get_compras_pasadas"),
]