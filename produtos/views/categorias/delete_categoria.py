from django.http import JsonResponse
from produtos.controller.categorias import Categoria
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def delete_categoria(request):

    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        try:
            categoria = Categoria()
            categoria.delete_categoria(data['categoria_id'])
            categorias_qs = categoria.read_categoria()
            categorias_list = [
                {
                    'id': categoria.pk,
                    'nome': categoria.nome,  # Substitua 'nome' pelo nome correto do campo em Categoria
                    # Adicione outros campos conforme necessário
                }
                for categoria in categorias_qs 
            ]
            return JsonResponse({'status':200,'categorias':categorias_list}, status=200)
        except Exception as e:
            return JsonResponse({'error': f'Erro ao excluir categoria: {str(e)}'}, status=500)
    
    elif request.method == 'GET':
        return JsonResponse({'error': 'Método GET não é permitido para esta ação'}, status=405)
