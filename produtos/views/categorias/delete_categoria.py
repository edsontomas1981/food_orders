from django.http import JsonResponse
from produtos.controller.categorias import Categoria
import json

def delete_categoria(request):

    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        try:
            categoria = Categoria()
            categoria.delete_categoria(data['id'])
            return JsonResponse({'status': 'Categoria excluída com sucesso'}, status=200)
        except Exception as e:
            return JsonResponse({'error': f'Erro ao excluir categoria: {str(e)}'}, status=500)
    
    elif request.method == 'GET':
        return JsonResponse({'error': 'Método GET não é permitido para esta ação'}, status=405)
