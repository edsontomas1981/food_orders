from django.conf import settings
from django.conf.urls.static import static
from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.contato,name='contatos'),
    path('create/',views.create_contatos,name='create_contatos'),
]