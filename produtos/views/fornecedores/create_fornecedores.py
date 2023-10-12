from django.http import JsonResponse
from produtos.controller.fornecedor import Fornecedor
from django.views.decorators.csrf import csrf_exempt

import json

@csrf_exempt
def create_fornecedor(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            # if fornecedor_nome:
                # fornecedor = Fornecedor()
                # fornecedor.create_fornecedor(fornecedor_nome)
            return JsonResponse({'status': 'Cadastro efetuado com sucesso'}, status=200)
            # else:
            return JsonResponse({'error': 'O campo "fornecedor" é obrigatório'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else:
        return JsonResponse({'error': 'Método não permitido Fornecedor'}, status=405)