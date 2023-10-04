from django.conf import settings
from django.conf.urls.static import static
from django.urls import path,include
from .views import produtos,test_view

urlpatterns = [
    path('',produtos,name='produtos'),
    path('teste/',test_view,name='teste'),

]