from django.conf import settings
from django.conf.urls.static import static
from django.urls import path,include
from . import views

urlpatterns = [
    # path('',views,name='produtos'),
    path('categorias/create',views.create_categoria,name='create_categoria'),
    path('categorias/read',views.read_categoria,name='read_categoria'),
    path('categorias/update',views.update_categoria,name='update_categoria'),
    path('categorias/delete',views.delete_categoria,name='delete_categoria'),

    path('alergenos/create',views.create_alergenos,name='create_alergeno'),
    path('alergenos/read',views.read_alergenos,name='read_alergeno'),
    path('alergenos/update',views.update_alergenos,name='update_alergeno'),
    path('alergenos/delete',views.delete_alergeno,name='delete_alergeno'),

    path('tamanho/create',views.create_tamanho,name='create_tamanho'),
    path('tamanho/read',views.read_tamanho,name='read_tamanho'),
    path('tamanho/update',views.update_tamanho,name='update_tamanho'),
    path('tamanho/delete',views.delete_tamanho,name='delete_tamanho'),
]