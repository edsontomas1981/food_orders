from django.http import JsonResponse
from produtos.controller.produtos import Produto
from django.core import serializers

def read_produto(request):
    if request.method == 'POST':
        produto = Produto()
        produtos_qs = produto.read_produto()
        produtos_list = [
            {
                'id': produto.pk,
                'nome': produto.nome,  # Substitua 'nome' pelo nome correto do campo em produto
                # Adicione outros campos conforme necessário
            }
            for produto in produtos_qs
        ]
        return JsonResponse({'produtos': produtos_list})
    else:
        return JsonResponse({'error': 'Método GET não é permitido para esta ação produto'}, status=405)