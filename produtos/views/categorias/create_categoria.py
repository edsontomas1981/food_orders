# from django.shortcuts import render
# from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from produtos.controller.categorias import Categoria
import json

def create_categoria (request):
    if request.method == 'GET':
        return JsonResponse({'view': 'categorias'}) #Cadastro efetuado com sucesso

    elif request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        categoria = Categoria()
        categoria.create_categoria(data['categoria'])
        return JsonResponse({'status': 200}) #Cadastro efetuado com sucesso