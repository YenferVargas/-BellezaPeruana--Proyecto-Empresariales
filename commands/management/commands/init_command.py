import os
from django.contrib.auth.hashers import make_password
from app.core.bases.commands import MyBaseCommand, pj, pln, TF, get_d
from apis.models import User, UserPermisos, Category, CategoryArticulo
from apis.articulos.models import Articulo

class Command(MyBaseCommand):
    def main(self, *args, **options):
        users = User.objects.filter(correo='admin@admin.com')
        if not users:
            user = User()
            user.nombre = 'admin'
            user.apellido = 'admin'
            user.correo = 'admin@admin.com'
            user.password = make_password('admin')
            user.telefono = None
            user.activo = True
            user.save()
            
            permiso = UserPermisos()
            permiso.user = user
            permiso.permiso = 'adm'
            permiso.save()

            print(f'Se creo el usuario Correctamente con 1 permiso')
        
        all_users = User.objects.all()
        for u in all_users:
            print(u, u.correo, u.id)
            permiso = UserPermisos()
            permiso.user = u
            permiso.permiso = 'gen'
            permiso.save()
            
        added = []
        for p in UserPermisos.objects.all():
            if f"{p.permiso}{p.user.correo}" not in added:
                added.append(f"{p.permiso}{p.user.correo}")
            else:
                p.delete()

        articulos = [
            {
                "titulo": "Crema derk",
                "descripcion": "Especial cuidando tu piel",
                "url": "https://www.zonadamas.mx/wp-content/uploads/2021/12/8bQ-Gns-Crema-regeneradora-0-25080594_m.jpg",
                "precio": 30,
                "cantidad": 10,
                "categorias": "Cuiadado de piel"
            },
            {
                "titulo": "Crema Fell",
                "descripcion": "Especial cuidando tu piel",
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPu_Y3xGxakABIeCRDCuL8-cm1vCh3LoB34VijRKMRsA4qjuEIY4jz1Sr1SInXP2zxvLA&usqp=CAU/",
                "precio": 200,
                "cantidad": 20, 
                "categorias": "Cuiadado de piel"

            },
            {
                "titulo": "Floral",
                "descripcion": "Especial cuidando tu piel",
                "url": "https://estag.fimagenes.com/img/2/M/t/5/Mt5_900.jpg",
                "precio": 70,
                "cantidad": 10, 
                "categorias": "Cuiadado de piel"

            },
            {
                "titulo": "Crema Fuss",
                "descripcion": "Especial cuidando tu piel",
                "url": "https://s3.abcstatics.com/media/sociedad/2016/09/27/CREMA-kDjE--620x349@abc.jpg",
                "precio": 60,
                "cantidad": 6, 
                "categorias": "Cuiadado de piel"

            },
            {
                "titulo": "Tupialyse",
                "descripcion": "Crema hidratante",
                "url": "https://imagenes.marie-claire.es/files/vertical_composte_image/uploads/2023/01/04/63b5748ebfe7b.jpeg",
                "precio": 67,
                "cantidad": 10, 
                "categorias": "Cuiadado de piel"

            },
            {
                "titulo": "Perfume",
                "descripcion": "Fragancia floral",
                "url": "https://us.123rf.com/450wm/olegdudko/olegdudko1507/olegdudko150710922/42545197-cosm%C3%A9ticos-maquillaje-perfume.jpg",
                "precio": 90,
                "cantidad": 20, 
                "categorias": "Perfume"

            },
            {
                "titulo": "Perfume rosa",
                "descripcion": "Fragancia floral",
                "url": "https://img.freepik.com/fotos-premium/botella-perfume-sobre-fondo-rosa_35076-3119.jpg",
                "precio": 67,
                "cantidad": 10, 
                "categorias": "Perfume"

            },
            {
                "titulo": "Perfume maquill",
                "descripcion": "Fragancia floral",
                "url": "https://maquillaliux.com/img/uploads/cHVibHMyMTgxMjdvcmRlcmltZ3NlbGZzZXJ2aWNl.png",
                "precio": 79,
                "cantidad": 10, 
                "categorias": "Perfume"

            },
            {
                "titulo": "Perfume rosa",
                "descripcion": "Fragancia floral",
                "url": "https://i0.wp.com/www.efeblog.com/wp-content/uploads/2019/10/perfumes-de-mujer.jpg?ssl=1",
                "precio": 45,
                "cantidad": 10, 
                "categorias": "Perfume"

            },
            {
                "titulo": "Perfume rosa",
                "descripcion": "Fragancia floral",
                "url": "https://www.debate.com.mx/__export/1505414653896/sites/debate/img/2017/09/14/perfume2.jpg_406901479.jpg",
                "precio": 84,
                "cantidad": 10, 
                "categorias": "Perfume"

            },
        ]
        added = 0
        for a in articulos:
            # titulo, descripcion, url, precio, cantidad
            art = Articulo()
            art.titulo = a['titulo']
            art.descripcion = a['descripcion']
            art.url = a['url']
            art.precio = a['precio']
            art.cantidad = a['cantidad']
            art.save()
            
            cats = a['categorias'].replace('  ', ' ').replace(', ', ',').split(',')
            
            # Category
            # CategoryArticulo
            for cat in cats:
                cat = cat.strip()
                cs = Category.objects.filter(lower_name=cat.lower())
                if not cs:
                    cs = Category()
                else:
                    cs = cs[0]
                cs.name = cat
                cs.lower_name = cat.lower()
                cs.save()
                
                un = CategoryArticulo()
                un.articulo = art
                un.category = cs
                un.save()
            
            added += 1
        
        print(f'Se agregaron {added} articulos')
                
                
