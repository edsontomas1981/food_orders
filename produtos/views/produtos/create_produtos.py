from django.http import JsonResponse
from produtos.controller.produtos import Produto
import json

def create_produto(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            produto_nome = data.get('produto')

            if produto_nome:
                produto = Produto()
                produto.create_produto(produto_nome)
                return JsonResponse({'status': 'Cadastro efetuado com sucesso'}, status=200)
            else:
                return JsonResponse({'error': 'O campo "produto" é obrigatório'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else:
        return JsonResponse({'error': 'Método não permitido Produto'}, status=405)