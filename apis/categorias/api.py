# Python
import os
import json

# Django
from django.forms.models import model_to_dict as md

# User
from app.core.bases.apis import PostApi, GetApi, NoSession, get_d, pln

# Models
from apis.articulos.models import Articulo
from apis.models import Category, CategoryArticulo


class GetCategorias(NoSession, GetApi):
    def main(self):
        pln('GetCategorias')
        
        categorias = Category.objects.all()
        cats = []
        for c in categorias:
            if c.name:
                cats.append(c.name)
            else:
                c.delete()
        
        self.response = cats