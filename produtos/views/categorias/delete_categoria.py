from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from produtos.controller.categorias import Categoria

def delete_categoria (request):
    if request.method == 'GET':
        categoria = Categoria()
        categoria.delete_categoria(1)
        return JsonResponse({'view': 'delete_categorias'}) #Cadastro efetuado com sucesso

    elif request.method == 'POST':
        return JsonResponse({'status': 200}) #Cadastro efetuado com sucesso