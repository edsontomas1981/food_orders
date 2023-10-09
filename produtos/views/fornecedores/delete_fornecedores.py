from django.http import JsonResponse
from produtos.controller.fornecedor import Fornecedor
import json

def delete_fornecedor(request):

    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        try:
            fornecedor = Fornecedor()
            fornecedor.delete_fornecedor(data['id'])
            return JsonResponse({'status': 'fornecedor excluída com sucesso'}, status=200)
        except Exception as e:
            return JsonResponse({'error': f'Erro ao excluir fornecedor: {str(e)}'}, status=500)
    
    elif request.method == 'GET':
        return JsonResponse({'error': 'Método GET não é permitido para esta ação Fornecedor'}, status=405)
