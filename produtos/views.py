from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse

def produtos (request):
    if request.method == 'GET':
        return JsonResponse({'status': 'produtos'}) #Cadastro efetuado com sucesso

    elif request.method == 'POST':
        return JsonResponse({'status': 200}) #Cadastro efetuado com sucesso