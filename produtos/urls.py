from django.conf import settings
from django.conf.urls.static import static
from django.urls import path,include
from . import views

urlpatterns = [
    # path('',views,name='produtos'),
    path('create/',views.create_produto,name='create_produto'),
    path('read/',views.read_produto,name='read_produto'),
    path('update/',views.update_produto,name='update_produto'),
    path('delete/',views.delete_produto,name='delete_produto'),    

    path('categorias/create/',views.create_categoria,name='create_categoria'),
    path('categorias/read/',views.read_categoria,name='read_categoria'),
    path('categorias/update/',views.update_categoria,name='update_categoria'),
    path('categorias/delete/',views.delete_categoria,name='delete_categoria'),

    path('alergenos/create/',views.create_alergenos,name='create_alergeno'),
    path('alergenos/read/',views.read_alergeno,name='read_alergeno'),
    path('alergenos/update/',views.update_alergeno,name='update_alergeno'),
    path('alergenos/delete/',views.delete_alergeno,name='delete_alergeno'),

    path('tamanho/create/',views.create_tamanho,name='create_tamanho'),
    path('tamanho/read/',views.read_tamanho,name='read_tamanho'),
    path('tamanho/update/',views.update_tamanho,name='update_tamanho'),
    path('tamanho/delete/',views.delete_tamanho,name='delete_tamanho'),

    path('fornecedor/create/',views.create_fornecedor,name='create_fornecedor'),
    path('fornecedor/read/',views.read_fornecedor_cnpj,name='read_fornecedor'),
    path('fornecedor/update/',views.update_fornecedor,name='update_fornecedor'),
    path('fornecedor/delete/',views.delete_fornecedor,name='delete_fornecedor'),  
 
    path('api/get_csrf_token/', views.get_csrf_token, name='get_csrf_token'),
]