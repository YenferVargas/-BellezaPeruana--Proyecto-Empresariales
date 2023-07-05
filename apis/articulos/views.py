from rest_framework import generics
from .models import Articulo
from .serializers import ArticuloSerializer

class ArticuloList(generics.ListCreateAPIView):
    queryset = Articulo.objects.all()
    serializer_class = ArticuloSerializer
#eliminar
class ArticuloDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Articulo.objects.all()
    serializer_class = ArticuloSerializer
#actualizar
class ArticuloUpdate(generics.UpdateAPIView):
    queryset = Articulo.objects.all()
    serializer_class = ArticuloSerializer
#CREAR
class ArticuloCreate(generics.CreateAPIView):
    queryset = Articulo.objects.all()
    serializer_class = ArticuloSerializer
