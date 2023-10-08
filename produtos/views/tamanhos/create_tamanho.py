from django.http import JsonResponse
from produtos.controller.tamanho import Tamanho
import json

def create_tamanho(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            tamanho_nome = data.get('tamanho')

            if tamanho_nome:
                tamanho = Tamanho()
                tamanho.create_tamanho(tamanho_nome)
                return JsonResponse({'status': 'Cadastro efetuado com sucesso'}, status=200)
            else:
                return JsonResponse({'error': 'O campo "tamanho" é obrigatório'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else:
        return JsonResponse({'error': 'Método não permitido'}, status=405)
