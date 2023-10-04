from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse

def update_categoria (request):
    if request.method == 'GET':
        return JsonResponse({'view': 'update_categorias'}) #Cadastro efetuado com sucesso

    elif request.method == 'POST':
        return JsonResponse({'status': 200}) #Cadastro efetuado com sucesso