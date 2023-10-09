from django.http import JsonResponse
from produtos.controller.produtos import Produto
import json

def delete_produto(request):

    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        try:
            produto = Produto()
            produto.delete_produto(data['id'])
            return JsonResponse({'status': 'produto excluída com sucesso'}, status=200)
        except Exception as e:
            return JsonResponse({'error': f'Erro ao excluir produto: {str(e)}'}, status=500)
    
    elif request.method == 'GET':
        return JsonResponse({'error': 'Método GET não é permitido para esta ação produto'}, status=405)