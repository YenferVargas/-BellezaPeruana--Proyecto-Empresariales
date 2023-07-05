from django.urls import path

from apis.user.api import (
    GuardarUsuario, Login, ValidateLogin
)

app_name = 'apis_user'
urlpatterns = [
    path('guardar_usuario/', GuardarUsuario.as_view(), name='api_user_guardar_usuario'),
    path('login/', Login.as_view(), name='api_user_login'),
    path('validate_login/', ValidateLogin.as_view(), name='api_user_validate_login'),
]