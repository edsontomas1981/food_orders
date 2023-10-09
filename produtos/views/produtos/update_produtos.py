from django.http import JsonResponse
from produtos.controller.produtos import Produto
import json

def update_produto(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            produto_id = data.get('produto_id')  # Substitua 'produto_id' pelo campo apropriado
            novo_nome = data.get('novo_nome')  # Substitua 'novo_nome' pelo campo apropriado

            if produto_id is not None and novo_nome is not None:
                produto=Produto()
                produto.update_produto(produto_id,novo_nome)

                return JsonResponse({'status': 'produto atualizada com sucesso'}, status=200)
            else:
                return JsonResponse({'error': 'Dados incompletos na solicitação'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else :
        return JsonResponse({'error': 'Método GET não é permitido para esta ação produto'}, status=405)