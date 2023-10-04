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
]