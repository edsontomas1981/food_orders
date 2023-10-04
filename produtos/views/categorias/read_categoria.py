from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from produtos.controller.categorias import Categoria
from django.core import serializers
import json

def read_categoria (request):

    if request.method == 'GET':
        categoria = Categoria()
        categorias_qs = categoria.read_categoria()
        categorias = serializers.serialize('python', categorias_qs)
        categorias_list = [categoria['fields'] for categoria in categorias]
        return JsonResponse({'view':categorias_list}) #Cadastro efetuado com sucesso

    elif request.method == 'POST':
        return JsonResponse({'status': 200}) #Cadastro efetuado com sucesso