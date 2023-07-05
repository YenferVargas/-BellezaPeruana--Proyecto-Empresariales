# Python
import os
import json
# Django
from django.forms.models import model_to_dict as md
# User
from app.core.bases.apis import PostApi, GetApi, NoSession, get_d, pln
# Models
from apis.articulos.models import Articulo
from apis.models import User, Compras, CompraDet
class SaveCompra(PostApi):
    def main(self):
        pln("SaveCompra")
        registros = get_d(self.data, 'registros', default=[])
        
        total = sum([float(r["cantidad"]) * float(r["item"]["precio"]) for r in registros])
        
        com = Compras()
        com.user = self.user
        com.amount = total
        com.save()
        for r in registros:
            articulo_id = r["item"]["id"]
            articulo = Articulo.objects.get(id=articulo_id)
            
            com_det = CompraDet()
            com_det.compra = com
            com_det.articulo = articulo
            com_det.count = r["cantidad"]

            com_det.save()

            articulo.cantidad = articulo.cantidad - com_det.count
            articulo.save()

        self.response = {
            "message": "Compra realizada con exito"
        }
class GetComprasPasadas(GetApi):
    def main(self):
        pln("GetComprasPasadas")
        
        compras = Compras.objects.filter(user=self.user)
        
        if not compras:
            raise self.MYE("No hay compras pasadas")
        
        cps = [self.md_compra(c) for c in compras]
        
        self.response = {
            "compras": cps,
        }
    
    def md_compra(self, c):
        arts = CompraDet.objects.filter(compra=c)
        articulos = []
        for a in arts:
            articulo = a.articulo
            model = md(a)
            model["articulo"] = md(articulo)
            
            articulos.append(model)
            
        c = md(c)
        c["articulos"] = articulos
        return c