from django.http import JsonResponse
from produtos.controller.fornecedor import Fornecedor
from utils.verifica_campos import verifica_campos_obrigatorios
from contatos.controller.contatos import Contatos
import json
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def read_contatos_by_fornecedor(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            contato=Contatos()

            return JsonResponse({'error': 'Dados JSON válidos'}, status=200)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else:
        return JsonResponse({'error': 'Método não permitido Fornecedor'}, status=405)