from django.urls import path, include
#aqui
from .articulos import views


app_name = 'apis'
urlpatterns = [
    path('user/', include('apis.user.urls')),
    path('articulos/', include('apis.articulos.urls')),
    path('categorias/', include('apis.categorias.urls')),
    path('compras/', include('apis.compras.urls')),
#aqui
    path('articulos_d/', views.ArticuloList.as_view(), name='articulo-list'),
    path('articulos_d/<int:pk>/', views.ArticuloDetail.as_view(), name='articulo-detail'),
    path('articulos_d/<int:pk>/update/', views.ArticuloUpdate.as_view(), name='articulo-update'),
    path('articulos_d/create/', views.ArticuloCreate.as_view(), name='articulo-create'),
]