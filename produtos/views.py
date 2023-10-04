from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse

def produtos (request):
    if request.method == 'GET':
        return JsonResponse({'status': 'produtos'}) #Cadastro efetuado com sucesso

    elif request.method == 'POST':
        return JsonResponse({'status': 200}) #Cadastro efetuado com sucesso

def test_view(request):
    # Esta view permite qualquer origem (CORS) e aceita tanto GET quanto POST.
    if request.method == 'GET' or request.method == 'POST':
        response_data = {'message': 'Endpoint de teste. Solicitação aceita.'}
        print(request)
        return JsonResponse(response_data)
    else:
        return JsonResponse({'error': 'Método não permitido.'}, status=405)  # Método não permitido (HTTP 405)
