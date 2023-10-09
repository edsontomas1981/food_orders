from django.http import JsonResponse
from produtos.controller.fornecedor import Fornecedor
from django.core import serializers

def read_fornecedor(request):
    if request.method == 'POST':
        fornecedor = Fornecedor()
        fornecedores_qs = fornecedor.read_fornecedor()
        fornecedores_list = [
            {
                'id': fornecedor.pk,
                'nome': fornecedor.nome,  # Substitua 'nome' pelo nome correto do campo em fornecedor
                # Adicione outros campos conforme necessário
            }
            for fornecedor in fornecedores_qs
        ]
        return JsonResponse({'fornecedores': fornecedores_list})
    else:
        return JsonResponse({'error': 'Método GET não é permitido para esta ação Fornecedor'}, status=405)