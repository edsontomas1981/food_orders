from django.http import JsonResponse
from produtos.controller.fornecedor import Fornecedor
import json

def update_fornecedor(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            fornecedor_id = data.get('fornecedor_id')  # Substitua 'fornecedor_id' pelo campo apropriado
            novo_nome = data.get('novo_nome')  # Substitua 'novo_nome' pelo campo apropriado

            if fornecedor_id is not None and novo_nome is not None:
                fornecedor=Fornecedor()
                fornecedor.update_fornecedor(fornecedor_id,novo_nome)

                return JsonResponse({'status': 'fornecedor atualizada com sucesso'}, status=200)
            else:
                return JsonResponse({'error': 'Dados incompletos na solicitação'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else :
        return JsonResponse({'error': 'Método GET não é permitido para esta ação Fornecedor'}, status=405)