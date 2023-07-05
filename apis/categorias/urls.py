from django.urls import path

from apis.categorias.api import (
    GetCategorias
)

app_name = 'apis_categorias'
urlpatterns = [
    path('', GetCategorias.as_view(), name='categorias')
]