from django.db import models
from datetime import datetime
from django.utils import timezone

class Articulo(models.Model):
    # Definir los campos del artículo
    titulo = models.CharField(max_length=100)
    descripcion = models.TextField()
    url = models.CharField(max_length=255)
    precio = models.DecimalField(max_digits=6, decimal_places=2)
    cantidad = models.IntegerField(default=0)
    date_created = models.DateTimeField(default=timezone.now)
    # Otros campos...

    def __str__(self):
        return self.titulo
