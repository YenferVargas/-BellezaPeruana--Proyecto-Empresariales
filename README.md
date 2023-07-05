This app is based in 

1.- Crear la base de datos y dale permisos
2.- permisos 
GRANT ALL PRIVILEGES ON bellezaperuana.* TO 'yenif'@'localhost' IDENTIFIED BY '';
FLUSH PRIVILEGES;

3.- abrir cmd
pip install -r requirements.txt


python manage.py migrate
python manage.py init_command 
python manage.py runserver

------------------------
PARA CREAR UN ADMIN
-------------------------
python manage.py shell
from apis.models import User
from apis.models import UserPermisos
usuario = User.objects.get(nombre='Joseph')
permiso_admin = UserPermisos.objects.create(user=usuario, permiso='adm')
permiso_admin.save()
permiso_admin.permiso = 'adm'
permiso_admin.save()

----------------------------------
VER LOS USUARIOS DE ADMINISTRADORES
----------------------------------

from apis.models import User as U, UserPermisos as UP
ps = UP.objects.all()
for p in ps:
    print(p.user.nombre, p.user.correo, p.permiso)
    
ejmplo:
admin admin@admin.com gen
admin admin@admin.com adm
